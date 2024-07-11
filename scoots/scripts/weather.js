// Close high temperature message
function closeMessage() {
    document.getElementById('high-temp-message').style.display = 'none';
}

// Fetch weather data
fetch('https://api.openweathermap.org/data/2.5/onecall?lat=20.422983&lon=-86.92234&units=imperial&appid=a16637a06e3819f0078e0bf9f7ff5b09')
    .then(response => response.json())
    .then(data => {
        const today = new Date().getDay();
        const currentWeather = data.current;
        const forecast = data.daily.find(day => new Date(day.dt * 1000).getDay() === (today + 1) % 7);

        document.getElementById('temperature').innerText = currentWeather.temp;
        document.getElementById('humidity').innerText = currentWeather.humidity;
        document.getElementById('weather-main').innerText = currentWeather.weather[0].main;
        document.getElementById('weather-description').innerText = currentWeather.weather[0].description;
        document.getElementById('weather-icon').src = `https://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`;

        document.getElementById('forecast-temp').innerText = forecast.temp.day;
        document.getElementById('high-temp').innerText = data.daily[0].temp.max;
    })
    .catch(error => console.error('Error fetching weather data:', error));
