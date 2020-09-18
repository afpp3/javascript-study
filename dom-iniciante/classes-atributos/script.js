// Adicione a classe ativo a todos os itens do menu
const elementosMenu = document.querySelectorAll(".menu a");

elementosMenu.forEach((item) => {
  item.classList.add("ativo");
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
elementosMenu.forEach((item, index) => {
  if (index !== 0) {
    return item.classList.remove("ativo");
  }
});

//OU REMOVE A CLASSE DE TODOS OS ELEMENTOS DO ARRAY E DEPOIS ADICIONA NO PRIMEIRO ELEMENTO

// elementosMenu.forEach((item) => {
//   item.classList.remove("ativo");
// });
// elementosMenu[0].classList.add("ativo");

// Verifique se as imagens possuem o atributo alt
const images = document.querySelectorAll("img");

images.forEach((item) => {
  if (item.hasAttribute("alt")) {
    console.log("Possui o atribulo alt");
  } else {
    console.log("Não possui atributo alt");
  }
});

// Modifique o href do link externo no menu
const linksExternos = document.querySelector("a[href^=https]");

linksExternos.setAttribute("href", "https://www.google.com");

console.log(linksExternos);
