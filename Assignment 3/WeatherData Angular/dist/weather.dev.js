"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ImmutableEvent =
/*#__PURE__*/
function () {
  function ImmutableEvent(_place, _time) {
    _classCallCheck(this, ImmutableEvent);

    this.place = _place;

    if (_time == null) {
      this.time = new Date().toLocaleString();
    } else this.time = _time; // MAKE THIS CLASS IMMUTABLE


    if ((this instanceof ImmutableEvent ? this.constructor : void 0) === ImmutableEvent) {
      Object.freeze(this);
    }
  }

  _createClass(ImmutableEvent, [{
    key: "getPlace",
    value: function getPlace() {
      return this.place;
    }
  }, {
    key: "setPlace",
    value: function setPlace(_newPlace) {
      return new ImmutableEvent(_newPlace, this.time);
    }
  }, {
    key: "getTime",
    value: function getTime() {
      return this.time;
    }
  }, {
    key: "toString",
    value: function toString() {
      return "Place: ".concat(this.getPlace(), ", Time - ").concat(this.getTime());
    }
  }]);

  return ImmutableEvent;
}();

var ImmutableDataType =
/*#__PURE__*/
function (_ImmutableEvent) {
  _inherits(ImmutableDataType, _ImmutableEvent);

  function ImmutableDataType(_unit, _type, _place, _time) {
    var _this;

    _classCallCheck(this, ImmutableDataType);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ImmutableDataType).call(this, _place, _time));
    _this.unit = _unit;
    _this.type = _type; // MAKE THIS CLASS IMMUTABLE

    if ((this instanceof ImmutableDataType ? this.constructor : void 0) === ImmutableDataType) {
      Object.freeze(_assertThisInitialized(_this));
    }

    return _this;
  }

  _createClass(ImmutableDataType, [{
    key: "getUnit",
    value: function getUnit() {
      return this.unit;
    }
  }, {
    key: "setUnit",
    value: function setUnit(newUnit) {
      return new ImmutableDataType(newUnit, this.type, this.place, this.time);
    }
  }, {
    key: "getType",
    value: function getType() {
      return this.type;
    }
  }, {
    key: "setType",
    value: function setType(newType) {
      return new ImmutableDataType(this.unit, newType, this.place, this.time);
    }
  }, {
    key: "toString",
    value: function toString() {
      return "Unit: ".concat(this.getUnit(), ", Type - ").concat(this.getType(), ", Place: ").concat(this.getPlace(), ", Time - ").concat(this.getTime());
    }
  }]);

  return ImmutableDataType;
}(ImmutableEvent);

var ImmutableWeatherData =
/*#__PURE__*/
function (_ImmutableDataType) {
  _inherits(ImmutableWeatherData, _ImmutableDataType);

  function ImmutableWeatherData(_value, _unit, _type, _place, _time) {
    var _this2;

    _classCallCheck(this, ImmutableWeatherData);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(ImmutableWeatherData).call(this, _unit, _type, _place, _time));
    _this2.value = _value; // MAKE THIS CLASS IMMUTABLE

    if ((this instanceof ImmutableWeatherData ? this.constructor : void 0) === ImmutableWeatherData) {
      Object.freeze(_assertThisInitialized(_this2));
    }

    return _this2;
  }

  _createClass(ImmutableWeatherData, [{
    key: "getValue",
    value: function getValue() {
      return this.value;
    }
  }, {
    key: "setValue",
    value: function setValue(newValue) {
      return new ImmutableWeatherData(newValue, this.unit, this.type, this.place, this.time);
    }
  }, {
    key: "toString",
    value: function toString() {
      return "Value: ".concat(this.getValue(), ", Unit: ").concat(this.getUnit(), ", Type - ").concat(this.getType(), ", Place: ").concat(this.getPlace(), ", Time - ").concat(this.getTime());
    }
  }]);

  return ImmutableWeatherData;
}(ImmutableDataType);

