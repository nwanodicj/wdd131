// Footer Year
document.getElementById('year').textContent = new Date().getFullYear();

// Last Modification
document.getElementById('last-modification').textContent = document.lastModified;

// Wind Chill Function
function calculateWindChill(tempC, windKmh) {
    if (tempC <= 10 && windKmh > 4.8) {
        return (13.12 + 0.6215*tempC - 11.37*Math.pow(windKmh,0.16) + 0.3965*tempC*Math.pow(windKmh,0.16)).toFixed(1);
    } else {
        return "N/A";
    }
}

// Weather Data (Static)
const weather = {
    temperature: 10,
    windSpeed: 5,
    condition: "Partly Cloudy",
    icon: "images/weather.svg"
};

// Insert Weather Section
const container = document.querySelector('.js-wind-chill-container');

const windChillValue = calculateWindChill(weather.temperature, weather.windSpeed);

container.innerHTML = `
    <div class="weather-container">
        <img src="${weather.icon}" alt="Weather icon" class="weather-icon">
        <div class="info">
            <p>Temperature: ${weather.temperature}°C</p>
            <p>Condition: ${weather.condition}</p>
            <p>Wind: ${weather.windSpeed} km/h</p>
            <p>Wind Chill: ${windChillValue}°C</p>
        </div>
    </div>
`;
