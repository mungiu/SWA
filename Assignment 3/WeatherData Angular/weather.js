class ImmutableEvent {
    constructor(_place, _time) {
        this.place = _place;
        if (_time == null) {
            this.time = new Date().toLocaleString();
        }
        else
            this.time = _time;

        // MAKE THIS CLASS IMMUTABLE
        if (new.target === ImmutableEvent) {
            Object.freeze(this)
        }
    }

    getPlace() { return this.place }
    setPlace(_newPlace) { return new ImmutableEvent(_newPlace, this.time) }
    getTime() { return this.time }
    toString() { return `Place: ${this.getPlace()}, Time - ${this.getTime()}` }
}

class ImmutableDataType extends ImmutableEvent {
    constructor(_unit, _type, _place, _time) {
        super(_place, _time);

        this.unit = _unit;
        this.type = _type;

        // MAKE THIS CLASS IMMUTABLE
        if (new.target === ImmutableDataType) {
            Object.freeze(this)
        }
    }

    getUnit() { return this.unit }
    setUnit(newUnit) { return new ImmutableDataType(newUnit, this.type, this.place, this.time) }
    getType() { return this.type }
    setType(newType) { return new ImmutableDataType(this.unit, newType, this.place, this.time) }
    toString() { return `Unit: ${this.getUnit()}, Type - ${this.getType()}, Place: ${this.getPlace()}, Time - ${this.getTime()}` }
}

class ImmutableWeatherData extends ImmutableDataType {
    constructor(_value, _unit, _type, _place, _time) {
        super(_unit, _type, _place, _time);

        this.value = _value;

        // MAKE THIS CLASS IMMUTABLE
        if (new.target === ImmutableWeatherData) {
            Object.freeze(this)
        }
    }

    getValue() { return this.value }
    setValue(newValue) { return new ImmutableWeatherData(newValue, this.unit, this.type, this.place, this.time) }
    toString() { return `Value: ${this.getValue()}, Unit: ${this.getUnit()}, Type - ${this.getType()}, Place: ${this.getPlace()}, Time - ${this.getTime()}` }
}

class ImmutableTemperature extends ImmutableWeatherData {
    constructor(_value, _unit, _type, _place, _time, _from, _to) {
        super(_value, _unit, _type, _place, _time);
        this.from = _from;
        this.to = _to;

        // MAKE THIS CLASS IMMUTABLE
        if (new.target === ImmutableTemperature) {
            Object.freeze(this)
        }
    }

    getFrom() { return this.from; }

    getTo() { return this.to; }

    // (0°C × 9/5) + 32 = 32°F
    convertToF() {
        if (this.unit == 'celsius') {
            return new ImmutableTemperature(
                this.value != null ? (this.value * (9 / 5) + 32) : null,
                'fahrenheit',
                this.type,
                this.place,
                this.time,
                this.from != null ? (this.from * (9 / 5) + 32) : null,
                this.to != null ? (this.to * (9 / 5) + 32) : null
            );
        } else if (this.unit == 'fahrenheit') {
            return new ImmutableTemperature(
                this.value,
                this.unit,
                this.type,
                this.place,
                this.time,
                this.from,
                this.to
            );
        }
    };

    // (32°F − 32) × 5/9 = 0°C
    convertToC() {
        if (this.unit == 'fahrenheit') {
            return new ImmutableTemperature(
                this.value != null ? (this.value - 32) * (5 / 9) : null,
                'celsius',
                this.type,
                this.place,
                this.time,
                this.from != null ? (this.from - 32) * (5 / 9) : null,
                this.to != null ? (this.to - 32) * (5 / 9) : null
            );
        } else if (this.unit == 'celsius') {
            return new ImmutableTemperature(
                this.value,
                this.unit,
                this.type,
                this.place,
                this.time,
                this.from,
                this.to
            );
        }
    };
}

class ImmutablePrecipitation extends ImmutableWeatherData {
    constructor(_value, _unit, _type, _place, _time, _precipitation_type, _from, _to) {
        super(_value, _unit, _type, _place, _time);
        this.precipitation_type = _precipitation_type;
        this.from = _from;
        this.to = _to;

        // MAKE THIS CLASS IMMUTABLE
        if (new.target === ImmutablePrecipitation) {
            Object.freeze(this)
        }
    }

