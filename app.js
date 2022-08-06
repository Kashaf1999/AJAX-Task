var product = "";

function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://dummyjson.com/products");
  xhttp.onload = function () {
    const obj = this.response;
    const text1 = JSON.parse(obj);
    product = text1.products;
    console.log(product);
    let cardsHTML = product.map((list) => {
      return (
        `<div class="card cardlist  d-inline-block" style="width: 18rem;">
                <img class = "items" src="${list.thumbnail}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Description</h5>
                  <p class="card-text">${list.description}</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Price: ${list.price}</li>
                  <li class="list-group-item">Discount: ${list.discountPercentage}</li>
                  <li class="list-group-item">Rating: ${list.rating}</li>
                  <li class="list-group-item">Stock: ${list.stock}</li>
                </ul>
              </div>`
              );
            });

            const a = cardsHTML.join(' ');
            document.getElementById('demo2').innerHTML = a;
            
            
            
            const cardBtn = [...new Set(product.map(list => `<button type="button" class="btn btn-dark" id="btn123" onclick="myBtn(event)" >${list.category}</button>`))];
            const b = cardBtn.join(' ');
            document.getElementById('demo1').innerHTML = b;
            
            
            
            function myBtn(event) {
              let x = event.target.innerHTML;
              var catg = product.filter(function (ele) {
                return ele.category == x;
              }
              );
              let secondCard = catg.map((item) => {
                return (`<div class="card cardlist  d-inline-block" style="width: 18rem;">
                <img class = "items" src="${item.thumbnail}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">Description</h5>
                <p class="card-text">${item.description}</p>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">Price: ${item.price}</li>
                <li class="list-group-item">Discount: ${item.discountPercentage}</li>
                <li class="list-group-item">Rating: ${item.rating}</li>
                <li class="list-group-item">Stock: ${item.stock}</li>
                </ul>
                </div>`);
              });
              document.getElementById('demo2').innerHTML = secondCard;
          
            }
      }
  xhttp.send();
};
loadDoc();
function myBtn(event) {
  let x = event.target.innerHTML;
  var catg = product.filter(function (ele) {
    return ele.category == x;
  }
  );
  let secondCard = catg.map((item) => {
    return (`<div class="card cardlist  d-inline-block" style="width: 18rem;">
    <img class = "items" src="${item.thumbnail}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">Description</h5>
    <p class="card-text">${item.description}</p>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">Price: ${item.price}</li>
    <li class="list-group-item">Discount: ${item.discountPercentage}</li>
    <li class="list-group-item">Rating: ${item.rating}</li>
    <li class="list-group-item">Stock: ${item.stock}</li>
    </ul>
    </div>`);
  });
  document.getElementById('demo2').innerHTML = secondCard;
}
