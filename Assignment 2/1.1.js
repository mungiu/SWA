//////// WIND
// Type: N/NW/NE/S/SW/SE
// Unit: MS MH
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
// Unit: MM INCH
// Value: 
//////// TEMPERATURE
// Type: NOT APPLICABLE
// Unit: FEHRENHEIT CELLSIUS
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
// var myEvent = new ImmutableEvent('Horsens');
// console.log(myEvent.toString());
// var secondEvent = myEvent.setPlace('USA');
// console.log();
// console.log(secondEvent.toString());
// console.log(myEvent.toString());
// myEvent.time = new Date(11111).toLocaleString();
// console.log();
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
// console.log()
// console.log()
// console.log()
// console.log()
// var myData = new ImmutableDataType('testsUnit1', 'testType1', 'testPlace1', null);
// console.log(myData.toString());
// var secondData = myData.setUnit('UNIT_CHANGED');
// var thirdData = secondData.setType('TYPE_CHANGED');
// console.log();
// console.log(thirdData.toString());
// console.log(myData.toString());
// myData.type = "MANUALLY FORCED TYPE";
// console.log();
// console.log(myData.toString());

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
// console.log()
// console.log()
// console.log()
// console.log()
// var myData = new ImmutableWeatherData(1, 'testsUnit1', 'testType1', 'testPlace1', null);
// console.log(myData.toString());
// var secondData = myData.setUnit('UNIT_CHANGED');
// var thirdData = secondData.setType('TYPE_CHANGED');
// console.log();
// console.log(thirdData.toString());
// console.log(myData.toString());
// myData.type = "MANUALLY FORCED TYPE";
// console.log();
// console.log(myData.toString());

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

class ImmutablePrecipitation extends ImmutableDataType {
    constructor(_value, _unit, _type, _place, _time) {
        super(_value, _unit, _type, _place, _time);

        // MAKE THIS CLASS IMMUTABLE
        if (new.target === ImmutableWeatherData) {
            Object.freeze(this)
        }
    }

    convertToInches() {
        if (this.unit == 'mm') {
            return new ImmutableTemperature(
                (this.value / 25.4),
                'inch',
                this.type,
                this.place,
                this.time
            );
        } else if (this.unit == 'inch') {
            return new ImmutableTemperature(
                this.value,
                this.unit,
                this.type,
                this.place,
                this.time
            );
        }
    };

    convertToMM() {
        if (this.unit == 'inch') {
            return new ImmutableTemperature(
                (this.value * 0.0393701),
                'mm',
                this.type,
                this.place,
                this.time
            );
        } else if (this.unit == 'mm') {
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

class ImmutableWind extends ImmutableDataType {
    constructor(_value, _unit, _type, _place, _time) {
        super(_value, _unit, _type, _place, _time);

        // MAKE THIS CLASS IMMUTABLE
        if (new.target === ImmutableWeatherData) {
            Object.freeze(this)
        }
    }

    convertToMH() {
        if (this.unit == 'MS') {
            return new ImmutableTemperature(
                (this.value * 0.44704),
                'MH',
                this.type,
                this.place,
                this.time
            );
        } else if (this.unit == 'MH') {
            return new ImmutableTemperature(
                this.value,
                this.unit,
                this.type,
                this.place,
                this.time
            );
        }
    };

    convertToMS() {
        if (this.unit == 'MH') {
            return new ImmutableTemperature(
                (this.value / 2.23694),
                'MS',
                this.type,
                this.place,
                this.time
            );
        } else if (this.unit == 'MS') {
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

class ImmutableCloudCoverage extends ImmutableDataType {
    constructor(_value, _unit, _type, _place, _time) {
        super(_value, _unit, _type, _place, _time);

        // MAKE THIS CLASS IMMUTABLE
        if (new.target === ImmutableWeatherData) {
            Object.freeze(this)
        }
    }

    getCoverageType() { return this.type }
}

class ImmutableWeatherHistory extends ImmutableDataType {
    constructor(..._immutableWeatherDataArr) {
        this.immutableWeatherDataArr = _immutableWeatherDataArr;

        // MAKE THIS CLASS IMMUTABLE
        if (new.target === ImmutableWeatherData) {
            Object.freeze(this)
        }
    }

    forPlace(place) {
        let tempArr = null;
        immutableWeatherDataArr.forEach(element => {
            if (element.getPlace() == place)
                tempArr += element;
        });

        return tempArr;
    }

    forUnit(unit) {
        let tempArr = null;
        immutableWeatherDataArr.forEach(element => {
            if (element.getUnit() == unit)
                tempArr += element;
        });

        return tempArr;
    }

    forPeriod(startDate, endDate) {
        let tempArr = null;
        immutableWeatherDataArr.forEach(element => {
            if (element.getTime() >= startDate && element.getTime() <= endDate)
                tempArr += element;
        });

        return tempArr;
    }

    including(weatherDataArr) {
        let tempArr = null;

        immutableWeatherDataArr.forEach(element => {
            // adding all elements similar to the current element
            // to tempArr
            myFilter(weatherDataArr, (w) => (
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

    convertToUSUnits() {
        return new ImmutableWeatherHistory(
            myMap(this.immutableWeatherDataArr, (w) => {
                if (w.type == 'MS' || w.type == 'MH')
                    w.convertToMH();
                else if (w.type == '%')
                    w
                else if (w.type == 'MM' || w.type == 'INCH')
                    w.convertToInches();
                else if (w.type == 'CELLSIUS' || w.type == 'FAHRENHEIT')
                    w.convertToF();
            })
        );
    }

    convertToInternationalUnits() {
        return new ImmutableWeatherHistory(
            myMap(this.immutableWeatherDataArr, (w) => {
                if (w.type == 'MS' || w.type == 'MH')
                    w.convertToMS();
                else if (w.type == '%')
                    w
                else if (w.type == 'MM' || w.type == 'INCH')
                    w.convertToMM();
                else if (w.type == 'CELLSIUS' || w.type == 'FAHRENHEIT')
                    w.convertToC();
            })
        );
    }
}

////////////////////// HELPER METHODS START ////////////////////////
const reduce = function (iterable, reduceFn, accumulator) {
    for (let i of iterable) {
        accumulator = reduceFn(accumulator, i)
    }
    return accumulator
}

const myMap = (a, f) => reduce(a, (arr, v) => [...arr, f(v)], [])
const myFilter = (a, p) => reduce(a, (arr, v) => p(v) ? [...arr, p(v)] : arr, [])
/////////////////////// HELPER METHODS END ////////////////////////