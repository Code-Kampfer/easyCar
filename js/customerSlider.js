let currentSlide = 1;
const totalSlides = 3; // Change this to the total number of slides

function showSlide(slideNumber) {
  // Hide all slides
  for (let i = 1; i <= totalSlides; i++) {
    document.getElementById(`slide${i}`).style.display = "none";
  }
  document.getElementById(`slide${slideNumber}`).style.display = "block";
}

function nextSlide() {
  currentSlide++;
  if (currentSlide > totalSlides) {
    currentSlide = 1;
  }
  showSlide(currentSlide);
}

function previousSlide() {
  currentSlide--;
  if (currentSlide < 1) {
    currentSlide = totalSlides;
  }
  showSlide(currentSlide);
}

showSlide(currentSlide);

// Event listeners for the "next" and "previous" buttons
document.getElementById("next").addEventListener("click", nextSlide);
document.getElementById("prev").addEventListener("click", previousSlide);
