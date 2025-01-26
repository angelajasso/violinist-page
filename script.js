const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : 2; // Ciclo hacia atrás
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex < 2) ? currentIndex + 1 : 0; // Ciclo hacia adelante
  updateCarousel();
});

function updateCarousel() {
  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}
