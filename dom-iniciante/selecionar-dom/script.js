// Retorne no console todas as imagens do site
const images = document.querySelectorAll("img");
console.log(images);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagensAnimais = document.querySelectorAll('img[src^="/img/imagem"]');
console.log(imagensAnimais);

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao
const firstH2 = document.querySelector(".animais-descricao h2");
console.log(firstH2);

// Selecione o último p do site
const paragrafos = document.querySelectorAll("p");
const lastP = paragrafos[paragrafos.length - 1];
console.log(lastP);
