import "./styles.css";

/** @types 🗜 internal */
type PhantomComponentConstructor = {
  new (): PhantomComponent;
};
/** @types 🗜 internal */
type PhantomApparitions = {
  [key: string]: string;
};
/** @types 🗜 internal */
type PhantomData = {
  [key: string]: any;
};
/** @types 🗜 internal */
type PhantomComponentInstance = {
  children: () => PhantomComponentConstructor[];
  render: () => string;
  state: () => PhantomData;
  update: (data: PhantomData) => void;
};
/** @types 🗜 user */
type Phantoms = {
  [key: string]: PhantomComponent;
};

/** @component 🔨 internal */
class PhantomComponent implements PhantomComponentInstance {
  [x: string]: any;
  static DOMElement: HTMLElement;
  data: PhantomData = {};
  static id: string;
  static phantoms: Phantoms = {};

  appear(): void {} /** @shadowed on Phantom */

  children(): PhantomComponentConstructor[] {
    return []; /** @defined by user */
  }

  render(): string {
    return `<shadow/>`; /** @defined by user */
  }

  state(): PhantomData {
    return { hibiscus: "🌺" }; /** @defined by user */
  }

  update(data: PhantomData, PhantomComponentInstance = this): void {
    for (const [_k, v] of Object.entries(data)) {
      PhantomComponentInstance[_k] = v;
      PhantomComponentInstance.data[_k] = v;
    }
    PhantomComponentInstance.appear();
  }
}

/** @decorator 🌺 */

/** @engine ⚙️ */
class Phantom {
  constructor(
    PhantomComponentConstructor: PhantomComponentConstructor,
    ParentInstance?: PhantomComponent
  ) {
    const C: PhantomComponent = new PhantomComponentConstructor();
    C.id = Phantom.generateId(C);
    if (ParentInstance) C.parent = ParentInstance;
    Phantom.userDefinedState = C.state();
    C.update(Phantom.userDefinedState);
    Phantom.addUserDefinedChildrenToPhantoms(C);
    if (C.phantoms) {
      Phantom.apparitions = Phantom.generateApparitions(C);
      C.update(Phantom.apparitions);
    }
    C.appear = () =>
      Phantom.updateNode(C); /** @shadowing on PhantomComponent */
    Phantom.userDefinedHTML = C.render();

    C.DOMElement = Phantom.generateHTMLElement(Phantom.userDefinedHTML);
    if (!ParentInstance) document.body.prepend(C.DOMElement);

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
  static apparitions: PhantomApparitions;
  static userDefinedHTML: string;

  private static generateId(C: PhantomComponent): string {
    return C.constructor.name.toLowerCase();
  }

  private static addUserDefinedChildrenToPhantoms(C: PhantomComponent): void {
    const phantoms: Phantoms = {};
    if (C.children)
      C.children().map((Child: PhantomComponentConstructor) => {
        const childPhantoms: Phantoms = new Phantom(Child, C);
        for (const [_k, v] of Object.entries(childPhantoms)) {
          phantoms[_k] = v;
        }
      });
    C.phantoms = phantoms;
  }

  private static generateApparitions(C: PhantomComponent): PhantomApparitions {
    const apparitions: PhantomApparitions = {};
    const phantoms: Phantoms = C.phantoms;
    for (const [_k] of Object.entries(phantoms)) {
      const childComponent = phantoms[_k];
      const childHtml = childComponent.render();
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
    let html: string = C.render();
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

/** @component 🔨 user */
class Kid extends PhantomComponent {
  state() {
    return { emojis: ["🌺", "👽", "🦠"] };
  }
  render() {
    return `
    <kid>
      ${(this.emojis as string[]).map((emoji) => `<p>${emoji}</p>`)}
    </kid>`;
  }
}
/** @component 🔨 user */
class App extends PhantomComponent {
  children() {
    return [Kid];
  }
  state() {
    return { emoji: "🍕" };
  }

  render() {
    return `
    <app>
      ${this.kid}
      <p>${this.emoji}</p>
      <input id="x" type="text">
    </app>`;
  }
}

export const { app, kid }: Phantoms = new Phantom(App);

console.log("Components 😈:", app, kid);

app.element.onclick = toggleEmoji;
console.log(app.appear);

function toggleEmoji() {
  kid.update({
    emojis: kid.emojis.reverse(),
  });
}
