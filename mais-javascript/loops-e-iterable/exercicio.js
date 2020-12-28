// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li
const listas = document.querySelectorAll('li');

for (const lista of listas) {
  lista.classList.add('active');
}

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window

for (const propriedade in window) {
  console.log(`${propriedade}: ${window[propriedade]}`);
}
