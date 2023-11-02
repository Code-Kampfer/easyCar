let basketCount = localStorage.getItem("basketCount") || 0;
const basketCountElement = document.getElementById("basket-count");
basketCountElement.textContent = basketCount;

function incrementBasket() {
  basketCount++;
  basketCountElement.textContent = basketCount;
  localStorage.setItem("basketCount", basketCount);
}

const rentButtons = document.querySelectorAll("#but1 ");
rentButtons.forEach((button) => {
  button.addEventListener("click", incrementBasket);
});
