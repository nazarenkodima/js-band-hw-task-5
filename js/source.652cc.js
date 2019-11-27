/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Transport =
/*#__PURE__*/
function () {
  function Transport(id, model, producedYear, capacity, averageSpeed) {
    _classCallCheck(this, Transport);

    this._id = id;
    this._model = model;
    this._producedYear = producedYear;
    this._capacity = capacity;
    this._averageSpeed = averageSpeed;
  }

  _createClass(Transport, [{
    key: "showCapacityInPounds",
    value: function showCapacityInPounds() {
      var pound = 2.2046226218;
      var capacityInPounds = this._capacity * pound;
      return "".concat(capacityInPounds.toFixed(), "lbs");
    }
  }]);

  return Transport;
}();

exports.default = Transport;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LocalStorageService =
/*#__PURE__*/
function () {
  _createClass(LocalStorageService, null, [{
    key: "getInstance",
    value: function getInstance() {
      if (!LocalStorageService.instance) {
        LocalStorageService.instance = new LocalStorageService();
      }

      return LocalStorageService.instance;
    }
  }]);

  function LocalStorageService() {
    _classCallCheck(this, LocalStorageService);

    if (!LocalStorageService.instance) {
      LocalStorageService.instance = this;
    }

    this.localStoragePrefix = 'JS-Band-';
    return LocalStorageService.instance;
  }

  _createClass(LocalStorageService, [{
    key: "init",
    value: function init(key) {
      if (localStorage.getItem("".concat(this.localStoragePrefix).concat(key)) === null) {
        return true;
      }

      return false;
    }
  }, {
    key: "getToken",
    value: function getToken(key) {
      var localStorageKey;

      if (localStorage.getItem("".concat(this.localStoragePrefix).concat(key)) !== null) {
        localStorageKey = localStorage.getItem("".concat(this.localStoragePrefix).concat(key));
        localStorageKey = JSON.parse(localStorageKey);
      }

      return localStorageKey;
    }
  }, {
    key: "saveToken",
    value: function saveToken(key, value) {
      var storageValue = JSON.stringify(value);
      localStorage.setItem("".concat(this.localStoragePrefix).concat(key), storageValue);
    }
  }]);

  return LocalStorageService;
}();

exports.default = LocalStorageService;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _TransportList = _interopRequireDefault(__webpack_require__(3));

var _CostList = _interopRequireDefault(__webpack_require__(7));

__webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Styles
function transportList() {
  var transport = new _TransportList.default();
  return transport;
}

function costList() {
  var cost = new _CostList.default();
  return cost;
}

transportList();
costList();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TransportFactory = _interopRequireDefault(__webpack_require__(4));

var _LocalStorageService = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var localStorageService = _LocalStorageService.default.getInstance();

var TRANSPORT_TOKEN = 'Transport';

