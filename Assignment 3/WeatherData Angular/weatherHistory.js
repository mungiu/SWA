//////// WIND
// Type: N/NW/NE/S/SW/SE
// Unit: MS MPH
// Value:
//////// Could Coverage
// Type: CLEAR / PARTLY CLOUD / CLOUDY
// Unit: %
// Value:
//      0%  - 33 % = CLEAR
//      34% - 66 % = PARTLY CLOUDY
//      67% - 100% = CLOUDY
//////// PRECIPITATION
// Type: RAIN SLEET HAIL SNOW
// Unit: MM IN
// Value: 
//////// TEMPERATURE
// Type: NOT APPLICABLE
// Unit: FAHRENHEIT CELSIUS
// Value:

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
// var myEvent = new ImmutableEvent('Horsens', null);
// console.log('TEST IMMUTABLE EVENT');
// console.log('Data Must Change');
// console.log(myEvent.toString());
// var secondEvent = myEvent.setPlace('USA');
// console.log(secondEvent.toString());
// console.log('Data Must Remain The Same');
// console.log(myEvent.toString());
// myEvent.time = new Date(11111).toLocaleString();
// console.log(myEvent.toString());

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
// var myDataType = new ImmutableDataType('testUnit', 'testType', 'testPlace', null);
// console.log()
// console.log('TEST IMMUTABLE DATA TYPE');
// console.log('Data Must Change');
// console.log(myDataType.toString());
// var secondData = myDataType.setUnit('UNIT_CHANGED');
// var thirdData = secondData.setType('TYPE_CHANGED');
// console.log(thirdData.toString());
// console.log('Data Must Remain The Same');
// console.log(myDataType.toString());
// myDataType.type = "MANUALLY FORCED TYPE";
// console.log(myDataType.toString());

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
// var myWeatherData = new ImmutableWeatherData(1, 'testUnit', 'testType', 'testPlace', null);
// console.log()
// console.log('TEST IMMUTABLE WEATHER DATA');
// console.log('Data Must Change');
// console.log(myWeatherData.toString());
// var secondData = myWeatherData.setUnit('UNIT_CHANGED');
// var thirdData = secondData.setType('TYPE_CHANGED');
// console.log(thirdData.toString());
// console.log('Data Must Remain The Same');
// console.log(myWeatherData.toString());
// myWeatherData.type = "MANUALLY FORCED TYPE";
// console.log(myWeatherData.toString());

class ImmutableTemperature extends ImmutableWeatherData {
    constructor(_value, _unit, _type, _place, _time) {
        super(_value, _unit, _type, _place, _time);

        // MAKE THIS CLASS IMMUTABLE
        if (new.target === ImmutableTemperature) {
            Object.freeze(this)
        }
    }

    // (0°C × 9/5) + 32 = 32°F
    convertToF() {
        if (this.unit == 'celsius') {
            return new ImmutableTemperature(
                (this.value * (9 / 5) + 32),
                'fahrenheit',
                this.type,
                this.place,
                this.time
            );
        } else if (this.unit == 'fahrenheit') {
            return new ImmutableTemperature(
                this.value,
                this.unit,
                this.type,
                this.place,
                this.time
            );
        }
    };

    // (32°F − 32) × 5/9 = 0°C
    convertToC() {
        if (this.unit == 'fahrenheit') {
            return new ImmutableTemperature(
                (this.value - 32) * (5 / 9),
                'celsius',
                this.type,
                this.place,
                this.time
            );
        } else if (this.unit == 'celsius') {
            return new ImmutableTemperature(
                this.value,
                this.unit,
                this.type,
                this.place,
                this.time
            );
        }
    };
}
// var myTemperature = new ImmutableTemperature(1, 'testUnit', 'testType', 'testPlace', null);
// console.log()
// console.log('TEST IMMUTABLE TEMPERATURE');
// console.log('Data Must Change');
// console.log(myTemperature.toString());
// var secondData = myTemperature.setUnit('UNIT_CHANGED');
// var thirdData = secondData.setType('TYPE_CHANGED');
// console.log(thirdData.toString());
// console.log('Data Must Remain The Same');
// console.log(myTemperature.toString());
// myTemperature.type = "MANUALLY FORCED TYPE";
// console.log(myTemperature.toString());

class ImmutablePrecipitation extends ImmutableWeatherData {
    constructor(_value, _unit, _type, _place, _time) {
        super(_value, _unit, _type, _place, _time);

        // MAKE THIS CLASS IMMUTABLE
        if (new.target === ImmutablePrecipitation) {
            Object.freeze(this)
        }
    }

