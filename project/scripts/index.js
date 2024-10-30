const products = [{
    id: '3a6t-a45jd9-7n5j',

    image: 'images/computer-chair.jpg',

    name: 'Computer Chair',

    rating: {
        stars: 'images/Rating-Star-PNG-HD.png',

        count: 95,
    },

    priceCent: 10000,
}, {
    id: '8j57dsh-bg8n39a-8tn1',

    image: 'images/AC-infinity-advance-grow.jpg',

    name: 'AC Infinity Advance Grow',

    rating: {
        stars: 'images/Rating-Star-PNG-HD.png',

        count: 95,
    },

    priceCent: 50000,
}, {
    id: 'j8le-su5k-m8c5d9',

    image: 'images/Fuji_Gaming.jpg',

    name: 'Fuji Gaming',

    rating: {
        stars: 'images/rating star emoji.jpg',

        count: 95,
    },

    priceCent: 20000,
}, {

    id: 'g3ba6t-a4jd9-kl5j',

    image: 'images/gaming-accessaries.jpg',

    name: 'Gaming Accessaries',

    rating: {
        stars: 'images/Rating-Star-PNG-HD.png',

        count: 95,
    },

    priceCent: 5000,
}, {
    id: 'j5h4g-r9ek59-fj498nw7834',

    image: 'images/hog-dog-steamer-machine.jpg',

    name: 'Hog Dog Streamer Machine',

    rating: {
        stars: 'images/Rating-Star-PNG-HD.png',

        count: 95,
    },

    priceCent: 15000,
}, {

    id: 'kfu4-i4nf-58sjf4',

    image: 'images/hover succer ball.jpg',

    name: 'Hover Succer Ball',

    rating: {
        stars: 'images/Rating-Star-PNG-HD.png',

        count: 95,
    },

    priceCent: 25000,
},  {
    
    id: 'hf875-j4h63jk-sk58d',

    image: 'images/keyboard.jpg',

    name: 'Keyboard',

    rating: {
        stars: 'images/Rating-Star-PNG-HD.png',

        count: 95,
    },

    priceCent: 2500,
}, {

    id: 'j59he-gkrcmi-sfldn',

    image: 'images/kids-piggy-bank-for-girls.jpg',

    name: 'Kids Piggy For Girls',

    rating: {
        stars: 'images/Rating-Star-PNG-HD.png',

        count: 95,
    },

    priceCent: 10000,
}, {

    id: 'ngi8-dJH4-s9jns',

    image: 'images/lenovo-laptop.jpg',

    name: 'Lenovo Laptop',

    rating: {
        stars: 'images/Rating-Star-PNG-HD.png',

        count: 95,
    },

    priceCent: 70000,
},{

    id: 'ngi8-dJH4-s9jns',

    image: 'images/mens-gray-sport-athletic-cotton.jpg',

    name: 'Men Gray Sport-athletic Cotton',

    rating: {
        stars: 'images/Rating-Star-PNG-HD.png',

        count: 95,
    },

    priceCent: 500,
},{

    id: 'ngi8-dJH4-s9jns',

    image: 'images/orange basketball.jpg',

    name: 'Basketball',

    rating: {
        stars: 'images/Rating-Star-PNG-HD.png',

        count: 95,
    },

    priceCent: 3000,
},{

    id: 'ngi8-dJH4-s9jns',

    image: 'images/smart watch for men wemen.jpg',

    name: 'Smart watch for Men & Women',

    rating: {
        stars: 'images/Rating-Star-PNG-HD.png',

        count: 95,
    },

    priceCent: 10000,
},];
//............HTML..............
let productsHTML = '';

//............Generated HTML, this is to display the products on the screen dynamically........
products.forEach((product) => {
    productsHTML += `
    <div  class="product-container">
            <div class="product-image-container">
                <img src="${product.image}" class="product-img1">
            </div>
            <div class="product-name">
                ${product.name}
            </div>
            <div class="product-rating-star">
                <img src="${product.rating.stars}" class="stars-rating">
                <div class="product-rating-number">
                    ${product.rating.count}
                </div>
            </div>
            <div class="product-price">
                $${(product.priceCent / 100).toFixed(2)}
            </div>
            <div class="quantity">
                <div>Quantity</div>
                <select>
                    <option required disabled selected>select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>
            <div class="button-div">
                <button data-product-id="${product.id}" class="button-btn js-add-to-cart">Add to Cart</button>
            </div>
        </div>`
});

document.querySelector('.js-product-grid').innerHTML = productsHTML;

//................Cart Array.........
const cart = [{
    productId: '3a6t-a45jd9-7n5j',
    quantity: 0,
}, {
    productId: 'j59he-gkrcmi-sfldn',
    quantity: 0,
}];
function addToCart(productId) {
    //   the code below is to increase the quantity of one product   
    let matchingItem = '';

    cart.forEach((cartItem) => {
        if (productId === cartItem.productName) {
            matchingItem = cartItem;
        }
    });

    if (matchingItem) {
        matchingItem.quantity += 1;
    }else{
        cart.push({
            productId: productId,
            quantity: 1,
        });
    }
};



function updateCartQuantity() {
    //The code below shows the total number of products in the cart
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });
    document.querySelector('.js-cart-quantity').
innerHTML = cartQuantity;
};
// Below here we make the button interactive by using EventListener
document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;

            console.log(productId)
            addToCart(productId)
            updateCartQuantity()
            
        });
    });


// page datetime last modification
let lastModified = document.querySelector('#last-modification');

lastModified.innerHTML = "";

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



  function myFunction() {
	const x = document.querySelector(".nav-bar-container");
	if (x.style.display === "block") {
	  x.style.display = "none";
	} else {
	  x.style.display = "block";
	}
  }