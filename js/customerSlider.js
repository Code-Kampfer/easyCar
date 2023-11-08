  // Variables to keep track of the current slide
  let currentSlide = 1;
  const totalSlides = 3; // Change this to the total number of slides

  // Function to show the current slide
  function showSlide(slideNumber) {
    // Hide all slides
    for (let i = 1; i <= totalSlides; i++) {
      document.getElementById(`slide${i}`).style.display = 'none';
    }
    // Show the current slide
    document.getElementById(`slide${slideNumber}`).style.display = 'block';
  }

  // Function to handle the "next" button click
  function nextSlide() {
    currentSlide++;
    if (currentSlide > totalSlides) {
      currentSlide = 1;
    }
    showSlide(currentSlide);
  }

  // Function to handle the "previous" button click
  function previousSlide() {
    currentSlide--;
    if (currentSlide < 1) {
      currentSlide = totalSlides;
    }
    showSlide(currentSlide);
  }

  // Initial display of the first slide
  showSlide(currentSlide);

  // Event listeners for the "next" and "previous" buttons
  document.getElementById('next').addEventListener('click', nextSlide);
  document.getElementById('prev').addEventListener('click', previousSlide);
