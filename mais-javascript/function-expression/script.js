// Remova o erro
const priceNumber = (n) => +n.replace("R$", "").replace(",", ".");
console.log(priceNumber("R$ 99,99"));

// Crie uma IIFE e isole o escopo
// de qualquer código JS.
((n) => {
  const numeroQuadrado = n ** 2;
  console.log(numeroQuadrado);
})(3);

// Como podemos utilizar
// a função abaixo.
const active = (callback) => callback();

active(() => {
  const string = "O parâmetro da função active é uma outra função";
  console.log(string);
});
