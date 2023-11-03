function selected(div) {
  const currentColor = div.getAttribute("data-color");

  if (currentColor === "white") {
    div.style.backgroundColor = "#FFC436";
    div.setAttribute("data-color", "yellow");
  } else {
    div.style.backgroundColor = "white";
    div.setAttribute("data-color", "white");
  }
}

function changeImage(img) {
  const parentDiv = img.parentElement;
  const color = img.src;
  const car = document.getElementById("carimg");

  const allDivs = document.querySelectorAll(".flex div");
  allDivs.forEach((div) => {
    div.classList.remove("border-2");
  });

  // Add "border-2" class to the parent <div> of the clicked image
  parentDiv.classList.add("border-2");

  const currentColor2 = car.src.substring(car.src.lastIndexOf("-") + 1, car.src.lastIndexOf("."));
  
  car.style.opacity = 0;

  if(color.endsWith("images/blue.svg")){
    setTimeout(function () {
        car.src = car.src.replace(currentColor2, "blue");
        car.style.opacity = 1;
      }, 300);
  }else if(color.endsWith("images/gray.svg")){
    setTimeout(function () {
        car.src = car.src.replace(currentColor2, "gray");
        car.style.opacity = 1;
      }, 300);
  }else if(color.endsWith("images/white.svg")){
    setTimeout(function () {
        car.src = car.src.replace(currentColor2, "white");
        car.style.opacity = 1;
      }, 300);
  }else 
  setTimeout(function () {
    car.src = car.src.replace(currentColor2, "black");
    car.style.opacity = 1;
  }, 300);
}
