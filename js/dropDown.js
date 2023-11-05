// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show"); //adding a class show
// }
// // Close the dropdown if the user clicks outside of it
// window.onclick = function (event) {
//   if (!event.target.matches(".dropbtn")) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains("show")) {
//         openDropdown.classList.remove("show");
//       }
//     }
//   }
// };

function toggleDropdown() {
  document.getElementById("cartDropdown").classList.toggle("flex");
  document.getElementById("cartDropdown").classList.toggle("flex-col");
  document.getElementById("cartDropdown").classList.toggle("justify-between");
  document.getElementById("cartDropdown").classList.toggle("show"); //adding a class show
}

function renderBasket(dropdown, basket) {
  dropdown.innerHTML = basket
    .map((car) => {
      // Split the price string by space and take the first part
      const priceParts = car.price.split(" ");
      const price = priceParts[0];

      return `
      <div class="border-solid border border-black w-[95%] mx-auto mb-2 rounded-xl">
      
      
        <div class="flex  ">
          <img class="h-[88px] w-[156px] object-contain" src="${car.image}"/>
          <div class="flex flex-col justify-center">
            <a class="pt-5 no-underline block text-black">${car.name}</a>
            <h2 id="" class=" carPrice font-bold text-xl text-black">${price} 
              <span class="text-sm text-gray-500">/day</span>
            </h2>
          </div>
        </div>
        <div class="flex flex-col items-end pr-2 ">    
            <div class="font-semibold text-xs bold border border-1 border-solid border-black rounded-full mb-2 w-full max-w-[100px] h-6 flex justify-center bg-yellow-400 float-right">
              <button onclick="openPopup()">CUSTOMIZE</button>
            </div>
        </div>

      </div>
      `;
    })
    .join("\n");
}

window.addEventListener("load", () => {
  renderBasket(document.getElementById("myDropdown"), basket);
});

