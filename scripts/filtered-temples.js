// ----------------------------
// TEMPLE DATA
// ----------------------------
const temples = [
  { year: 2005, templeName: "Aba Nigeria", location: "Aba, Nigeria", dedicated: "2005, August, 7", area: 11500, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg" },
  { year: 1888, templeName: "Manti Utah", location: "Manti, Utah, United States", dedicated: "1888, May, 21", area: 74792, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg" },
  { year: 2015, templeName: "Payson Utah", location: "Payson, Utah, United States", dedicated: "2015, June, 7", area: 96630, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg" },
  { year: 2020, templeName: "Yigo Guam", location: "Yigo, Guam", dedicated: "2020, May, 2", area: 6861, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg" },
  { year: 1974, templeName: "Washington D.C.", location: "Kensington, Maryland, United States", dedicated: "1974, November, 19", area: 156558, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg" },
  { year: 1986, templeName: "Lima Perú", location: "Lima, Perú", dedicated: "1986, January, 10", area: 9600, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg" },
  { year: 1983, templeName: "Mexico City Mexico", location: "Mexico City, Mexico", dedicated: "1983, December, 2", area: 116642, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg" }
];

// ----------------------------
// RENDER FUNCTION
// ----------------------------
function displayTemples(list) {
  const container = document.querySelector(".main-album-container");
  container.innerHTML = "";

  list.forEach((temple) => {
    container.innerHTML += `
      <div class="album-container">
        <figure>
          <h3>${temple.templeName}</h3>
          <p><strong>Location:</strong> ${temple.location}</p>
          <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
          <p><strong>Area:</strong> ${temple.area} sq ft</p>
          <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        </figure>
      </div>
    `;
  });
}

// Load all temples initially
displayTemples(temples);

// ----------------------------
// FILTER FUNCTIONS
// ----------------------------
function filterOld() {
  displayTemples(temples.filter(t => t.year < 1900));
}

function filterNew() {
  displayTemples(temples.filter(t => t.year >= 2000));
}

function filterLarge() {
  displayTemples(temples.filter(t => t.area > 90000));
}

function filterSmall() {
  displayTemples(temples.filter(t => t.area < 10000));
}

function showAll() {
  displayTemples(temples);
}

// ----------------------------
// EVENT LISTENERS
// ----------------------------
document.querySelector("#home").addEventListener("click", showAll);
document.querySelector("#old").addEventListener("click", filterOld);
document.querySelector("#new").addEventListener("click", filterNew);
document.querySelector("#large").addEventListener("click", filterLarge);
document.querySelector("#small").addEventListener("click", filterSmall);

// ----------------------------
// FOOTER DATES
// ----------------------------
document.querySelector("#current-year").textContent = new Date().getFullYear();
document.querySelector("#last-modification").textContent = `Last Modification: ${document.lastModified}`;

// ----------------------------
// HAMBURGER MENU
// ----------------------------
function toggleMenu() {
  const nav = document.querySelector(".nav-bar-container");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}
