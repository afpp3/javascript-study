function $$(selectedElements) {
  const elements = document.querySelectorAll(selectedElements);

  function hide() {
    elements.forEach((element) => {
      element.style.display = "none";
    });
    return this;
  }

  function show() {
    elements.forEach((element) => {
      element.style.display = "initial";
    });
    return this;
  }

  function on(onEvent, callback) {
    elements.forEach((element) => {
      element.addEventListener(onEvent, callback);
    });
    return this;
  }

  function addClass(className) {
    elements.forEach((element) => {
      element.classList.add(className);
    });
    return this;
  }

  function removeClass(className) {
    elements.forEach((element) => {
      element.classList.remove(className);
    });
    return this;
  }

  return Object.freeze({
    elements,
    hide,
    show,
    on,
    addClass,
    removeClass,
  });
}

const btns = $$("button");
const btnComprar = $$(".comprar");

function handleClick(event) {
  if (this.className) {
    const target = $$("." + event.target.className);
    target.addClass("active");
  }
}

btns.on("click", handleClick);
