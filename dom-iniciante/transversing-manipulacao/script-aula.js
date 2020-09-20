const animaisLista = document.querySelector(".animais-lista");
console.log(animaisLista);

function callbackLista(event) {
  console.log(event.currentTarget);
  console.log(event.target);
  console.log(event.type);
}

// animaisLista.addEventListener("click", callbackLista);

const linkExterno = document.querySelector('a[href^="http"]');

// Previne o comportamento padrão do evento no browser. No caso de um link externo, por exemplo, irá previnir que o link seja ativado
function handleLinkExterno(event) {
  event.preventDefault();
  console.log(event);
}

linkExterno.addEventListener("click", handleLinkExterno);

const images = document.querySelectorAll("img");

function imgSrc(event) {
  const src = event.currentTarget.getAttribute("src");
  console.log(event.target);
}

images.forEach((imagem) => {
  imagem.addEventListener("click", imgSrc);
});
