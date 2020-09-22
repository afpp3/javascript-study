function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li')
  const tabContent = document.querySelectorAll('.js-tabcontent section')

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo')
    function activeTab(index) {
      tabContent.forEach(section => {
        section.classList.remove('ativo')
      })
      tabContent[index].classList.add('ativo')
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index)
      })
    })
  }
}

function activeAccordion() {
  const accordionQuestion = document.querySelectorAll('.js-accordion dt')

  const activeClass = 'ativo'

  if (accordionQuestion.length) {
    accordionQuestion[0].classList.add(activeClass)
    accordionQuestion[0].nextElementSibling.classList.add(activeClass)

    function activeAccordion() {
      this.classList.toggle(activeClass)
      this.nextElementSibling.classList.toggle(activeClass)
    }


    accordionQuestion.forEach((question) => {
      question.addEventListener('click', activeAccordion)
    })
  }
}

function initScrollSmooth() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

  function scrollToSection(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })

    // Forma alternativa
    // const topo = section.offsetTop
    // window.scrollTo({
    //   top: topo,
    //   behavior: "smooth"
    // })
  }

  linksInternos.forEach(link => {
    link.addEventListener('click', scrollToSection)
  })
}

initTabNav()
activeAccordion()
initScrollSmooth()
