// Set current year
const currentYear = document.querySelector('#current-year');
currentYear.textContent = new Date().getFullYear();

// Set last modified date
const lastModified = document.querySelector('#last-modification');
lastModified.textContent = document.lastModified;

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-bar-container');

hamburger.addEventListener('click', () => {
  if (nav.style.display === "flex") {
    nav.style.display = "none";
    hamburger.textContent = "\u2630"; // Hamburger icon
  } else {
    nav.style.display = "flex";
    hamburger.textContent = "✖"; // X icon
  }
});
