let cartBody = document.getElementById("cartBody");
let addedToCart = JSON.parse(sessionStorage.getItem("cartProduct")); // parse string to array
function displayInCart() {
  let addedToCart = JSON.parse(sessionStorage.getItem("cartProduct")); // parse string to array
  if (sessionStorage.getItem("cartProduct") && addedToCart.length != 0) {
    console.log("from session storage", addedToCart);
    let cartona = " ";
    cartBody.innerHTML = " ";
    addedToCart.forEach((item, index) => {
      cartona += `
        <tr>
          <td>
            <i class="fa-solid fa-circle-xmark" onclick="removeRow(${index})"></i>
          </td>
          <td class="imageCart">
            <img src="${item[4]}" alt="product Image" />
          </td>
          <td>${item[2]}</td>
          <td>${item[0]}</td>
          <td><input type="number" min="1" class="quantity" value="1"/></td>
          <td class="totalPrice"></td>
        </tr>
      `;
    });

    cartBody.innerHTML = cartona;
  } else {
    cartBody.innerHTML = "<tr><td colspan='6'>No items in cart</td></tr>";
  }
}
displayInCart();
function removeRow(index) {
  let cartProduct = JSON.parse(sessionStorage.getItem("cartProduct"));
  cartProduct.splice(index, 1);
  sessionStorage.setItem("cartProduct", JSON.stringify(cartProduct));
  displayInCart();
}
let quantity = document.querySelectorAll(".quantity");
let totalPriceForItem = document.querySelectorAll(".totalPrice");
function updatePrice(quantity, index) {
  let eachquantity = quantity.value;
  let totalPriceValueForItem =
    parseInt(eachquantity) * Number(addedToCart[index][0]);
  totalPriceForItem[index].innerText = totalPriceValueForItem;
  totalPriceForItem[index].value = totalPriceValueForItem;
}
quantity.forEach((quantity, index) => {
  updatePrice(quantity, index);
  quantity.onchange = () => {
    updatePrice(quantity, index);
    updateSubTotal();
    updateTotalPrice();
  };
});
let CartSubTotal = document.getElementById("CartSubTotal");
let CouponsDiscount = document.getElementById("CouponsDiscount");
let Total = document.getElementById("Total");

function updateSubTotal() {
  let totalPrice = 0;
  totalPriceForItem.forEach((price) => {
    totalPrice += Number(price.value);
    CartSubTotal.innerText = totalPrice;
    CartSubTotal.value = totalPrice;
  });
}
let notValidCoupon = document.getElementById("notValidCoupon");
updateSubTotal();
let enterCoupon = document.getElementById("enterCoupon");
let applayCoupon = document.getElementById("applayCoupon");
applayCoupon.onclick = function () {
  if (enterCoupon.value == "Eman") {
    CouponsDiscount.value = 50;
    CouponsDiscount.innerText = 50;
    notValidCoupon.style.display = "none";
  } else {
    CouponsDiscount.value = 0;
    CouponsDiscount.innerText = 0;
    notValidCoupon.style.display = "block";
  }
  updateTotalPrice();
};
function updateTotalPrice() {
  Total.innerText =
    Number(CartSubTotal.innerText) - Number(CouponsDiscount.innerText);
}
updateTotalPrice();
