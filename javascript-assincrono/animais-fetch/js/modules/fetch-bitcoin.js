export default function initFetchBitcoin() {
  fetch("https://blockchain.info/ticker")
    .then((response) => response.json())
    .then((bitcoin) => {
      const precoBtc = document.querySelector(".btc-preco");
      precoBtc.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
    })
    .catch((error) => {
      console.log(error);
    });
}
