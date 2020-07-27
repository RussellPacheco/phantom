import "./styles.css";

////////////////////////////////////////////////////////
/////////////////////⚠️PHANTOM CLASS ⚠️/////////////////
////////////////////////////////////////////////////////

class PhantomComponent {
  [x: string]: unknown;
  data: any;
  nest: any;
  id: any;
  constructor() {
    this.data = {};
  }

  appear() {}

  update(data: any) {
    for (const [_k, v] of Object.entries(data)) {
      this[_k] = v;
      this.data[_k] = v;
    }
    this.appear();
  }
}

////////////////////////////////////////////////////////
/////////////////////⚠️PHANTOM ENGINE ⚠️///////////////
////////////////////////////////////////////////////////

function PHANTOM(Component: any, parent: any = undefined) {
  injectPHANTOMElement();

  const c = new Component();

  if (parent) c.parent = parent;

  c.name = removePhantomPrefixFromName(c);

  const userDefinedState = c.state();
  c.update(userDefinedState);

  addUserDefinedChildrenToNest(c);

  if (c.nest) {
    const nestedApparitions = generateNestedApparitions(c);
    c.update(nestedApparitions);
  }

  c.appear = () => updateNode(c);

  const userDefinedHTML = c.render();
  const componentNode = generateNode(userDefinedHTML);
  if (!parent) document.body.append(componentNode);

  return { [c.name]: c, ...c.nest };
}

////////////////////////////////////////////////////////
/////////////////////⚠️UTILITIES ⚠️/////////////////////
////////////////////////////////////////////////////////
function injectPHANTOMElement() {
  if (!document.querySelector("#PHANTOM")) {
    const PHANTOM = document.createElement("div");
    PHANTOM.id = "PHANTOM";
    document.body.appendChild(PHANTOM);
  }
}
function removePhantomPrefixFromName(c: any) {
  return c.constructor.name.replace("Phantom", "");
}
function addUserDefinedChildrenToNest(c: any) {
  const nest: any = {};
  if (c.children)
    c.children().map((Child: any) => {
      const childInstance = PHANTOM(Child, c);
      for (const [_k, v] of Object.entries(childInstance)) {
        nest[_k] = v;
      }
    });
  c.nest = nest;
}
function generateNestedApparitions(c: any) {
  const nestedApparitions: any = {};
  const nest = c.nest;
  for (const [_k] of Object.entries(nest)) {
    const childComponent = nest[_k];
    const childHtml = childComponent.render();
    nestedApparitions[_k] = childHtml;
  }
  return nestedApparitions;
}
function getElementByPhantomId(phantomId: string) {
  let element: Node | null = null;

  function traverseNode(node: Node) {
    if (node.childNodes) {
      node.childNodes.forEach((childNode: ChildNode) => {
        traverseNode(childNode);
      });
    }
    if ((node as HTMLElement).attributes)
      for (const [_k, v] of Object.entries((node as HTMLElement).attributes)) {
        if (v.name === phantomId) element = node;
      }
  }

  traverseNode(document.body);

  return element;
}
function swapNode(swapIn: ChildNode, swapOut: ChildNode | null) {
  swapOut?.replaceWith(swapIn);
  return swapIn;
}
function parseNodeMap(html: string) {
  return html.replace(/>,/g, ">");
}
function updateNode(c: any) {
  // parse render() as a node
  let html = c.render();
  console.log(html);
  const swapIn = generateNode(html);
  console.log(c.name, getElementByPhantomId(`@${c.name.toLowerCase()}`));
  let swapOut = getElementByPhantomId(`@${c.name.toLowerCase()}`);
  console.log("SWAPIN:::", swapIn, "SWAPOUT:::", swapOut);
  swapNode(swapIn as HTMLElement, swapOut);
}
function generateNode(html: string) {
  html = parseNodeMap(html); // sanitize HTML commas
  let doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.firstChild as HTMLElement;
}

////////////////////////////////////////////////////////
/////////////////////⚠️USER SIDE ⚠️/////////////////////
////////////////////////////////////////////////////////

class PhantomChild extends PhantomComponent {
  state() {
    return { message: "💜", hearts: ["💜", "💜", "💜"] };
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

export const { App, Child } = PHANTOM(PhantomApp);

console.log("FINAL COMPONENTS 😈", App, Child);

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
