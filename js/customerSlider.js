const carouselContainer = document.getElementById("carousel-container");
const slides = document.querySelectorAll('[id^="slide"]');
let currentIndex = 0;
let timeout = null;

// 

function showSlide(index) {
  // Update the current slide index
  currentIndex = index;

  // Create a new animation object
  const animation = carouselContainer.animate([
    { transform: `translateX(-${currentIndex * 100}%)` },
    { transform: `translateX(-${currentIndex * 100}%` }
  ], {
    duration: 500,
    easing: 'ease-in-out'
  });

  // Start the animation
  animation.play();
}


// Initialize the carousel
showSlide(currentIndex);

// Handle clicks on the next and previous buttons
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

nextButton.addEventListener('click', () => {
  // Clear the timeout if it is set
  if (timeout) {
    clearTimeout(timeout);
  }

  // Show the next slide
  showSlide(currentIndex + 1);
});

prevButton.addEventListener('click', () => {
  // Clear the timeout if it is set
  if (timeout) {
    clearTimeout(timeout);
  }

  // Show the previous slide
  showSlide(currentIndex - 1);
});
