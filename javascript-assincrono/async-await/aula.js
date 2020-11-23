// async function puxarDados() {
//   try {
//     const dadosPuxados = await fetch("./dados.json");
//     const dadosJson = await dadosPuxados.json();

//     document.body.innerText = dadosJson.aula;
//     console.log(dadosJson);
//   } catch (err) {
//     console.log(err);
//   }
// }

// puxarDados();

async function puxarDados() {
  const dadosPuxados = fetch("./dados.json");
  const pokemonsPuxados = fetch("https://pokeapi.co/api/v2/pokemon/");
  const clientesPuxados = fetch("./clientes.json");

  const pokemonsJson = await (await pokemonsPuxados).json();
  const dadosJson = await (await dadosPuxados).json();
  const clientesJson = await (await clientesPuxados).json();

  console.log(dadosJson);
  console.log(pokemonsJson);
  console.log(clientesJson);
}

puxarDados();
