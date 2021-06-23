if (localStorage.getItem("saveForLater") == null) {
    localStorage.setItem("saveForLater", JSON.stringify([]))
}
if (localStorage.getItem("removedWish") == null) {
    localStorage.setItem("removedWish", JSON.stringify([]));
}

let total_main_price = 0;
let discount_price = 0;
let total_price = 0;

function showcartItems() {
    showremovedWisher();
    showSaveForLater();
    let showCartItems = document.getElementById("showCartItems");
    showCartItems.innerHTML = null;
    let cartItem = JSON.parse(localStorage.getItem("cartItem"));
    for (let i = 0; i < cartItem.length; i++) {
        let div = document.createElement("div");
        div.innerHTML = `<img src=${cartItem[i].img_source}>
                     <div>
                     <h3>${cartItem[i].course_name}</h3>
                     <p>${cartItem[i].Author}</p>
                     </div>
                    <div>
                     <button onclick="removeCourseFromCart(${i})">remove</button>
                     <button onclick="saveForLater(${i})">Save for later</button>
                     <button onclick="moveToWishList(${i})">Move to wishlist</button>
                     </div>
                     <div>
                     <h3>&#8377; ${cartItem[i].price}</h3>
                     <p>&#8377; ${cartItem[i].mainPrice}</p>
                     </div>`;
        div.style.display = "flex";
        showCartItems.appendChild(div);
    }
    // let cartItem = JSON.parse(localStorage.getItem("cartItem"));
    // console.log(cartItem.length)
    let noOfItemsInshop = document.getElementById("noOfItemsInshop");
    noOfItemsInshop.innerHTML = `<p>${cartItem.length} Courses are in cart</p>`;

    let total_main_price_cart = 0;
    let total_price_cart = 0;

    for (let i = 0; i < cartItem.length; i++) {
        total_price_cart += cartItem[i].price;
        total_main_price_cart += cartItem[i].mainPrice;
    }

    total_main_price = total_main_price_cart;
    total_price = total_price_cart;

    discount_price = total_main_price - total_price;
    localStorage.setItem("total_discount_price", JSON.stringify([{ total_price: total_main_price, discount_price: discount_price }]))

    let checkoutDiv = document.getElementById("checkoutDiv");
    checkoutDiv.innerHTML = `<p>Total:</p>
                        <h2 id="showDiscountedPrice">&#8377;  ${total_price}</h2>
                        <p>&#8377;  ${total_main_price}</p>
                        <p id="couponInPercent">90% off</p>
                        <a href="checkout.html">checkout</a>
                        <div>
                            <input id="coupon" type="text" placeholder="Enter Copoun">
                            <button onclick="applyCoupon()">Apply</button>
                        </div>
                        <div>
                            <i class="fas fa-times"></i><span id="couponName">masai90 is applied</span>
                        <div>`;
}

function moveToWishList(i) {
    let cartItem = JSON.parse(localStorage.getItem("cartItem"));
    let removedWish = document.getElementById('removedWish');
    // let arr1 = [];
    // cartItem.splice(i, 1);
    let arrSplice = cartItem.splice(i, 1);
    
    // arr1.push(arrSplice[0]);
    total_main_price -= Number(arrSplice[0].mainPrice);
    total_price -= Number(arrSplice[0].price);

    removedWish.innerHTML = null;
    let removedWishArr;
    removedWishArr = localStorage.getItem('removedWish');
    if (removedWishArr == null) {
        removedWishArr = [];
    } else {
        removedWishArr = JSON.parse(removedWishArr);
    }
    removedWishArr.push(arrSplice[0]);
    localStorage.setItem("removedWish", JSON.stringify(removedWishArr))
    if (cartItem.length == 1) {
        noOfItemsInshop.innerHTML = `<p>${cartItem.length} Course is in cart</p>`;
    } else {
        noOfItemsInshop.innerHTML = `<p>${cartItem.length} Courses are in cart</p>`;
    }
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
    showcartItems();
    showremovedWisher();
    let noOfCartItems = document.getElementById('noOfCartItems');
    // let cartItem=JSON.parse(localStorage.getItem('cartItem'));
    noOfCartItems.innerHTML = `${cartItem.length}`
}
// let removedWishDiv = document.getElementById('removedWish');
// removedWishDiv.innerHTML = "Omkar"

