// Abrir modal
  document.querySelectorAll('.projetos-cards').forEach(card => {
    card.addEventListener('click', () => {
      const modalId = card.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (modal) modal.style.display = 'flex';
    });
  });

  // Fechar modal
  document.querySelectorAll('.modal .close').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
      closeBtn.closest('.modal').style.display = 'none';
    });
  });

  
  // Fechar ao clicar fora
  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
      e.target.style.display = 'none';
    }
  });




// animaçãon de scroll
const faders = document.querySelectorAll('.fade-scroll');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // entra
        } else {
            entry.target.classList.remove('show'); // sai e pode entrar de novo
        }
    });
}, {
    threshold: 0.1
});

faders.forEach(fader => observer.observe(fader));
