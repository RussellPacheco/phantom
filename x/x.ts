import "./styles.css";

////////////////////////////////////////////////////////
/////////////////////⚠️PHANTOM EXORCISER ⚠️////////////
////////////////////////////////////////////////////////

function unconstrained(attribute: string | null) {
  return attribute;
}

export const allowedAttributes: any = {
  abbr: unconstrained,
  accept: unconstrained,
  "accept-charset": unconstrained,
  accesskey: unconstrained,
  action: unconstrained,
  align: unconstrained,
  alt: unconstrained,
  autocomplete: unconstrained,
  autosave: unconstrained,
  axis: unconstrained,
  bgcolor: unconstrained,
  border: unconstrained,
  cellpadding: unconstrained,
  cellspacing: unconstrained,
  challenge: unconstrained,
  char: unconstrained,
  charoff: unconstrained,
  charset: unconstrained,
  checked: unconstrained,
  cite: unconstrained,
  class: unconstrained,
  clear: unconstrained,
  color: unconstrained,
  cols: unconstrained,
  colspan: unconstrained,
  compact: unconstrained,
  contenteditable: unconstrained,
  coords: unconstrained,
  datetime: unconstrained,
  dir: unconstrained,
  disabled: unconstrained,
  draggable: unconstrained,
  dropzone: unconstrained,
  enctype: unconstrained,
  for: unconstrained,
  frame: unconstrained,
  headers: unconstrained,
  height: unconstrained,
  high: unconstrained,
  href: unconstrained,
  hreflang: unconstrained,
  hspace: unconstrained,
  ismap: unconstrained,
  id: unconstrained,
  keytype: unconstrained,
  label: unconstrained,
  lang: unconstrained,
  list: unconstrained,
  longdesc: unconstrained,
  low: unconstrained,
  max: unconstrained,
  maxlength: unconstrained,
  media: unconstrained,
  method: unconstrained,
  min: unconstrained,
  multiple: unconstrained,
  name: unconstrained,
  nohref: unconstrained,
  noshade: unconstrained,
  novalidate: unconstrained,
  nowrap: unconstrained,
  open: unconstrained,
  optimum: unconstrained,
  pattern: unconstrained,
  placeholder: unconstrained,
  prompt: unconstrained,
  pubdate: unconstrained,
  radiogroup: unconstrained,
  readonly: unconstrained,
  rel: unconstrained,
  required: unconstrained,
  rev: unconstrained,
  reversed: unconstrained,
  rows: unconstrained,
  rowspan: unconstrained,
  rules: unconstrained,
  scope: unconstrained,
  selected: unconstrained,
  shape: unconstrained,
  size: unconstrained,
  span: unconstrained,
  spellcheck: unconstrained,
  src: unconstrained,
  start: unconstrained,
  step: unconstrained,
  style: unconstrained,
  summary: unconstrained,
  tabindex: unconstrained,
  target: unconstrained,
  title: unconstrained,
  type: unconstrained,
  usemap: unconstrained,
  valign: unconstrained,
  value: unconstrained,
  vspace: unconstrained,
  width: unconstrained,
  wrap: unconstrained,
};

