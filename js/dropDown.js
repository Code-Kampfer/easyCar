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
      return `
            <img src="${car.image}"/>
            <a class="text-black py-5  no-underline block">${car.name}</a>
            <a class="text-black py-5 no-underline block">${car.price}</a>
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
    // TODO: close dropdown on click outside
  }
});
