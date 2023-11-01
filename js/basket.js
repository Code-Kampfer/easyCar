// Initialize the basket count from localStorage
let basketCount = localStorage.getItem("basketCount") || 0;
const basketCountElement = document.getElementById("basket-count");

// Update the basket count element
basketCountElement.textContent = basketCount;

// Function to increment the basket count
function incrementBasket() {
  // Increment the count
  basketCount++;
  // Update the HTML element
  basketCountElement.textContent = basketCount;
  // Update localStorage
  localStorage.setItem("basketCount", basketCount);
}

// Add event listeners to the "Rent Now" buttons
const rentButtons = document.querySelectorAll("#but1 button");
rentButtons.forEach((button) => {
  button.addEventListener("click", incrementBasket);
});