var ImmutableTemperature =
/*#__PURE__*/
function (_ImmutableWeatherData) {
  _inherits(ImmutableTemperature, _ImmutableWeatherData);

  function ImmutableTemperature(_value, _unit, _type, _place, _time, _from, _to) {
    var _this3;

    _classCallCheck(this, ImmutableTemperature);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(ImmutableTemperature).call(this, _value, _unit, _type, _place, _time));
    _this3.from = _from;
    _this3.to = _to; // MAKE THIS CLASS IMMUTABLE

    if ((this instanceof ImmutableTemperature ? this.constructor : void 0) === ImmutableTemperature) {
      Object.freeze(_assertThisInitialized(_this3));
    }

    return _this3;
  }

  _createClass(ImmutableTemperature, [{
    key: "getFrom",
    value: function getFrom() {
      return this.from;
    }
  }, {
    key: "getTo",
    value: function getTo() {
      return this.to;
    } // (0°C × 9/5) + 32 = 32°F

  }, {
    key: "convertToF",
    value: function convertToF() {
      if (this.unit == 'celsius') {
        return new ImmutableTemperature(this.value != null ? this.value * (9 / 5) + 32 : null, 'fahrenheit', this.type, this.place, this.time, this.from != null ? this.from * (9 / 5) + 32 : null, this.to != null ? this.to * (9 / 5) + 32 : null);
      } else if (this.unit == 'fahrenheit') {
        return new ImmutableTemperature(this.value, this.unit, this.type, this.place, this.time, this.from, this.to);
      }
    } // (32°F − 32) × 5/9 = 0°C

  }, {
    key: "convertToC",
    value: function convertToC() {
      if (this.unit == 'fahrenheit') {
        return new ImmutableTemperature(this.value != null ? (this.value - 32) * (5 / 9) : null, 'celsius', this.type, this.place, this.time, this.from != null ? (this.from - 32) * (5 / 9) : null, this.to != null ? (this.to - 32) * (5 / 9) : null);
      } else if (this.unit == 'celsius') {
        return new ImmutableTemperature(this.value, this.unit, this.type, this.place, this.time, this.from, this.to);
      }
    }
  }]);

  return ImmutableTemperature;
}(ImmutableWeatherData);

var ImmutablePrecipitation =
/*#__PURE__*/
function (_ImmutableWeatherData2) {
  _inherits(ImmutablePrecipitation, _ImmutableWeatherData2);

  function ImmutablePrecipitation(_value, _unit, _type, _place, _time, _precipitation_type, _from, _to) {
    var _this4;

    _classCallCheck(this, ImmutablePrecipitation);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(ImmutablePrecipitation).call(this, _value, _unit, _type, _place, _time));
    _this4.precipitation_type = _precipitation_type;
    _this4.from = _from;
    _this4.to = _to; // MAKE THIS CLASS IMMUTABLE

    if ((this instanceof ImmutablePrecipitation ? this.constructor : void 0) === ImmutablePrecipitation) {
      Object.freeze(_assertThisInitialized(_this4));
    }

    return _this4;
  }

  _createClass(ImmutablePrecipitation, [{
    key: "getPrecipitationType",
    value: function getPrecipitationType() {
      return this.precipitation_type;
    }
  }, {
    key: "getFrom",
    value: function getFrom() {
      return this.from;
    }
  }, {
    key: "getTo",
    value: function getTo() {
      return this.to;
    }
  }, {
    key: "convertToInches",
    value: function convertToInches() {
      if (this.unit == 'MM') {
        return new ImmutablePrecipitation(this.precipitation_type, this.value != null ? this.value / 25.4 : null, 'IN', this.type, this.place, this.time, this.from != null ? this.from / 25.4 : null, this.to != null ? this.to / 25.4 : null);
      } else if (this.unit == 'IN') {
        return new ImmutablePrecipitation(this.precipitation_type, this.value, this.unit, this.type, this.place, this.time, this.from, this.to);
      }
    }
  }, {
    key: "convertToMM",
    value: function convertToMM() {
      if (this.unit == 'IN') {
        return new ImmutablePrecipitation(this.precipitation_type, this.value != null ? this.value * 0.0393701 : null, 'MM', this.type, this.place, this.time, this.from != null ? this.from * 0.0393701 : null, this.to != null ? this.to * 0.0393701 : null);
      } else if (this.unit == 'MM') {
        return new ImmutablePrecipitation(this.precipitation_type, this.value, this.unit, this.type, this.place, this.time, this.from, this.to);
      }
    }
  }]);

  return ImmutablePrecipitation;
}(ImmutableWeatherData);

