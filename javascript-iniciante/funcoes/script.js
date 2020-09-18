// Crie uma função para verificar se um valor é Truthy
function verificaTruthy(valor) {
  if (!!valor) {
    return console.log("Valor truthy");
  } else {
    return console.log("Valor não truthy");
  }
}
// verificaTruthy(2);

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function calculaPerimetroQuadrado(lado) {
  var perimetro = lado * 4;
  return console.log(perimetro);
}
calculaPerimetroQuadrado(2);

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return console.log(`${nome} ${sobrenome}`);
}
nomeCompleto("André", "Felippe");

// Crie uma função que verifica se um número é par
function verificaPar(numero) {
  if (numero % 2 === 0) {
    return console.log("Número par");
  } else {
    return console.log("Número impar");
  }
}
verificaPar(6);

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado(dado) {
  return console.log(typeof dado);
}
tipoDeDado(true);

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
document.addEventListener("click", function () {
  console.log("André");
});

// Corrija o erro abaixo

var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
