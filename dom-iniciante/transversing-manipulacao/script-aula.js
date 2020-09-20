const h1 = document.querySelector("h1");
const animaisLista = document.querySelector(".animais-lista");

// Exibe o conteúdo dentro do elemento
console.log(h1.innerHTML);
// Exibe o conteúdo começando por fora do elemento
console.log(h1.outerHTML);

// innerHTML vai adicionar dentro do conteúdo selecionado
h1.innerHTML = "<p>Novo titulo</p>";

//Já o outerHTML irá substituir o elemento pelo novo
h1.outerHTML = "<p>Novo titulo</p>";

console.log(animaisLista.innerHTML);

const animais = document.querySelector(".animais");

const novoH1 = document.createElement("h1");
novoH1.innerText = "Novo Título";
novoH1.classList.add("titulo");

animais.appendChild(novoH1);
