//////// WIND
// Type: N/NW/NE/S/SW/SE
// Unit: M/S MIL/H
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
var myEvent = new ImmutableEvent('Horsens');
console.log(myEvent.toString());
var secondEvent = myEvent.setPlace('USA');
console.log();
console.log(secondEvent.toString());
console.log(myEvent.toString());
myEvent.time = new Date(11111).toLocaleString();
console.log();
console.log(myEvent.toString());

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
console.log()
console.log()
console.log()
console.log()
var myData = new ImmutableDataType('testsUnit1', 'testType1', 'testPlace1', null);
console.log(myData.toString());
var secondData = myData.setUnit('UNIT_CHANGED');
var thirdData = secondData.setType('TYPE_CHANGED');
console.log();
console.log(thirdData.toString());
console.log(myData.toString());
myData.type = "MANUALLY FORCED TYPE";
console.log();
console.log(myData.toString());

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
console.log()
console.log()
console.log()
console.log()
var myData = new ImmutableWeatherData(1, 'testsUnit1', 'testType1', 'testPlace1', null);
console.log(myData.toString());
var secondData = myData.setUnit('UNIT_CHANGED');
var thirdData = secondData.setType('TYPE_CHANGED');
console.log();
console.log(thirdData.toString());
console.log(myData.toString());
myData.type = "MANUALLY FORCED TYPE";
console.log();
console.log(myData.toString());