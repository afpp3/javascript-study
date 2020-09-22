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



initTabNav()
activeAccordion()
