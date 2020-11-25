const button = {
  get element() {
    this._element;
  },

  set element(tipo) {
    this._element = document.createElement(tipo);
  },
};

button.element = "button";

const frutas = {
  lista: [],
  set nova(fruta) {
    this.lista.push(fruta);
  },
};

class Button {
  constructor(text, color) {
    this.text = text;
    this.color = color;
  }

  get element() {
    const type = this._elementType || "button";
    const buttonElement = document.createElement(type);
    buttonElement.innerText = this.text;
    buttonElement.style.color = this.color;
    return buttonElement;
  }

  appendTo(target) {
    const targetElement = document.querySelector(target);
    targetElement.appendChild(this.element);
    return targetElement;
  }

  set element(type) {
    this._elementType = type;
  }
}

const testButton = new Button("GOSTOSO", "blue");
testButton.element = "a";
testButton.appendTo("body");
