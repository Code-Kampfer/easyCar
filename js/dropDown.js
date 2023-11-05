function toggleDropdown() {
  document.getElementById("cartDropdown").classList.toggle("flex");
  document.getElementById("cartDropdown").classList.toggle("flex-col");
  document.getElementById("cartDropdown").classList.toggle("justify-between");
  document.getElementById("cartDropdown").classList.toggle("show");
}

function renderBasket(dropdown, basket) {
  dropdown.innerHTML = basket
    .map((car, index) => {
      // Split the price string by space and take the first part
      const priceParts = car.price.split(" ");
      const price = priceParts[0];
      // Find a parent element that exists when your JavaScript code runs.
      const parentElement = document.getElementById("cartDropdown");

      // Add an event listener to the parent element.
      parentElement.addEventListener("click", function (event) {
        // Check if the clicked element has the ID "customizeCarButton".
        if (event.target.id === "customizeCarButton") {
          // Handle the event for the "CUSTOMIZE" button.
          customizeCar(car);
        }
      });

      return `
      <div class="border-solid border border-black w-[95%] mx-auto mb-2 rounded-xl">
        <div class="flex">
          <img class="h-[88px] w-[156px] object-contain" src="${car.image}"/>
          <div class="flex flex-col justify-center">
            <a class="pt-5 no-underline block text-black">${car.name}</a>
            <h2 id="" class="carPrice font-bold text-xl text-black">${price} 
              <span class="text-sm text-gray-500">/day</span>
            </h2>
          </div>
        </div>
        <div class="flex flex-col items-end pr-2">    
            <div class="font-semibold text-xs bold border border-1 border-solid border-black rounded-full mb-2 w-full max-w-[100px] h-6 flex justify-center bg-yellow-400 float-right">
              <button id="customizeCarButton" >CUSTOMIZE</button>
            </div>
        </div>
      </div>
      `;
    })
    .join("\n");
}

// Define the customizeCar function
function customizeCar(car) {
  const popup = document.getElementById("myPopup");
  renderBasket2(popup, car);
  openPopup();
}

window.addEventListener("load", () => {
  renderBasket(document.getElementById("myDropdown"), basket);
});
