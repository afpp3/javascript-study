// const Dom = {
//   seletor: 'li',
//   element() {
//     return document.querySelector(this.seletor)
//   },
//   ativar() {
//     this.element().classList.add('ativo')
//   }
// }

function Dom(seletor) {
  this.element = function () {
    return document.querySelector(seletor)
  }
  this.ativar = function () {
    this.element().classList.add('ativo')
  }
}

const secondLi = new Dom('li:nth-child(2)')
