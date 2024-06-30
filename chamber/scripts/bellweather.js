const apiKey = 'c0cb079a4e04faed4261f749a330f5eb';
const city = 'Bellville';
const units = 'imperial'; // Use 'metric' for Celsius

async function getWeatherData() {
    try {
        const currentWeatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`);
        const currentWeatherData = await currentWeatherResponse.json();
        console.log('Current weather data:', currentWeatherData);

        const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${apiKey}`);
        const forecastData = await forecastResponse.json();
        console.log('Forecast data:', forecastData);

        // Display current weather
        if (currentWeatherData.main) {
            document.getElementById('temperature').textContent = currentWeatherData.main.temp.toFixed(1);
            document.getElementById('weatherDescription').textContent = currentWeatherData.weather[0].description;
            document.getElementById('windSpeed').textContent = currentWeatherData.wind.speed.toFixed(1);

            const windChill = calculateWindChill(currentWeatherData.main.temp, currentWeatherData.wind.speed);
            document.getElementById('windChill').textContent = windChill + '°F';
        } else {
            console.error('Error: main data not found in currentWeatherData:', currentWeatherData);
        }

        // Display 3-day forecast
        const forecastContainer = document.getElementById('forecast');
        forecastContainer.innerHTML = '';

        const daysDisplayed = new Set();

        forecastData.list.forEach(forecast => {
            const date = new Date(forecast.dt * 1000);
            const day = date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });

            if (!daysDisplayed.has(day) && daysDisplayed.size < 3) {
                daysDisplayed.add(day);

                const temp = forecast.main.temp.toFixed(1);
                const desc = forecast.weather[0].description;

                const forecastItem = document.createElement('div');
                forecastItem.className = 'forecast-item';
                forecastItem.innerHTML = `<p>${day}</p><p>${temp}&#8457;</p><p>${desc}</p>`;
                forecastContainer.appendChild(forecastItem);
            }
        });
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function calculateWindChill(temp, wind) {
    return (35.74 + 0.6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16)).toFixed(1);
}

document.addEventListener('DOMContentLoaded', getWeatherData);