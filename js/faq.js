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














// document.addEventListener("DOMContentLoaded", function() {
//     var acc = document.getElementsByClassName("accordion");
//     var i;
//     var len = acc.length;
//     for (i = 0; i < len; i++) {
//       acc[i].addEventListener("click", function() {
//         this.classList.toggle("active");
//         var panel = this.nextElementSibling;
//         if (panel.style.maxHeight) {
//           panel.style.maxHeight = null;
//         } else {
//           panel.style.maxHeight = panel.scrollHeight + "px";
//         }
//       });
//     }
//   });
  
