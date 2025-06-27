document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav-menu');
  let isOpen = false;

  // Asegúrate de que el botón NO haga submit si está dentro de un <form>
  btn.type = 'button';

  btn.addEventListener('click', () => {
    if (!isOpen) {
      // ABRIR menú
      btn.classList.add('open');    // convierte hamburguesa en X
      nav.classList.add('open');    // desplaza el nav desde translateX(100%) a translateX(0)
    } else {
      // CERRAR menú
      btn.classList.remove('open');
      nav.classList.remove('open');
    }
    isOpen = !isOpen;
  });
});