function showremovedWisher() {
    let removedWishDiv = document.getElementById('removedWish');
    let removedWisher = JSON.parse(localStorage.getItem("removedWish"))
    if (removedWisher.length == 0) {
        removedWishDiv.innerHTML = `<p>You haven't added any courses to your wishlist.</p>`
    } else {
        removedWishDiv.innerHTML = null;
        let removedWisher = JSON.parse(localStorage.getItem("removedWish"))
        for (let i = 0; i < removedWisher.length; i++) {
            let removedWishdiv = document.createElement("div");
            removedWishdiv.innerHTML = `<img src=${removedWisher[i].img_source}>
                     <div>
                     <h3>${removedWisher[i].course_name}</h3>
                     <p>${removedWisher[i].Author}</p>
                     </div>
                    <div>
                     <button onclick="removeCourseFromRemovedWish(${i})">remove</button>
                     <button onclick="moveToCartfromWish(${i})">Move to cart</button>
                     </div>
                     <div>
                     <h3>&#8377; ${removedWisher[i].price}</h3>
                     <p>&#8377; ${removedWisher[i].mainPrice}</p>
                     </div>`;
            removedWishdiv.style.display = "flex";
            removedWishDiv.appendChild(removedWishdiv);
        }
    }
}

function removeCourseFromRemovedWish(i) {
    let removedWish = JSON.parse(localStorage.getItem("removedWish"))
    removedWish.splice(i, 1);
    // localstorage.setItem("removedWish", JSON.stringify(removedWishA))
    localStorage.setItem("removedWish", JSON.stringify(removedWish))
    showremovedWisher();

}
function removeCourseFromCart(i) {
    let cartItem = JSON.parse(localStorage.getItem("cartItem"));
    let arrSplice = cartItem.splice(i, 1);
    total_main_price -= arrSplice[0].mainPrice;
    total_price -= arrSplice[0].price;
    
    noOfItemsInshop.innerHTML = `<p>${cartItem.length} Courses are in cart</p>`;
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
    showcartItems();
    let noOfCartItems = document.getElementById('noOfCartItems');
    // let cartItem=JSON.parse(localStorage.getItem('cartItem'));
    noOfCartItems.innerHTML = `${cartItem.length}`

}

function saveForLater(i) {
    let cartItem = JSON.parse(localStorage.getItem("cartItem"));
    let saveForLater = document.getElementById('saveForLater');
    // let arr1 = [];
    // cartItem.splice(i, 1);
    let arrSplice = cartItem.splice(i, 1);
    total_main_price -= arrSplice[0].mainPrice;
    total_price -= arrSplice[0].price;
    // arr1.push(arrSplice[0]);
    saveForLater.innerHTML = null;
    let saveForLaterArr;
    saveForLaterArr = localStorage.getItem('saveForLater');
    if (saveForLaterArr == null) {
        saveForLaterArr = [];
    } else {
        saveForLaterArr = JSON.parse(saveForLaterArr);
    }
    saveForLaterArr.push(arrSplice[0]);
    localStorage.setItem("saveForLater", JSON.stringify(saveForLaterArr))
    if (cartItem.length == 1) {
        noOfItemsInshop.innerHTML = `<p>${cartItem.length} Course is in cart</p>`;
    } else {
        noOfItemsInshop.innerHTML = `<p>${cartItem.length} Courses are in cart</p>`;
    }
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
    showcartItems();
    showSaveForLater()
    let noOfCartItems = document.getElementById('noOfCartItems');
    // let cartItem=JSON.parse(localStorage.getItem('cartItem'));
    noOfCartItems.innerHTML = `${cartItem.length}`
}

