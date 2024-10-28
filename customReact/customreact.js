function mainContainer(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google",
    target: "_blank",
  },
  children: "Click me to visit goole",
};

const roots = document.getElementById("#roots");

coustomRender(reactElement, mainContainer);

export default customreact;
