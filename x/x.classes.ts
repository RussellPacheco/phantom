import "./styles.css";

/** @types 🗜 **/
type PhantomComponentNest = {
  [key: string]: PhantomComponent;
};

type PhantomComponentApparitions = {
  [key: string]: string;
};

type PhantomData = { [key: string]: any };

/** @classes 🔨 **/
class PhantomComponent {
  [x: string]: any;
  data: PhantomData;
  id!: string;
  nest!: PhantomComponentNest | {};
  constructor() {
    this.data = {};
  }

  appear() {} /** @shadowed on Phantom **/

  update(data: PhantomData) {
    for (const [_k, v] of Object.entries(data)) {
      this[_k] = v;
      this.data[_k] = v;
    }
    this.appear();
  }
}

/** @engine ⚙️ **/
class Phantom {
  [x: string]: any;
  constructor(
    Component: typeof PhantomComponent,
    Parent: PhantomComponent | null = null
  ) {
    const P: Phantom = this;
    const C: PhantomComponent = new Component();
    if (Parent) C.parent = Parent;
    C.name = P.removePhantomPrefixFromName(C);
    P.userDefinedState = C.state();
    C.update(P.userDefinedState);
    P.addUserDefinedChildrenToNest(C);
    if (C.nest) {
      P.apparitions = P.generateApparitions(C);
      C.update(P.apparitions);
    }
    C.appear = () => P.updateNode(C); /** @shadowing on PhantomComponent **/
    P.userDefinedHTML = C.render();
    C.componentNode = P.generateHTMLElement(P.userDefinedHTML);
    if (!Parent) document.body.prepend(C.componentNode);
    this.C = C;
  }

  private removePhantomPrefixFromName(C: PhantomComponent): string {
    return C.constructor.name.replace("Phantom", "");
  }

  private addUserDefinedChildrenToNest(C: PhantomComponent): void {
    const nest: PhantomComponentNest = {};
    if (C.children)
      C.children().map((Child: typeof PhantomComponent) => {
        const childInstance: PhantomComponentNest = new Phantom(
          Child,
          C
        ).components();
        for (const [_k, v] of Object.entries(childInstance)) {
          nest[_k] = v;
        }
      });
    C.nest = nest;
  }

  private generateApparitions(
    C: PhantomComponent
  ): PhantomComponentApparitions {
    const apparitions: PhantomComponentApparitions = {};
    const nest: PhantomComponentNest = C.nest;
    for (const [_k] of Object.entries(nest)) {
      const childComponent = nest[_k];
      const childHtml = childComponent.render();
      apparitions[_k] = childHtml;
    }
    return apparitions;
  }

  private getElementByPhantomId(phantomId: string): HTMLElement | null {
    let phantomElement: HTMLElement | null = null;
    findAndAssignPhantomNode(document.body);
    return phantomElement;
    function findAndAssignPhantomNode(node: HTMLElement) {
      if (node.childNodes) {
        node.childNodes.forEach((childNode: ChildNode) => {
          findAndAssignPhantomNode(childNode as HTMLElement);
        });
      }
      if (node.attributes)
        for (const [_k, v] of Object.entries(node.attributes)) {
          if (v.name === phantomId) phantomElement = node as HTMLElement;
        }
    }
  }

  private swapNode(swapIn: HTMLElement, swapOut: HTMLElement): HTMLElement {
    swapOut.replaceWith(swapIn);
    return swapIn;
  }

  private cleanNodeArray(html: string): string {
    return html.replace(/>,/g, ">");
  }

  private updateNode(C: PhantomComponent): void {
    let html: string = C.render();
    const swapIn = this.generateHTMLElement(html);
    let swapOut = this.getElementByPhantomId(`@${C.name.toLowerCase()}`);
    if (swapOut) this.swapNode(swapIn, swapOut);
  }

  private generateHTMLElement(html: string): HTMLElement {
    html = this.cleanNodeArray(html);
    let d = new DOMParser().parseFromString(html, "text/html");
    return d.body.firstChild as HTMLElement;
  }

  public components(): PhantomComponentNest {
    return { [this.C.name]: this.C, ...this.C.nest };
  }
}

/** @user 💻 **/
class PhantomChild extends PhantomComponent {
  state() {
    return { message: "💜", hearts: [1, 2, 3] };
  }
  render() {
    return `
    <div @child>
      ${(this.hearts as string[]).map(() => `<p>${this.message}</p>`)}
    </div>`;
  }
}

class PhantomApp extends PhantomComponent {
  children() {
    return [PhantomChild];
  }
  state() {
    return { message: "🍕" };
  }
  render() {
    return `
    <div @app>
      ${this.Child}
      <p>${this.message}</p>
    </div>`;
  }
}

export const P = new Phantom(PhantomApp);
const { App, Child } = P.components();

console.log("Components 😈:", App, Child);

document.addEventListener("click", toggleEmoji);
function toggleEmoji() {
  if (Child.message === "💜")
    Child.update({
      message: "🍕",
    });
  else
    Child.update({
      message: "💜",
    });
}
