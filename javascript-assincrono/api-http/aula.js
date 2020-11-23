// fetch("https://pokeapi.co/api/v2/pokemon/1/")
//   .then((response) => response.json())
//   .then((pokemon) => {
//     console.log(pokemon);
//   });

const url = "https://jsonplaceholder.typicode.com/posts/";
const options = {
  method: "POST",
  body: '{"title": "Javascript"}',
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
};

fetch(url, options);

// const url = "https://cors-anywhere.herokuapp.com/https://www.google.com/";
// const div = document.createElement("div");

// fetch(url)
//   .then((r) => r.text())
//   .then((r) => {
//     div.innerHTML = r;
//     console.log(div);
//   });
