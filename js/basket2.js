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
    let gas = 0;
    let gps = 0;
    let wifi = 0;
    let details = {
      name,
      price,
      seats,
      fuel,
      image,
      gas,
      gps,
      wifi,
    };
    incrementBasket(details);
    document.location.reload();
  });
});

const tableBody = document.querySelector("tbody"); // Get the tbody element in your table

// Function to add a row to the table with the data from the basket
function addRowToTable(details, id) {
  const row = tableBody.insertRow(); // Insert a new row
  const orderIdCell = row.insertCell(0);
  const carNameCell = row.insertCell(1);
  const carColorCell = row.insertCell(2);
  const quantityCell = row.insertCell(3);
  const totalPriceCell = row.insertCell(4);

  orderIdCell.textContent = id; // Display the order ID
  carNameCell.textContent = details.name; // Display the car name
  carColorCell.textContent = details.image.substring(details.image.lastIndexOf("-") + 1, details.image.lastIndexOf("."));; // Display car color (you can replace this with the actual car color property)
  quantityCell.textContent = 1; // Quantity is always 1
  totalPriceCell.textContent = details.price; // Display the total price per day

  // Add any additional classes or styles as needed
}

// Loop through the items in the basket and add them to the table
basket.forEach((item, index) => {
  addRowToTable(item, index + 1); // Add 1 to index to display a 1-based order number
});