function showSaveForLater() {
    let saveForLaterDiv = document.getElementById('saveForLater');
    saveForLaterDiv.innerHTML = null;
    let saveForLater = JSON.parse(localStorage.getItem("saveForLater"))
    if (saveForLater.length == 0) {
        saveForLaterDiv.innerHTML = `<p>You haven't saved any courses for later.</p>`
    } else {
        for (let i = 0; i < saveForLater.length; i++) {
            let saveForLaterdiv = document.createElement("div");
            saveForLaterdiv.innerHTML = `<img src=${saveForLater[i].img_source}>
                     <div>
                     <h3>${saveForLater[i].course_name}</h3>
                     <p>${saveForLater[i].Author}</p>
                     </div>
                    <div>
                     <button onclick="removeCourseFromSaveForLater(${i})">remove</button>
                     <button onclick="moveToCartfromSaved(${i})">Move to cart</button>
                     </div>
                     <div>
                     <h3>&#8377; ${saveForLater[i].price}</h3>
                     <p>&#8377; ${saveForLater[i].mainPrice}</p>
                     </div>`;
            saveForLaterdiv.style.display = "flex";
            saveForLaterDiv.appendChild(saveForLaterdiv);
        }
    }
}
function removeCourseFromSaveForLater(i) {
    let saveForLater = JSON.parse(localStorage.getItem("saveForLater"))
    saveForLater.splice(i, 1);
    // localstorage.setItem("removedWish", JSON.stringify(removedWishA))
    localStorage.setItem("saveForLater", JSON.stringify(saveForLater))
    showSaveForLater();

}
function moveToCartfromSaved(i) {

    let saveForLater = JSON.parse(localStorage.getItem("saveForLater"))
    let cartItem = JSON.parse(localStorage.getItem("cartItem"));
    let arr2 = saveForLater.splice(i, 1);

    total_main_price += arr2[0].mainPrice;
    total_price += arr2[0].price;
    
    cartItem.push(arr2[0]);
    localStorage.setItem("saveForLater", JSON.stringify(saveForLater))
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
    showcartItems();
    showSaveForLater();
    let noOfCartItems = document.getElementById('noOfCartItems');
    // let cartItem=JSON.parse(localStorage.getItem('cartItem'));
    noOfCartItems.innerHTML = `${cartItem.length}`

}
function moveToCartfromWish(i) {

    let removedWish = JSON.parse(localStorage.getItem("removedWish"))
    let cartItem = JSON.parse(localStorage.getItem("cartItem"));
    let arr2 = removedWish.splice(i, 1);

    total_main_price += arr2[0].mainPrice;
    total_price += arr2[0].price;

    // console.log(arr2);
    cartItem.push(arr2[0]);
    localStorage.setItem("removedWish", JSON.stringify(removedWish))
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
    showcartItems();
    showremovedWisher();
    let noOfCartItems = document.getElementById('noOfCartItems');
    // let cartItem=JSON.parse(localStorage.getItem('cartItem'));
    noOfCartItems.innerHTML = `${cartItem.length}`

}
function applyCoupon() {
    let coupon = document.getElementById("coupon").value;

    let couponPercent = Number(coupon.slice(5));
    if (couponPercent == NaN || couponPercent > 100 || couponPercent < 0) {
        alert("invalid coupon!")
        return 0;
    }

    let couponName = document.getElementById("couponName");
    couponName.innerHTML = `${coupon} is applied`;

    let couponInPercent = document.getElementById("couponInPercent");
    couponInPercent.innerHTML = `${couponPercent}% is off`;

    let showDiscountedPrice = document.getElementById("showDiscountedPrice");
    let discountedPrice = total_main_price * (couponPercent / 100);
    showDiscountedPrice.innerHTML = `&#8377; ${total_main_price - discountedPrice}`;

    localStorage.setItem("total_discount_price", JSON.stringify([{ total_price: total_main_price, discount_price: discountedPrice }]))
}
showcartItems();