    getPrecipitationType() { return this.precipitation_type; }

    getFrom() { return this.from; }

    getTo() { return this.to; }

    convertToInches() {
        if (this.unit == 'MM') {
            return new ImmutablePrecipitation(
                this.precipitation_type,
                this.value != null ? (this.value / 25.4) : null,
                'IN',
                this.type,
                this.place,
                this.time,
                this.from != null ? (this.from / 25.4) : null,
                this.to != null ? (this.to / 25.4) : null
            );
        } else if (this.unit == 'IN') {
            return new ImmutablePrecipitation(
                this.precipitation_type,
                this.value,
                this.unit,
                this.type,
                this.place,
                this.time,
                this.from,
                this.to
            );
        }
    };

    convertToMM() {
        if (this.unit == 'IN') {
            return new ImmutablePrecipitation(
                this.precipitation_type,
                this.value != null ? (this.value * 0.0393701) : null,
                'MM',
                this.type,
                this.place,
                this.time,
                this.from != null ? (this.from * 0.0393701) : null,
                this.to != null ? (this.to * 0.0393701) : null
            );
        } else if (this.unit == 'MM') {
            return new ImmutablePrecipitation(
                this.precipitation_type,
                this.value,
                this.unit,
                this.type,
                this.place,
                this.time,
                this.from,
                this.to
            );
        }
    };
}

class ImmutableWind extends ImmutableWeatherData {
    constructor(_value, _unit, _type, _place, _time, _direction, _directions, _from, _to) {
        super(_value, _unit, _type, _place, _time);
        this.direction = _direction;
        this.directions = _directions;
        this.from = _from;
        this.to = _to;

        // MAKE THIS CLASS IMMUTABLE
        if (new.target === ImmutableWind) {
            Object.freeze(this)
        }
    }

    getFrom() { return this.from; }

    getTo() { return this.to; }

    getDirection() { return this.direction; }

    getDirections() { return this.directions; }

    convertToMPH() {
        if (this.unit == 'MS') {
            return new ImmutableWind(
                this.value != null ? (this.value * 0.44704) : null,
                'MPH',
                this.type,
                this.place,
                this.time,
                this.directions,
                this.from != null ? (this.from * 0.44704) : null,
                this.to != null ? (this.to * 0.44704) : null
            );
        } else if (this.unit == 'MPH') {
            return new ImmutableWind(
                this.value,
                this.unit,
                this.type,
                this.place,
                this.time,
                this.directions,
                this.from,
                this.to
            );
        }
    };

    convertToMS() {
        if (this.unit == 'MPH') {
            return new ImmutableWind(
                this.value != null ? (this.value / 2.23694) : null,
                'MS',
                this.type,
                this.place,
                this.time,
                this.directions,
                this.from != null ? (this.value / 2.23694) : null,
                this.to != null ? (this.value / 2.23694) : null
            );
        } else if (this.unit == 'MS') {
            return new ImmutableWind(
                this.value,
                this.unit,
                this.type,
                this.place,
                this.time,
                this.directions,
                this.from,
                this.to
            );
        }
    };
}

class ImmutableCloudCoverage extends ImmutableWeatherData {
    constructor(_value, _unit, _type, _place, _time, _from, _to) {
        super(_value, _unit, _type, _place, _time);
        this.from = _from;
        this.to = _to;

        // MAKE THIS CLASS IMMUTABLE
        if (new.target === ImmutableCloudCoverage) {
            Object.freeze(this)
        }
    }

    getFrom() { return this.from; }

    getTo() { return this.to; }

    getCoverageType() { return this.type }
}

class MyDateInterval {
    constructor(_fromDate, _toDate) {
        this.fromDate = new Date(_fromDate);
        this.toDate = new Date(_toDate);

        // MAKE THIS CLASS IMMUTABLE
        if (new.target === ImmutableDataType) {
            Object.freeze(this)
        }
    }

    getFrom() { return this.fromDate };
    setPlace(newFromDate) { return new MyDateInterval(newFromDate, this.toDate) };

