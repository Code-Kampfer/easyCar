// Open the popup
function openPopup() {
  document.getElementById("popup").classList.remove("hidden");
}

// Close the popup
function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}

// Close the popup when clicking outside the popup content
window.onclick = function (event) {
  var popup = document.getElementById("popup");
  if (event.target == popup) {
    popup.classList.add("hidden");
  }
};

function renderBasket2(popup, car) {
  const priceParts = car.price.split(" ");
  const price = priceParts[0];
  popup.innerHTML = `
        <div class="bg-[#E8E8E8] w-full flex justify-end">
        <span onclick="closePopup()" class="float-right text-5xl font-bold cursor-pointer mr-2">&times;</span>
      </div>
      <div class="flex flex-col gap-6 justify-start items-center w-full ">
        <div class="flex flex-col justify-center items-center md:flex-row">
          <div class=" md:w-[30%]">
            <img id="carimg" class="w-full transition-opacity" src="${car.image}" alt="">
          </div>
          <div class="flex flex-col items-center gap-4">
            <h1 class="text-3xl">${car.name}</h1>
            <div class="flex gap-8 bg-[#F6F6F6] p-2 rounded-lg">
              <div class="flex flex-col items-center">
                <img class="w-[20px]" src="images/speedmeter.svg" alt="">
                <p>4000</p>
              </div>
              <div class="flex flex-col items-center">
                <img class="w-[20px]" src="images/gearbox.svg" alt="">
                <p>Auto</p>
              </div>
              <div class="flex flex-col items-center">
                <img class="w-[20px]" src="images/seats.svg" alt="">
                <p>4</p>
              </div>
              <div class="flex flex-col items-center">
                <img class="w-[20px]" src="images/fuel.svg" alt="">
                <p>Electric</p>
              </div>
            </div>
            <div class="flex gap-2 items-center">
              <div class="rounded-full border-[#FFC436] ">
                <img onclick="changeImage(this)" class="w-[22px] cursor-pointer rounded-full" src="images/blue.svg"
                  alt="" />
              </div>
              <div class="rounded-full border-[#FFC436] ">
                <img onclick="changeImage(this)" class="w-[22px] cursor-pointer rounded-full" src="images/gray.svg"
                  alt="" />
              </div>
              <div class="rounded-full border-[#FFC436] ">
                <img onclick="changeImage(this)" class="w-[22px] cursor-pointer rounded-full" src="images/black.svg"
                  alt="" />
              </div>
              <div class="rounded-full border-[#FFC436] ">
                <img onclick="changeImage(this)" class="w-[22px] cursor-pointer rounded-full" src="images/white.svg"
                  alt="" />
              </div>
            </div>
          </div>

        </div>
        <div class="flex flex-col justify-between items-center w-full px-1 gap-4 md:flex-row md:gap-0">
          <div class="flex w-full justify-between gap-2 md:justify-start md:w-1/3">
            <label for="sunroof">Sunroof:</label>
            <select class="w-[55%] bg-[#D9D9D9]" name="sunroof" id="sunroof">
              <option value="">Select</option>
              <option value="Panoramic">Panoramic</option>
              <option value="Electric">Electric</option>
              <option value="Manual">Manual</option>
            </select>
          </div>
          <div class="flex w-full justify-between gap-2 md:justify-start md:w-1/3">
            <label for="audio">Audio system:</label>
            <select class="w-[55%] bg-[#D9D9D9]" name="audio" id="audio">
              <option value="">Select</option>
              <option value="Dolby">Dolby</option>
              <option value="ATMOS">ATMOS</option>
              <option value="Bose">Bose</option>
            </select>
          </div>
          <div class="flex w-full justify-between gap-2 md:justify-end md:w-1/3">
            <label for="station">Station:</label>
            <select class="w-[55%] bg-[#D9D9D9]" name="station" id="station">
              <option value="">Select</option>
              <option value="CD">CD</option>
              <option value="Radio">Radio</option>
              <option value="Screen">Screen</option>
            </select>
          </div>
        </div>
        <div class="flex flex-col items-center gap-6 w-full">
          <h3 class="self-center text-xl">Add-Ons</h3>
          <div class="flex flex-col justify-evenly w-24 gap-4 md:flex-row md:justify-evenly md:w-full">
            <div onclick="selected(this)" data-color="white" id="gas"
              class="flex items-center gap-2 border border-black rounded-lg p-1 cursor-pointer">
              <img src="images/gas-tank.svg" alt="">
              Gas
            </div>
            <div onclick="selected(this)" data-color="white" id="gps"
              class="flex items-center gap-2 border border-black rounded-lg p-1 cursor-pointer">
              <img src="images/gps.svg" alt="">
              Gps
            </div>
            <div onclick="selected(this)" data-color="white" id="wifi"
              class="flex items-center gap-2 border border-black rounded-lg p-1 cursor-pointer">
              <img src="images/wifi.svg" alt="">
              Wifi
            </div>
          </div>
        </div>
      </div>
      <div class="bg-[#E8E8E8] w-full flex justify-end items-center gap-5">
        <p class="text-base font-semibold md:text-xl">Price: ${price}</p>
        <button onclick="closePopup()"
          class="bg-yellow-400 rounded-3xl w-24 md:w-32 h-8 mr-5 my-2 hover:text-white hover:bg-black">Save</button>
      </div>
        `;
}

