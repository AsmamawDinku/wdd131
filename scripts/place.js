// Footer information
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// Wind Chill Calculation
function calculateWindChill(temp, windSpeed) {
    return Math.round(35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16));
}

const temp = parseInt(document.getElementById('temp').textContent);
const windSpeed = parseInt(document.getElementById('wind-speed').textContent);
const windChillElement = document.getElementById('wind-chill');

if (temp <= 50 && windSpeed > 3) {
    windChillElement.textContent = calculateWindChill(temp, windSpeed);
} else {
    windChillElement.textContent = "N/A";
}