"use strict";

var menu = document.querySelector('nav'),
    btn = document.querySelector('button'),
    searchButton = document.querySelector('.searchButton'),
    searchCity = document.querySelector('.inputSearch'),
    loadingText = document.querySelector('.load'),
    weatherBox = document.querySelector('.weather'),
    weatherFlag = document.querySelector('.flag'),
    weatherCity = weatherBox.firstElementChild,
    weatherDescription = document.querySelector('.weatherDescription'),
    weatherTemperature = document.querySelector('.weatherTemperature'),
    weatherWind = document.querySelector('.weatherWind'),
    weatherClouds = document.querySelector('.weatherClouds'),
    weatherPressure = document.querySelector('.weatherPressure');


    // Hamburger event listener
btn.addEventListener('click', function(e){
    btn.classList.toggle('is-active');
    menu.classList.toggle('active');
    menu.style.height = document.documentElement.scrollHeight+'px';
    e.preventDefault();
});


