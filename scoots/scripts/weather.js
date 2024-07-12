// Close high temperature message
function closeMessage() {
    document.getElementById('high-temp-message').style.display = 'none';
}


// API key
const apiKey = 'a16637a06e3819f0078e0bf9f7ff5b09'; 

// Function to fetch current weather data
function fetchCurrentWeather() {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=Cozumel&units=imperial&appid=${apiKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        });
}

// Function to fetch forecast data
function fetchForecastData() {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Cozumel&units=imperial&appid=${apiKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        });
}

document.addEventListener('DOMContentLoaded', () => {
    Promise.all([fetchCurrentWeather(), fetchForecastData()])
        .then(([currentData, forecastData]) => {
            console.log('Current weather data:', currentData);
            console.log('Forecast data:', forecastData);

            // Display current weather
            const currentWeather = currentData.weather[0];
            const temperature = Math.round(currentData.main.temp);
            const humidity = currentData.main.humidity;
            const main = currentWeather.main;
            const description = currentWeather.description;
            const icon = currentWeather.icon;

            document.getElementById('temperature').innerText = temperature;
            document.getElementById('humidity').innerText = humidity;
            document.getElementById('weather-main').innerText = main;
            document.getElementById('weather-description').innerText = description;
            document.getElementById('weather-icon').src = `https://openweathermap.org/img/w/${icon}.png`;

            // Find today's high temperature and tomorrow's forecast at 3:00 PM
            const today = new Date();
            const tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);
            const tomorrowDayString = tomorrow.toISOString().split('T')[0];

            let todayHighTemp = -Infinity;
            let tomorrow3pmForecast = null;

            forecastData.list.forEach(entry => {
                const entryDate = new Date(entry.dt * 1000);
                const entryDayString = entryDate.toISOString().split('T')[0];

                // Check for today's high temperature
                if (entryDayString === today.toISOString().split('T')[0]) {
                    if (entry.main.temp_max > todayHighTemp) {
                        todayHighTemp = entry.main.temp_max;
                    }
                }

                // Check for tomorrow's forecast at 3:00 PM
                if (entryDayString === tomorrowDayString && entryDate.getHours() === 15) {
                    tomorrow3pmForecast = entry.main.temp;
                }
            });

            // Display today's high temperature
            if (todayHighTemp !== -Infinity) {
                document.getElementById('high-temp').innerText = Math.round(todayHighTemp);
            }

            // Display tomorrow's forecast at 3:00 PM
            if (tomorrow3pmForecast !== null) {
                document.getElementById('forecast-temp').innerText = Math.round(tomorrow3pmForecast);
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Failed to fetch weather data. Please check the console for more details.');
        });
});


    