var TransportList =
/*#__PURE__*/
function () {
  function TransportList() {
    _classCallCheck(this, TransportList);

    this.transportList = document.querySelector('.transport-list');
    var addTruckButton = document.getElementById('add-truck');
    var addShipButton = document.getElementById('add-ship');
    addTruckButton.addEventListener('click', this.addTruck.bind(this));
    addShipButton.addEventListener('click', this.addShip.bind(this));
    this.render();
  }

  _createClass(TransportList, [{
    key: "addShip",
    value: function addShip() {
      var _this = this;

      var id = document.querySelector('.ship-id').value;
      var model = document.querySelector('.ship-model').value;
      var name = document.querySelector('.ship-name').value;
      var producedYear = document.querySelector('.ship-producedYear').value;
      var capacity = document.querySelector('.ship-capacity').value;
      var averageSpeed = document.querySelector('.ship-averageSpeed').value;
      var countOfTeam = document.querySelector('.ship-countOfTeam').value;
      var shipInputs = document.querySelectorAll('.ship-input');
      var ship;
      ship = _TransportFactory.default.createTransport('ship', id, model, name, producedYear, capacity, averageSpeed, countOfTeam);
      shipInputs.forEach(function (input) {
        _newArrowCheck(this, _this);

        if (!input.value.trim()) ship = _TransportFactory.default.createTransport('ship');
      }.bind(this));
      console.log("Average speed: ".concat(ship.showAverageSpeed()));
      console.log("Capacity in pounds: ".concat(ship.showCapacityInPounds()));
      shipInputs.forEach(function (input) {
        _newArrowCheck(this, _this);

        var inputValue = input;
        inputValue.value = '';
      }.bind(this));
      var li = document.createElement('li');
      li.insertAdjacentHTML('afterbegin', "\n      <span>ID:</span> ".concat(ship._id, "\n      <span>Model: </span>").concat(ship._model, "\n      <span>Type:</span> ").concat(ship._name, "\n      <span>Produced year:</span> ").concat(ship._producedYear, "\n      <span>Capacity:</span> ").concat(ship._capacity, "kg\n      <span>Average speed:</span> ").concat(ship._averageSpeed, "km\n      <span>Count of Team:</span> ").concat(ship._countOfTeam, "\n    "));
      this.transportList.appendChild(li);
      var transportList = this.transportList.innerHTML;
      localStorageService.saveToken(TRANSPORT_TOKEN, transportList);
    }
  }, {
    key: "addTruck",
    value: function addTruck() {
      var _this2 = this;

      var id = document.querySelector('.truck-id').value;
      var model = document.querySelector('.truck-model').value;
      var producedYear = document.querySelector('.truck-producedYear').value;
      var capacity = document.querySelector('.truck-capacity').value;
      var averageSpeed = document.querySelector('.truck-averageSpeed').value;
      var licensePlate = document.querySelector('.truck-licensePlate').value;
      var typeOfGas = document.querySelector('.truck-typeOfGas').value;
      var truckInputs = document.querySelectorAll('.truck-input');
      var truck;
      truck = _TransportFactory.default.createTransport('truck', id, model, producedYear, capacity, averageSpeed, licensePlate, typeOfGas);
      truckInputs.forEach(function (input) {
        _newArrowCheck(this, _this2);

        if (!input.value.trim()) truck = _TransportFactory.default.createTransport('truck');
      }.bind(this));
      console.log("Average speed: ".concat(truck.showAverageSpeed()));
      console.log("Capacity in pounds: ".concat(truck.showCapacityInPounds()));
      truckInputs.forEach(function (input) {
        _newArrowCheck(this, _this2);

        var inputValue = input;
        inputValue.value = '';
      }.bind(this));
      var li = document.createElement('li');
      li.insertAdjacentHTML('afterbegin', "\n      <span>ID:</span> ".concat(truck._id, "\n      <span>Model:</span> ").concat(truck._model, "\n      <span>Produced year:</span> ").concat(truck._producedYear, "\n      <span>Capacity:</span> ").concat(truck._capacity, "kg\n      <span>Average speed:</span> ").concat(truck._averageSpeed, "km\n      <span>License plate:</span> ").concat(truck._licensePlate, "\n      <span>Type of gas:</span> ").concat(truck._typeOfGas, "\n    "));
      this.transportList.appendChild(li);
      var transportList = this.transportList.innerHTML;
      localStorageService.saveToken(TRANSPORT_TOKEN, transportList);
    }
  }, {
    key: "render",
    value: function render() {
      this.transportList.innerHTML = '';

      if (localStorageService.init(TRANSPORT_TOKEN)) {
        localStorageService.saveToken(TRANSPORT_TOKEN, null);
        console.log("local storage for ".concat(TRANSPORT_TOKEN, " is initialized"));
      }

      this.transportList.innerHTML = localStorageService.getToken(TRANSPORT_TOKEN);
    }
  }]);

  return TransportList;
}();

exports.default = TransportList;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Truck = _interopRequireDefault(__webpack_require__(5));

var _Ship = _interopRequireDefault(__webpack_require__(6));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TransportFactory =
/*#__PURE__*/
function () {
  function TransportFactory() {
    _classCallCheck(this, TransportFactory);
  }

  _createClass(TransportFactory, null, [{
    key: "createTransport",
    value: function createTransport(type) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      switch (type) {
        case 'truck':
          return _construct(_Truck.default, args);

        case 'ship':
          return _construct(_Ship.default, args);

        default:
          return _construct(_Truck.default, args);
      }
    }
  }]);

  return TransportFactory;
}();

exports.default = TransportFactory;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Transport2 = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DEFAULT_TRUCK = {
  id: 'smrta-asdad-deead',
  model: 'MAN TGX D38',
  licensePlate: 'AA1232OO',
  producedYear: '2018',
  capacity: '12000',
  averageSpeed: '110',
  typeOfGas: 'Diesel'
};

