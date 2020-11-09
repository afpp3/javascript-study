function Pessoa(nome, idade) {
  this.nome = nome
  this.idade = idade
}

const andre = new Pessoa('André', 22)

console.log(Pessoa.prototype)
console.log(andre.prototype)

const listaAnimais = ['Cachorro', 'Gato', 'Cavalo', 'Urso']

const Carro = {
  marca: 'Ford',
  preco: 2000,
  andar() {
    return true
  }
}