var ImmutableWind =
/*#__PURE__*/
function (_ImmutableWeatherData3) {
  _inherits(ImmutableWind, _ImmutableWeatherData3);

  function ImmutableWind(_value, _unit, _type, _place, _time, _direction, _directions, _from, _to) {
    var _this5;

    _classCallCheck(this, ImmutableWind);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(ImmutableWind).call(this, _value, _unit, _type, _place, _time));
    _this5.direction = _direction;
    _this5.directions = _directions;
    _this5.from = _from;
    _this5.to = _to; // MAKE THIS CLASS IMMUTABLE

    if ((this instanceof ImmutableWind ? this.constructor : void 0) === ImmutableWind) {
      Object.freeze(_assertThisInitialized(_this5));
    }

    return _this5;
  }

  _createClass(ImmutableWind, [{
    key: "getFrom",
    value: function getFrom() {
      return this.from;
    }
  }, {
    key: "getTo",
    value: function getTo() {
      return this.to;
    }
  }, {
    key: "getDirection",
    value: function getDirection() {
      return this.direction;
    }
  }, {
    key: "getDirections",
    value: function getDirections() {
      return this.directions;
    }
  }, {
    key: "convertToMPH",
    value: function convertToMPH() {
      if (this.unit == 'MS') {
        return new ImmutableWind(this.value != null ? this.value * 0.44704 : null, 'MPH', this.type, this.place, this.time, this.directions, this.from != null ? this.from * 0.44704 : null, this.to != null ? this.to * 0.44704 : null);
      } else if (this.unit == 'MPH') {
        return new ImmutableWind(this.value, this.unit, this.type, this.place, this.time, this.directions, this.from, this.to);
      }
    }
  }, {
    key: "convertToMS",
    value: function convertToMS() {
      if (this.unit == 'MPH') {
        return new ImmutableWind(this.value != null ? this.value / 2.23694 : null, 'MS', this.type, this.place, this.time, this.directions, this.from != null ? this.value / 2.23694 : null, this.to != null ? this.value / 2.23694 : null);
      } else if (this.unit == 'MS') {
        return new ImmutableWind(this.value, this.unit, this.type, this.place, this.time, this.directions, this.from, this.to);
      }
    }
  }]);

  return ImmutableWind;
}(ImmutableWeatherData);

var ImmutableCloudCoverage =
/*#__PURE__*/
function (_ImmutableWeatherData4) {
  _inherits(ImmutableCloudCoverage, _ImmutableWeatherData4);

  function ImmutableCloudCoverage(_value, _unit, _type, _place, _time, _from, _to) {
    var _this6;

    _classCallCheck(this, ImmutableCloudCoverage);

    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(ImmutableCloudCoverage).call(this, _value, _unit, _type, _place, _time));
    _this6.from = _from;
    _this6.to = _to; // MAKE THIS CLASS IMMUTABLE

    if ((this instanceof ImmutableCloudCoverage ? this.constructor : void 0) === ImmutableCloudCoverage) {
      Object.freeze(_assertThisInitialized(_this6));
    }

    return _this6;
  }

  _createClass(ImmutableCloudCoverage, [{
    key: "getFrom",
    value: function getFrom() {
      return this.from;
    }
  }, {
    key: "getTo",
    value: function getTo() {
      return this.to;
    }
  }, {
    key: "getCoverageType",
    value: function getCoverageType() {
      return this.type;
    }
  }]);

  return ImmutableCloudCoverage;
}(ImmutableWeatherData);

