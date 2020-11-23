function initTabNav() {

  const animals = document.querySelectorAll('.js-tabmenu li')
  const animalsDescription = document.querySelectorAll('.js-tabcontent section')

  if (animals.length && animalsDescription.length) {
    animalsDescription[0].classList.add('ativo')

    function activeTabMenu(index) {
      animalsDescription.forEach(section => {
        section.classList.remove('ativo')
      })
      animalsDescription[index].classList.add('ativo')
    }

    animals.forEach((animal, index) => {
      animal.addEventListener('click', () => {
        activeTabMenu(index)
      })
    })
  }
}

function activeScroll() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

  if (linksInternos.length) {
    function scrollTot(event) {
      event.preventDefault()
      const href = this.getAttribute('href')
      const section = document.querySelector(href)

      section.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      })
    }

    linksInternos.forEach(link => {
      link.addEventListener('click', scrollTot)
    })
  }

}

function initAccordion() {

  const questions = document.querySelectorAll('.js-accordion dt')

  if (questions.length) {

    questions[0].nextElementSibling.classList.add('ativo')

    function activeAccordion(event) {
      event.currentTarget.classList.toggle('ativo')
      this.nextElementSibling.classList.toggle('ativo')
    }

    questions.forEach(question => {
      question.addEventListener('click', activeAccordion)
    })

  }

}

function initScrollAnimation() {
  const sections = document.querySelectorAll('.js-scroll')

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6

    window.addEventListener('scroll', activeScrollAnimation)

    function activeScrollAnimation() {
      sections.forEach(section => {
        const top = section.getBoundingClientRect().top
        const halfScrollView = (top - windowMetade) < 0
        if (halfScrollView) {
          section.classList.add('ativo')
        }
        // console.log(top)
      })
    }
    activeScrollAnimation()
  }
}

initTabNav()
activeScroll()
initAccordion()
initScrollAnimation()
