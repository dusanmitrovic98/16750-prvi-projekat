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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_transport_truck_truck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/transport/truck/truck */ "./src/models/transport/truck/truck.ts");
/* harmony import */ var _models_people_employee_employee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/people/employee/employee */ "./src/models/people/employee/employee.ts");


console.log("hello");
var truck = new _models_transport_truck_truck__WEBPACK_IMPORTED_MODULE_0__["Truck"]("f", new _models_people_employee_employee__WEBPACK_IMPORTED_MODULE_1__["default"]("s", "d"), 1, 2, 100, 0);
console.log(truck.refilFuelTankToMax());


/***/ }),

/***/ "./src/models/people/employee/employee.ts":
/*!************************************************!*\
  !*** ./src/models/people/employee/employee.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _person_person__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../person/person */ "./src/models/people/person/person.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, lastName) {
        return _super.call(this, name, lastName) || this;
    }
    return Employee;
}(_person_person__WEBPACK_IMPORTED_MODULE_0__["Person"]));
/* harmony default export */ __webpack_exports__["default"] = (Employee);


/***/ }),

/***/ "./src/models/people/person/person.ts":
/*!********************************************!*\
  !*** ./src/models/people/person/person.ts ***!
  \********************************************/
/*! exports provided: Person */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Person", function() { return Person; });
var Person = /** @class */ (function () {
    function Person(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
    return Person;
}());



/***/ }),

/***/ "./src/models/transport/truck/truck.ts":
/*!*********************************************!*\
  !*** ./src/models/transport/truck/truck.ts ***!
  \*********************************************/
/*! exports provided: TruckState, Truck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruckState", function() { return TruckState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Truck", function() { return Truck; });
/* harmony import */ var _vehicle_vehicle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vehicle/vehicle */ "./src/models/transport/vehicle/vehicle.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * @param TruckState Represents trucks current state
 * @param Avaible Truck avaible for usage, ready on standby
 * @param InTransport Truck is in transport
 * @param Broken Truck is broken, repair needed
 * @param InRepair Truck in repair process
 * @param IsBeingLoaded The truck is being filled with material
 * @param IsBeingUnloaded Unloading material from the truck
 */
var TruckState;
(function (TruckState) {
    TruckState[TruckState["Avaible"] = 0] = "Avaible";
    TruckState[TruckState["InTransport"] = 1] = "InTransport";
    TruckState[TruckState["Broken"] = 2] = "Broken";
    TruckState[TruckState["InRepair"] = 3] = "InRepair";
    TruckState[TruckState["IsBeingLoaded"] = 4] = "IsBeingLoaded";
    TruckState[TruckState["IsBeingUnloaded"] = 5] = "IsBeingUnloaded";
})(TruckState || (TruckState = {}));
/**
 * @param {string} brand Truck brand
 * @param {TruckState} truckState Truck current state
 * @param {Employee} driver Truck driver (factory employee)
 * @param {number} speed Truck speed (km/h ... kilometers per hour)
 * @param {number} maxFuelTankLevel Truck maximum fuel level in litres. Default 1400
 * @param {number} fuelConsumptionPer100Km Truck fuel consumption level per one hundred kilometres in litres. Default 27.5
 * @param {number} currentFuelTankLevel Truck current fuel level. Default value = 0
 */
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(brand, driver, speed, maxFuelTankLevel, fuelConsumptionPer100Km, currentFuelTankLevel) {
        if (maxFuelTankLevel === void 0) { maxFuelTankLevel = 1400; }
        if (fuelConsumptionPer100Km === void 0) { fuelConsumptionPer100Km = 27.5; }
        if (currentFuelTankLevel === void 0) { currentFuelTankLevel = 0; }
        var _this = _super.call(this, driver, speed, maxFuelTankLevel, fuelConsumptionPer100Km, currentFuelTankLevel) || this;
        _this.brand = brand;
        return _this;
    }
    /**
     * @function
     * Sets truck state to avaible
     */
    Truck.prototype.setStateToAvaible = function () {
        this.truckState = TruckState.Avaible;
    };
    /**
     * @function
     * Sets truck state to in transport
     */
    Truck.prototype.setStateToInTransport = function () {
        this.truckState = TruckState.InTransport;
    };
    /**
     * @function
     * Sets truck state to broken
     */
    Truck.prototype.setStateToBroken = function () {
        this.truckState = TruckState.Broken;
    };
    /**
     * @function
     * Sets truck state to in repair
     */
    Truck.prototype.setStateToInRepair = function () {
        this.truckState = TruckState.InRepair;
    };
    /**
     * @function
     * Sets truck state to is being loaded
     */
    Truck.prototype.setStateToIsBeingLoaded = function () {
        this.truckState = TruckState.IsBeingLoaded;
    };
    /**
     * @function
     * Sets truck state to is being unloaded
     */
    Truck.prototype.setStateToIsBeingUnloaded = function () {
        this.truckState = TruckState.IsBeingUnloaded;
    };
    return Truck;
}(_vehicle_vehicle__WEBPACK_IMPORTED_MODULE_0__["Vehicle"]));



