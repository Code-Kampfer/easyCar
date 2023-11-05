const STORAGE_KEY = "basket";

let basket = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
let basketCountElement = document.getElementById("basket-count");
basketCountElement.textContent = basket.length;
let nextId = localStorage.getItem("nextId") || "1"; // Retrieve the last assigned ID or start from 1

function incrementBasket(details) {
  details.id = nextId; // Assign the next available ID to the product
  nextId++; // Increment the next available ID for the next product
  basket.push(details);
  basketCountElement.textContent = basket.length;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(basket));
  localStorage.setItem("nextId", nextId); // Store the updated nextId
}

const rentButtons = document.querySelectorAll("#but1");
rentButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let productContainer = button.closest(".product");
    let name = productContainer.querySelector(".carName").textContent.trim();
    let price = productContainer.querySelector(".carPrice").textContent.trim();
    let seats = productContainer.querySelector(".carSeats").textContent.trim();
    let fuel = productContainer.querySelector(".carFuel").textContent.trim();
    let image = productContainer.querySelector(".carImg").src;
    let details = {
      name,
      price,
      seats,
      fuel,
      image,
    };
    incrementBasket(details);
    document.location.reload();
  });
});
