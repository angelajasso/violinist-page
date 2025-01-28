const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

const preferedColorScheme = window.matchMedia("(prefers-color-scheme: dark)")
  .matches
  ? "dark"
  : "light";
const slider = document.getElementById("slider");

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

const setTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
};

slider.addEventListener("click", () => {
  let switchToTheme =
    localStorage.getItem("theme") === "dark" ? "light" : "dark";
  setTheme(switchToTheme);
});

setTheme(localStorage.getItem("theme") || preferedColorScheme);
