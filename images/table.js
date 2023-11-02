function showCartTable() {
  var cartRowHTML = "";
  var itemCount = 0;
  var grandTotal = 0;

  var price = 0;
  var quantity = 0;
  var subTotal = 0;

  if (localStorage.getItem("shopping-cart")) {
    var shoppingCart = JSON.parse(localStorage.getItem("shopping-cart"));
    itemCount = shoppingCart.length;

    shoppingCart.forEach(function (item) {
      var cartItem = JSON.parse(item);
      price = parseFloat(cartItem.price);
      quantity = parseInt(cartItem.quantity);
      subTotal = price * quantity;

      cartRowHTML +=
        "<tr>" +
        "<td>" +
        cartItem.productName +
        "</td>" +
        "<td class='text-right'>$" +
        price.toFixed(2) +
        "</td>" +
        "<td class='text-right'>" +
        quantity +
        "</td>" +
        "<td class='text-right'>$" +
        subTotal.toFixed(2) +
        "</td>" +
        "</tr>";

      grandTotal += subTotal;
    });
  }

  $("#cartTableBody").html(cartRowHTML);
  $("#itemCount").text(itemCount);
  $("#totalAmount").text("$" + grandTotal.toFixed(2));
}
