
function updateNavVisibility() {
  const nav = document.querySelector('.nav-minimize');
  if (!nav) return;

  nav.style.display = window.innerWidth <= 760 ? 'block' : 'none';
}

function updateButtonVisibility() {
  const button = document.querySelector('.display-none');
  if (!button) return;

  button.style.display = window.innerWidth <= 760 ? 'block' : 'none';
}




  
function handleResponsiveUI() {
  updateNavVisibility();
  updateButtonVisibility();
}

window.addEventListener('load', handleResponsiveUI);
window.addEventListener('resize', handleResponsiveUI);
