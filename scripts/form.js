const product = [

  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

//..........Inner HTML Here.........
let productHTML = "";
//...........Looping on the Products using ".forEach" function........
product.forEach((item) => {

//..........Generate the HTML..........
  productHTML  += `
  <div>
    <option id=${item.id} name=${item.name} disabled selected></option>
    <option value=${item.id}>${item.name}</option>
  <div>
  `
});

const outPut = document.querySelector('#productName').innerHTML = productHTML


//.........Placeholder Here...........
const inputF = document.querySelector('#productName');

inputF.addEventListener('focus', function() {
  inputF.placeholder = "Focused - Select a Product...";
});

inputF.addEventListener('blur', function() {
  inputF.placeholder = "Default Placeholder";
});

//..........Hamburger Here..............

function myFunction() {
const x = document.querySelector(".nav-bar-container");
if (x.style.display === "block") {
  x.style.display = "none";
} else {
  x.style.display = "block";
}
}

//..............Local Storage........... 
clickCounter();

function clickCounter() {
  if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount)+1;
  } else {
    localStorage.clickcount = 1;
  }
  
  let storageEll = document.querySelector(".js-cart-quantity").innerHTML = localStorage.clickcount;

  console.log(storageEll)
}

// page datetime last modification
let lastModified = document.querySelector('#last-modification');

lastModified.innerHTML = ""


// returns: Tuesday, December 16, 2017 11:09:42
let oLastModif = new Date(document.lastModified);
let nLastModif = Date.parse(document.lastModified);

lastModified.innerHTML = `<span class="highlight">${new Intl.DateTimeFormat(
"en-US",
{
  nLastModif: "full",
}
).format(nLastModif)
}`;

lastModified.innerHTML = `Last Modification: ${document.lastModified}`;

//..............Cart Here................

//const cart = [{
//
//}]
//cart.push(product);
//
//function addToCart(name) {
//  //   the code below is to increase the quantity of one product   
//  let matchingItem = '';
//
//  cart.forEach((cartItem) => {
//      if (name === cartItem.name) {
//          matchingItem = cartItem;
//      }
//
//      console.log(matchingItem)
//  });
//
//  if (matchingItem) {
//    matchingItem.quantity += 1;
//}else{
//    cart.push({
//        name: name,
//        quantity: 1,
//    });
//}
//}
//
//
//function updateproductReview() {
//  //The code below shows the total number of products in the cart
//  let productReview = 0;
//  product.forEach((cartItem) => {
//    productReview += cartItem.quantity
//  });
//  const productsReview = document.querySelector('.js-cart-quantity')
//productsReview.innerHTML = productReview
//};
//
//// Below here we make the button interactive by using EventListener
//document.querySelectorAll('.js-add-to-cart')
//  .forEach((button) => {
//      button.addEventListener('click', () => {
//        "hello world"
//          const name = button.dataset.productId;
//          addToCart(name)
//          updateproductReview()
//          
//      });
//  });
