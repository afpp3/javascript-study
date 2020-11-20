const cep = fetch("https://viacep.com.br/ws/74916130/json");
const sobre = fetch("./sobre.html");
const imagem = fetch("./imagem.png");

const div = document.createElement("div");

cep
  .then((resultado) => {
    return resultado.json();
  })
  .then((body) => {
    const content = document.querySelector(".content");

    content.innerText = body.bairro;
    console.log(body);
  });

sobre
  .then((resultado) => {
    return resultado.text();
  })
  .then((body) => {
    div.innerHTML = body;
    console.log(div);
  });

imagem
  .then((resultado) => {
    return resultado.blob();
  })
  .then((blob) => {
    const blobURL = URL.createObjectURL(blob);
    const imagemDom = document.querySelector("img");

    imagemDom.src = blobURL;
  });

cep.then((resultado) => {
  resultado.headers.forEach(console.log);
});
