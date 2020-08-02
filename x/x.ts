import "./styles.css";

/** @type 🗜 internal */
type PhantomComponentConstructor = {
  new (): PhantomComponent;
};
/** @type 🗜 internal */
type Apparitions = {
  [id: string]: string;
};
/** @type 🗜 internal */
type PhantomData = {
  [datum: string]: any;
};

/** @decorators 🌺 internal  */

/** @engine ⚙️ */
class Phantom {
  constructor(
    PhantomComponentConstructor: PhantomComponentConstructor,
    ParentInstance?: PhantomComponent
  ) {
    const C: PhantomComponent = new PhantomComponentConstructor();
    C.id = Phantom.generateId(C);
    if (ParentInstance) {
      C.parent = ParentInstance;
      C.update(ParentInstance.state());
    }
    Phantom.addUserDefinedChildrenToPhantoms(C);
    Phantom.userDefinedState = C.state();
    C.update(Phantom.userDefinedState);
    if (C.phantoms) {
      Phantom.apparitions = Phantom.generateApparitions(C);
      C.update(Phantom.apparitions);
    }
    C.appear = () =>
      Phantom.updateNode(C); /** @shadowing on PhantomComponent */
    Phantom.userDefinedHTML = C.render(Phantom.apparitions);
    C.DOMElement = Phantom.generateHTMLElement(Phantom.userDefinedHTML);
    if (!ParentInstance) document.body.prepend(C.DOMElement);
    if (C.effects) C.effects(C.phantoms);
    const Phantoms = {
      [C.id]: C,
      ...C.phantoms,
    } as Phantoms;
    Phantom.assignComponentElements(Phantoms);
    Phantom.configurePhantomsProperties(Phantoms);
    return Phantoms;
  }

  [key: string]: any;
  static userDefinedState: PhantomData;
  static apparitions: Apparitions;
  static userDefinedHTML: string;

  private static generateId(C: PhantomComponent): string {
    return C.constructor.name;
  }

  static addUserDefinedChildrenToPhantoms(C: PhantomComponent): void {
    const userDefinedChildren = C.children();
    const phantoms: Phantoms = {};
    if (userDefinedChildren)
      userDefinedChildren.map((Child: PhantomComponentConstructor) => {
        const childPhantoms: Phantoms = new Phantom(Child, C);
        for (const [_k, v] of Object.entries(childPhantoms)) {
          phantoms[_k] = v;
        }
      });
    C.phantoms = phantoms;
  }

  private static generateApparitions(C: PhantomComponent): Apparitions {
    const apparitions: Apparitions = {};
    const phantoms: Phantoms = C.phantoms;
    for (const [_k] of Object.entries(phantoms)) {
      const childComponent = phantoms[_k];
      const childHtml = childComponent.render(childComponent.apparitions);
      apparitions[_k] = childHtml;
    }
    return apparitions;
  }

  private static getElementByTagName(phantomId: string): HTMLElement {
    return document.getElementsByTagName(phantomId)[0] as HTMLElement;
  }

  private static swapNode(
    swapIn: HTMLElement,
    swapOut: HTMLElement
  ): HTMLElement {
    swapOut.replaceWith(swapIn);
    return swapIn;
  }

  private static cleanNodeArray(html: string): string {
    return html.replace(/>,/g, ">");
  }

  private static updateNode(C: PhantomComponent): void {
    let html: string = C.render(Phantom.apparitions);
    const swapIn = Phantom.generateHTMLElement(html);
    let swapOut = Phantom.getElementByTagName(`${C.id}`);
    if (swapOut) Phantom.swapNode(swapIn, swapOut);
  }

  private static generateHTMLElement(html: string): HTMLElement {
    html = Phantom.cleanNodeArray(html);
    let d = new DOMParser().parseFromString(html, "text/html");
    return d.body.firstChild as HTMLElement;
  }

  private static assignComponentElements(Phantoms: Phantoms) {
    Object.entries(Phantoms).forEach(([_, C]) => {
      C.element = Phantom.getElementByTagName(C.id);
    });
  }

  private static configurePhantomsProperties(Phantoms: Phantoms) {
    Object.entries(Phantoms).forEach(([_, C]) => {
      delete C.DOMElement;
      Object.defineProperty(C, "appear", {
        enumerable: false,
        writable: false,
        configurable: false,
      });
    });
  }
}

/** @type 🗜 phantom provided */
type Phantoms = {
  [id: string]: PhantomComponent;
};

/** @component 🔨 phantom provided */
class PhantomComponent {
  [x: string]: any;
  static DOMElement: HTMLElement;
  data: PhantomData = {};
  static id: string;
  static phantoms: Phantoms = {};

  appear(): void {} /** @shadowed on Phantom */

  effects(_phantoms: Phantoms): void | Promise<any> {}

  children(): PhantomComponentConstructor[] {
    return []; /** @defined by user */
  }

  render(_Apparitions: Apparitions): string {
    return `<shadow/>`; /** @defined by user */
  }

  state(): PhantomData {
    return { hibiscus: "🌺" }; /** @defined by user */
  }

  update(data: PhantomData, PhantomComponent = this): void {
    for (const [_k, v] of Object.entries(data)) {
      PhantomComponent[_k] = v;
      PhantomComponent.data[_k] = v;
    }
    PhantomComponent.appear();
  }
}

/** @decorators 🌺 phantom provided */

// POKEMON APP
/** @methods ⛏ user defined */
async function fetchPokemons(pokemonNumbers: number[]) {
  console.log("Method ran");
  const pokemonSpritePromises = pokemonNumbers.map(async (num) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
    const data = await res.json();
    return data.sprites.front_default;
  });
  const pokemonSprites = await Promise.all(pokemonSpritePromises);
  return pokemonSprites;
}
/** @component 🔨 user defined */
class Kid extends PhantomComponent {
  async effects() {
    const pokemonSprites = await fetchPokemons([1, 2, 3]);
    this.update({ pokemonSprites });
  }
  state() {
    const pokemonSprites: string[] = [];
    return { pokemonSprites };
  }
  render() {
    return `
    <Kid>
      ${(this.pokemonSprites as string[]).map(
        (sprite) => `<img src=${sprite}>`
      )}
    </Kid>`;
  }
}
/** @component 🔨 user defined */
class App extends PhantomComponent {
  children() {
    return [Kid];
  }
  effects({ Kid }: Phantoms) {
    const reverseButton = document.getElementById("fetch-button");
    reverseButton!.onclick = async () => {
      const pokemonSprites = await fetchPokemons([4, 5, 6]);
      Kid.update({ pokemonSprites });
    };
  }
  render({ Kid }: Apparitions) {
    return `
    <App>
      ${Kid}
      <button>Reverse</button>
      <button id="fetch-button">Fetch</button>
      <button>Reset</button>
    </App>`;
  }
}
// POKEMON APP

const PhantomApp = new Phantom(App);
console.log(PhantomApp);
