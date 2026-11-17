const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&lang=en&appid=eff501c5cd63f6dc6ee2c40335ba0b05";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data.weather, data.main);
        }
        else {
            throw new Error(`request failed with status ${response.status}`);
        }
    } catch (error) {
        console.error(error);
    }
}

apiFetch();

function displayResults(weatherdata, maindata) {
    currentTemp.innerHTML = maindata.temp;
    let weatherIconurl = `https://openweathermap.org/img/wn/${weatherdata.icon}@2x.png`;
    weatherIcon.setAttribute("src", `${weatherIconurl}`);
    captionDesc.innerText = weatherdata.description;
    weatherIcon.setAttribute("alt", `${weatherdata.description} Icon`);
}