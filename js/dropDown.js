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
  document.getElementById("myDropdown").classList.toggle("show"); //adding a class show
}

function renderBasket(dropdown, basket) {
  dropdown.innerHTML = basket
    .map((car) => {
      // Split the price string by space and take the first part
      const priceParts = car.price.split(" ");
      const price = priceParts[0];

      return `
      <div class="border-solid border border-black w-[90%] mx-auto">
      
      
      <div class="flex  ">
      <img class="h-1/3 w-1/2" src="${car.image}"/>
      <a class=" py-5  no-underline block text-black">${car.name}</a>
      </div>
            <div class="flex flex-col items-end  mt-[-100px] pr-2 ">    
              <h2 id="" class=" carPrice font-bold text-xl py-5 text-black">${price} <span class="text-sm text-gray-500">/day</span></h2>


            <div
            class="font-semibold text-xs bold border border-1 border-solid border-black rounded-full mb-2 w-full max-w-[100px] h-6 flex justify-center bg-yellow-400 float-right">
            <button id="but1">CUSTOMIZE</button>
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

window.addEventListener("click", function (event) {
  if (!event.target.matches(".dropbtn")) {
    let dropdownContent = event.target
      .closest(".dropdown")
      .querySelector(".dropdown-content");
    console.log(dropdownContent);
    renderBasket(dropdownContent, basket);
  } else {
    console.log("test");
  }
});
