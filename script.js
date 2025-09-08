document.addEventListener('DOMContentLoaded', () => {
  // Ano no rodapé
  document.getElementById('ano').textContent = new Date().getFullYear();

  // Menu Mobile
  const toggle = document.getElementById('menu-toggle');
  const menuMobile = document.getElementById('menu-mobile');
  toggle.addEventListener('click', () => {
    menuMobile.classList.toggle('show');
  });
});
