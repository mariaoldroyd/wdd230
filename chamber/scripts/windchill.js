document.addEventListener('DOMContentLoaded', function () {
  var weatherInfo = document.getElementById('weather-info');
  var temperature = 25; // Example temperature in Celsius
  var windSpeed = 15; // Example wind speed in km/h
  var windChill = calculateWindChill(temperature, windSpeed);

  weatherInfo.innerHTML = 'Temperature: ' + temperature + '°C<br>Wind Speed: ' + windSpeed + ' km/h<br>Wind Chill: ' + windChill + '°C';

  function calculateWindChill(temp, wind) {
      return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(2);
  }
});
   //  current weather
   const apiKey = 'c0cb079a4e04faed4261f749a330f5eb';
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