/***/ }),

/***/ "./src/models/transport/vehicle/vehicle.ts":
/*!*************************************************!*\
  !*** ./src/models/transport/vehicle/vehicle.ts ***!
  \*************************************************/
/*! exports provided: Vehicle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vehicle", function() { return Vehicle; });
/**
 * @class
 * @param driver Vehicle driver
 * @param speed Vehicle speed (km/h ... kilometers per hour)
 * @param currentFuelTankLevel Vehicle current fuel level. Default value = 0
 * @param maxFuelTankLevel Vehicle maximum fuel level in litres.
 * @param fuelConsumptionPer100Km Vehicle fuel consumption level per one hundred kilometres in litres.
 */
var Vehicle = /** @class */ (function () {
    function Vehicle(driver, speed, maxFuelTankLevel, fuelConsumptionPer100Km, currentFuelTankLevel) {
        if (currentFuelTankLevel === void 0) { currentFuelTankLevel = 0; }
        this.driver = driver;
        this.speed = speed;
        this.maxFuelTankLevel = maxFuelTankLevel;
        this.fuelConsumptionPer100Km = fuelConsumptionPer100Km;
        this.currentFuelTankLevel = currentFuelTankLevel;
    }
    /**
     * @function
     * Calculates value of vehicle fuel consumption per kilometer in litres
     * @returns {number} Value of vehicle fuel consumption per kilometer in litres
     */
    Vehicle.prototype.fuelConsumptionPerKilometer = function () {
        return this.fuelConsumptionPer100Km / 100;
    };
    /**
     * @function
     * Refils fuel tank level to maximum capacity
     * @returns {number} Value of litre that was needed to refil fuel tank from current number
     * of litres to maximum fuel tank capacity
     */
    Vehicle.prototype.refilFuelTankToMax = function () {
        var fuelUsed = this.maxFuelTankLevel - this.currentFuelTankLevel;
        this.currentFuelTankLevel = this.maxFuelTankLevel;
        return fuelUsed;
    };
    /**
     * @function
     * Fill vehicle fuel tank with a specified number of liters
     * @param litresToRefil Number of litres that will be refiled
     * @returns {number} Number of litres that exceeded maximum fuel tank capacity if an overrun
     * has occurred. Otherwise if there were no overdrafts 0
     */
    Vehicle.prototype.refilFuelTank = function (litresToRefil) {
        var tmpCurentFuelTankLevel = this.currentFuelTankLevel;
        this.currentFuelTankLevel = this.currentFuelTankLevel + litresToRefil;
        if (this.currentFuelTankLevel <= this.maxFuelTankLevel) {
            return 0;
        }
        else {
            this.currentFuelTankLevel = this.maxFuelTankLevel;
            return this.maxFuelTankLevel - tmpCurentFuelTankLevel;
        }
    };
    return Vehicle;
}());



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvcGVvcGxlL2VtcGxveWVlL2VtcGxveWVlLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvcGVvcGxlL3BlcnNvbi9wZXJzb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy90cmFuc3BvcnQvdHJ1Y2svdHJ1Y2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy90cmFuc3BvcnQvdmVoaWNsZS92ZWhpY2xlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQW1FO0FBQ1Y7QUFFekQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7QUFFcEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxtRUFB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QUFDO0lBQ3JELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsNkNBQTJCLEdBQTNCO1FBQ0ksT0FBTyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsR0FBRyxDQUFDO0lBQzlDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILG9DQUFrQixHQUFsQjtRQUNJLElBQUksUUFBUSxHQUFXLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUM7UUFDekUsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUNsRCxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsK0JBQWEsR0FBYixVQUFjLGFBQXFCO1FBQy9CLElBQUksc0JBQXNCLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDO1FBQ3ZELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsYUFBYSxDQUFDO1FBQ3RFLElBQUksSUFBSSxDQUFDLG9CQUFvQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUNwRCxPQUFPLENBQUMsQ0FBQztTQUNaO2FBQ0k7WUFDRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQ2xELE9BQU8sSUFBSSxDQUFDLGdCQUFnQixHQUFHLHNCQUFzQixDQUFDO1NBQ3pEO0lBQ0wsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHsgVHJ1Y2ssIFRydWNrU3RhdGUgfSBmcm9tIFwiLi9tb2RlbHMvdHJhbnNwb3J0L3RydWNrL3RydWNrXCI7XHJcbmltcG9ydCBFbXBsb3llZSBmcm9tIFwiLi9tb2RlbHMvcGVvcGxlL2VtcGxveWVlL2VtcGxveWVlXCI7XHJcblxyXG5jb25zb2xlLmxvZyhcImhlbGxvXCIpXHJcblxyXG5sZXQgdHJ1Y2sgPSBuZXcgVHJ1Y2soXCJmXCIsIG5ldyBFbXBsb3llZShcInNcIiwgXCJkXCIpLCAxLCAyLCAxMDAsIDApO1xyXG5cclxuY29uc29sZS5sb2codHJ1Y2sucmVmaWxGdWVsVGFua1RvTWF4KCkpOyIsImltcG9ydCB7IFBlcnNvbiB9IGZyb20gJy4uL3BlcnNvbi9wZXJzb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1wbG95ZWUgZXh0ZW5kcyBQZXJzb24ge1xyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSwgbGFzdE5hbWUpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFBlcnNvbiB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBsYXN0TmFtZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5sYXN0TmFtZSA9IGxhc3ROYW1lO1xyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIEFkZDpcclxuICogLVJlcGFpciB0aW1lIVxyXG4gKi9cclxuaW1wb3J0IEVtcGxveWVlIGZyb20gXCIuLi8uLi9wZW9wbGUvZW1wbG95ZWUvZW1wbG95ZWVcIjtcclxuaW1wb3J0IHsgVmVoaWNsZSB9IGZyb20gXCIuLi92ZWhpY2xlL3ZlaGljbGVcIjtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gVHJ1Y2tTdGF0ZSBSZXByZXNlbnRzIHRydWNrcyBjdXJyZW50IHN0YXRlXHJcbiAqIEBwYXJhbSBBdmFpYmxlIFRydWNrIGF2YWlibGUgZm9yIHVzYWdlLCByZWFkeSBvbiBzdGFuZGJ5XHJcbiAqIEBwYXJhbSBJblRyYW5zcG9ydCBUcnVjayBpcyBpbiB0cmFuc3BvcnRcclxuICogQHBhcmFtIEJyb2tlbiBUcnVjayBpcyBicm9rZW4sIHJlcGFpciBuZWVkZWRcclxuICogQHBhcmFtIEluUmVwYWlyIFRydWNrIGluIHJlcGFpciBwcm9jZXNzXHJcbiAqIEBwYXJhbSBJc0JlaW5nTG9hZGVkIFRoZSB0cnVjayBpcyBiZWluZyBmaWxsZWQgd2l0aCBtYXRlcmlhbFxyXG4gKiBAcGFyYW0gSXNCZWluZ1VubG9hZGVkIFVubG9hZGluZyBtYXRlcmlhbCBmcm9tIHRoZSB0cnVja1xyXG4gKi9cclxuZXhwb3J0IGVudW0gVHJ1Y2tTdGF0ZSB7XHJcbiAgICBBdmFpYmxlLFxyXG4gICAgSW5UcmFuc3BvcnQsXHJcbiAgICBCcm9rZW4sXHJcbiAgICBJblJlcGFpcixcclxuICAgIElzQmVpbmdMb2FkZWQsXHJcbiAgICBJc0JlaW5nVW5sb2FkZWRcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBicmFuZCBUcnVjayBicmFuZFxyXG4gKiBAcGFyYW0ge1RydWNrU3RhdGV9IHRydWNrU3RhdGUgVHJ1Y2sgY3VycmVudCBzdGF0ZVxyXG4gKiBAcGFyYW0ge0VtcGxveWVlfSBkcml2ZXIgVHJ1Y2sgZHJpdmVyIChmYWN0b3J5IGVtcGxveWVlKVxyXG4gKiBAcGFyYW0ge251bWJlcn0gc3BlZWQgVHJ1Y2sgc3BlZWQgKGttL2ggLi4uIGtpbG9tZXRlcnMgcGVyIGhvdXIpXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhGdWVsVGFua0xldmVsIFRydWNrIG1heGltdW0gZnVlbCBsZXZlbCBpbiBsaXRyZXMuIERlZmF1bHQgMTQwMFxyXG4gKiBAcGFyYW0ge251bWJlcn0gZnVlbENvbnN1bXB0aW9uUGVyMTAwS20gVHJ1Y2sgZnVlbCBjb25zdW1wdGlvbiBsZXZlbCBwZXIgb25lIGh1bmRyZWQga2lsb21ldHJlcyBpbiBsaXRyZXMuIERlZmF1bHQgMjcuNVxyXG4gKiBAcGFyYW0ge251bWJlcn0gY3VycmVudEZ1ZWxUYW5rTGV2ZWwgVHJ1Y2sgY3VycmVudCBmdWVsIGxldmVsLiBEZWZhdWx0IHZhbHVlID0gMFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFRydWNrIGV4dGVuZHMgVmVoaWNsZSB7XHJcbiAgICBicmFuZDogc3RyaW5nO1xyXG4gICAgdHJ1Y2tTdGF0ZTogVHJ1Y2tTdGF0ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihicmFuZDogc3RyaW5nLCBkcml2ZXI6IEVtcGxveWVlLCBzcGVlZDogbnVtYmVyLCBtYXhGdWVsVGFua0xldmVsOiBudW1iZXIgPSAxNDAwLCBmdWVsQ29uc3VtcHRpb25QZXIxMDBLbTogbnVtYmVyID0gMjcuNSwgY3VycmVudEZ1ZWxUYW5rTGV2ZWw6IG51bWJlciA9IDApIHtcclxuICAgICAgICBzdXBlcihkcml2ZXIsIHNwZWVkLCBtYXhGdWVsVGFua0xldmVsLCBmdWVsQ29uc3VtcHRpb25QZXIxMDBLbSwgY3VycmVudEZ1ZWxUYW5rTGV2ZWwpO1xyXG4gICAgICAgIHRoaXMuYnJhbmQgPSBicmFuZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBmdW5jdGlvbiBcclxuICAgICAqIFNldHMgdHJ1Y2sgc3RhdGUgdG8gYXZhaWJsZVxyXG4gICAgICovXHJcbiAgICBzZXRTdGF0ZVRvQXZhaWJsZSgpIHtcclxuICAgICAgICB0aGlzLnRydWNrU3RhdGUgPSBUcnVja1N0YXRlLkF2YWlibGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZnVuY3Rpb24gXHJcbiAgICAgKiBTZXRzIHRydWNrIHN0YXRlIHRvIGluIHRyYW5zcG9ydFxyXG4gICAgICovXHJcbiAgICBzZXRTdGF0ZVRvSW5UcmFuc3BvcnQoKSB7XHJcbiAgICAgICAgdGhpcy50cnVja1N0YXRlID0gVHJ1Y2tTdGF0ZS5JblRyYW5zcG9ydDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBmdW5jdGlvbiBcclxuICAgICAqIFNldHMgdHJ1Y2sgc3RhdGUgdG8gYnJva2VuXHJcbiAgICAgKi9cclxuICAgIHNldFN0YXRlVG9Ccm9rZW4oKSB7XHJcbiAgICAgICAgdGhpcy50cnVja1N0YXRlID0gVHJ1Y2tTdGF0ZS5Ccm9rZW47XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZnVuY3Rpb25cclxuICAgICAqIFNldHMgdHJ1Y2sgc3RhdGUgdG8gaW4gcmVwYWlyXHJcbiAgICAgKi9cclxuICAgIHNldFN0YXRlVG9JblJlcGFpcigpIHtcclxuICAgICAgICB0aGlzLnRydWNrU3RhdGUgPSBUcnVja1N0YXRlLkluUmVwYWlyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGZ1bmN0aW9uIFxyXG4gICAgICogU2V0cyB0cnVjayBzdGF0ZSB0byBpcyBiZWluZyBsb2FkZWRcclxuICAgICAqL1xyXG4gICAgc2V0U3RhdGVUb0lzQmVpbmdMb2FkZWQoKSB7XHJcbiAgICAgICAgdGhpcy50cnVja1N0YXRlID0gVHJ1Y2tTdGF0ZS5Jc0JlaW5nTG9hZGVkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGZ1bmN0aW9uIFxyXG4gICAgICogU2V0cyB0cnVjayBzdGF0ZSB0byBpcyBiZWluZyB1bmxvYWRlZFxyXG4gICAgICovXHJcbiAgICBzZXRTdGF0ZVRvSXNCZWluZ1VubG9hZGVkKCkge1xyXG4gICAgICAgIHRoaXMudHJ1Y2tTdGF0ZSA9IFRydWNrU3RhdGUuSXNCZWluZ1VubG9hZGVkO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUGVyc29uIH0gZnJvbSBcIi4uLy4uL3Blb3BsZS9wZXJzb24vcGVyc29uXCI7XHJcblxyXG4vKipcclxuICogQGNsYXNzXHJcbiAqIEBwYXJhbSBkcml2ZXIgVmVoaWNsZSBkcml2ZXJcclxuICogQHBhcmFtIHNwZWVkIFZlaGljbGUgc3BlZWQgKGttL2ggLi4uIGtpbG9tZXRlcnMgcGVyIGhvdXIpXHJcbiAqIEBwYXJhbSBjdXJyZW50RnVlbFRhbmtMZXZlbCBWZWhpY2xlIGN1cnJlbnQgZnVlbCBsZXZlbC4gRGVmYXVsdCB2YWx1ZSA9IDBcclxuICogQHBhcmFtIG1heEZ1ZWxUYW5rTGV2ZWwgVmVoaWNsZSBtYXhpbXVtIGZ1ZWwgbGV2ZWwgaW4gbGl0cmVzLiBcclxuICogQHBhcmFtIGZ1ZWxDb25zdW1wdGlvblBlcjEwMEttIFZlaGljbGUgZnVlbCBjb25zdW1wdGlvbiBsZXZlbCBwZXIgb25lIGh1bmRyZWQga2lsb21ldHJlcyBpbiBsaXRyZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVmVoaWNsZSB7XHJcbiAgICBkcml2ZXI6IFBlcnNvbjtcclxuICAgIHNwZWVkOiBudW1iZXI7XHJcbiAgICBtYXhGdWVsVGFua0xldmVsOiBudW1iZXI7XHJcbiAgICBmdWVsQ29uc3VtcHRpb25QZXIxMDBLbTogbnVtYmVyO1xyXG4gICAgY3VycmVudEZ1ZWxUYW5rTGV2ZWw6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihkcml2ZXI6IFBlcnNvbiwgc3BlZWQ6IG51bWJlciwgbWF4RnVlbFRhbmtMZXZlbDogbnVtYmVyLCBmdWVsQ29uc3VtcHRpb25QZXIxMDBLbTogbnVtYmVyLCBjdXJyZW50RnVlbFRhbmtMZXZlbDogbnVtYmVyID0gMCkge1xyXG4gICAgICAgIHRoaXMuZHJpdmVyID0gZHJpdmVyO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcclxuICAgICAgICB0aGlzLm1heEZ1ZWxUYW5rTGV2ZWwgPSBtYXhGdWVsVGFua0xldmVsO1xyXG4gICAgICAgIHRoaXMuZnVlbENvbnN1bXB0aW9uUGVyMTAwS20gPSBmdWVsQ29uc3VtcHRpb25QZXIxMDBLbTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRGdWVsVGFua0xldmVsID0gY3VycmVudEZ1ZWxUYW5rTGV2ZWw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZnVuY3Rpb25cclxuICAgICAqIENhbGN1bGF0ZXMgdmFsdWUgb2YgdmVoaWNsZSBmdWVsIGNvbnN1bXB0aW9uIHBlciBraWxvbWV0ZXIgaW4gbGl0cmVzXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSBWYWx1ZSBvZiB2ZWhpY2xlIGZ1ZWwgY29uc3VtcHRpb24gcGVyIGtpbG9tZXRlciBpbiBsaXRyZXNcclxuICAgICAqL1xyXG4gICAgZnVlbENvbnN1bXB0aW9uUGVyS2lsb21ldGVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZ1ZWxDb25zdW1wdGlvblBlcjEwMEttIC8gMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGZ1bmN0aW9uXHJcbiAgICAgKiBSZWZpbHMgZnVlbCB0YW5rIGxldmVsIHRvIG1heGltdW0gY2FwYWNpdHlcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IFZhbHVlIG9mIGxpdHJlIHRoYXQgd2FzIG5lZWRlZCB0byByZWZpbCBmdWVsIHRhbmsgZnJvbSBjdXJyZW50IG51bWJlciBcclxuICAgICAqIG9mIGxpdHJlcyB0byBtYXhpbXVtIGZ1ZWwgdGFuayBjYXBhY2l0eVxyXG4gICAgICovXHJcbiAgICByZWZpbEZ1ZWxUYW5rVG9NYXgoKSB7XHJcbiAgICAgICAgbGV0IGZ1ZWxVc2VkOiBudW1iZXIgPSB0aGlzLm1heEZ1ZWxUYW5rTGV2ZWwgLSB0aGlzLmN1cnJlbnRGdWVsVGFua0xldmVsO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEZ1ZWxUYW5rTGV2ZWwgPSB0aGlzLm1heEZ1ZWxUYW5rTGV2ZWw7XHJcbiAgICAgICAgcmV0dXJuIGZ1ZWxVc2VkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGZ1bmN0aW9uXHJcbiAgICAgKiBGaWxsIHZlaGljbGUgZnVlbCB0YW5rIHdpdGggYSBzcGVjaWZpZWQgbnVtYmVyIG9mIGxpdGVyc1xyXG4gICAgICogQHBhcmFtIGxpdHJlc1RvUmVmaWwgTnVtYmVyIG9mIGxpdHJlcyB0aGF0IHdpbGwgYmUgcmVmaWxlZFxyXG4gICAgICogQHJldHVybnMge251bWJlcn0gTnVtYmVyIG9mIGxpdHJlcyB0aGF0IGV4Y2VlZGVkIG1heGltdW0gZnVlbCB0YW5rIGNhcGFjaXR5IGlmIGFuIG92ZXJydW5cclxuICAgICAqIGhhcyBvY2N1cnJlZC4gT3RoZXJ3aXNlIGlmIHRoZXJlIHdlcmUgbm8gb3ZlcmRyYWZ0cyAwXHJcbiAgICAgKi9cclxuICAgIHJlZmlsRnVlbFRhbmsobGl0cmVzVG9SZWZpbDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHRtcEN1cmVudEZ1ZWxUYW5rTGV2ZWwgPSB0aGlzLmN1cnJlbnRGdWVsVGFua0xldmVsO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEZ1ZWxUYW5rTGV2ZWwgPSB0aGlzLmN1cnJlbnRGdWVsVGFua0xldmVsICsgbGl0cmVzVG9SZWZpbDtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50RnVlbFRhbmtMZXZlbCA8PSB0aGlzLm1heEZ1ZWxUYW5rTGV2ZWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRGdWVsVGFua0xldmVsID0gdGhpcy5tYXhGdWVsVGFua0xldmVsO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXhGdWVsVGFua0xldmVsIC0gdG1wQ3VyZW50RnVlbFRhbmtMZXZlbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9