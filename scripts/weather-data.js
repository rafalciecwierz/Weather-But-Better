"use strict"

// Weather object description
function Weather(cityName, description, wind, clouds, pressure){
    this.cityName = cityName;
    this.description = description;
    this._temperature = '';
    this.wind = wind + ' m/s';
    this.clouds = clouds + '%';
    this.pressure = pressure + ' hpa';
};

Object.defineProperty(Weather.prototype, 'temperature', {
    get: function(){
        return this._temperature;
    },
    set: function(value){
        this._temperature = (value).toFixed(2) + '°С'
    }
});