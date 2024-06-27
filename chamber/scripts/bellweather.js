// Select HTML elements in the document
const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const apiKey = 'c0cb079a4e04faed4261f749a330f5eb';
const lat = 29.9446; // Latitude for Bellville, Texas
const lon = -96.2575; // Longitude for Bellville, Texas
const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

// Async function to fetch the weather data
async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data); // For testing only
            return data;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// Function to display the results
function displayCurrentWeather(data) {
    const temp = data.main.temp.toFixed(0); // Format to zero decimal points
    const desc = data.weather[0].description.split(' ')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' '); 
    const icon = data.weather[0].icon; // Get the weather icon code

    currentTemp.textContent = temp;
    weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`; // Construct the icon URL
    weatherIcon.alt = desc;
    captionDesc.textContent = desc;
}

// Function to display the three-day forecast
function displayForecast(data) {
    const forecastContainer = document.querySelector('#forecast');
    forecastContainer.innerHTML = ''; // Clear existing content

    // Filter data to get forecasts at 12:00 PM for the next 3 days
    const filteredData = data.list.filter(item => {
        const date = new Date(item.dt_txt);
        const today = new Date();
        return date.getDate() > today.getDate(); // Adjust logic as per API response structure
    }).slice(0, 3);

    filteredData.forEach(forecast => {
        const date = new Date(forecast.dt_txt).toLocaleDateString(undefined, { weekday: 'long' });
        const temp = forecast.main.temp.toFixed(0);
        const desc = forecast.weather[0].description.split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        const icon = forecast.weather[0].icon;

        const forecastElement = document.createElement('div');
        forecastElement.classList.add('forecast-item');
        forecastElement.innerHTML = `
            <h4>${date}</h4>
            <img src="https://openweathermap.org/img/wn/${icon}.png" alt="${desc}">
            <p>${temp}&#8457;</p>
            <p>${desc}</p>
        `;

        forecastContainer.appendChild(forecastElement);
    });
}

// Fetch and display the weather data
async function displayWeather() {
    const currentWeatherData = await apiFetch(currentWeatherUrl);
    displayCurrentWeather(currentWeatherData);

    const forecastData = await apiFetch(forecastUrl);
    displayForecast(forecastData);
}

// Call the displayWeather function
displayWeather();
