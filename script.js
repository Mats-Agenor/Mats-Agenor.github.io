document.addEventListener('DOMContentLoaded', () => {
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

  const subtabLinks = Array.from(document.querySelectorAll('.subtab-link'));
  const subtabPanels = Array.from(document.querySelectorAll('.subtab-panel'));

  if (subtabLinks.length && subtabPanels.length) {
    subtabLinks.forEach((button) => {
      button.addEventListener('click', () => {
        const target = button.dataset.subtab;

        subtabLinks.forEach((link) => link.classList.remove('active'));
        subtabPanels.forEach((panel) => panel.classList.remove('active'));

        button.classList.add('active');
        const targetPanel = document.getElementById(target);
        if (targetPanel) {
          targetPanel.classList.add('active');
        }
      });
    });
  }
});