    convertToInches() {
        if (this.unit == 'MM') {
            return new ImmutablePrecipitation(
                (this.value / 25.4),
                'IN',
                this.type,
                this.place,
                this.time
            );
        } else if (this.unit == 'IN') {
            return new ImmutablePrecipitation(
                this.value,
                this.unit,
                this.type,
                this.place,
                this.time
            );
        }
    };

    convertToMM() {
        if (this.unit == 'IN') {
            return new ImmutablePrecipitation(
                (this.value * 0.0393701),
                'MM',
                this.type,
                this.place,
                this.time
            );
        } else if (this.unit == 'MM') {
            return new ImmutablePrecipitation(
                this.value,
                this.unit,
                this.type,
                this.place,
                this.time
            );
        }
    };
}
// var myPrecipitation = new ImmutablePrecipitation(1, 'testUnit', 'testType', 'testPlace', null);
// console.log()
// console.log('TEST IMMUTABLE PRECIPITATION');
// console.log('Data Must Change');
// console.log(myPrecipitation.toString());
// var secondData = myPrecipitation.setUnit('UNIT_CHANGED');
// var thirdData = secondData.setType('TYPE_CHANGED');
// console.log(thirdData.toString());
// console.log('Data Must Remain The Same');
// console.log(myPrecipitation.toString());
// myPrecipitation.type = "MANUALLY FORCED TYPE";
// console.log(myPrecipitation.toString());

class ImmutableWind extends ImmutableWeatherData {
    constructor(_value, _unit, _type, _place, _time) {
        super(_value, _unit, _type, _place, _time);

        // MAKE THIS CLASS IMMUTABLE
        if (new.target === ImmutableWind) {
            Object.freeze(this)
        }
    }

    convertToMPH() {
        if (this.unit == 'MS') {
            return new ImmutableWind(
                (this.value * 0.44704),
                'MPH',
                this.type,
                this.place,
                this.time
            );
        } else if (this.unit == 'MPH') {
            return new ImmutableWind(
                this.value,
                this.unit,
                this.type,
                this.place,
                this.time
            );
        }
    };

    convertToMS() {
        if (this.unit == 'MPH') {
            return new ImmutableWind(
                (this.value / 2.23694),
                'MS',
                this.type,
                this.place,
                this.time
            );
        } else if (this.unit == 'MS') {
            return new ImmutableWind(
                this.value,
                this.unit,
                this.type,
                this.place,
                this.time
            );
        }
    };
}
// var myWind = new ImmutableWind(1, 'testUnit', 'testType', 'testPlace', null);
// console.log()
// console.log('TEST IMMUTABLE WIND');
// console.log('Data Must Change');
// console.log(myWind.toString());
// var secondData = myWind.setUnit('UNIT_CHANGED');
// var thirdData = secondData.setType('TYPE_CHANGED');
// console.log(thirdData.toString());
// console.log('Data Must Remain The Same');
// console.log(myWind.toString());
// myWind.type = "MANUALLY FORCED TYPE";
// console.log(myWind.toString());

class ImmutableCloudCoverage extends ImmutableWeatherData {
    constructor(_value, _unit, _type, _place, _time) {
        super(_value, _unit, _type, _place, _time);

        // MAKE THIS CLASS IMMUTABLE
        if (new.target === ImmutableCloudCoverage) {
            Object.freeze(this)
        }
    }

    getCoverageType() { return this.type }
}
// var myCloudCoverage = new ImmutableCloudCoverage(1, 'testUnit', 'testType', 'testPlace', null);
// console.log()
// console.log('TEST IMMUTABLE CLOUDCOVERAGE');
// console.log('Data Must Change');
// console.log(myCloudCoverage.toString());
// var secondData = myCloudCoverage.setUnit('UNIT_CHANGED');
// var thirdData = secondData.setType('TYPE_CHANGED');
// console.log(thirdData.toString());
// console.log('Data Must Remain The Same');
// console.log(myCloudCoverage.toString());
// myCloudCoverage.type = "MANUALLY FORCED TYPE";
// console.log(myCloudCoverage.toString());


////////////////////// HELPER METHODS START ////////////////////////
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

    getTo() { return this.to };
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
/////////////////////// HELPER METHODS END ////////////////////////

