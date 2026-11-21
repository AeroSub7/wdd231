const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecast = document.querySelector('#forecast');
const currenturl = "https://api.openweathermap.org/data/2.5/weather?lat=43.61&lon=-116.39&units=imperial&lang=en&appid=eff501c5cd63f6dc6ee2c40335ba0b05";
const forecasturl = "https://api.openweathermap.org/data/2.5/forecast?lat=43.61&lon=-116.39&units=imperial&lang=en&cnt=24&appid=eff501c5cd63f6dc6ee2c40335ba0b05";

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            return data;
        }
        else {
            throw new Error(`request failed with status ${response.status}`);
        }
    } catch (error) {
        console.error(error);
    }
}

const currentData = await apiFetch(currenturl);
displayResults(currentData.weather[0], currentData.main);

const forecastData = await apiFetch(forecasturl);
displayForecast(forecastData);

function displayResults(weatherdata, maindata) {
    currentTemp.innerHTML = maindata.temp;
    let weatherIconurl = `https://openweathermap.org/img/wn/${weatherdata.icon}@2x.png`;

    weatherIcon.setAttribute("src", `${weatherIconurl}`);
    captionDesc.innerText = weatherdata.description;
    weatherIcon.setAttribute("alt", `${weatherdata.description} Icon`);
}

function displayForecast(data) {
    data.list.forEach(day => {
        let date = new Date(day.dt * 1000);
        let dayTemp = day.main.temp;
        let dayWeather = day.weather[0].description;
        let card = document.createElement("p");
        card.innerHTML = `${new Intl.DateTimeFormat('en-US').format(date)}: ${dayTemp}°F ${dayWeather}`;
        forecast.appendChild(card);

    });

}



