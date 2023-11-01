const carousel = document.getElementById("carousel");
const slides = [
  document.getElementById("slide1"),
  document.getElementById("slide2"),
  document.getElementById("slide3"),
];

let currentIndex = 0;

function showSlide(index) {
  if (index < 0) {
    index = slides.length - 1;
  } else if (index >= slides.length) {
    index = 0;
  }

  const offset = -index * 100;
  carousel.style.transform = `translateX(${offset}%)`;
  currentIndex = index;
}

// Initialize the carousel
showSlide(currentIndex);

// Auto-advance the carousel (you can customize the interval)
setInterval(() => {
  showSlide(currentIndex + 1);
}, 1000);
