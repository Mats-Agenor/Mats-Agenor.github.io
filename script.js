document.addEventListener('DOMContentLoaded', () => {
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));
  const tabPanels = Array.from(document.querySelectorAll('.tab-panel'));

  navLinks.forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.dataset.tab;

      navLinks.forEach((link) => link.classList.remove('active'));
      tabPanels.forEach((panel) => panel.classList.remove('active'));

      button.classList.add('active');

      const targetPanel = document.getElementById(target);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  const accordionToggles = Array.from(document.querySelectorAll('.accordion-toggle'));

  accordionToggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const panel = toggle.nextElementSibling;
      if (!panel) return;

      const isOpen = panel.classList.contains('open');

      panel.classList.toggle('open', !isOpen);
      toggle.classList.toggle('open', !isOpen);

      const plus = toggle.querySelector('.plus');
      if (plus) {
        plus.textContent = isOpen ? '+' : '−';
      }
    });
  });
});