export const allowedTags: any = {
  a: allowedAttributes,
  abbr: allowedAttributes,
  acronym: allowedAttributes,
  address: allowedAttributes,
  area: allowedAttributes,
  article: allowedAttributes,
  aside: allowedAttributes,
  b: allowedAttributes,
  bdi: allowedAttributes,
  big: allowedAttributes,
  blockquote: allowedAttributes,
  br: allowedAttributes,
  button: allowedAttributes,
  caption: allowedAttributes,
  center: allowedAttributes,
  cite: allowedAttributes,
  code: allowedAttributes,
  col: allowedAttributes,
  colgroup: allowedAttributes,
  data: allowedAttributes,
  datalist: allowedAttributes,
  dd: allowedAttributes,
  del: allowedAttributes,
  details: allowedAttributes,
  dfn: allowedAttributes,
  dir: allowedAttributes,
  div: allowedAttributes,
  dl: allowedAttributes,
  dt: allowedAttributes,
  em: allowedAttributes,
  fieldset: allowedAttributes,
  figcaption: allowedAttributes,
  figure: allowedAttributes,
  font: allowedAttributes,
  footer: allowedAttributes,
  form: allowedAttributes,
  h1: allowedAttributes,
  h2: allowedAttributes,
  h3: allowedAttributes,
  h4: allowedAttributes,
  h5: allowedAttributes,
  h6: allowedAttributes,
  header: allowedAttributes,
  hr: allowedAttributes,
  i: allowedAttributes,
  img: allowedAttributes,
  input: allowedAttributes,
  ins: allowedAttributes,
  kbd: allowedAttributes,
  keygen: allowedAttributes,
  label: allowedAttributes,
  legend: allowedAttributes,
  li: allowedAttributes,
  main: allowedAttributes,
  map: allowedAttributes,
  mark: allowedAttributes,
  menu: allowedAttributes,
  menuitem: allowedAttributes,
  meter: allowedAttributes,
  nav: allowedAttributes,
  ol: allowedAttributes,
  optgroup: allowedAttributes,
  option: allowedAttributes,
  output: allowedAttributes,
  p: allowedAttributes,
  pre: allowedAttributes,
  progress: allowedAttributes,
  q: allowedAttributes,
  rp: allowedAttributes,
  rt: allowedAttributes,
  ruby: allowedAttributes,
  s: allowedAttributes,
  samp: allowedAttributes,
  section: allowedAttributes,
  select: allowedAttributes,
  small: allowedAttributes,
  span: allowedAttributes,
  strike: allowedAttributes,
  strong: allowedAttributes,
  sub: allowedAttributes,
  summary: allowedAttributes,
  sup: allowedAttributes,
  table: allowedAttributes,
  tbody: allowedAttributes,
  td: allowedAttributes,
  textarea: allowedAttributes,
  tfoot: allowedAttributes,
  th: allowedAttributes,
  thead: allowedAttributes,
  time: allowedAttributes,
  tr: allowedAttributes,
  tt: allowedAttributes,
  u: allowedAttributes,
  ul: allowedAttributes,
  var: allowedAttributes,
  wbr: allowedAttributes,
};

export const allowedCSS: any = [
  "background",
  "background-attachment",
  "background-clip",
  "background-color",
  "background-image",
  "background-origin",
  "background-position",
  "background-repeat",
  "background-size",
  "border",
  "border-bottom",
  "border-bottom-color",
  "border-bottom-left-radius",
  "border-bottom-right-radius",
  "border-bottom-style",
  "border-bottom-width",
  "border-collapse",
  "border-color",
  "border-image",
  "border-image-outset",
  "border-image-repeat",
  "border-image-slice",
  "border-image-source",
  "border-image-width",
  "border-left",
  "border-left-color",
  "border-left-style",
  "border-left-width",
  "border-radius",
  "border-right",
  "border-right-color",
  "border-right-style",
  "border-right-width",
  "border-spacing",
  "border-style",
  "border-top",
  "border-top-color",
  "border-top-left-radius",
  "border-top-right-radius",
  "border-top-style",
  "border-top-width",
  "border-width",
  "bottom",
  "caption-side",
  "clear",
  "clip",
  "color",
  "content",
  "counter-increment",
  "counter-reset",
  "cursor",
  "direction",
  "display",
  "empty-cells",
  "float",
  "font",
  "font-family",
  "font-feature-settings",
  "font-kerning",
  "font-language-override",
  "font-size",
  "font-size-adjust",
  "font-stretch",
  "font-style",
  "font-synthesis",
  "font-variant",
  "font-variant-alternates",
  "font-variant-caps",
  "font-variant-east-asian",
  "font-variant-ligatures",
  "font-variant-numeric",
  "font-variant-position",
  "font-weight",
  "height",
  "left",
  "letter-spacing",
  "line-height",
  "list-style",
  "list-style-image",
  "list-style-position",
  "list-style-type",
  "margin",
  "margin-bottom",
  "margin-left",
  "margin-right",
  "margin-top",
  "max-height",
  "max-width",
  "min-height",
  "min-width",
  "opacity",
  "orphans",
  "outline",
  "outline-color",
  "outline-offset",
  "outline-style",
  "outline-width",
  "overflow",
  "overflow-wrap",
  "overflow-x",
  "overflow-y",
  "padding",
  "padding-bottom",
  "padding-left",
  "padding-right",
  "padding-top",
  "page-break-after",
  "page-break-before",
  "page-break-inside",
  "quotes",
  "right",
  "table-layout",
  "text-align",
  "text-decoration",
  "text-decoration-color",
  "text-decoration-line",
  "text-decoration-skip",
  "text-decoration-style",
  "text-indent",
  "text-transform",
  "top",
  "unicode-bidi",
  "vertical-align",
  "visibility",
  "white-space",
  "widows",
  "width",
  "word-spacing",
  "z-index",
];

