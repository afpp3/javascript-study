export default function initAccordion() {
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
