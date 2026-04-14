document.addEventListener('DOMContentLoaded', () => {
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));
  const tabPanels = Array.from(document.querySelectorAll('.tab-panel'));

  navLinks.forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.dataset.tab;
      navLinks.forEach((link) => link.classList.remove('active'));
      tabPanels.forEach((panel) => panel.classList.remove('active'));
      button.classList.add('active');
      const panel = document.getElementById(target);
      if (panel) panel.classList.add('active');
    });
  });

  const accordionToggles = Array.from(document.querySelectorAll('.accordion-toggle'));
  accordionToggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      const panel = toggle.nextElementSibling;
      if (!panel) return;
      panel.style.maxHeight = panel.style.maxHeight ? '' : `${panel.scrollHeight}px`;
    });
  });
});
