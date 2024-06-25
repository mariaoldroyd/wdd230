document.addEventListener("DOMContentLoaded", () => {
    const tempElement = document.getElementById("temperature");
    const windSpeedElement = document.getElementById("windSpeed");
    const windChillElement = document.getElementById("windChill");
  
    const temperature = parseFloat(tempElement.textContent);
    const windSpeed = parseFloat(windSpeedElement.textContent);
  
    if (temperature <= 50 && windSpeed > 3) {
      const windChill = calculateWindChill(temperature, windSpeed);
      windChillElement.textContent = windChill.toFixed(2) + "°F";
    } else {
      windChillElement.textContent = "N/A";
    }
  });
  
  function calculateWindChill(temp, speed) {
    return (
      35.74 +
      0.6215 * temp -
      35.75 * Math.pow(speed, 0.16) +
      0.4275 * temp * Math.pow(speed, 0.16)
    );
  }
   //  current weather
   const apiKey = 'YOUR_API_KEY';
const city = 'Bellville';
const units = 'imperial'; // Use 'metric' for Celsius

async function getWeatherData() {
  try {
    const currentWeatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`);
    const currentWeatherData = await currentWeatherResponse.json();

    const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${apiKey}`);
    const forecastData = await forecastResponse.json();

    // Display current weather
    document.getElementById('temperature').textContent = currentWeatherData.main.temp.toFixed(1);
    document.getElementById('weatherDescription').textContent = currentWeatherData.weather[0].description;

    // Display 3-day forecast
    const forecastContainer = document.getElementById('forecast');
    forecastContainer.innerHTML = '';

    for (let i = 0; i < forecastData.list.length; i += 8) {
      const forecast = forecastData.list[i];
      const date = new Date(forecast.dt * 1000).toLocaleDateString('en-US', {
        weekday: 'short', month: 'short', day: 'numeric'
      });
      const temp = forecast.main.temp.toFixed(1);
      const desc = forecast.weather[0].description;

      const forecastItem = document.createElement('div');
      forecastItem.className = 'forecast-item';
      forecastItem.innerHTML = `<p>${date}</p><p>${temp}&#8457;</p><p>${desc}</p>`;
      forecastContainer.appendChild(forecastItem);
    }
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

getWeatherData();
