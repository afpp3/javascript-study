// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll('.curso')
const arrayCursos = Array.from(cursos)

const objetosCurso = arrayCursos.map((item) => {
  const curso = {}
  curso.titulo = item.querySelector('h1').innerText
  curso.descricao = item.querySelector('p').innerText
  curso.aulas = +item.querySelector('.aulas').innerText
  curso.horas = +item.querySelector('.horas').innerText
  return curso
})

console.log(objetosCurso)

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const maior100 = numeros.filter(numero => numero > 100)

console.log(maior100)

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const temBaixo = instrumentos.includes('Baixo')
console.log(temBaixo)

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const totalCompras = compras.reduce((acc, item) => {
  const precoLimpo = +item.preco.replace('R$', '').replace(',', '.')
  return acc + precoLimpo
}, 0)

console.log(totalCompras)