var MyDateInterval =
/*#__PURE__*/
function () {
  function MyDateInterval(_fromDate, _toDate) {
    _classCallCheck(this, MyDateInterval);

    this.fromDate = new Date(_fromDate);
    this.toDate = new Date(_toDate); // MAKE THIS CLASS IMMUTABLE

    if ((this instanceof MyDateInterval ? this.constructor : void 0) === ImmutableDataType) {
      Object.freeze(this);
    }
  }

  _createClass(MyDateInterval, [{
    key: "getFrom",
    value: function getFrom() {
      return this.fromDate;
    }
  }, {
    key: "setPlace",
    value: function setPlace(newFromDate) {
      return new MyDateInterval(newFromDate, this.toDate);
    }
  }, {
    key: "getTo",
    value: function getTo() {
      return this.toDate;
    }
  }, {
    key: "setPlace",
    value: function setPlace(newToDate) {
      return new MyDateInterval(this.fromDate, newToDate);
    }
  }, {
    key: "contains",
    value: function contains(cDate) {
      var cDate2 = new Date(cDate);
      return cDate2 >= this.fromDate && cDate2 <= this.toDate;
    }
  }]);

  return MyDateInterval;
}();

angular.module('weatherApp', []).factory('helperFunctionsFactory', ['$log', function ($log) {
  $log.log('Instantiating "helperFunctionsFactory.."'); //creating a service object

  var helperFunctionsService = {}; //defining the service object functionality

  helperFunctionsService.reduce = function (iterable, reduceFn, accumulator) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = iterable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var i = _step.value;
        accumulator = reduceFn(accumulator, i);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return accumulator;
  };

  helperFunctionsService.myMap = function (a, f) {
    return reduce(a, function (arr, v) {
      return [].concat(_toConsumableArray(arr), [f(v)]);
    }, []);
  };

  helperFunctionsService.myFilter = function (a, f) {
    return reduce(a, function (arr, v) {
      return p(v) ? [].concat(_toConsumableArray(arr), [p(v)]) : arr;
    }, []);
  }; // helperFunctionsService.getId = () => {
  //     var text = "";
  //     var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  //     for (var i = 0; i < 5; i++)
  //         text += possible.charAt(Math.floor(Math.random() * possible.length));
  //     return text;
  // }
  //returning the service object


  return helperFunctionsService;
}]).factory('weatherHistoryFactory', ['$http', '$log', 'helperFunctionsFactory', function ($http, $log, helperFunctionsFactory) {
  $log.log('Instantiating "weatherHistoryFactory"...');
  var weatherHistoryService = {}; //DONE

  var updateWeatherHistory = function updateWeatherHistory(jsonData, weatherHistoryArr) {
    // accessing the ng-model name and age and pushing them into the current list
    var temp = null;
    if (jsonData.type === 'wind speed') temp = new ImmutableWind(jsonData.value, jsonData.unit, jsonData.type, jsonData.place, jsonData.time, jsonData.direction, jsonData.directions, jsonData.from, jsonData.to);else if (jsonData.type === 'cloud coverage') temp = new ImmutableCloudCoverage(jsonData.value, jsonData.unit, jsonData.type, jsonData.place, jsonData.time, jsonData.from, jsonData.to);else if (jsonData.type === 'precipitation') temp = new ImmutablePrecipitation(jsonData.value, jsonData.unit, jsonData.type, jsonData.place, jsonData.time, jsonData.precipitation_type, jsonData.from, jsonData.to);else if (jsonData.type === 'temperature') temp = new ImmutableTemperature(jsonData.value, jsonData.unit, jsonData.type, jsonData.place, jsonData.time, jsonData.from, jsonData.to);else $log.log('Received unknown weather "TYPE"...' + jsonData.type);
    if (temp != null) weatherHistoryArr.push(temp);
  };

  weatherHistoryService.pushData = function (data) {
    var jsonString = JSON.stringify(data);
    $http.post('http://localhost:8080/data', jsonString).then( // SUCCESS
    function (response) {
      if (response.data) $log.log('URL POST request successful for: ' + url);
    }, // FAILURE
    function (response) {
      $log.log('URL POST request failed for: ' + url);
      $log.log('Status: ' + response.status);
      $log.log('Test: ' + response.text);
    });
  }; //DONE


  weatherHistoryService.getAll = function (weatherHistoryListView) {
    $http({
      url: 'http://localhost:8080/data',
      method: 'GET'
    }).then( // SUCCESS
    function (response) {
      var objList = response.data;
      objList.forEach(function (item) {
        updateWeatherHistory(item, weatherHistoryListView);
      });
    }, // FAILURE
    function () {
      $log.log('URL GET request failed for: ' + url);
    });
  }; //DONE


  weatherHistoryService.forPlace = function (place, weatherHistoryListView) {
    $http({
      url: 'http://localhost:8080/data/' + place,
      method: 'GET'
    }).then( // SUCCESS
    function (response) {
      var objList = response.data;
      objList.forEach(function (item) {
        updateWeatherHistory(item, weatherHistoryListView);
      });
    }, // FAILURE
    function (response) {
      $log.log('URL GET request failed for: ' + url + 'With response: ' + response);
    });
  };

  weatherHistoryService.forUnit = function (unit, immutableWeatherDataArr) {
    var tempArr = [];
    var index = 0;
    immutableWeatherDataArr.forEach(function (element) {
      if (element.getUnit() == unit) tempArr[index++] = element;
    });
    return tempArr;
  }; //DONE


  weatherHistoryService.forPeriod = function (myDateInterval, weatherHistoryListView) {
    $http({
      url: 'http://localhost:8080/data',
      method: 'GET'
    }).then(function (response) {
      var objList = response.data;
      objList.forEach(function (item) {
        if (new Date(item.time).getTime() >= myDateInterval.getFrom().getTime() && new Date(item.time).getTime() <= myDateInterval.getTo().getTime()) updateWeatherHistory(item, weatherHistoryListView);
      });
    }, // FAILURE
    function () {
      $log.log('URL GET request failed for: ' + url);
    });
  };

  weatherHistoryService.including = function (weatherDataArr, immutableWeatherDataArr) {
    var tempArr = null;
    immutableWeatherDataArr.forEach(function (element) {
      // adding all elements similar to the current element
      // to tempArr
      helperFunctionsFactory.myFilter(weatherDataArr, function (w) {
        return w.unit == element.unit && w.type == element.type && w.place == element.place && w.time == element.time ? w : null;
      } // if element found, add to filtered or return null
      ).forEach(function (filteredElement) {
        tempArr.push(filteredElement);
      });
    });
    return tempArr;
  };

  weatherHistoryService.convertToUSUnits = function (immutableWeatherDataArr) {
    return new ImmutableWeatherHistory(helperFunctionsFactory.myMap(immutableWeatherDataArr, function (w) {
      if (w.type == 'MS' || w.type == 'MPH') w.convertToMPH(); // else if (w.type == '%')
      //     w;
      else if (w.type == 'MM' || w.type == 'IN') w.convertToInches();else if (w.type == 'CELSIUS' || w.type == 'FAHRENHEIT') w.convertToF();
    }));
  };

  weatherHistoryService.convertToInternationalUnits = function (immutableWeatherDataArr) {
    return new ImmutableWeatherHistory(helperFunctionsFactory.myMap(immutableWeatherDataArr, function (w) {
      if (w.type == 'MS' || w.type == 'MPH') w.convertToMS();else if (w.type == '%') w;else if (w.type == 'MM' || w.type == 'IN') w.convertToMM();else if (w.type == 'CELSIUS' || w.type == 'FAHRENHEIT') w.convertToC();
    }));
  };

  weatherHistoryService.lowestWindValue = function (immutableWeatherDataArr) {
    var min;
    helperFunctionsFactory.myFilter(immutableWeatherDataArr, function (w) {
      return w.unit == "MS" || w.unit == "MPH" ? w : null;
    }).forEach(function (filteredElement) {
      if (typeof min == 'undefined') min = filteredElement.value;else if (filteredElement.value <= min) min = filteredElement.value;
    });
    return min;
  };

  weatherHistoryService.lowestPrecipitationValue = function (immutableWeatherDataArr) {
    var min;
    helperFunctionsFactory.myFilter(immutableWeatherDataArr, function (w) {
      return w.unit == "MM" || w.unit == "IN" ? w : null;
    }).forEach(function (filteredElement) {
      if (typeof min == 'undefined') min = filteredElement.value;else if (filteredElement.value <= min) min = filteredElement.value;
    });
    return min;
  };

  weatherHistoryService.lowestTemperatureValue = function (immutableWeatherDataArr) {
    var min;
    helperFunctionsFactory.myFilter(immutableWeatherDataArr, function (w) {
      return w.unit == "FAHRENHEIT" || w.unit == "CELSIUS" ? w : null;
    }).forEach(function (filteredElement) {
      if (typeof min == 'undefined') min = filteredElement.value;else if (filteredElement.value <= min) min = filteredElement.value;
    });
    return min;
  };

  weatherHistoryService.lowestCloudCoverageValue = function (immutableWeatherDataArr) {
    var min;
    helperFunctionsFactory.myFilter(immutableWeatherDataArr, function (w) {
      return w.unit == "\%" ? w : null;
    }).forEach(function (filteredElement) {
      if (typeof min == 'undefined') min = filteredElement.value;else if (filteredElement.value <= min) min = filteredElement.value;
    });
    return min;
  };

  weatherHistoryService.latestWindData = function (immutableWeatherDataArr) {
    var windData;
    helperFunctionsFactory.myFilter(immutableWeatherDataArr, function (w) {
      return w.unit == "MS" || w.unit == "MPH" ? w : null;
    }).forEach(function (filteredElement) {
      if (typeof windData == 'undefined') windData = filteredElement;else if (filteredElement.getTime() < windData.getTime()) windData = filteredElement;
    });
    return windData;
  };

  weatherHistoryService.latestPrecipitationData = function (immutableWeatherDataArr) {
    var precipitationData;
    helperFunctionsFactory.myFilter(immutableWeatherDataArr, function (w) {
      return w.unit == "MM" || w.unit == "IN" ? w : null;
    }).forEach(function (filteredElement) {
      if (typeof precipitationData == 'undefined') precipitationData = filteredElement;else if (filteredElement.getTime() < precipitationData.getTime()) precipitationData = filteredElement;
    });
    return precipitationData;
  };

  weatherHistoryService.latestTemperatureData = function (immutableWeatherDataArr) {
    var temperatureData;
    helperFunctionsFactory.myFilter(immutableWeatherDataArr, function (w) {
      return w.unit == "FAHRENHEIT" || w.unit == "CELSIUS" ? w : null;
    }).forEach(function (filteredElement) {
      if (typeof temperatureData == 'undefined') temperatureData = filteredElement;else if (filteredElement.getTime() < temperatureData.getTime()) temperatureData = filteredElement;
    });
    return temperatureData;
  };

  weatherHistoryService.latestCloudCoverageData = function (immutableWeatherDataArr) {
    var cloudCoverageData; // GENERATING FILTERED ARRAY

    helperFunctionsFactory.myFilter(immutableWeatherDataArr, function (w) {
      return w.unit == "\%" ? w : null;
    }) // CALLING FOR EACH ON THE FILTERED ARRAY
    .forEach(function (filteredElement) {
      if (typeof cloudCoverageData == 'undefined') cloudCoverageData = filteredElement;else if (filteredElement.getTime() < cloudCoverageData.getTime()) cloudCoverageData = filteredElement;
    });
    return cloudCoverageData;
  };

  return weatherHistoryService;
}]).factory('weatherForecastFactory', ['$http', '$log', 'helperFunctionsFactory', function ($http, $log, helperFunctionsFactory) {
  var _this7 = this;

  $log.log('Instantiating "weatherForecastFactory"...');
  var weatherForecastService = {}; // DONE

  var updateWeatherForecast = function updateWeatherForecast(jsonData, weatherForecastArr) {
    // accessing the ng-model name and age and pushing them into the current list
    var temp = null;
    if (jsonData.type === 'wind speed') temp = new ImmutableWind(jsonData.value, jsonData.unit, jsonData.type, jsonData.place, jsonData.time, jsonData.direction, jsonData.directions, jsonData.from, jsonData.to);else if (jsonData.type === 'cloud coverage') temp = new ImmutableCloudCoverage(jsonData.value, jsonData.unit, jsonData.type, jsonData.place, jsonData.time, jsonData.from, jsonData.to);else if (jsonData.type === 'precipitation') temp = new ImmutablePrecipitation(jsonData.value, jsonData.unit, jsonData.type, jsonData.place, jsonData.time, jsonData.precipitation_types, jsonData.from, jsonData.to);else if (jsonData.type === 'temperature') temp = new ImmutableTemperature(jsonData.value, jsonData.unit, jsonData.type, jsonData.place, jsonData.time, jsonData.from, jsonData.to);else $log.log('Received unknown weather "TYPE"...' + jsonData.type);
    if (temp != null) weatherForecastArr.push(temp);
  }; // DONE


  weatherForecastService.getAll = function (weatherForecastListView) {
    $http({
      url: 'http://localhost:8080/forecast',
      method: 'GET'
    }).then( // SUCCESS
    function (response) {
      var objList = response.data;
      objList.forEach(function (item) {
        updateWeatherForecast(item, weatherForecastListView);
      });
    }, // FAILURE
    function () {
      $log.log('URL GET request failed for: ' + url);
    });
  };

  weatherForecastService.addWeatherPrediction = function (data) {
    _this7.weatherPrediction.push(data);
  };

  weatherForecastService.includesData = function (data) {} //const filterData = this.weatherPrediction.filter(prediction => )
  //use filter to find a single weatherPrediction within the weatherForecast array
  // DONE
  ;

  weatherForecastService.forPlace = function (place, weatherForecastListView) {
    $http({
      url: 'http://localhost:8080/forecast/' + place,
      method: 'GET'
    }).then( // SUCCESS
    function (response) {
      var objList = response.data;
      objList.forEach(function (item) {
        updateWeatherForecast(item, weatherForecastListView);
      });
    }, // FAILURE
    function (response) {
      $log.log('URL GET request failed for: ' + url + 'With response: ' + response);
    });
  };

  weatherForecastService.forType = function (type) {
    var filteredTypes = _this7.weatherPrediction.filter(function (prediction) {
      return prediction.type == type;
    });

    return filteredTypes;
  }; // DONE


  weatherForecastService.forPeriod = function (myDateInterval, weatherForecastListView) {
    $http({
      url: 'http://localhost:8080/forecast',
      method: 'GET'
    }).then(function (response) {
      var objList = response.data;
      objList.forEach(function (item) {
        if (new Date(item.time).getTime() >= myDateInterval.getFrom().getTime() && new Date(item.time).getTime() <= myDateInterval.getTo().getTime()) updateWeatherForecast(item, weatherForecastListView);
      });
    }, // FAILURE
    function () {
      $log.log('URL GET request failed for: ' + url);
    });
  };

  weatherForecastService.convertToUsUnits = function () {
    //use map to convert every unit of from and to into international units
    var convertedArray = _this7.weatherPrediction.map(function (obj, p) {
      switch (p) {
        case "CELSIUS":
          obj.convertToFahrenheit(); // how to access this method?

          break;

        case "MM":
          break;

        case "MS":
          break;

        default:
          break;
      }

      return convertedArray;
    });
  };

  weatherForecastService.convertToMetricUnits = function () {//use map to convert every unit of from and to into metric units
  };

  weatherForecastService.averageFromValue = function () // can't get the from value?
  {
    //use reduce to gather all from values in the weatherForecast array and return the result
    var reduceFrom = function reduceFrom(sum, fromValue) {
      return (sum + fromValue.fromNum) / _this7.weatherPrediction.length;
    };

    var average = _this7.weatherPrediction.reduce(reduceFrom);

    return average;
  };

  weatherForecastService.averageToValue = function () {
    //use reduce to gather all to values in the weatherForecast array and return the result
    var reduceTo = function reduceTo(average, to, _, _ref) {
      var length = _ref.length;
      return average + to.toNum / length;
    };

    return _this7.weatherPrediction.reduce(reduceTo);
  };

  return weatherForecastService;
}])
/** NOTE: the passed in parameters to the controller will be instantiated */
.controller('weatherController', ['weatherHistoryFactory', 'weatherForecastFactory', function (weatherHistoryFactory, weatherForecastFactory) {
  var weatherCtrl = this; // this refers to the controller itself, so we no longer need $scope

  weatherCtrl.whFactory = weatherHistoryFactory; // this helps ensure that the service acts withing "this" scope

  weatherCtrl.wfFactory = weatherForecastFactory;
  weatherCtrl.historyList = [];
  weatherCtrl.forecastList = [];

  weatherCtrl.getAllWeatherHistory = function () {
    weatherCtrl.historyList = [];
    weatherCtrl.whFactory.getAll(weatherCtrl.historyList);
  };

  weatherCtrl.getWeatherHistoryForPlace = function () {
    weatherCtrl.historyList = [];
    weatherCtrl.whFactory.forPlace(weatherCtrl.placeHistory, weatherCtrl.historyList);
  };

  weatherCtrl.getWeatherHistoryDateInterval = function () {
    weatherCtrl.historyList = [];
    weatherCtrl.whFactory.forPeriod(new MyDateInterval(weatherCtrl.fromDateHistory, weatherCtrl.toDateHistory), weatherCtrl.historyList);
  };

  weatherCtrl.getAllWeatherForecast = function () {
    weatherCtrl.forecastList = [];
    weatherCtrl.wfFactory.getAll(weatherCtrl.forecastList);
  };

  weatherCtrl.getWeatherForecastForPlace = function () {
    weatherCtrl.forecastList = [];
    weatherCtrl.wfFactory.forPlace(weatherCtrl.placeForecast, weatherCtrl.forecastList);
  };

  weatherCtrl.getWeatherForecastDateInterval = function () {
    weatherCtrl.forecastList = [];
    weatherCtrl.wfFactory.forPeriod(new MyDateInterval(weatherCtrl.fromDateForecast, weatherCtrl.toDateForecast), weatherCtrl.forecastList);
  };

  weatherCtrl.pushWeatherHistory = function () {
    var place = weatherCtrl.place;
    var type = weatherCtrl.type;
    var precipitation_type = weatherCtrl.specificType;
    var direction = weatherCtrl.specificType;
    var unit = weatherCtrl.unit;
    var time = weatherCtrl.time;
    var value = weatherCtrl.value;
    weatherCtrl.whFactory.pushData({
      place: place,
      type: type,
      precipitation_type: precipitation_type,
      direction: direction,
      unit: unit,
      time: time,
      value: value
    });
  };
}]); //////// IMPORTANT MODEL CONVENTIONS
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