function exorciseNode(node: any) {
  const doc = document.implementation.createHTMLDocument();

  const nodeName = node.nodeName.toLowerCase();
  if (nodeName == "#text") {
    return node; // let text nodes be
  }
  if (nodeName == "#comment") {
    return doc.createTextNode(""); // let comments die
  }

  // throw error in case of disallowed nodes
  if (!allowedTags.hasOwnProperty(nodeName)) {
    // ain't dealing with this node

    throw new Error(nodeName);
  }

  const exorcisedNode = doc.createElement(nodeName);

  // re-inject allowed attributes
  for (
    let nodeAttributes = 0;
    nodeAttributes < node.attributes.length;
    nodeAttributes++
  ) {
    const attributeName = node.attributes.item(nodeAttributes)?.name as string;
    if (allowedTags[nodeName].hasOwnProperty(attributeName)) {
      const sanitizer = allowedTags[nodeName][attributeName];
      exorcisedNode.setAttribute(
        attributeName,
        sanitizer(node.getAttribute(attributeName)) as string
      );
    }
  }

  // re-inject allowed css
  for (let css in allowedCSS) {
    exorcisedNode.style[Number(allowedCSS[css])] =
      node.style[Number(allowedCSS[css])];
  }

  // recursively sanitize childNodes
  while (node.childNodes.length > 0) {
    const child = node.removeChild(node.childNodes[0]);
    exorcisedNode.appendChild(exorciseNode(child as HTMLElement));
  }
  return exorcisedNode;
}

export default function phantomExorciser(potentiallyDangerousHTML: string) {
  const doc = document.implementation.createHTMLDocument();

  const div = doc.createElement("div");
  div.innerHTML = potentiallyDangerousHTML;

  return (exorciseNode(div) as HTMLElement).innerHTML;
}

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
// TODO: rewrite as class

function PHANTOM(Component: any, parent: any = undefined) {
  ///////////////////// 😈 PHANTOM COMPONENT 😈 //////
  // where c is an instance of Component,
  const c = new Component();
  // set component parent
  if (parent) c.parent = parent;
  // remove "Phantom" prefix from name
  const cName = c.constructor.name.replace("Phantom", "");
  c.id = cName;
  // run update to set c's properties
  c.update(c.state());
  // we create a nest object where we will list c's children
  const nest: any = {};
  // if user has declared children,
  if (c.children)
    // for each child, list them in nest.
    // Obtain instances recursively—PHANTOM(Component) returns an obj
    // with instances of Component and its children.
    c.children().map((Child: any) => {
      const childInstance = PHANTOM(Child, c);
      for (const [_k, v] of Object.entries(childInstance)) {
        nest[_k] = v;
      }
    });
  // assign the nest as a public property of c
  c.nest = nest;
  // create obj that lists children
  // with their value being appear(), markup
  // instead of the instance itself.
  // we call these nested apparitions,
  // they allows user to render children idiomatically:
  // <tag>${this.Child}</tag> where Child returns dynamic HTML markup
  const nestedApparitions: any = {};
  for (const [_k] of Object.entries(nest)) {
    nestedApparitions[_k] = nest[_k].render();
  }
  // spread nestedApparitions as properties of c
  c.update(nestedApparitions);

  function updateNode() {
    // parse render() as a node
    let html = c.render();
    html = sanitizeElementMap(html); // sanitize HTML commas
    let doc = new DOMParser().parseFromString(html, "text/html");
    const swapIn = doc.body.firstChild;
    (swapIn as HTMLElement).id = c.id;
    const swapOut = document.getElementById(c.id);
    swapNode(swapIn as HTMLElement, swapOut);
  }

  // update node when update() method runs
  c.appear = () => updateNode();
  // inject to body

  // expose components
  return { [cName]: c, ...nest };
}

////////////////////////////////////////////////////////
/////////////////////⚠️UTILITIES ⚠️/////////////////////
////////////////////////////////////////////////////////

function swapNode(
  swapIn: Text | HTMLElement,
  swapOut: ChildNode | null | undefined
) {
  swapOut?.replaceWith(swapIn);
  return swapIn;
}
function sanitizeElementMap(html: string) {
  return html.replace(/>,/g, ">");
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
    <div>
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
    <div>
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
