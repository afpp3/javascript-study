export default function initAnimaScroll(params) {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.7;

    function animaSroll() {
      sections.forEach((section) => {
        const topDistance = section.getBoundingClientRect().top;
        const isSectionVisible = topDistance - windowMetade < 0;
        if (isSectionVisible) {
          section.classList.add("ativo");
        } else if (section.classList.contains("ativo")) {
          section.classList.remove("ativo");
        }
      });
    }

    window.addEventListener("scroll", animaSroll);
    animaSroll();
  }
}
