let allProducts = document.getElementById("allProducts");
fetch(
  "https://script.google.com/macros/s/AKfycbxIst8BLq1OpIucSuV_KkCmIbrLCmrRRyB1kUmFY2sEwCFQwR1ZSdLIOAgHiSjTQj_D_Q/exec"
)
  .then((response) => response.json())
  .then((data) => {
    displayProducts(data.sheet1);
    // displayCategory(data.sheet2);
    // console.log("Sheet1 Data:", data.sheet1);
    // console.log("Sheet2 Data:", data.sheet2);
  })
  .catch((error) => console.error("Error:", error));
// Function to display cards on the page
function displayProducts(data) {
  let cartona = " ";
  allProducts.innerHTML = " ";
  data.forEach((e) => {
    cartona += `

 <div class="col-md-4 ">
  <div class="productCard">
            <div class="productCardImg">
              <img src="${e[4]}" alt="product" />
            </div>
            <div class="productCardContent">
              <h6>${e[3]}</h6>
              <h3>${e[2]}</h3>
              <p>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div
                  class="productCardPrice d-flex justify-content-center align-items-center"
                >
                  <p class="oldPrice">${e[1]}</p>
                  <p class="dash">|</p>
                  <p class="newPrice">${e[0]}</p>
                </div>
                <div
                  class="productCardCart circle d-flex justify-content-center align-items-center"
                  onclick='addToCart(${JSON.stringify([
                    e[0],
                    e[1],
                    e[2],
                    e[3],
                    e[4],
                  ])})'
                >
                  <i class="fa-solid fa-cart-shopping"></i>
                </div>
              </div>
            </div>
         </div>

    </div>
     `;
    allProducts.innerHTML = cartona;
  });
}
let sucssesAdding = document.getElementById("sucssesAdding");
function addToCart(e) {
  let cartProduct = JSON.parse(sessionStorage.getItem("cartProduct")) || [];
  cartProduct.push(e);
  sessionStorage.setItem("cartProduct", JSON.stringify(cartProduct));
  sucssesAdding.style.display = "block";
  setTimeout(() => {
    sucssesAdding.style.display = "none";
  }, 1500);
}
