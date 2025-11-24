// Temple Data
const temples = [
  { year: 2005, templeName: "Aba Nigeria", location: "Aba, Nigeria", dedicated: "2005, August, 7", area: 11500, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg" },
  { year: 1888, templeName: "Manti Utah", location: "Manti, Utah, United States", dedicated: "1888, May, 21", area: 74792, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg" },
  { year: 2015, templeName: "Payson Utah", location: "Payson, Utah, United States", dedicated: "2015, June, 7", area: 96630, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg" },
  { year: 2020, templeName: "Yigo Guam", location: "Yigo, Guam", dedicated: "2020, May, 2", area: 6861, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg" },
  { year: 1974, templeName: "Washington D.C.", location: "Kensington, Maryland, United States", dedicated: "1974, November, 19", area: 156558, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg" },
  { year: 1986, templeName: "Lima Perú", location: "Lima, Perú", dedicated: "1986, January, 10", area: 9600, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg" },
  { year: 1983, templeName: "Mexico City Mexico", location: "Mexico City, Mexico", dedicated: "1983, December, 2", area: 116642, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg" },
  { year: 1983, templeName: "Atlanta Georgia", location: "Sandy Springs, Georgia", dedicated: "June 1, 1983", area: 30328, imageUrl: "https://lh3.googleusercontent.com/p/AF1QipOqXLmKXW9heCgAAM43Jdqd6Fvc_DK-UTB0wqpx=s680-w680-h510" },
  { year: 2004, templeName: "Accra Ghana", location: "Accra Ghana", dedicated: "11 January 2004", area: 17500, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg" },
  { year: 1985, templeName: "South Africa", location: "Parktown, Johannesburg", dedicated: "24 August 1985", area: 19184, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-43596-thumb.jpg" },
  { year: 2000, templeName: "Melbourne Australia", location: "76 Cathies, Wantirna South", dedicated: "June 16, 2000", area: 10700, imageUrl: "https://churchofjesuschrist.org/imgs/48e36732ca023c6cbe859be980617e4ca2cebe2a/full/320%2C/0/default" },
  { year: 2001, templeName: "Perth Australia", location: "163 Wordsworth, Yokine, Australia", dedicated: "May 20, 2001", area: 10700, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/perth-australia-temple/perth-australia-temple-34994-main.jpg" }
];

// Render function
function renderTemples(list) {
  const container = document.querySelector(".main-album-container");
  container.innerHTML = "";
  list.forEach(temple => {
    container.innerHTML += `
      <div class="album-container">
        <figure>
          <h3>${temple.templeName}</h3>
          <h5>TempleName: ${temple.templeName}</h5>
          <h5>Location: ${temple.location}</h5>
          <h5>Dedicated: ${temple.dedicated}</h5>
          <h5>Area: ${temple.area} sq ft</h5>
          <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy">
        </figure>
      </div>
    `;
  });
}

// Filter functions
const displayAllTemples = () => renderTemples(temples);
const displayOldTemples = () => renderTemples(temples.filter(t => t.year < 1900));
const displayNewTemples = () => renderTemples(temples.filter(t => t.year > 2000));
const displayLargeTemples = () => renderTemples(temples.filter(t => t.area > 90000));
const displaySmallTemples = () => renderTemples(temples.filter(t => t.area < 10000));

// Event listeners
document.querySelector("#home").addEventListener("click", displayAllTemples);
document.querySelector("#old").addEventListener("click", displayOldTemples);
document.querySelector("#new").addEventListener("click", displayNewTemples);
document.querySelector("#large").addEventListener("click", displayLargeTemples);
document.querySelector("#small").addEventListener("click", displaySmallTemples);

// Last modified
document.querySelector("#last-modification").textContent = `Last Modification: ${document.lastModified}`;

// Hamburger toggle
document.querySelector("#hamburger").addEventListener("click", () => {
  const nav = document.querySelector(".nav-bar-container");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});

// Initial render
displayAllTemples();
