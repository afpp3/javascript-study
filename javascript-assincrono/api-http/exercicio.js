// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const inputCep = document.getElementById("cep");
const buscar = document.getElementById("buscar");
const endereco = document.querySelector(".endereco");

buscar.addEventListener("click", handleClick);

function handleClick(event) {
  event.preventDefault();
  const cep = +inputCep.value;
  buscarCep(cep);
}

function buscarCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => {
      return response.text();
    })
    .then((body) => {
      endereco.innerText = body;
    })
    .catch((error) => {
      endereco.innerText = "Não foi possível encontrar o cep";
    });
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s
const btcDisplay = document.querySelector(".btc");

function fetchBtc() {
  fetch("https://blockchain.info/ticker")
    .then((response) => {
      return response.json();
    })
    .then((body) => {
      btcDisplay.innerText = (body.BRL.symbol + " " + body.BRL.buy).replace(
        ".",
        ","
      );
    });
}
setInterval(fetchBtc(), 1000 * 1000);
fetchBtc();

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const joke = document.querySelector(".joke");
const changeJoke = document.querySelector("#next-joke");

changeJoke.addEventListener("click", pickRandomJoke);

function pickRandomJoke() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => {
      return response.json();
    })
    .then((body) => {
      joke.innerText = body.value;
    });
}

pickRandomJoke();
