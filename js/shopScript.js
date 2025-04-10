let allProducts = document.getElementById("allProducts");
fetch(
  "https://script.google.com/macros/s/AKfycbxIst8BLq1OpIucSuV_KkCmIbrLCmrRRyB1kUmFY2sEwCFQwR1ZSdLIOAgHiSjTQj_D_Q/exec"
)
  .then((response) => response.json())
  .then((data) => {
    displayProducts(data.sheet1);
    displayCategory(data.sheet2);
    console.log("Sheet1 Data:", data.sheet1);
    console.log("Sheet2 Data:", data.sheet2);
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
                >
                  <a href=""> <i class="fa-solid fa-cart-shopping"></i></a>
                </div>
              </div>
            </div>
         </div>

    </div>
     `;
    allProducts.innerHTML = cartona;
  });
}
// let category = document.getElementById("category");
// function displayCategory(data) {
//   let cartona = " ";
//   category.innerHTML = " ";
//   data.forEach((e) => {
//     cartona += `
//   <div class="card">
//     <h3 class="oldPrice">${e[1]}</h3>
//     <h3>${e[0]}</h3>
//     <br />
//      <div class="circle" style=" background-color: ${e[2]};"></div>

//   </div>
//      `;
//     category.innerHTML = cartona;
//   });
// }
