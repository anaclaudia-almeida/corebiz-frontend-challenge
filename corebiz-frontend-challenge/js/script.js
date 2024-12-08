// Variáveis para controle de slides
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

// Mostrar o slide atual
const showSlide = (index) => {
  console.log('Mudando para o slide:', index);

  // Atualizar o índice para o próximo slide
  currentIndex = (index + slides.length) % slides.length; // Cálculo do índice correto para navegação circular
  
  // Atualizar o estilo dos slides
  slides.forEach((slide) => slide.classList.remove('active'));
  slides[currentIndex].classList.add('active');
  
  // Atualizar os dots
  dots.forEach((dot) => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
};

// Navegação manual através dos dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => showSlide(index));
});

// Troca automática de slides
setInterval(() => {
  showSlide((currentIndex + 1) % slides.length); // Avança para o próximo slide com cálculo para navegação circular
}, 5000); // Troca a cada 5 segundos
