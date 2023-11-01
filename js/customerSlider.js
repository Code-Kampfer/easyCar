const slides = document.querySelectorAll(".slide");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

showSlide(currentSlide);

// Automatic sliding
// currentSlide.style.transform = "translateX(-120%)";
// currentSlide.style.transition = "ease-out 200ms";
let slideInterval = setInterval(nextSlide, 1000); // Change slides every 3 seconds

nextButton.addEventListener("click", () => {
  clearInterval(slideInterval);
  nextSlide();
  slideInterval = setInterval(nextSlide, 1000);
});

prevButton.addEventListener("click", () => {
  clearInterval(slideInterval);
  prevSlide();
  slideInterval = setInterval(nextSlide, 1000);
});
