// ===== Footer Info =====

// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Set last modification date
document.getElementById('last-modification').textContent = document.lastModified;


// ===== Wind Chill Calculation =====
function calculateWindChill(tempC, windKmh) {
    // Only calculate if temp <= 10°C and wind > 4.8 km/h
    if (tempC <= 10 && windKmh > 4.8) {
        // Wind chill formula (metric)
        return (13.12 + 0.6215*tempC - 11.37*Math.pow(windKmh, 0.16) + 0.3965*tempC*Math.pow(windKmh, 0.16)).toFixed(1);
    } else {
        return "N/A";
    }
}


// ===== Weather Data (Static for now) =====
const weather = {
    temperature: 10,      // °C
    windSpeed: 5,         // km/h
    condition: "Partly Cloudy"
};


// ===== Insert Weather Section Dynamically with Inline SVG =====
const container = document.querySelector('.js-wind-chill-container');

const windChillValue = calculateWindChill(weather.temperature, weather.windSpeed);

container.innerHTML = `
  <div class="weather-container">
      <!-- Inline SVG for audit compliance -->
      <svg class="weather-icon" width="50" height="50" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-labelledby="weatherTitle" role="img">
          <title id="weatherTitle">Partly Cloudy</title>
          <!-- Sun -->
          <circle cx="32" cy="32" r="16" fill="#FFD700"/>
          <!-- Cloud -->
          <ellipse cx="32" cy="40" rx="20" ry="10" fill="#B0C4DE"/>
      </svg>

      <div class="info">
          <p>Temperature: ${weather.temperature}°C</p>
          <p>Condition: ${weather.condition}</p>
          <p>Wind: ${weather.windSpeed} km/h</p>
          <p>Wind Chill: ${windChillValue}°C</p>
      </div>
  </div>
`;
