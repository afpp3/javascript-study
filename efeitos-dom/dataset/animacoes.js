function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    function activeTab(index) {
      const direcao = tabContent[index].dataset.anime;
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo", direcao);
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}

function initAccordion() {
  const accordionQuestion = document.querySelectorAll(
    "[data-anime='accordion'] dt"
  );

  const activeClass = "ativo";

  if (accordionQuestion.length) {
    accordionQuestion[0].classList.add(activeClass);
    accordionQuestion[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionQuestion.forEach((question) => {
      question.addEventListener("click", activeAccordion);
    });
  }
}

function initScrollSmooth() {
  const linksInternos = document.querySelectorAll(
    '[data-menu="smooth"] a[href^="#"]'
  );

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Forma alternativa
    // const topo = section.offsetTop
    // window.scrollTo({
    //   top: topo,
    //   behavior: "smooth"
    // })
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}

function initAnimaScroll(params) {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.7;

    function animaSroll() {
      sections.forEach((section) => {
        const topDistance = section.getBoundingClientRect().top;
        const isSectionVisible = topDistance - windowMetade < 0;
        if (isSectionVisible) {
          section.classList.add("ativo");
        }
      });
    }

    window.addEventListener("scroll", animaSroll);
    animaSroll();
  }
}

initTabNav();
initAccordion();
initScrollSmooth();
initAnimaScroll();
