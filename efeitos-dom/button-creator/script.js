const controles = document.getElementById("controles");
const cssText = document.querySelector(".code");
const btn = document.querySelector(".btn");

const handleStyle = {
  element: btn,
  texto(value) {
    this.element.innerText = value;
  },

  color(value) {
    this.element.style.color = value;
  },

  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },

  height(value) {
    this.element.style.height = value + "px";
  },

  width(value) {
    this.element.style.width = value + "px";
  },

  border(value) {
    this.element.style.border = value;
  },

  borderRadius(value) {
    this.element.style.borderRadius = value + "px";
  },

  fontFamily(value) {
    this.element.style.fontFamily = value;
  },

  fontSize(value) {
    this.element.style.fontSize = value + "rem";
  },
};

controles.addEventListener("change", handleChange);

function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;

  handleStyle[name](value);
  saveValues(name, value);
  showCss();
}

function saveValues(name, value) {
  localStorage[name] = value;
}

function setValues() {
  const properties = Object.keys(localStorage);

  properties.forEach((propertie) => {
    if (propertie !== "randid") {
      handleStyle[propertie](localStorage.getItem(propertie));
      controles.elements[propertie].value = localStorage[propertie];
    }
  });
  showCss();
}

setValues();

function showCss() {
  cssText.innerHTML =
    "<span>" + btn.style.cssText.split("; ").join(";</span><span>");
}

const slidersValues = document.querySelectorAll(".slider-value");
const slidersInputs = document.querySelectorAll(".slider");

slidersInputs.forEach((slider) => {
  slider.addEventListener("mousemove", showSliderValue);
});

function showSliderValue(event) {
  event.target.nextElementSibling.innerHTML = this.value + "px";
}