angular.module('weatherApp', [])
    // .config(["myDateIntervalConfiguredServiceProvider", function () {
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

            //returning the service object
            return helperFunctionsService;
        }])
    .factory('weatherHistoryFactory', [
        '$http', '$log', 'helperFunctionsFactory',
        function ($http, $log, helperFunctionsFactory) {

            $log.log('Instantiating "weatherHistoryFactory"...');
            let weatherHistoryService = {};

            weatherHistoryService.forPlace = (place, immutableWeatherDataArr) => {
                let tempArr = null;
                immutableWeatherDataArr.forEach(element => {
                    if (element.getPlace() == place)
                        tempArr += element;
                });

                return tempArr;
            }

            weatherHistoryService.forUnit = (unit, immutableWeatherDataArr) => {
                let tempArr = null;
                immutableWeatherDataArr.forEach(element => {
                    if (element.getUnit() == unit)
                        tempArr += element;
                });

                return tempArr;
            }

            weatherHistoryService.forPeriod = (myDateInterval, immutableWeatherDataArr) => {
                let tempArr = null;
                immutableWeatherDataArr.forEach(element => {
                    if (element.getTime() >= myDateInterval.getFrom()
                        && element.getTime() <= myDateInterval.getTo())
                        tempArr += element;
                });

                return tempArr;
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
    /** NOTE: the passed in parameters are what the controlelr will try to instantiate */
    .controller('weatherHistoryController', [
        'helperFunctionsFactory', 'weatherHistoryFactory',
        function (helperFunctionsFactory, weatherHistoryFactory) {
            let weatherHistory = this;                      // this refers to the controller itself, so we no longer need $scope
            // let fromDateFactory = myDateIntervalFactory.getFrom(); // calling the result of the passed in factory
            // let fromDateService = myDateIntervalService.getFrom(); // calling the service methods directly

            // TODO: this has to be replaced with real database call to database
            weatherHistory.list = [
                new ImmutableWind(value = 30, unit = 'MS', type = 'N', place = 'Horsens', time = new Date(1990, 02, 23, 3, 30, 0, 1)),
                new ImmutableCloudCoverage(value = 33, unit = '%', type = 'CLEAR', place = 'Horsens', time = new Date(1990, 02, 23, 3, 30, 0, 2)),
                new ImmutablePrecipitation(value = 10, unit = 'MM', type = 'RAIN', place = 'Horsens', time = new Date(1990, 02, 23, 3, 30, 0, 3)),
                new ImmutableTemperature(value = 20, unit = 'FAHRENHEIT', type = null, place = 'Horsens', time = new Date(1990, 02, 23, 3, 30, 0, 4))
            ];

            weatherHistory.addWeatherDataToHistory = function () {
                // accessing the ng-model name and age and pushing them into the current list
                //N/NW/NE/S/SW/SE
                let temp = null;
                if (weatherHistory.type === 'N' ||
                    weatherHistory.type === 'NW' ||
                    weatherHistory.type === 'NE' ||
                    weatherHistory.type === 'W' ||
                    weatherHistory.type === 'E' ||
                    weatherHistory.type === 'SW' ||
                    weatherHistory.type === 'SE' ||
                    weatherHistory.type === 'S')
                    temp = new ImmutableWind(
                        weatherHistory.value,
                        weatherHistory.unit,
                        weatherHistory.type,
                        weatherHistory.place,
                        weatherHistory.time);
                else if (weatherHistory.type === 'CLEAR' ||
                    weatherHistory.type === 'PARTLY CLOUDY' ||
                    weatherHistory.type === 'CLOUDY')
                    temp = new ImmutableCloudCoverage(
                        weatherHistory.value,
                        weatherHistory.unit,
                        weatherHistory.type,
                        weatherHistory.place,
                        weatherHistory.time);
                else if (weatherHistory.type === 'RAIN' ||
                    weatherHistory.type === 'SLEET' ||
                    weatherHistory.type === 'HAIL' ||
                    weatherHistory.type === 'SNOW')
                    temp = new ImmutablePrecipitation(
                        weatherHistory.value,
                        weatherHistory.unit,
                        weatherHistory.type,
                        weatherHistory.place,
                        weatherHistory.time);
                else temp = new ImmutableTemperature(
                    weatherHistory.value,
                    weatherHistory.unit,
                    weatherHistory.type,
                    weatherHistory.place,
                    weatherHistory.time);


                weatherHistory.list.push(temp);
                // reseting the ng-model values
                weatherHistory.type = '';
                weatherHistory.unit = '';
                weatherHistory.value = 0;
                weatherHistory.place = '';
                weatherHistory.time = '';
            }
        }]);