function initTabMenu() {
  const animaisLista = document.querySelectorAll('.js-tabmenu li')
  const animaisDescricao = document.querySelectorAll('.js-animais-descricao section')

  if (animaisLista.length && animaisDescricao.length) {
    animaisDescricao[0].classList.add('ativo')

    function activeTabmenu(index) {
      animaisDescricao.forEach(content => {
        content.classList.remove('ativo')
      })
      animaisDescricao[index].classList.add('ativo')
    }

    animaisLista.forEach((animal, index) => {
      animal.addEventListener('click', () => {
        activeTabmenu(index)
      })
    })
  }

}

function initScroll() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

  if (linksInternos.length) {
    function activeScroll(event) {
      event.preventDefault()
      const href = this.getAttribute('href')
      const section = document.querySelector(href)
      section.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      })
    }

    linksInternos.forEach(link => {
      link.addEventListener('click', activeScroll)
    })
  }
}

function initScrollAnimation() {
  const sections = document.querySelectorAll('.js-scroll')

  if (sections.length) {
    window.addEventListener('scroll', activeScrollAnimation)
    const windowHalf = window.innerHeight * 0.6

    function activeScrollAnimation() {
      sections.forEach(section => {
        const top = section.getBoundingClientRect().top
        const halfScrollView = (top - windowHalf) < 0
        if (halfScrollView) {
          section.classList.add('ativo')
        }
      })
    }
    activeScrollAnimation()
  }
}

function initAccordion(params) {
  const questionsList = document.querySelectorAll('.js-accordion dt')

  if (questionsList.length) {
    questionsList[0].nextElementSibling.classList.add('ativo')

    function activeAccordion() {
      this.classList.toggle('ativo')
      this.nextElementSibling.classList.toggle('ativo')
    }

    questionsList.forEach(question => {
      question.addEventListener('click', activeAccordion)
    })

  }
}


initScrollAnimation()
initTabMenu()
initScroll()
initAccordion()