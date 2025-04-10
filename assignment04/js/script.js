// Student information 
const studentId = "1263736";
const studentName = "Alex Walker";

// Wait for the DOM to fully load.
document.addEventListener("DOMContentLoaded", () => {
  // Insert the student information into the designated p tag.
  const studentInfoElement = document.getElementById("student-info");
  studentInfoElement.textContent = `Student ID: ${studentId}, Name: ${studentName}`;

  // Fetch weather data from the API.
  fetchWeatherData();
});

// Fetch weather data from OpenWeatherMap and display it.
function fetchWeatherData() {
  const apiKey = "928f9debac31dd1a0ce57190fb1a4860";
  const city = "Orillia";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=44.60&lon=79.41&appid=928f9debac31dd1a0ce57190fb1a4860";
`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => displayWeatherData(data))
    .catch(error => {
      console.error("Error fetching weather data:", error);
      document.getElementById("weather-output").innerHTML =
        "<p>Error fetching weather data.</p>";
    });
}


// Display the weather data in the #weather-output div.

function displayWeatherData(data) {
  const outputDiv = document.getElementById("weather-output");
  if (data.cod === 200) {
    const weatherHTML = `
      <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
      <p><strong>Weather:</strong> ${data.weather[0].description}</p>
      <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
    `;
    outputDiv.innerHTML = weatherHTML;
  } else {
    outputDiv.innerHTML = `<p>Unable to fetch weather data. Error: ${data.message}</p>`;
  }
}
