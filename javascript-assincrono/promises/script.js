// const promise = new Promise((resolve, reject) => {
//   let condicao = true;
//   if (condicao) {
//     setTimeout(() => {
//       resolve("Deu certo");
//     }, 1000);
//   } else {
//     reject(Error("Deu ruim"));
//   }
// });

// const retorno = promise
//   .then((resultado) => {
//     console.log(resultado);
//     return "Teste";
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Acabou");
//   });

// console.log(retorno);

const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Usuário logado");
  }, 1000);
});

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Dados carregados");
  }, 1500);
});

const tudoCarregado = Promise.all([login, dados]);
const carregouPrimeiro = Promise.race([login, dados]);

carregouPrimeiro.then((resultado) => {
  console.log(resultado);
});

tudoCarregado.then((resultado) => {
  console.log(resultado);
});
