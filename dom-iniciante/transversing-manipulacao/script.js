// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"]');

function activeLink(event) {
  event.preventDefault();
  linksInternos.forEach((link) => {
    link.classList.remove("ativo");
  });
  event.currentTarget.classList.add("ativo");
}

linksInternos.forEach((link) => {
  link.addEventListener("click", activeLink);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const bodyElements = document.querySelector("body");

function showClickedElement(event) {
  console.log(event.target);
  //Retorna o texto do elemento clicado
  console.log(event.target.innerText);
}
bodyElements.addEventListener("click", showClickedElement);

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

const bodyElements2 = document.querySelector("body");

function removeClickedElement(event) {
  event.target.remove();
}

bodyElements2.addEventListener("click", removeClickedElement);

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

// adiciona uma classe texto-maior no CSS que aumenta a % do font-size
function handleKeyboard(event) {
  if (event.key === "t") {
    document.documentElement.classList.toggle("texto-maior");
  }
}

window.addEventListener("keydown", handleKeyboard);
