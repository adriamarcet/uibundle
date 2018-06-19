const trigger = document.querySelectorAll('.js-accordionTrigger');
const openClass = 'open';

function toggleAccordion(elem, show) {
  const targetContent = elem.getAttribute('aria-controls');
  const accordionContent = document.getElementById(targetContent);
  elem.setAttribute('aria-expanded', show);
  accordionContent.setAttribute('aria-hidden', !show);
}

export function resetAccordion() {
  for (let i = 0; i < trigger.length; i++) {
    trigger[i].parentNode.classList.remove(openClass);
    toggleAccordion(trigger[i], false);
  }
}

export default function accordion() {
  for (let i = 0; i < trigger.length; i++) {
    trigger[i].addEventListener('click', event => {
      event.preventDefault();
      const isOpen = event.target.parentNode.classList.contains(openClass);

      resetAccordion();
      toggleAccordion(trigger[i], !isOpen);

      if (!isOpen) {
        event.target.parentNode.classList.add(openClass);
      }
    });
  }
}
