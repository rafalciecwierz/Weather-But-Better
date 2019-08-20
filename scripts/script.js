"use strict";

searchButton.addEventListener('click', searchWeather);
document.addEventListener('keypress', logKey);

function logKey(e) {
    if(e.keyCode === 13){
        searchWeather();
        linkButton.focus();
    }
    return false;
   
}




// Search function

function searchWeather(){
    loadingText.style.display = 'block';
    weatherBox.style.display = 'none';
    var cityName = searchCity.value;
    searchCity.value = '';
    if (cityName.trim().length == 0) {
        loadingText.style.display = 'none';
        return alert('Please enter a valid city name!'); 
    }
    var http = new XMLHttpRequest();
    var apiKey = 'a3f28815f37f1a3413b333f52c382e3f';
    var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&appid=' + apiKey;
    var method = 'GET';

    http.open(method,url);

    http.onreadystatechange = function(){
        if (http.readyState == XMLHttpRequest.DONE && http.status == 200 ){
            var data = JSON.parse(http.responseText);
            var weatherData = new Weather(cityName, data.weather[0].description, data.wind.speed, data.clouds.all, data.main.pressure, data.sys.country)
            weatherData.temperature = data.main.temp;      
            updateBackground(data.weather[0].id);
            updateWeather(weatherData);
        } else if (http.readyState == XMLHttpRequest.DONE && http.status != 200 ){
            updateBackground(0);
            alert('Something went wrong - please type a valid country or try again later');
            loadingText.style.display = 'none';
        }
    }

    http.send();
}

function updateWeather(weatherData){
    weatherCity.textContent = weatherData.cityName.charAt(0).toUpperCase() + weatherData.cityName.slice(1);
    if(weatherData.country.length>0) weatherFlag.src = "https://openweathermap.org/images/flags/" + weatherData.country.toLowerCase() +".png"
    weatherDescription.textContent = weatherData.description;
    weatherTemperature.textContent = 'Temperature: ' + weatherData.temperature;
    weatherWind.textContent = 'Wind: ' + weatherData.wind;
    weatherClouds.textContent = 'Clouds: ' + weatherData.clouds;
    weatherPressure.textContent = 'Air pressure: ' + weatherData.pressure;
    loadingText.style.display = 'none';
    weatherBox.style.display = 'block';
}

function updateBackground(weatherId){
    weatherBackground.classList.remove(weatherCondition);
    if(weatherId == 0){
        weatherCondition = 'weather-error';
        weatherBackground.classList.add(weatherCondition);
    } else if(weatherId<300) {
        weatherCondition = 'weather-thunder';
        weatherBackground.classList.add(weatherCondition);
    } else if (weatherId<400) {
        weatherCondition = 'weather-drizzle';
        weatherBackground.classList.add(weatherCondition);
    } else if (weatherId<600) {
        weatherCondition = 'weather-rain';
        weatherBackground.classList.add(weatherCondition);
    } else if (weatherId<700) {
        weatherCondition = 'weather-snow';
        weatherBackground.classList.add(weatherCondition);
    } else if (weatherId<800) {
        weatherCondition = 'weather-mist';
        weatherBackground.classList.add(weatherCondition);
    } else if (weatherId == 800) {
        weatherCondition = 'weather-clear';
        weatherBackground.classList.add(weatherCondition);
    } else if (weatherId>800) {
        weatherCondition = 'weather-clouds';
        weatherBackground.classList.add(weatherCondition);
    }else {
        weatherCondition = 'weather-error';
        weatherBackground.classList.add(weatherCondition);
    }
}