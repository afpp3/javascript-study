function createButton(text) {
  function createElement(target) {
    const element = document.createElement(target);
    element.innerText = text;
    return element;
  }
  return Object.freeze({
    text,
    createElement,
  });
}

const blueBtn = createButton("Comprar").createElement("button");
const btn = createButton("Vender");

console.log(blueBtn, btn);
