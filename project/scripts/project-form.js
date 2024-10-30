//..........Here is an array where products are stored..........

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
  
  //..........Inner HTML Here.........
  let productsHTML = "";
  //...........Looping on the Products using ".forEach" function........
  products.forEach((product) => {
  
  //..........Generate the HTML..........
      productsHTML  += `
      <div>
        <option id=${product.id} name=${product.name} disabled selected></option>
        <option value=${product.id}>${product.name}</option>
      <div>
      `
  });
  
  const outPut = document.querySelector('#productName').innerHTML = productsHTML
  
  console.log(outPut)
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
      let localstorage = document.querySelector(".js-cart-quantity").innerHTML = localStorage.clickcount;
      console.log(localstorage)
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