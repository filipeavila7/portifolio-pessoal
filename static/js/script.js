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





const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
const indicators = document.querySelectorAll('.carousel-indicators button');

let currentIndex = 0;

function updateCarousel() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;

  indicators.forEach((dot, idx) => dot.classList.toggle('active', idx === currentIndex));
}

// Navegação
nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});

// Indicadores clicáveis
indicators.forEach((dot, idx) => {
  dot.addEventListener('click', () => {
    currentIndex = idx;
    updateCarousel();
  });
});

// Inicializa
updateCarousel();


document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('show');
});


document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('show');
    });
});