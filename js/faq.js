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
  var popup = document.getElementById('popup');
  if (event.target == popup) {
      popup.classList.add('hidden');
  }
}




document.addEventListener("DOMContentLoaded", function () {
  const containers = document.querySelectorAll('.container');
  containers.forEach(container => {
      const icon = container.querySelector('.icon');
      const response = container.nextElementSibling;
      const svg = icon.querySelector('svg');
      const originalIcon = svg.innerHTML ; 

      icon.addEventListener('click', function () {
          if (response.classList.contains('hidden')) {
              response.classList.remove('hidden');
              // Change to minus icon
              svg.innerHTML = '<g id="zondicons:minus-outline" clip-path="url(#clip0_408_3868)"><path id="Vector" d="M20.5 42C15.0631 42 9.84881 39.7875 6.00431 35.8492C2.15982 31.911 0 26.5695 0 21C0 15.4305 2.15982 10.089 6.00431 6.15076C9.84881 2.21249 15.0631 0 20.5 0C25.9369 0 31.1512 2.21249 34.9957 6.15076C38.8402 10.089 41 15.4305 41 21C41 26.5695 38.8402 31.911 34.9957 35.8492C31.1512 39.7875 25.9369 42 20.5 42ZM20.5 37.8C24.8496 37.8 29.021 36.03 32.0965 32.8794C35.1721 29.7288 36.9 25.4556 36.9 21C36.9 16.5444 35.1721 12.2712 32.0965 9.12061C29.021 5.97 24.8496 4.2 20.5 4.2C16.1504 4.2 11.979 5.97 8.90345 9.12061C5.82785 12.2712 4.1 16.5444 4.1 21C4.1 25.4556 5.82785 29.7288 8.90345 32.8794C11.979 36.03 16.1504 37.8 20.5 37.8ZM30.75 18.9V23.1H10.25V18.9H30.75Z" fill="#FFC700"/></g>`';
          } else {
              response.classList.add('hidden');
               // Change back to plus icon
               svg.innerHTML = originalIcon ;
           }
      });
  });
});







