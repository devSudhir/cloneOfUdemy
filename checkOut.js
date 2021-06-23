let all_total_price = document.getElementById("all_total_price");
let discounted_price = document.getElementById("discounted_price");
let total = document.getElementById("total")

let total_discount_price = JSON.parse(localStorage.getItem("total_discount_price"));
console.log(total_discount_price);

all_total_price.innerHTML = `&#8377;${total_discount_price[0].total_price}`;
discounted_price.innerHTML = `-&#8377;${total_discount_price[0].discount_price}`;
total.innerHTML = `&#8377;${Number(total_discount_price[0].total_price) - Number(total_discount_price[0].discount_price)}`;

function shoppingComplete() {
  let array = [
    "Your order is accepted",
    "Your order is ready",
    "Order delivered",
  ];

  let h1 = document.getElementById("notification");
  let index = 0;
  h1.textContent = array[index++];

  setTimeout(function () {
    h1.textContent = array[index++];
  }, 3000);
  setTimeout(function () {
    h1.textContent = array[index++];
  }, 8000);
}
function checkSpaces(data) {
  var count = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] == " ") {
      count++;
    }
  }
  return count;
}
function modifyFullname(data) {
  if (checkSpaces(data) == 1) {

    var res = data[0].toUpperCase();
    for (let i = 1; i < data.length; i++) {
      if (data[i] == " ") {
        res += data[i + 1].toUpperCase()
        break;
      }
    }
    return res;
  } else {
    res = data[0].toUpperCase();
    for (let j = data.length - 1; j >= 1; j--) {
      if (data[j] == " ") {
        res += data[j + 1].toUpperCase()
        break;
      }
    }
    return res;
  }
}
let loginDetails = JSON.parse(localStorage.getItem('loginDetails'));
let udemyUsers = JSON.parse(localStorage.getItem('udemyUsers'));
let btnUser = document.getElementById('btnUser');
for (let i = 0; i < loginDetails.length; i++) {
  for (let j = 0; j < udemyUsers.length; j++) {
    if (loginDetails[i].loginEmail == udemyUsers[j].signupEmail) {
      btnUser.innerText = `${modifyFullname(udemyUsers[j].signupFullname)}`
    }
  }

}
// This is newly added script for showing no of items present in cart
let noOfCartItems = document.getElementById('noOfCartItems');
let cartItem = JSON.parse(localStorage.getItem('cartItem'));
noOfCartItems.innerHTML = `${cartItem.length}`
function showCart() {
  window.location.href = "after_cart.html"
}