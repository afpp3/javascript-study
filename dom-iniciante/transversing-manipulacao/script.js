// Duplique o menu e adicione ele em copy
const menu = document.querySelector(".menu");
const menuCopy = menu.cloneNode(true);
const copy = document.querySelector(".copy");

copy.appendChild(menuCopy);

// Selecione o primeiro DT da dl de Faq
const firstDT = document.querySelector(".faq dt:first-child");
console.log(firstDT);

// Selecione o DD referente ao primeiro DT
const firstDD = firstDT.nextElementSibling;
console.log(firstDD);

// Substitua o conteúdo html de .faq pelo de .animais
const faq = document.querySelector(".faq");
const animais = document.querySelector(".animais");

faq.innerHTML = animais.innerHTML;
