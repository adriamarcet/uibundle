const TRIGGER = document.querySelectorAll('.js-accordionTrigger');
const OPEN_CLASS = 'open';

function toggleAccordion(elem, show) {
  const targetContent = elem.getAttribute('aria-controls');
  const accordionContent = document.getElementById(targetContent);
  elem.setAttribute('aria-expanded', show);
  accordionContent.setAttribute('aria-hidden', !show);
}

function resetAccordion() {
  for (let i = 0; i < TRIGGER.length; i++) {
    TRIGGER[i].parentNode.classList.remove(OPEN_CLASS);
    toggleAccordion(TRIGGER[i], false);
  }
}

function accordion() {
  for (let i = 0; i < TRIGGER.length; i++) {
    TRIGGER[i].addEventListener('click', event => {
      event.preventDefault();
      const isOpen = event.target.parentNode.classList.contains(OPEN_CLASS);

      resetAccordion();
      toggleAccordion(TRIGGER[i], !isOpen);

      if (!isOpen) {
        event.target.parentNode.classList.add(OPEN_CLASS);
      }
    });
  }
}

export { resetAccordion };
export default accordion;
