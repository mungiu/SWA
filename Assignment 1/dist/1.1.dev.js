"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function WeatherEvent(place) {
  var event = {
    time: new Date().toLocaleDateString(),
    place: place
  };

  event.getTime = function () {
    return event.time;
  };

  event.getPlace = function () {
    return event.place;
  };

  event.setPlace = function (newPlace) {
    event.place = newPlace;
  };

  event.setTime = function (newTime) {
    event.time = newTime;
  };

  function toString() {
    return "Place: ".concat(getPlace(), ", Time - ").concat(getTime());
  }

  return event;
}

function dataType(unit, type) {
  var dataType = {
    unit: unit,
    type: type
  };

  dataType.getUnit = function () {
    return dataType.unit;
  };

  dataType.getType = function () {
    return dataType.type;
  };

  dataType.setType = function (newType) {
    dataType.type = newType;
  };

  dataType.setUnit = function (newUnit) {
    dataType.type = newUnit;
  };

  return dataType;
}

function WeatherData(dataType, event, number, direction) {
  var weatherData = {
    number: number,
    direction: direction
  };

  function getDataType() {
    return weatherData.dataType;
  }

  function getEvent() {
    return weatherData.event;
  }

  function getNumber() {
    return weatherData.number;
  }

  function getDirection() {
    return weatherData.direction;
  } // ASSIGNS EVERYTHING FROM INSIDE THE PASSED IN OBJECTS TO THE LEFT MOST PARAMETER


  Object.assign(weatherData, dataType, event);
  return _objectSpread({}, weatherData, {
    getDataType: getDataType,
    getEvent: getEvent,
    getNumber: getNumber,
    getDirection: getDirection
  });
}

var dT = dataType('mm', 'international');
var wE = WeatherEvent('Horsens');
var wD1 = WeatherData(dT, wE, 1, 'NW');
console.log('test dataType & WeatherEvent DONE');
console.log(); // console.log(wD1);

console.log(wD1.getTime());
console.log(wD1.getPlace());
console.log(wD1.getType());
console.log(wD1.getUnit());
console.log(wD1.number);
console.log(wD1.direction);
console.log('test WeatherData DONE');
console.log();

function Temperature(weatherData) {
  // (0°C × 9/5) + 32 = 32°F
  function convertToF() {
    if (weatherData.type == 'international') {
      weatherData.number = weatherData.number * (9 / 5) + 32;
      weatherData.unit = 'fahrenheit';
      weatherData.type = 'us';
    }

    ;
  }

  ; // (32°F − 32) × 5/9 = 0°C

  function convertToC() {
    if (weatherData.type == 'us') {
      weatherData.number = (weatherData.number - 32) * (5 / 9);
      weatherData.unit = 'celsius';
      weatherData.type = 'international';
    }

    ;
  }

  ;
  return {
    convertToF: convertToF,
    convertToC: convertToC
  };
}

function Precipitation(weatherData) {
  function precipitationType() {
    return weatherData.dataType;
  }

  function convertToInches() {
    if (weatherData.type == 'international') {
      weatherData.number = weatherData.number / 25.4;
      weatherData.unit = 'inches';
      weatherData.type = 'us';
    }
  }

  ;

  function convertToMM() {
    if (weatherData.type == 'us') {
      weatherData.number = weatherData.number * 0.0393701;
      weatherData.unit = 'mm';
      weatherData.type = 'international';
    }
  }

  ;
  return {
    convertToInches: convertToInches,
    convertToMM: convertToMM
  };
}

function Wind(weatherData) {
  function getDirection() {
    return weatherData.direction;
  }

  ;

  function convertToMPH() {
    if (weatherData.type == 'international') {
      weatherData.number = weatherData.number * 0.44704;
      weatherData.unit = 'mph';
      weatherData.type = 'us';
    }
  }

  ;

  function convertToMS() {
    if (weatherData.type == 'us') {
      weatherData.number = weatherData.number / 2.23694;
      weatherData.unit = 'ms';
      weatherData.type = 'international';
    }
  }

  ;
  return {
    getDirection: getDirection,
    convertToMPH: convertToMPH,
    convertToMS: convertToMS
  };
}

function CloudCoverage(weatherData) {
  function coverageType() {
    return weatherData.unit;
  }

  return {
    coverageType: coverageType
  };
}

function TemperatureData(weatherData) {
  var temperatureData = {};
  Object.assign(temperatureData, weatherData);
  return _objectSpread({}, temperatureData, {}, Temperature(weatherData));
}

var wD2 = new WeatherData(dT, wE, 1);
var wD_TD = new TemperatureData(wD2);
console.log(wD_TD.getType());
console.log(wD_TD.getPlace());
console.log(wD_TD.number);
console.log('test WeatherData DONE');
console.log();

function PrecipitationData(weatherData) {
  var precipitationData = {};
  Object.assign(precipitationData, weatherData);
  return _objectSpread({}, precipitationData, {}, Precipitation(weatherData));
}

function WindData(weatherData) {
  var windData = {};
  Object.assign(windData, weatherData);
  return _objectSpread({}, windData, {}, Wind(weatherData));
}

