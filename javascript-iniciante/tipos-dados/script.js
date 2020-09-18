// Declare uma variável contendo uma string
var string = "Bom dia!";

// Declare uma variável contendo um número dentro de uma string
var stringNumero = "22";

// Declare uma variável com a sua idade
var idade = 22;

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var nome = "André";
var sobreNome = "Felippe";
var nomeCompleto = nome + " " + sobreNome;

// Coloque a seguinte frase em uma variável: It's time
var frase = "It's time";
// Verifique o tipo da variável que contém o seu nome
var tipoDeVariavel = typeof nome;

console.log(string, stringNumero, frase, tipoDeVariavel, nomeCompleto);

function verificaDado(dado) {
  console.log(typeof dado);
}

verificaDado(stringNumero);
