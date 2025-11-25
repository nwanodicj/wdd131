// Footer Year and last modified (human-friendly)
document.addEventListener("DOMContentLoaded", () => {
  // year
  const yearEl = document.querySelector("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // last modified: format into readable local string
  const lastEl = document.querySelector("#last-modification");
  if (lastEl) {
    const raw = document.lastModified;
    if (raw) {
      const d = new Date(raw);
      // Use Intl for a nicely formatted date/time
      lastEl.textContent = new Intl.DateTimeFormat("en-GB", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }).format(d);
    } else {
      lastEl.textContent = "Unknown";
    }
  }

  /* -----------------------
     Weather (static values)
     - temp in °C and wind in km/h
     - apply wind-chill only when valid:
       Metric: temp <= 10°C and wind > 4.8 km/h
     ----------------------- */
  const temperature = 8; // change to match displayed content
  const windSpeed = 12;  // km/h

  // update basic fields
  const tempEl = document.querySelector("#temp");
  const windEl = document.querySelector("#wind");
  const wcEl = document.querySelector("#windchill");

  if (tempEl) tempEl.textContent = temperature;
  if (windEl) windEl.textContent = windSpeed;

  // wind-chill calculation function (°C) — returns a number or string
  function calculateWindChill(tempC, windKmh) {
    // Environment Canada formula for °C and km/h
    return (
      13.12 +
      0.6215 * tempC -
      11.37 * Math.pow(windKmh, 0.16) +
      0.3965 * tempC * Math.pow(windKmh, 0.16)
    ).toFixed(1);
  }

  // decide whether to calculate
  let result = "N/A";
  if (temperature <= 10 && windSpeed > 4.8) {
    result = calculateWindChill(temperature, windSpeed) + " °C";
  }

  if (wcEl) wcEl.textContent = result;
});
