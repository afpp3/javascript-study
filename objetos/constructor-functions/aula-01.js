function Carro(marca, precoInicial) {
  const taxa = 1.2
  const precoFinal = precoInicial * taxa
  this.marca = marca
  this.preco = precoFinal
}

const mazda = new Carro('Mazda', 5000)