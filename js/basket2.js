const STORAGE_KEY = "basket";

let basket = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
let basketCountElement = document.getElementById("basket-count");
basketCountElement.textContent = basket.length;

function incrementBasket(details) {
  basket.push(details);
  basketCountElement.textContent = basket.length;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(basket));
}

const rentButtons = document.querySelectorAll("#but1");
rentButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let productContainer = button.closest(".product");
    let name = productContainer.querySelector(".carName").textContent.trim();
    let price = productContainer.querySelector(".carPrice").textContent.trim();
    let image = productContainer.querySelector(".carImg").src;
    let details = {
      name,
      price,
      image,
    };
    incrementBasket(details);
    document.location.reload();
  });
});
