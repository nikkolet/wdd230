// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const humidity = document.querySelector('#humidity');
const windspeed = document.querySelector('#windspeed');
const windchill = document.querySelector('windchill');

const currentTemp1 = document.querySelector('#current-temp1');
const weatherIcon1 = document.querySelector('#weather-icon1');
const captionDesc1 = document.querySelector('#figcaption1');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=West Valley City&units=imperial&appid=f9588660b59034f500496199128ef328';

apiFetch(url);

async function apiFetch(apiURL) {
    try {
        const response = await fetch(apiURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // this is for testing the call
            // displayResults(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function calculateWindChill() {
    var temp = weatherData.main.temp.toFixed(1);
    var wSpeed = weatherData.wind[0];
    if ((temp <= 50) && (wSpeed > 3)) {

        var windChill = (35.74 + (0.6215 * temp)) - (35.75 * Math.pow(wSpeed, 0.16)) + (0.4275 * temp * Math.pow(wSpeed, 0.16));


        windChill = Math.round(windChill);
        document.getElementById("windChill").innerHTML = windChill + "°f";
    } else {
        document.getElementById("windChill").innerHTML = "N/A";
    }
}

// document.querySelector('#button').onclick = calculateWindChill;

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(1)}</strong>`;
    humidity.innerHTML = `<strong>${weatherData.main.humidity.toFixed(1)}</strong>`;
    windspeed.innerHTML = `<strong>${weatherData.wind.speed.toFixed(1)}</strong>`;
    windchill.innerHTML = `<strong>${calculateWindChill.toFixed(1)}</strong>`;


    currentTemp1.innerHTML = `<strong>${weatherData.main.temp.toFixed(1)}</strong>`;


    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.innerHTML = desc;

    weatherIcon1.setAttribute('src', iconsrc);
    weatherIcon1.setAttribute('alt', desc);
    captionDesc1.innerHTML = desc;
}