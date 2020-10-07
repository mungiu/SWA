class ImmutableTextValue {
    constructor() { }

    value() { return 'This is a TextValue'; }
}

class ImmutableNumericValue {
    constructor(_value, _unit) {
        this.value = _value;
        this.unit = _unit;
    }

    getValue() { return this.value }
    getUnit() { return this.unit }
}

class ImmutableData {
    constructor(_type, _time, _place) {
        this.type = _type;
        this.time = _time;
        this.palce = _place;
    }

    getType() { return this.type }
    getTime() { return this.time }
    getPlace() { return this.palce }
}

class ImmutableTemperature {
    constructor(degrees, type) {
        this.temperatureDegrees = degrees;
        this.temperatureType = type;
    }

    convertToF() {
        if (this.type == 'celsius') {
            return new ImmutableTemperature(((this.temperatureDegrees * (9 / 5)) + 32), 'fahrenheit');
        }
        else
            return new ImmutableTemperature(this.temperatureDegrees, this.temperatureType);
    }

    convertToC() {
        if (this.type == 'fahrenheit') {
            return new ImmutableTemperature(((this.temperatureDegrees - 32) * (5 / 9)), 'celsius');
        }
        else
            return new ImmutableTemperature(this.temperatureDegrees, this.temperatureType);
    }
}

class ImmutablePrecipitation {
    constructor(_numericValue, _precipitationType) {
        this.numericValue = _numericValue;
        this.precipitationType = _precipitationType;
    }

    getPrecipitationType() {
        return this.precipitationType;
    }

    convertToInches() {
        return new ImmutablePrecipitation(new ImmutableNumericValue((this.numericValue.value / 25.4), 'inches'), this.precipitationType);
    }

    convertToMM() {
        return new ImmutablePrecipitation(new ImmutableNumericValue((this.numericValue.value * 0.0393701), 'inches'), this.precipitationType);
    }
}

class ImmutableWind {
    constructor(_numericValue, _windDirection) {
        this.numericValue = _numericValue;
        this.windDirection = _windDirection;
    }

    convertToMPH() {
        return new ImmutableWind(new ImmutableNumericValue(this.numericValue * 0.44704), this.windDirection);
    }

    convertToMS() {
        return new ImmutableWind(new ImmutableNumericValue(this.numericValue / 2.23694), this.windDirection);
    }
}

class ImmutableCloudCoverage {
    constructor(_numericValue) {
        this.numericValue = this.numericValue;
    }

    getCloudCoverage() {
        return this.numericValue
    }
}