    getTo() { return this.toDate };
    setPlace(newToDate) { return new MyDateInterval(this.fromDate, newToDate) };

    contains(cDate) {
        const cDate2 = new Date(cDate);
        if (cDate2 >= this.fromDate && cDate2 <= this.toDate) {
            return true;
        }
        else {
            return false;
        }

    };
}

angular.module('weatherApp', [])
    .factory('helperFunctionsFactory', [
        '$log',
        function ($log) {
            $log.log('Instantiating "helperFunctionsFactory.."')
            //creating a service object
            let helperFunctionsService = {};

            //defining the service object functionality
            helperFunctionsService.reduce = function (iterable, reduceFn, accumulator) {
                for (let i of iterable) {
                    accumulator = reduceFn(accumulator, i)
                }
                return accumulator
            }
            helperFunctionsService.myMap = (a, f) => reduce(a, (arr, v) => [...arr, f(v)], []);
            helperFunctionsService.myFilter = (a, f) => reduce(a, (arr, v) => p(v) ? [...arr, p(v)] : arr, []);
            // helperFunctionsService.getId = () => {
            //     var text = "";
            //     var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            //     for (var i = 0; i < 5; i++)
            //         text += possible.charAt(Math.floor(Math.random() * possible.length));

            //     return text;
            // }

            //returning the service object
            return helperFunctionsService;
        }])
    .factory('weatherHistoryFactory', [
        '$http', '$log', 'helperFunctionsFactory',
        function ($http, $log, helperFunctionsFactory) {

            $log.log('Instantiating "weatherHistoryFactory"...');
            let weatherHistoryService = {};
            //DONE
            updateWeatherHistory = (jsonData, weatherHistoryArr) => {
                // accessing the ng-model name and age and pushing them into the current list
                let temp = null;

                if (jsonData.type === 'wind speed')
                    temp = new ImmutableWind(
                        jsonData.value,
                        jsonData.unit,
                        jsonData.type,
                        jsonData.place,
                        jsonData.time,
                        jsonData.direction,
                        jsonData.directions,
                        jsonData.from,
                        jsonData.to);
                else if (jsonData.type === 'cloud coverage')
                    temp = new ImmutableCloudCoverage(
                        jsonData.value,
                        jsonData.unit,
                        jsonData.type,
                        jsonData.place,
                        jsonData.time,
                        jsonData.from,
                        jsonData.to);
                else if (jsonData.type === 'precipitation')
                    temp = new ImmutablePrecipitation(
                        jsonData.value,
                        jsonData.unit,
                        jsonData.type,
                        jsonData.place,
                        jsonData.time,
                        jsonData.precipitation_types,
                        jsonData.from,
                        jsonData.to);
                else if (jsonData.type === 'temperature')
                    temp = new ImmutableTemperature(
                        jsonData.value,
                        jsonData.unit,
                        jsonData.type,
                        jsonData.place,
                        jsonData.time,
                        jsonData.from,
                        jsonData.to);
                else
                    $log.log('Received unknown weather "TYPE"...')

                if (temp != null)
                    weatherHistoryArr.push(temp);
            }

            weatherHistoryService.pushData = (jsonData) => {
                $http({
                    url: 'http://localhost:8080/data',
                    method: 'POST',
                    data: jsonData
                })
                    .then(
                        // SUCCESS
                        function () {
                            $log.log('URL POST request successful for: ' + url)
                        },
                        // FAILURE
                        function () {
                            $log.log('URL POST request failed for: ' + url)
                        })
            }

            //DONE
            weatherHistoryService.getAll = (weatherHistoryListView) => {
                $http({
                    url: 'http://localhost:8080/data',
                    method: 'GET'
                })
                    .then(
                        // SUCCESS
                        function (response) {
                            let objList = response.data;
                            objList.forEach(function (item) { this.updateWeatherHistory(item, weatherHistoryListView); });
                        },
                        // FAILURE
                        function () {
                            $log.log('URL GET request failed for: ' + url)
                        })
            }
            //DONE
            weatherHistoryService.forPlace = (place, weatherHistoryListView) => {
                $http({
                    url: 'http://localhost:8080/data/' + place,
                    method: 'GET'
                })
                    .then(
                        // SUCCESS
                        function (response) {
                            let objList = response.data;
                            objList.forEach(function (item) { this.updateWeatherHistory(item, weatherHistoryListView); });
                        },
                        // FAILURE
                        function (response) {
                            $log.log('URL GET request failed for: ' + url + 'With response: ' + response)
                        })
            }

            weatherHistoryService.forUnit = (unit, immutableWeatherDataArr) => {
                let tempArr = [];
                let index = 0;
                immutableWeatherDataArr.forEach(element => {
                    if (element.getUnit() == unit)
                        tempArr[index++] = element;
                });

                return tempArr;
            }
            //DONE
            weatherHistoryService.forPeriod = (myDateInterval, weatherHistoryListView) => {
                $http({
                    url: 'http://localhost:8080/data',
                    method: 'GET'
                })
                    .then(
                        function (response) {
                            let objList = response.data;
                            objList.forEach(function (item) {
                                if (new Date(item.time).getTime() >= myDateInterval.getFrom().getTime()
                                    && new Date(item.time).getTime() <= myDateInterval.getTo().getTime())
                                    this.updateWeatherHistory(item, weatherHistoryListView);
                            });
                        },
                        // FAILURE
                        function () {
                            $log.log('URL GET request failed for: ' + url)
                        })

            }

            weatherHistoryService.including = (weatherDataArr, immutableWeatherDataArr) => {
                let tempArr = null;

                immutableWeatherDataArr.forEach(element => {
                    // adding all elements similar to the current element
                    // to tempArr
                    helperFunctionsFactory.myFilter(weatherDataArr, (w) => (
                        w.unit == element.unit &&
                        w.type == element.type &&
                        w.place == element.place &&
                        w.time == element.time)
                        ? w : null  // if element found, add to filtered or return null
                    ).forEach(filteredElement => {
                        tempArr.push(filteredElement)
                    })

                })

                return tempArr;
            }

            weatherHistoryService.convertToUSUnits = (immutableWeatherDataArr) => {
                return new ImmutableWeatherHistory(
                    helperFunctionsFactory.myMap(immutableWeatherDataArr, (w) => {
                        if (w.type == 'MS' || w.type == 'MPH')
                            w.convertToMPH();
                        else if (w.type == '%')
                            w
                        else if (w.type == 'MM' || w.type == 'IN')
                            w.convertToInches();
                        else if (w.type == 'CELSIUS' || w.type == 'FAHRENHEIT')
                            w.convertToF();
                    })
                );
            }

            weatherHistoryService.convertToInternationalUnits = (immutableWeatherDataArr) => {
                return new ImmutableWeatherHistory(
                    helperFunctionsFactory.myMap(immutableWeatherDataArr, (w) => {
                        if (w.type == 'MS' || w.type == 'MPH')
                            w.convertToMS();
                        else if (w.type == '%')
                            w
                        else if (w.type == 'MM' || w.type == 'IN')
                            w.convertToMM();
                        else if (w.type == 'CELSIUS' || w.type == 'FAHRENHEIT')
                            w.convertToC();
                    })
                );
            }

            weatherHistoryService.lowestWindValue = (immutableWeatherDataArr) => {
                let min;

                helperFunctionsFactory.myFilter(immutableWeatherDataArr, (w) => (
                    w.unit == "MS" || w.unit == "MPH")
                    ? w : null
                ).forEach(filteredElement => {
                    if (typeof min == 'undefined')
                        min = filteredElement.value;
                    else if (filteredElement.value <= min)
                        min = filteredElement.value;
                })

                return min;
            }

            weatherHistoryService.lowestPrecipitationValue = (immutableWeatherDataArr) => {
                let min;

                helperFunctionsFactory.myFilter(immutableWeatherDataArr, (w) => (
                    w.unit == "MM" || w.unit == "IN")
                    ? w : null
                ).forEach(filteredElement => {
                    if (typeof min == 'undefined')
                        min = filteredElement.value;
                    else if (filteredElement.value <= min)
                        min = filteredElement.value;
                })

                return min;
            }

            weatherHistoryService.lowestTemperatureValue = (immutableWeatherDataArr) => {
                let min;

                helperFunctionsFactory.myFilter(immutableWeatherDataArr, (w) => (
                    w.unit == "FAHRENHEIT" || w.unit == "CELSIUS")
                    ? w : null
                ).forEach(filteredElement => {
                    if (typeof min == 'undefined')
                        min = filteredElement.value;
                    else if (filteredElement.value <= min)
                        min = filteredElement.value;
                })

                return min;
            }

            weatherHistoryService.lowestCloudCoverageValue = (immutableWeatherDataArr) => {
                let min;

                helperFunctionsFactory.myFilter(immutableWeatherDataArr, (w) => (
                    w.unit == "\%")
                    ? w : null
                ).forEach(filteredElement => {
                    if (typeof min == 'undefined')
                        min = filteredElement.value;
                    else if (filteredElement.value <= min)
                        min = filteredElement.value;
                })

                return min;
            }

            weatherHistoryService.latestWindData = (immutableWeatherDataArr) => {
                let windData;

                helperFunctionsFactory.myFilter(immutableWeatherDataArr, (w) => (
                    w.unit == "MS" || w.unit == "MPH")
                    ? w : null
                ).forEach(filteredElement => {
                    if (typeof windData == 'undefined')
                        windData = filteredElement;
                    else if (filteredElement.getTime() < windData.getTime())
                        windData = filteredElement;
                })

                return windData;
            }

            weatherHistoryService.latestPrecipitationData = (immutableWeatherDataArr) => {
                let precipitationData;

                helperFunctionsFactory.myFilter(immutableWeatherDataArr, (w) => (
                    w.unit == "MM" || w.unit == "IN")
                    ? w : null
                ).forEach(filteredElement => {
                    if (typeof precipitationData == 'undefined')
                        precipitationData = filteredElement;
                    else if (filteredElement.getTime() < precipitationData.getTime())
                        precipitationData = filteredElement;
                })

                return precipitationData;
            }

            weatherHistoryService.latestTemperatureData = (immutableWeatherDataArr) => {
                let temperatureData;

                helperFunctionsFactory.myFilter(immutableWeatherDataArr, (w) => (
                    w.unit == "FAHRENHEIT" || w.unit == "CELSIUS")
                    ? w : null
                ).forEach(filteredElement => {
                    if (typeof temperatureData == 'undefined')
                        temperatureData = filteredElement;
                    else if (filteredElement.getTime() < temperatureData.getTime())
                        temperatureData = filteredElement;
                })

                return temperatureData;
            }

            weatherHistoryService.latestCloudCoverageData = (immutableWeatherDataArr) => {
                let cloudCoverageData;

                // GENERATING FILTERED ARRAY
                helperFunctionsFactory.myFilter(immutableWeatherDataArr, (w) => (
                    w.unit == "\%")
                    ? w : null
                )
                    // CALLING FOR EACH ON THE FILTERED ARRAY
                    .forEach(filteredElement => {
                        if (typeof cloudCoverageData == 'undefined')
                            cloudCoverageData = filteredElement;
                        else if (filteredElement.getTime() < cloudCoverageData.getTime())
                            cloudCoverageData = filteredElement;
                    })

                return cloudCoverageData;
            }

            return weatherHistoryService;
        }])
    .factory('weatherForecastFactory', [
        '$http', '$log', 'helperFunctionsFactory',
        function ($http, $log, helperFunctionsFactory) {

            $log.log('Instantiating "weatherForecastFactory"...');
            let weatherForecastService = {};

            // DONE
            updateWeatherForecast = (jsonData, weatherForecastArr) => {
                // accessing the ng-model name and age and pushing them into the current list
                let temp = null;

                if (jsonData.type === 'wind speed')
                    temp = new ImmutableWind(
                        jsonData.value,
                        jsonData.unit,
                        jsonData.type,
                        jsonData.place,
                        jsonData.time,
                        jsonData.direction,
                        jsonData.directions,
                        jsonData.from,
                        jsonData.to);
                else if (jsonData.type === 'cloud coverage')
                    temp = new ImmutableCloudCoverage(
                        jsonData.value,
                        jsonData.unit,
                        jsonData.type,
                        jsonData.place,
                        jsonData.time,
                        jsonData.from,
                        jsonData.to);
                else if (jsonData.type === 'precipitation')
                    temp = new ImmutablePrecipitation(
                        jsonData.value,
                        jsonData.unit,
                        jsonData.type,
                        jsonData.place,
                        jsonData.time,
                        jsonData.precipitation_types,
                        jsonData.from,
                        jsonData.to);
                else if (jsonData.type === 'temperature')
                    temp = new ImmutableTemperature(
                        jsonData.value,
                        jsonData.unit,
                        jsonData.type,
                        jsonData.place,
                        jsonData.time,
                        jsonData.from,
                        jsonData.to);
                else
                    $log.log('Received unknown weather "TYPE"...')

                if (temp != null)
                    weatherForecastArr.push(temp);
            }
            // DONE
            weatherForecastService.getAll = (weatherForecastListView) => {
                $http({
                    url: 'http://localhost:8080/forecast',
                    method: 'GET'
                })
                    .then(
                        // SUCCESS
                        function (response) {
                            let objList = response.data;
                            objList.forEach(function (item) { this.updateWeatherForecast(item, weatherForecastListView); });
                        },
                        // FAILURE
                        function () {
                            $log.log('URL GET request failed for: ' + url)
                        })
            }

            weatherForecastService.addWeatherPrediction = (data) => { this.weatherPrediction.push(data) }

            weatherForecastService.includesData = (data) => {
                //const filterData = this.weatherPrediction.filter(prediction => )
                //use filter to find a single weatherPrediction within the weatherForecast array
            }
            // DONE
            weatherForecastService.forPlace = (place, weatherForecastListView) => {
                $http({
                    url: 'http://localhost:8080/forecast/' + place,
                    method: 'GET'
                })
                    .then(
                        // SUCCESS
                        function (response) {
                            let objList = response.data;
                            objList.forEach(function (item) { this.updateWeatherForecast(item, weatherForecastListView); });
                        },
                        // FAILURE
                        function (response) {
                            $log.log('URL GET request failed for: ' + url + 'With response: ' + response)
                        })
            }

            weatherForecastService.forType = (type) => {
                const filteredTypes = this.weatherPrediction.filter(prediction => prediction.type == type)
                return filteredTypes
            }
            // DONE
            weatherForecastService.forPeriod = (myDateInterval, weatherForecastListView) => {
                $http({
                    url: 'http://localhost:8080/forecast',
                    method: 'GET'
                })
                    .then(
                        function (response) {
                            let objList = response.data;
                            objList.forEach(function (item) {
                                if (new Date(item.time).getTime() >= myDateInterval.getFrom().getTime()
                                    && new Date(item.time).getTime() <= myDateInterval.getTo().getTime())
                                    this.updateWeatherForecast(item, weatherForecastListView);
                            });
                        },
                        // FAILURE
                        function () {
                            $log.log('URL GET request failed for: ' + url)
                        })
            }

            weatherForecastService.convertToUsUnits = () => {
                //use map to convert every unit of from and to into international units
                const convertedArray = this.weatherPrediction.map((obj, p) => {
                    switch (p) {
                        case "CELSIUS":
                            obj.convertToFahrenheit  // how to access this method?
                            break;
                        case "MM":
                            break;
                        case "MS":
                            break;
                        default:
                            break;
                    }
                    return convertedArray
                })
            }

            weatherForecastService.convertToMetricUnits = () => {
                //use map to convert every unit of from and to into metric units
            }

            weatherForecastService.averageFromValue = () => // can't get the from value?
            {
                //use reduce to gather all from values in the weatherForecast array and return the result
                const reduceFrom = (sum, fromValue) => (sum + fromValue.fromNum) / this.weatherPrediction.length
                const average = this.weatherPrediction.reduce(reduceFrom)
                return average
            }

            weatherForecastService.averageToValue = () => {
                //use reduce to gather all to values in the weatherForecast array and return the result
                const reduceTo = (average, to, _, { length }) => average + to.toNum / length;
                return this.weatherPrediction.reduce(reduceTo);
            }

            return weatherForecastService;
        }])
    /** NOTE: the passed in parameters to the controller will be instantiated */
    .controller('weatherController', [
        'weatherHistoryFactory', 'weatherForecastFactory',
        function (weatherHistoryFactory, weatherForecastFactory) {
            let weatherCtrl = this;                      // this refers to the controller itself, so we no longer need $scope
            weatherCtrl.whFactory = weatherHistoryFactory;   // this helps ensure that the service acts withing "this" scope
            weatherCtrl.wfFactory = weatherForecastFactory;
            weatherCtrl.historyList = [];
            weatherCtrl.forecastList = [];

            weatherCtrl.getAllWeatherHistory = () => {
                weatherCtrl.historyList = [];
                weatherCtrl.whFactory.getAll(weatherCtrl.historyList);
            }

            weatherCtrl.getWeatherHistoryForPlace = () => {
                weatherCtrl.historyList = [];
                weatherCtrl.whFactory.forPlace(weatherCtrl.placeHistory, weatherCtrl.historyList);
            }

            weatherCtrl.getWeatherHistoryDateInterval = () => {
                weatherCtrl.historyList = [];
                weatherCtrl.whFactory.forPeriod(new MyDateInterval(weatherCtrl.fromDateHistory, weatherCtrl.toDateHistory), weatherCtrl.historyList);
            }

            weatherCtrl.getAllWeatherForecast = () => {
                weatherCtrl.forecastList = [];
                weatherCtrl.wfFactory.getAll(weatherCtrl.forecastList);
            }

            weatherCtrl.getWeatherForecastForPlace = () => {
                weatherCtrl.forecastList = [];
                weatherCtrl.wfFactory.forPlace(weatherCtrl.placeForecast, weatherCtrl.forecastList);
            }

            weatherCtrl.getWeatherForecastDateInterval = () => {
                weatherCtrl.forecastList = [];
                weatherCtrl.wfFactory.forPeriod(new MyDateInterval(weatherCtrl.fromDateForecast, weatherCtrl.toDateForecast), weatherCtrl.forecastList);
            }

            weatherCtrl.pushWeatherHistory = () => {
                weatherCtrl.forecastList = [];
                weatherCtrl.whFactory.pushData(/*View data converted to JSON or convert inside service*/);
            }

        }]);












