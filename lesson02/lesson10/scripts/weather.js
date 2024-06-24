const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const apiKey = 'c0cb079a4e04faed4261f749a330f5eb'
const url = `https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=${apiKey}`;

// async function to fethc the weather data
async function apiFetch() {
    try{
        const response = await fetch (url);
        if (response.ok) {
            const data = await response.json();
            //testing only
            console.log(data); 
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

//function to display the results
function displayResults(data) {
    //format to zero decimal points
    const temp = data.main.temp.toFixed(0);
    const desc = data.weather[0].description.split(' ')
                    // capitalize each word
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' '); 
    const icon = data.weather[0].icon;
    
    currentTemp.textContent = temp;
    weatherIcon.src=`https://openweathermap.org/img/wn/${icon}@2x.png`;                    
    weatherIcon.alt = desc;
    captionDesc.textContent = desc;
}


// call the apiFetch function
apiFetch();



