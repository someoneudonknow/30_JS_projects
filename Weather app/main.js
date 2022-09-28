const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const search = $('.search');
const city = $('.city');
const country = $('.country');
const time = $('.time');
const value = $('.temperature .value');
const shortDesc = $('.short-desc');
const visibility = $('.visibility span');
const windSpeed = $('.wind-speed span');
const sunnyPercents = $('.sunny-percents span');

changeWeatherUI('Ha noi');

async function changeWeatherUI(location) {
    let WEATHER_HOST = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=acf53d3a2d1cca7c1a64a59b1f009352`;

    try {
        let data = await fetch(WEATHER_HOST) .then((response) => response.json());
        let date = new Date().toLocaleString();
        if(data.cod !== 200){
            console.error('Cant find city or country');
        }else{
            let temp = Math.floor((Number(data.main.temp) - 273.15));
            time.textContent = date;
            city.textContent = data.name;
            country.textContent = data.sys.country;
            shortDesc.textContent = data?.weather[0]?.main;
            visibility.textContent = data.visibility + ' (m)';
            windSpeed.textContent =  data.wind.speed + ' (m/s)';
            sunnyPercents.textContent = data.main.humidity + ' (%)';
            value.textContent = temp  + '';

            if(temp > 18){
                $('body').setAttribute('class','hot');
            }else{
                $('body').setAttribute('class','cold');
            }
        }
    } catch (err) {
        console.error(err);
    }
}

search.onkeydown = function (e) {
    if(e.keyCode === 13){
        let location = this.value.trim();
        changeWeatherUI(location);
        this.value = null;
    }
}


