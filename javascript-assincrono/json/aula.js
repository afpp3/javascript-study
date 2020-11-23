const dados = fetch("./dados.json");

dados
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    console.log(json);
  });
