const navLinks = document.querySelectorAll('.nav-link');
const panels = document.querySelectorAll('.tab-panel');

navLinks.forEach((button) => {
  button.addEventListener('click', () => {
    const target = button.dataset.tab;

    navLinks.forEach((b) => b.classList.remove('active'));
    panels.forEach((panel) => panel.classList.remove('active'));

    button.classList.add('active');
    document.getElementById(target).classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

const accordionButtons = document.querySelectorAll('.accordion-toggle');

accordionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const panel = button.nextElementSibling;
    const plus = button.querySelector('.plus');
    const isOpen = panel.classList.contains('open');

    document.querySelectorAll('.accordion-panel').forEach((p) => p.classList.remove('open'));
    document.querySelectorAll('.accordion-toggle .plus').forEach((symbol) => symbol.textContent = '+');

    if (!isOpen) {
      panel.classList.add('open');
      plus.textContent = '–';
    }
  });
});

const subtabLinks = document.querySelectorAll('.subtab-link');
const subtabPanels = document.querySelectorAll('.subtab-panel');

subtabLinks.forEach((button) => {
  button.addEventListener('click', () => {
    const target = button.dataset.subtab;

    subtabLinks.forEach((b) => b.classList.remove('active'));
    subtabPanels.forEach((panel) => panel.classList.remove('active'));

    button.classList.add('active');
    document.getElementById(target).classList.add('active');
  });
});
