function TextValue() {
    let textValue = {};

    textValue.value = () => { return 'This is a TextValue' };
}

function NumericValue() {
    let numericValue = {};

    numericValue.value = () => { return 1 };

    numericValue.unit = () => { return 'This is a Unit' };
}

function Data() {
    let data = {};

    data.type = () => { return 'This is DataType' };
    data.time = () => { return 'This is DateTime' };
    data.place = () => { return 'This is DataPlace' };
}

function Temperature() {
    let temperatureCelsius;
    let temperatureFahrenheit;

    // (0°C × 9/5) + 32 = 32°F
    temperature.convertToF = (celsius) => {
        temperatureFahrenheit = (celsius * (9 / 5)) + 32;
    };

    // (32°F − 32) × 5/9 = 0°C
    temperature.convertToC = (fahrenheit) => {
        temperatureCelsius = (fahrenheit - 32) * (5 / 9);
    };
}

function Precipitation() {
    let precipitation = {};

    precipitation.precipitationType = () => {
        return 'This is PrecipitationType';
    }

    precipitation.convertToInches = (_milimeters) => {
        precipitation.inches = (_milimeters / 25.4);
    };

    precipitation.convertToMM = (_inches) => {
        precipitation.millimeters = (_inches * 0.0393701);
    };
}

function Wind() {
    let wind = {};

    wind.direction = () => {
        return 'This is wind direction';
    };

    wind.convertToMPH = (_metersPerSecond) => {
        wind.milesPerHour = (_metersPerSecond * 0.44704);
    };

    wind.convertToMS = (_milesPerHour) => {
        wind.metersPerSecond = (_milesPerHour / 2.23694)
    };
}

function CloudCoverage() {
    let cloudCoverage = {};
}