//////// IMPORTANT MODEL CONVENTIONS
//////// WIND
// Type: wind speed
// Unit: MS MPH
// Value:
//////// Could Coverage
// Type: cloud coverage
// Unit: %
// Value:
//      0%  - 33 % = CLEAR
//      34% - 66 % = PARTLY CLOUDY
//      67% - 100% = CLOUDY
//////// PRECIPITATION
// Type: precipitation
// Precipitation Type: RAIN SLEET HAIL SNOW
// Unit: MM IN
// Value: 
//////// TEMPERATURE
// Type: temperature
// Unit: FAHRENHEIT CELSIUS
// Value:


// EXAMPLES OF SERVICE AND PROVIDERS //
    //     // .config(["myDateIntervalConfiguredServiceProvider", function () {
    //     // NOTE: the provider name should be <<serviceName>> + "Provider"
    //     // NOTE: the provider is executed during the "congif" stage
    //     // BEFORE any controller or any service, it configures a "provider"
    // }])
    // .provider('myDateIntervalConfiguredService', function () {
    //     // provider is used to instantiate a service that requires pre-configuration
    //     let baseURL = '';
    //     this.config = function (url) { baseURL = url; };
    //     this.$get = function () {
    //         //creating a service object
    //         let myDateIntervalService = { fromDate: fromDate, toDate: toDate };
    //         //defining the service object functionality
    //         myDateIntervalService.getFrom = function () { return myDateIntervalService.fromDate }
    //         //returning the service object
    //         return myDateIntervalService;
    //     }
    // })
    // .service('myDateIntervalService', function () {
    //     // no need to create service object, the instantiation of the service object is done by AngularJS
    //     // we add all members directly to .this service definition
    //     // also there is no need to return it, it can be passed in and called
    //     this.getFrom = function () { return myDateIntervalService.fromDate }
    // })