var Truck =
/*#__PURE__*/
function (_Transport) {
  _inherits(Truck, _Transport);

  function Truck() {
    var _this;

    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_TRUCK.id;
    var model = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_TRUCK.model;
    var producedYear = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_TRUCK.producedYear;
    var capacity = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DEFAULT_TRUCK.capacity;
    var averageSpeed = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : DEFAULT_TRUCK.averageSpeed;
    var licensePlate = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : DEFAULT_TRUCK.averageSpeed;
    var typeOfGas = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : DEFAULT_TRUCK.typeOfGas;

    _classCallCheck(this, Truck);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Truck).call(this, id, model, producedYear, capacity, averageSpeed));
    _this._licensePlate = licensePlate;
    _this._typeOfGas = typeOfGas;
    return _this;
  }

  _createClass(Truck, [{
    key: "showAverageSpeed",
    value: function showAverageSpeed() {
      return "".concat(this._averageSpeed, " km");
    }
  }]);

  return Truck;
}(_Transport2.default);

exports.default = Truck;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DEFAULT_SHIP = void 0;

var _Transport2 = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DEFAULT_SHIP = {
  id: 'xxxxx-qqqqq-aaaaa',
  model: 'Combo',
  name: 'JS Band Ship',
  producedYear: '2019',
  capacity: '200000',
  averageSpeed: '20',
  countOfTeam: '83'
};
exports.DEFAULT_SHIP = DEFAULT_SHIP;

var Ship =
/*#__PURE__*/
function (_Transport) {
  _inherits(Ship, _Transport);

  function Ship() {
    var _this;

    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_SHIP.id;
    var model = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_SHIP.model;
    var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_SHIP.name;
    var producedYear = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DEFAULT_SHIP.producedYear;
    var capacity = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : DEFAULT_SHIP.capacity;
    var averageSpeed = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : DEFAULT_SHIP.averageSpeed;
    var countOfTeam = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : DEFAULT_SHIP.countOfTeam;

    _classCallCheck(this, Ship);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Ship).call(this, id, model, producedYear, capacity, averageSpeed));
    _this._countOfTeam = countOfTeam;
    _this._name = name;
    return _this;
  }

  _createClass(Ship, [{
    key: "showAverageSpeed",
    value: function showAverageSpeed() {
      return "".concat(this._averageSpeed, " nm");
    }
  }]);

  return Ship;
}(_Transport2.default);

exports.default = Ship;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Cost = _interopRequireDefault(__webpack_require__(8));

var _LocalStorageService = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var localStorageService = _LocalStorageService.default.getInstance();

var COST_TOKEN = 'Cost';

var CostList =
/*#__PURE__*/
function () {
  function CostList() {
    _classCallCheck(this, CostList);

    this.costList = document.querySelector('.cost-list');
    var addCostButton = document.getElementById('add-cost');
    addCostButton.addEventListener('click', this.addCost.bind(this));
    this.render();
  }

  _createClass(CostList, [{
    key: "addCost",
    value: function addCost() {
      var _this = this;

      var model = document.querySelector('.model').value;
      var costByKilogram = document.querySelector('.costByKilogram').value;
      var costByDistance = document.querySelector('.costByDistance').value;
      var costInputs = document.querySelectorAll('.cost-input');
      var cost = new _Cost.default(model, costByKilogram, costByDistance);
      costInputs.forEach(function (input) {
        _newArrowCheck(this, _this);

        var inputValue = input;
        inputValue.value = '';
      }.bind(this));
      var li = document.createElement('li');
      li.insertAdjacentHTML('afterbegin', "\n      <span>Model:</span> ".concat(cost._model, "\n      <span>Cost by kilogram:</span> ").concat(cost._costByKilogram, "\n      <span>Cost by distance:</span> ").concat(cost._costByDistance, "\n    "));
      this.costList.appendChild(li);
      var costList = this.costList.innerHTML;
      localStorageService.saveToken(COST_TOKEN, costList);
    }
  }, {
    key: "render",
    value: function render() {
      this.costList.innerHTML = '';

      if (localStorageService.init(COST_TOKEN)) {
        localStorageService.saveToken(COST_TOKEN, null);
        console.log("local storage for ".concat(COST_TOKEN, " is initialized"));
      }

      this.costList.innerHTML = localStorageService.getToken(COST_TOKEN);
    }
  }]);

  return CostList;
}();

exports.default = CostList;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cost = function Cost(model, costByKilogram, costByDistance) {
  _classCallCheck(this, Cost);

  this._model = model;
  this._costByKilogram = costByKilogram;
  this._costByDistance = costByDistance;
};

exports.default = Cost;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=source.652cc.js.map