function CloudCoverageData(weatherData) {
  var cloudCoverage = {};
  Object.assign(cloudCoverage, weatherData);
  return _objectSpread({}, cloudCoverage, {}, CloudCoverage(weatherData));
}

function WeatherHistory(currentType, currentPlace, weatherDataArr) {
  var weatherHistory = {
    weatherDataArr: weatherDataArr,
    currentPlace: currentPlace,
    currentType: currentType
  };

  weatherHistory.getCurrentPlace = function () {
    return weatherHistory.currentPlace;
  };

  weatherHistory.setCurrentPlace = function (newPlace) {
    //helper method 1
    function changePlace(weatherData) {
      weatherData.setPlace(newPlace);
    }

    weatherHistory.weatherDataArr.forEach(changePlace);
    weatherHistory.currentPlace = newPlace;
  };

  weatherHistory.getCurrentType = function () {
    return weatherHistory.currentType;
  };

  weatherHistory.setCurrentType = function (newType) {
    //helper method 1
    function convertToUS(weatherData) {
      if (weatherData.getType() == 'temperature') weatherData.convertToF();else if (weatherData.getType() == 'precipitation') weatherData.convertToInches();else if (weatherData.getType() == 'wind') weatherData.convertToMPH();
    } //helper method 2


    function convertToInternational(weatherData) {
      if (weatherData.getType() == 'temperature') weatherData.convertToC();else if (weatherData.getType() == 'precipitation') weatherData.convertToMM();else if (weatherData.getType() == 'wind') weatherData.convertToMS();
    } // execution


    if (weatherHistory.currentType == 'us' && newType == 'international') {
      weatherHistory.weatherDataArr.forEach(convertToInternational);
      weatherHistory.currentType = 'international';
    } else if (weatherHistory.currentType == 'international' && newType == 'us') {
      weatherHistory.weatherDataArr.forEach(convertToUS);
      weatherHistory.currentType = 'us';
    }
  }; // function setCurrentPeriod()
  // function clearCurrentPeriod()
  // function convertToUsUnits()
  // function convertToInternationalUnits()


  weatherHistory.addWeatherData = function (weatherData) {
    var _weatherHistory$weath;

    if (weatherHistory.weatherDataArr.length == 7) weatherHistory.weatherDataArr.shift(); // pushing a stream of objects into the array

    (_weatherHistory$weath = weatherHistory.weatherDataArr).push.apply(_weatherHistory$weath, _toConsumableArray(weatherData));
  };

  weatherHistory.getWeatherData = function () {
    return weatherHistory;
  };

  return weatherHistory;
} // testing


var testTemp = new TemperatureData(WeatherData(dataType('celsius', 'temperature'), WeatherEvent(1000000, 'Horsens'), 50)); // console.log(testTemp);

console.log(testTemp.getType());
console.log(testTemp.getUnit());
console.log(testTemp.getTime());
console.log(testTemp.getPlace());
console.log(testTemp.number);
console.log(testTemp.convertToF());
console.log('test TemperatureData DONE');
console.log();
var testPrecip = new PrecipitationData(WeatherData(dataType('mm', 'precipitation'), WeatherEvent(1000000, 'Horsens'), 1)); // console.log(testPrecip);

console.log(testPrecip.getType());
console.log(testPrecip.getUnit());
console.log(testPrecip.getTime());
console.log(testPrecip.getPlace());
console.log(testPrecip.number);
console.log('test PrecipitationData DONE');
console.log();
var testWind = new WindData(WeatherData(dataType('ms', 'wind'), WeatherEvent(1000000, 'Horsens'), 50, 'NW')); // console.log(testWind);

console.log(testWind.getType());
console.log(testWind.getUnit());
console.log(testWind.getTime());
console.log(testWind.getPlace());
console.log(testWind.number);
console.log(testWind.direction);
console.log('test WindData DONE');
console.log();
var testCloud = new CloudCoverageData(WeatherData(dataType('percentage', 'cloudCoverage'), WeatherEvent(1000000, 'Horsens'), 25)); // console.log(testCloud);

console.log(testCloud.getType());
console.log(testCloud.getUnit());
console.log(testCloud.getTime());
console.log(testCloud.getPlace());
console.log(testCloud.number);
console.log('test CloudCoverageData DONE');
console.log();
var weatherDataArr = [testTemp, testPrecip, testWind];
var weatherHistory = new WeatherHistory('international', 'Horsens', weatherDataArr); // console.log(weatherHistory);

console.log(weatherHistory.getCurrentPlace());
console.log(weatherHistory.getCurrentType());
weatherHistory.setCurrentType('us');
console.log(weatherHistory.getCurrentType());
console.log(weatherHistory.getCurrentPlace());
weatherHistory.setCurrentPlace('USA');
console.log(weatherHistory.getCurrentPlace());
console.log(weatherHistory.getWeatherData());
var weatherDataArr2 = [testTemp, testPrecip, testWind];
weatherHistory.addWeatherData(weatherDataArr2);
console.log(weatherHistory.getWeatherData());