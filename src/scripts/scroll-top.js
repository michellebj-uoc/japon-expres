const scrollBtn = document.createElement('button');
scrollBtn.textContent = '↑';
scrollBtn.className = 'scroll-top';
scrollBtn.title = 'Volver arriba';
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollBtn.classList.add('visible');
  } else {
    scrollBtn.classList.remove('visible');
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
