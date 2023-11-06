function toggleDropdown() {
  document.getElementById("cartDropdown").classList.toggle("flex");
  document.getElementById("cartDropdown").classList.toggle("flex-col");
  document.getElementById("cartDropdown").classList.toggle("justify-between");
  document.getElementById("cartDropdown").classList.toggle("show");
}

function toggleBurgermenu() {
  document
    .getElementById("burgermenu")
    .classList.toggle("[&>*:nth-child(2)]:opacity-0");
  document
    .getElementById("burgermenu")
    .classList.toggle("[&>*:nth-child(1)]:translate-y-2");
  document
    .getElementById("burgermenu")
    .classList.toggle("[&>*:nth-child(1)]:rotate-45");
  document
    .getElementById("burgermenu")
    .classList.toggle("[&>*:nth-child(3)]:-translate-y-2");
  document
    .getElementById("burgermenu")
    .classList.toggle("[&>*:nth-child(3)]:-rotate-45");
  document.getElementById("displaymenu").classList.toggle("hidden");
}

function renderBasket(dropdown, basket) {
  dropdown.innerHTML = basket
    .map((car) => {
      // Split the price string by space and take the first part
      const priceParts = car.price.split(" ");
      const price = priceParts[0];

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
              <button onclick="customizeCar('${car.image},${car.name},${price},${car.seats},${car.fuel},${car.id},${car.gas},${car.gps},${car.wifi},${car.sunroof},${car.audio},${car.station}')" >CUSTOMIZE</button>
            </div>
        </div>
      </div>
      `;
    })
    .join("\n");
}

// Define the customizeCar function
function customizeCar(car) {
  const parts = car.split(",");
  const carImg = parts[0];
  const carName = parts[1];
  const price = parseFloat(parts[2]);
  const seats = parts[3];
  const fuel = parts[4];
  const id = parts[5];
  const gas = parts[6];
  const gps = parts[7];
  const wifi = parts[8];
  const sunroof = parts[9];
  const audio = parts[10];
  const station = parts[11];
  const popup = document.getElementById("myPopup");
  renderBasket2(
    popup,
    carImg,
    carName,
    price,
    seats,
    fuel,
    id,
    gas,
    gps,
    wifi,
    sunroof,
    audio,
    station
  );
  openPopup();
}

window.addEventListener("load", () => {
  renderBasket(document.getElementById("myDropdown"), basket);
});
