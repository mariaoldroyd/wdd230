// Select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const apiKey = 'c0cb079a4e04faed4261f749a330f5eb';
const lat = 29.9446; // Latitude for Bellville, Texas
const lon = -96.2575; // Longitude for Bellville, Texas
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

// Async function to fetch the weather data
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // For testing only
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// Function to display the results
function displayResults(data) {
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

// Call the apiFetch function
apiFetch();
