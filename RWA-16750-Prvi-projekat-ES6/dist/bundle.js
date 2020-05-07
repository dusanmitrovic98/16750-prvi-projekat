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

/***/ "./src/.bin/string-manipulation/string-manipulation.ts":
/*!*************************************************************!*\
  !*** ./src/.bin/string-manipulation/string-manipulation.ts ***!
  \*************************************************************/
/*! exports provided: FormatString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatString", function() { return FormatString; });
function FormatString(stringToBeFormated, delimiter) {
    var formatedString;
    formatedString = stringToBeFormated.split(delimiter);
    for (var i = 0; i < formatedString.length - 1; i++) {
        for (var j = i + 1; j < formatedString.length; j++) {
            if (formatedString[j] === formatedString[j].toUpperCase()) {
            }
        }
    }
    return formatedString;
}


/***/ }),

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
/* harmony import */ var _models_people_employeer_employeer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/people/employeer/employeer */ "./src/models/people/employeer/employeer.ts");
/* harmony import */ var _bin_string_manipulation_string_manipulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./.bin/string-manipulation/string-manipulation */ "./src/.bin/string-manipulation/string-manipulation.ts");




console.log("hello");
var chocolateMaterialList;
var truck = new _models_transport_truck_truck__WEBPACK_IMPORTED_MODULE_0__["Truck"]("f", new _models_people_employee_employee__WEBPACK_IMPORTED_MODULE_1__["Employee"]("s", "d", new _models_people_employeer_employeer__WEBPACK_IMPORTED_MODULE_2__["Empolyeer"]("Bob", "Martin")), chocolateMaterialList, 1, 2, 100, 0);
console.log(truck.refilFuelTankToMaximum());
console.log(truck.driver.factoryEmployeer.employeerMoodState);
console.log(Object(_bin_string_manipulation_string_manipulation__WEBPACK_IMPORTED_MODULE_3__["FormatString"])(truck.driver.factoryEmployeer.employeerWorkState.toString(), ""));


/***/ }),

/***/ "./src/models/chocolate-materials/chocolate-material-list.ts":
/*!*******************************************************************!*\
  !*** ./src/models/chocolate-materials/chocolate-material-list.ts ***!
  \*******************************************************************/
/*! exports provided: ChocolateMaterialList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChocolateMaterialList", function() { return ChocolateMaterialList; });
/**
 * @class
 * Represents list of chocolate materials
 * @param chocolateMaterialList
 */
var ChocolateMaterialList = /** @class */ (function () {
    function ChocolateMaterialList(chocolateMaterialList) {
        if (chocolateMaterialList === void 0) { chocolateMaterialList = new Array(); }
        this.chocolateMaterialList = chocolateMaterialList;
    }
    /**
     * @function
     * Adds chocolate material to list
     * @param chocolateMaterial Chocolate material that will be added to list
     */
    ChocolateMaterialList.prototype.addChocolateMaterialToList = function (chocolateMaterial) {
        this.chocolateMaterialList.push(chocolateMaterial);
    };
    return ChocolateMaterialList;
}());



/***/ }),

/***/ "./src/models/chocolate-materials/chocolate-material.ts":
/*!**************************************************************!*\
  !*** ./src/models/chocolate-materials/chocolate-material.ts ***!
  \**************************************************************/
/*! exports provided: ChocolateMaterialType, ChocolateMaterial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChocolateMaterialType", function() { return ChocolateMaterialType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChocolateMaterial", function() { return ChocolateMaterial; });
/**
 * @enum
 * Represents chocolate material type
 * @param MilkChocolateMaterial Milk chocolate material type
 * @param DarkChocolateMaterial Dark chocolate material type
 * @param WhiteChocolateMaterial White chocolate material type
 * @param RubyChocolateMaterial Ruby chocolate material type
 */
var ChocolateMaterialType;
(function (ChocolateMaterialType) {
    ChocolateMaterialType["MilkChocolateMaterial"] = "MilkChocolateMaterial";
    ChocolateMaterialType["DarkChocolateMaterial"] = "DarkChocolateMaterial";
    ChocolateMaterialType["WhiteChocolateMaterial"] = "WhiteChocolateMaterial";
    ChocolateMaterialType["RubyChocolateMaterial"] = "RubyChocolateMaterial";
})(ChocolateMaterialType || (ChocolateMaterialType = {}));
/**
 * @class
 * Represents chocolate material model
 * @param {ChocolateMaterialType} chocolateMaterialType Type of chocolate material
 */
var ChocolateMaterial = /** @class */ (function () {
    function ChocolateMaterial(chocolateMaterialType) {
        if (chocolateMaterialType === void 0) { chocolateMaterialType = ChocolateMaterialType.DarkChocolateMaterial; }
        this.chocolateMaterialType = chocolateMaterialType;
    }
    return ChocolateMaterial;
}());



/***/ }),

/***/ "./src/models/chocolate-products/chocolate-product-list.ts":
/*!*****************************************************************!*\
  !*** ./src/models/chocolate-products/chocolate-product-list.ts ***!
  \*****************************************************************/
/*! exports provided: ChocolateProductList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChocolateProductList", function() { return ChocolateProductList; });
/**
 * @class
 * Represents list of chocolate products
 * @param {ChocolateProduct[]} chocolateProductList List of chocolate products
 */
var ChocolateProductList = /** @class */ (function () {
    function ChocolateProductList(chocolateProductList) {
        if (chocolateProductList === void 0) { chocolateProductList = new Array(); }
        this.chocolateProductList = chocolateProductList;
    }
    /**
     * @function
     * Adds new chocolate product to list of chocolate products
     * @param newChocolateProduct Chocolate product that will be added to list
     */
    ChocolateProductList.prototype.addChocolateProductToList = function (newChocolateProduct) {
        this.chocolateProductList.push(newChocolateProduct);
    };
    return ChocolateProductList;
}());



/***/ }),

/***/ "./src/models/chocolate-products/chocolate-product.ts":
/*!************************************************************!*\
  !*** ./src/models/chocolate-products/chocolate-product.ts ***!
  \************************************************************/
/*! exports provided: ChocolateProductType, ChocolateProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChocolateProductType", function() { return ChocolateProductType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChocolateProduct", function() { return ChocolateProduct; });
/**
 * @enum
 * Represents chocolate product type
 * @param MilkChocolate Milk chocolate product
 * @param DarkChocolate Dark chocolate product
 * @param WhiteChocolate White chocolate product
 * @param RubyChocolate Ruby chocolate product
 */
var ChocolateProductType;
(function (ChocolateProductType) {
    ChocolateProductType["MilkChocolate"] = "MilkChocolate";
    ChocolateProductType["DarkChocolate"] = "DarkChocolate";
    ChocolateProductType["WhiteChocolate"] = "WhiteChocolate";
    ChocolateProductType["RubyChocolate"] = "RubyChocolate";
})(ChocolateProductType || (ChocolateProductType = {}));
/**
 * @class
 * Represents chocolate product model
 * @param {ChocolateProductType} chocolateProductType Chocolate product type. Default value =
 * DarkChocolate
 */
var ChocolateProduct = /** @class */ (function () {
    function ChocolateProduct(chocolateProductType) {
        if (chocolateProductType === void 0) { chocolateProductType = ChocolateProductType.DarkChocolate; }
        this.chocolateProductType = chocolateProductType;
    }
    return ChocolateProduct;
}());



/***/ }),

/***/ "./src/models/people/employee/employee.ts":
/*!************************************************!*\
  !*** ./src/models/people/employee/employee.ts ***!
  \************************************************/
/*! exports provided: Employee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employee", function() { return Employee; });
/* harmony import */ var _person_person__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../person/person */ "./src/models/people/person/person.ts");
/* harmony import */ var _chocolate_products_chocolate_product_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chocolate-products/chocolate-product-list */ "./src/models/chocolate-products/chocolate-product-list.ts");
/* harmony import */ var _chocolate_materials_chocolate_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../chocolate-materials/chocolate-material */ "./src/models/chocolate-materials/chocolate-material.ts");
/* harmony import */ var _chocolate_products_chocolate_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../chocolate-products/chocolate-product */ "./src/models/chocolate-products/chocolate-product.ts");
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
 * @class
 * Represents employee model
 * @param name Empoyee name
 * @param lastName Employee last name
 * @param drivingLicence Employee has a driver's licence, drivingLicence=true. Otherwise,
 * drivingLicence=false. DefaultValue=false
 */
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, lastName, factoryEmployeer, drivingLicence) {
        if (drivingLicence === void 0) { drivingLicence = false; }
        var _this = _super.call(this, name, lastName, drivingLicence) || this;
        _this.factoryEmployeer = factoryEmployeer;
        _this.producedChocolateGoods = new _chocolate_products_chocolate_product_list__WEBPACK_IMPORTED_MODULE_1__["ChocolateProductList"]();
        return _this;
    }
    /**
     * @function
     * Produces one chocolate of specfic type. Type of chocolate (ChocolateProductType) is
     * decided depending on what material (ChocolateMaterialType) is used.
     * @param chocolateMaterial Chocolate material needed for production of one chocolate of
     * specific type.
     * @returns {ChocolateProduct} MilkChocolate if MilkChocolateMaterial is used
     * @returns {ChocolateProduct} DarkChocolate if DarkChocolateMaterial is used
     * @returns {ChocolateProduct} WhiteChocolate if WhiteChocolateMaterial is used
     * @returns {ChocolateProduct} RubyChocolate if RubyChocolateMaterial is used
     * @Otherwise returns null
     */
    Employee.prototype.produceChocolateProduct = function (chocolateMaterial) {
        var producedChocolateProduct = new _chocolate_products_chocolate_product__WEBPACK_IMPORTED_MODULE_3__["ChocolateProduct"]();
        if (chocolateMaterial.chocolateMaterialType === _chocolate_materials_chocolate_material__WEBPACK_IMPORTED_MODULE_2__["ChocolateMaterialType"].DarkChocolateMaterial) {
            producedChocolateProduct.chocolateProductType = _chocolate_products_chocolate_product__WEBPACK_IMPORTED_MODULE_3__["ChocolateProductType"].DarkChocolate;
        }
        else if (chocolateMaterial.chocolateMaterialType === _chocolate_materials_chocolate_material__WEBPACK_IMPORTED_MODULE_2__["ChocolateMaterialType"].WhiteChocolateMaterial) {
            producedChocolateProduct.chocolateProductType = _chocolate_products_chocolate_product__WEBPACK_IMPORTED_MODULE_3__["ChocolateProductType"].WhiteChocolate;
        }
        else if (chocolateMaterial.chocolateMaterialType === _chocolate_materials_chocolate_material__WEBPACK_IMPORTED_MODULE_2__["ChocolateMaterialType"].MilkChocolateMaterial) {
            producedChocolateProduct.chocolateProductType = _chocolate_products_chocolate_product__WEBPACK_IMPORTED_MODULE_3__["ChocolateProductType"].MilkChocolate;
        }
        else if (chocolateMaterial.chocolateMaterialType === _chocolate_materials_chocolate_material__WEBPACK_IMPORTED_MODULE_2__["ChocolateMaterialType"].RubyChocolateMaterial) {
            producedChocolateProduct.chocolateProductType = _chocolate_products_chocolate_product__WEBPACK_IMPORTED_MODULE_3__["ChocolateProductType"].RubyChocolate;
        }
        else {
            producedChocolateProduct = null;
        }
        this.producedChocolateGoods.addChocolateProductToList(producedChocolateProduct);
        return producedChocolateProduct;
    };
    return Employee;
}(_person_person__WEBPACK_IMPORTED_MODULE_0__["Person"]));



/***/ }),

/***/ "./src/models/people/employeer/employeer.ts":
/*!**************************************************!*\
  !*** ./src/models/people/employeer/employeer.ts ***!
  \**************************************************/
/*! exports provided: EmployeerWorkState, EmployeerMoodState, Empolyeer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeerWorkState", function() { return EmployeerWorkState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeerMoodState", function() { return EmployeerMoodState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Empolyeer", function() { return Empolyeer; });
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
/**
 * sto vise vremena prolazi postaje umoran
 */

/**
 * @enum
 * Represents employers current work state
 * @param MaximumWorkDedicationTireless Maximum work dedication. Tireless. Concentration 100%
 * @param MediumWorkDedicationFeelingTired Medium work dedication. Feeling tired. Concentration 50%
 * @param LowWorcDedicationTired Low work dedication. Tired. Concentration 25%
 */
var EmployeerWorkState;
(function (EmployeerWorkState) {
    EmployeerWorkState["MaximumWorkDedicationTireless"] = "Tireless";
    EmployeerWorkState["MediumWorkDedicationFeelingTired"] = "FeelingTired";
    EmployeerWorkState["LowWorcDedicationTired"] = "Tired";
})(EmployeerWorkState || (EmployeerWorkState = {}));
/**
 * @enum
 * Represents employeer mood state
 * @param Exelent Exelent mood state. Positive mood level 100%
 * @param VeryGood Very good mood state. Positive mood level 75%
 * @param Good Good mood state. Positive mood level 50%
 * @param Stressed Stressed mood state. Positive mood level 25%
 * @param Devastated Devastated mood state. Positive mood level 0%
 */
var EmployeerMoodState;
(function (EmployeerMoodState) {
    EmployeerMoodState["Exelent"] = "Exelent";
    EmployeerMoodState["VeryGood"] = "VeryGood";
    EmployeerMoodState["Good"] = "Good";
    EmployeerMoodState["Stressed"] = "Stressed";
    EmployeerMoodState["Devastated"] = "Devastated";
})(EmployeerMoodState || (EmployeerMoodState = {}));
/**
 * @class
 * Represents Employeer model
 * @param employeerWorkState Represents employeer work state
 * @param employeerMoodState Represents employeer mood state
 */
var Empolyeer = /** @class */ (function (_super) {
    __extends(Empolyeer, _super);
    function Empolyeer(name, lastName, drivingLicence, employeerWorkState, employeerMoodState) {
        if (drivingLicence === void 0) { drivingLicence = false; }
        if (employeerWorkState === void 0) { employeerWorkState = EmployeerWorkState.MediumWorkDedicationFeelingTired; }
        if (employeerMoodState === void 0) { employeerMoodState = EmployeerMoodState.Good; }
        var _this = _super.call(this, name, lastName, drivingLicence) || this;
        _this.employeerWorkState = employeerWorkState;
        _this.employeerMoodState = employeerMoodState;
        return _this;
    }
    Empolyeer.prototype.setWorkStateToMaximumWorkDedicationTireless = function () {
        this.employeerWorkState = EmployeerWorkState.MaximumWorkDedicationTireless;
    };
    Empolyeer.prototype.setWorkStateToMediumWorkDedicationFeelingTired = function () {
        this.employeerWorkState = EmployeerWorkState.MediumWorkDedicationFeelingTired;
    };
    Empolyeer.prototype.setWorkStateToLowWorkDedicationTired = function () {
        this.employeerWorkState = EmployeerWorkState.LowWorcDedicationTired;
    };
    Empolyeer.prototype.setMoodStateToExelent = function () {
        this.employeerMoodState = EmployeerMoodState.Exelent;
    };
    Empolyeer.prototype.setMoodStateToVeryGood = function () {
        this.employeerMoodState = EmployeerMoodState.VeryGood;
    };
    Empolyeer.prototype.setMoodStateToGood = function () {
        this.employeerMoodState = EmployeerMoodState.Good;
    };
    Empolyeer.prototype.setMoodStateToStressed = function () {
        this.employeerMoodState = EmployeerMoodState.Stressed;
    };
    Empolyeer.prototype.setMoodStateToDevastated = function () {
        this.employeerMoodState = EmployeerMoodState.Devastated;
    };
    return Empolyeer;
}(_person_person__WEBPACK_IMPORTED_MODULE_0__["Person"]));



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
/**
 * @class
 * @param name Person name
 * @param lastName Person last name
 * @param drivingLicence Person has a driver's licence, drivingLicence=true. Otherwise,
 * drivingLicence=false. DefaultValue=false
 */
var Person = /** @class */ (function () {
    function Person(name, lastName, drivingLicence) {
        if (drivingLicence === void 0) { drivingLicence = false; }
        this.name = name;
        this.lastName = lastName;
        this.drivingLicence = drivingLicence;
    }
    return Person;
}());



/***/ }),

/***/ "./src/models/transport/truck/truck.ts":
/*!*********************************************!*\
  !*** ./src/models/transport/truck/truck.ts ***!
  \*********************************************/
/*! exports provided: TruckState, TruckCargoWorkState, Truck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruckState", function() { return TruckState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruckCargoWorkState", function() { return TruckCargoWorkState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Truck", function() { return Truck; });
/* harmony import */ var _vehicle_vehicle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vehicle/vehicle */ "./src/models/transport/vehicle/vehicle.ts");
/* harmony import */ var _chocolate_materials_chocolate_material_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chocolate-materials/chocolate-material-list */ "./src/models/chocolate-materials/chocolate-material-list.ts");
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
 * @enum
 * Represents current truck state
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
    TruckState["Avaible"] = "Avaible";
    TruckState["InTransport"] = "InTransport";
    TruckState["Broken"] = "Broken";
    TruckState["InRepair"] = "InRepair";
    TruckState["IsBeingLoaded"] = "IsBeingLoaded";
    TruckState["IsBeingUnloaded"] = "IsBeingUnloaded";
})(TruckState || (TruckState = {}));
/**
 * @enum
 * Represents Truck cargo work state. Loading or unloading, materials or products, to or from cargo
 * @param ChocolateMaterialLoading Loading chocolate materials to cargo
 * @param ChocolateMaterialUnloading Unloading chocolate materials from cargo
 * @param ChocolateProductLoading Loading chocolate products to cargo
 * @param ChocolateProductUnloading Unloading chocolate products from cargo
 */
var TruckCargoWorkState;
(function (TruckCargoWorkState) {
    TruckCargoWorkState["ChocolateMaterialLoading"] = "ChocolateMaterialLoading";
    TruckCargoWorkState["ChocolateMaterialUnloading"] = "ChocolateMaterialUnloading";
    TruckCargoWorkState["ChocolateProductLoading"] = "ChocolateProductLoading";
    TruckCargoWorkState["ChocolateProductUnloading"] = "ChocolateProductUnloading";
})(TruckCargoWorkState || (TruckCargoWorkState = {}));
/**
 * @class
 * Represents truck model
 * @param {string} brand Truck brand
 * @param {Employee} driver Truck driver (factory employee)
 * @param {number} speed Truck speed (km/h ... kilometers per hour)
 * @param {number} maxFuelTankLevel Truck maximum fuel level in litres. Default 1400
 * @param {number} fuelConsumptionPer100Km Truck fuel consumption level per one hundred kilometres in litres. Default 27.5
 * @param {number} currentFuelTankLevel Truck current fuel level. Default value = 0
 * @param {TruckState} truckState Truck current state. DefaultValue = TruckState.Avaible
 * @param {TruckCargoWorkState} truckCargoWorkState Truck cargo current state. TruckCargoWorkState.ChocolateMaterialLoading
 * TruckCargoCurent
 */
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(brand, driver, cargo, speed, maxFuelTankLevel, fuelConsumptionPer100Km, currentFuelTankLevel, truckState, truckCargoWorkState) {
        if (cargo === void 0) { cargo = new _chocolate_materials_chocolate_material_list__WEBPACK_IMPORTED_MODULE_1__["ChocolateMaterialList"]; }
        if (maxFuelTankLevel === void 0) { maxFuelTankLevel = 1400; }
        if (fuelConsumptionPer100Km === void 0) { fuelConsumptionPer100Km = 27.5; }
        if (currentFuelTankLevel === void 0) { currentFuelTankLevel = 0; }
        if (truckState === void 0) { truckState = TruckState.Avaible; }
        if (truckCargoWorkState === void 0) { truckCargoWorkState = TruckCargoWorkState.ChocolateMaterialLoading; }
        var _this = _super.call(this, speed, maxFuelTankLevel, fuelConsumptionPer100Km, currentFuelTankLevel) || this;
        _this.brand = brand;
        _this.driver = driver;
        _this.cargo = cargo;
        _this.truckState = truckState;
        _this.truckCargoWorkState = truckCargoWorkState;
        return _this;
    }
    /**
     * @function
     * Sets truck state to Avaible
     */
    Truck.prototype.setStateToAvaible = function () {
        this.truckState = TruckState.Avaible;
    };
    /**
     * @function
     * Sets truck state to InTransport
     */
    Truck.prototype.setStateToInTransport = function () {
        this.truckState = TruckState.InTransport;
    };
    /**
     * @function
     * Sets truck state to  Broken
     */
    Truck.prototype.setStateToBroken = function () {
        this.truckState = TruckState.Broken;
    };
    /**
     * @function
     * Sets truck state to InRepair
     */
    Truck.prototype.setStateToInRepair = function () {
        this.truckState = TruckState.InRepair;
    };
    /**
     * @function
     * Sets truck state to IsBeingLoaded
     */
    Truck.prototype.setStateToIsBeingLoaded = function () {
        this.truckState = TruckState.IsBeingLoaded;
    };
    /**
     * @function
     * Sets truck state to IsBeingUnloaded
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
var Vehicle = /** @class */ (function () {
    function Vehicle(speed, maxFuelTankLevel, fuelConsumptionPer100Km) {
        this.speed = speed;
        this.maxFuelTankLevel = maxFuelTankLevel;
        this.fuelConsumptionPer100Km = fuelConsumptionPer100Km;
        this.currentFuelTankLevel = 0;
    }
    Vehicle.prototype.setCurrentFuelTankLevel = function (newCurrentFuelTankLevel) {
        this.currentFuelTankLevel = newCurrentFuelTankLevel;
    };
    Vehicle.prototype.getCurrentFuelTankLevel = function () {
        return this.currentFuelTankLevel;
    };
    Vehicle.prototype.fuelConsumptionPerKilometer = function () {
        return this.fuelConsumptionPer100Km / 100;
    };
    Vehicle.prototype.getFuelDifference = function () {
        return this.maxFuelTankLevel - this.currentFuelTankLevel;
    };
    Vehicle.prototype.refilFuelTankToMaximum = function () {
        var fuelUsed = this.getFuelDifference();
        this.setCurrentFuelTankLevel(this.maxFuelTankLevel);
        return fuelUsed;
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjLy5iaW4vc3RyaW5nLW1hbmlwdWxhdGlvbi9zdHJpbmctbWFuaXB1bGF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2Nob2NvbGF0ZS1tYXRlcmlhbHMvY2hvY29sYXRlLW1hdGVyaWFsLWxpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9jaG9jb2xhdGUtbWF0ZXJpYWxzL2Nob2NvbGF0ZS1tYXRlcmlhbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2Nob2NvbGF0ZS1wcm9kdWN0cy9jaG9jb2xhdGUtcHJvZHVjdC1saXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvY2hvY29sYXRlLXByb2R1Y3RzL2Nob2NvbGF0ZS1wcm9kdWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvcGVvcGxlL2VtcGxveWVlL2VtcGxveWVlLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvcGVvcGxlL2VtcGxveWVlci9lbXBsb3llZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9wZW9wbGUvcGVyc29uL3BlcnNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL3RyYW5zcG9ydC90cnVjay90cnVjay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL3RyYW5zcG9ydC92ZWhpY2xlL3ZlaGljbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQU8sU0FBUyxZQUFZLENBQUMsa0JBQTBCLEVBQUUsU0FBaUI7SUFDdEUsSUFBSSxjQUF3QixDQUFDO0lBQzdCLGNBQWMsR0FBRyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ2hELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNoRCxJQUFJLGNBQWMsQ0FBQyxDQUFDLENBQUMsS0FBSyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUU7YUFFMUQ7U0FDSjtLQUNKO0lBQ0QsT0FBTyxjQUFjLENBQUM7QUFDMUIsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ1hEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUU7QUFDTjtBQUNHO0FBQ2E7QUFHN0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7QUFFcEIsSUFBSSxxQkFBNEMsQ0FBQztBQUVqRCxJQUFJLEtBQUssR0FBRyxJQUFJLG1FQUFLLENBQUMsR0FBRyxFQUFFLElBQUkseUVBQVEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksNEVBQVMsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRSxxQkFBcUIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUV4SCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLENBQUM7QUFFNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFFOUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpR0FBWSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2QzRjtBQUFBO0FBQUE7Ozs7R0FJRztBQUNIO0lBR0ksK0JBQVkscUJBQW1DO1FBQW5DLG9FQUE0QixLQUFLLEVBQUU7UUFDM0MsSUFBSSxDQUFDLHFCQUFxQixHQUFHLHFCQUFxQixDQUFDO0lBQ3ZELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsMERBQTBCLEdBQTFCLFVBQTJCLGlCQUFvQztRQUMzRCxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUNMLDRCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUN0QkQ7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7R0FPRztBQUNILElBQVkscUJBS1g7QUFMRCxXQUFZLHFCQUFxQjtJQUM3Qix3RUFBK0M7SUFDL0Msd0VBQStDO0lBQy9DLDBFQUFpRDtJQUNqRCx3RUFBK0M7QUFDbkQsQ0FBQyxFQUxXLHFCQUFxQixLQUFyQixxQkFBcUIsUUFLaEM7QUFFRDs7OztHQUlHO0FBQ0g7SUFHSSwyQkFBWSxxQkFBMEY7UUFBMUYsZ0VBQStDLHFCQUFxQixDQUFDLHFCQUFxQjtRQUNsRyxJQUFJLENBQUMscUJBQXFCLEdBQUcscUJBQXFCLENBQUM7SUFDdkQsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUN4QkQ7QUFBQTtBQUFBOzs7O0dBSUc7QUFDSDtJQUdJLDhCQUFZLG9CQUFrQztRQUFsQyxrRUFBMkIsS0FBSyxFQUFFO1FBQzFDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxvQkFBb0IsQ0FBQztJQUNyRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILHdEQUF5QixHQUF6QixVQUEwQixtQkFBcUM7UUFDM0QsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFDTCwyQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDdEJEO0FBQUE7QUFBQTtBQUFBOzs7Ozs7O0dBT0c7QUFDSCxJQUFZLG9CQUtYO0FBTEQsV0FBWSxvQkFBb0I7SUFDNUIsdURBQStCO0lBQy9CLHVEQUErQjtJQUMvQix5REFBaUM7SUFDakMsdURBQStCO0FBQ25DLENBQUMsRUFMVyxvQkFBb0IsS0FBcEIsb0JBQW9CLFFBSy9CO0FBRUQ7Ozs7O0dBS0c7QUFDSDtJQUdJLDBCQUFZLG9CQUErRTtRQUEvRSw4REFBNkMsb0JBQW9CLENBQUMsYUFBYTtRQUN2RixJQUFJLENBQUMsb0JBQW9CLEdBQUcsb0JBQW9CLENBQUM7SUFDckQsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0J5QztBQUU2QztBQUNpQjtBQUNKO0FBR3BHOzs7Ozs7O0dBT0c7QUFDSDtJQUE4Qiw0QkFBTTtJQUtoQyxrQkFBWSxJQUFZLEVBQUUsUUFBZ0IsRUFBRSxnQkFBMkIsRUFBRSxjQUErQjtRQUEvQix1REFBK0I7UUFBeEcsWUFDSSxrQkFBTSxJQUFJLEVBQUUsUUFBUSxFQUFFLGNBQWMsQ0FBQyxTQUd4QztRQUZHLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUN6QyxLQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSwrRkFBb0IsRUFBRSxDQUFDOztJQUM3RCxDQUFDO0lBRUQ7Ozs7Ozs7Ozs7O09BV0c7SUFDSCwwQ0FBdUIsR0FBdkIsVUFBd0IsaUJBQW9DO1FBQ3hELElBQUksd0JBQXdCLEdBQUcsSUFBSSxzRkFBZ0IsRUFBRSxDQUFDO1FBQ3RELElBQUksaUJBQWlCLENBQUMscUJBQXFCLEtBQUssNkZBQXFCLENBQUMscUJBQXFCLEVBQUU7WUFDekYsd0JBQXdCLENBQUMsb0JBQW9CLEdBQUcsMEZBQW9CLENBQUMsYUFBYSxDQUFDO1NBQ3RGO2FBQU0sSUFBSSxpQkFBaUIsQ0FBQyxxQkFBcUIsS0FBSyw2RkFBcUIsQ0FBQyxzQkFBc0IsRUFBRTtZQUNqRyx3QkFBd0IsQ0FBQyxvQkFBb0IsR0FBRywwRkFBb0IsQ0FBQyxjQUFjLENBQUM7U0FDdkY7YUFBTSxJQUFJLGlCQUFpQixDQUFDLHFCQUFxQixLQUFLLDZGQUFxQixDQUFDLHFCQUFxQixFQUFFO1lBQ2hHLHdCQUF3QixDQUFDLG9CQUFvQixHQUFHLDBGQUFvQixDQUFDLGFBQWEsQ0FBQztTQUN0RjthQUFNLElBQUksaUJBQWlCLENBQUMscUJBQXFCLEtBQUssNkZBQXFCLENBQUMscUJBQXFCLEVBQUU7WUFDaEcsd0JBQXdCLENBQUMsb0JBQW9CLEdBQUcsMEZBQW9CLENBQUMsYUFBYSxDQUFDO1NBQ3RGO2FBQU07WUFDSCx3QkFBd0IsR0FBRyxJQUFJLENBQUM7U0FDbkM7UUFDRCxJQUFJLENBQUMsc0JBQXNCLENBQUMseUJBQXlCLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUNoRixPQUFPLHdCQUF3QixDQUFDO0lBQ3BDLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQyxDQXZDNkIscURBQU0sR0F1Q25DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RERDs7R0FFRztBQUN1QztBQUUxQzs7Ozs7O0dBTUc7QUFDSCxJQUFZLGtCQUlYO0FBSkQsV0FBWSxrQkFBa0I7SUFDMUIsZ0VBQTBDO0lBQzFDLHVFQUFpRDtJQUNqRCxzREFBZ0M7QUFDcEMsQ0FBQyxFQUpXLGtCQUFrQixLQUFsQixrQkFBa0IsUUFJN0I7QUFFRDs7Ozs7Ozs7R0FRRztBQUNILElBQVksa0JBTVg7QUFORCxXQUFZLGtCQUFrQjtJQUMxQix5Q0FBbUI7SUFDbkIsMkNBQXFCO0lBQ3JCLG1DQUFhO0lBQ2IsMkNBQXFCO0lBQ3JCLCtDQUF5QjtBQUM3QixDQUFDLEVBTlcsa0JBQWtCLEtBQWxCLGtCQUFrQixRQU03QjtBQUVEOzs7OztHQUtHO0FBQ0g7SUFBK0IsNkJBQU07SUFJakMsbUJBQVksSUFBWSxFQUFFLFFBQWdCLEVBQUUsY0FBK0IsRUFBRSxrQkFDdEIsRUFBRSxrQkFBZ0U7UUFEN0UsdURBQStCO1FBQUUsMERBQ3pFLGtCQUFrQixDQUFDLGdDQUFnQztRQUFFLDBEQUF5QyxrQkFBa0IsQ0FBQyxJQUFJO1FBRHpILFlBRUksa0JBQU0sSUFBSSxFQUFFLFFBQVEsRUFBRSxjQUFjLENBQUMsU0FHeEM7UUFGRyxLQUFJLENBQUMsa0JBQWtCLEdBQUcsa0JBQWtCLENBQUM7UUFDN0MsS0FBSSxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDOztJQUNqRCxDQUFDO0lBRUQsK0RBQTJDLEdBQTNDO1FBQ0ksSUFBSSxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDLDZCQUE2QixDQUFDO0lBQy9FLENBQUM7SUFFRCxrRUFBOEMsR0FBOUM7UUFDSSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsa0JBQWtCLENBQUMsZ0NBQWdDLENBQUM7SUFDbEYsQ0FBQztJQUVELHdEQUFvQyxHQUFwQztRQUNJLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQyxzQkFBc0IsQ0FBQztJQUN4RSxDQUFDO0lBRUQseUNBQXFCLEdBQXJCO1FBQ0ksSUFBSSxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDLE9BQU8sQ0FBQztJQUN6RCxDQUFDO0lBRUQsMENBQXNCLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDLFFBQVEsQ0FBQztJQUMxRCxDQUFDO0lBRUQsc0NBQWtCLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQztJQUN0RCxDQUFDO0lBRUQsMENBQXNCLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDLFFBQVEsQ0FBQztJQUMxRCxDQUFDO0lBRUQsNENBQXdCLEdBQXhCO1FBQ0ksSUFBSSxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDLFVBQVUsQ0FBQztJQUM1RCxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDLENBMUM4QixxREFBTSxHQTBDcEM7Ozs7Ozs7Ozs7Ozs7O0FDbkZEO0FBQUE7QUFBQTs7Ozs7O0dBTUc7QUFDSDtJQUtJLGdCQUFZLElBQVksRUFBRSxRQUFnQixFQUFFLGNBQStCO1FBQS9CLHVEQUErQjtRQUN2RSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztJQUN6QyxDQUFDO0lBQ0wsYUFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1g0QztBQUU2QztBQUUxRjs7Ozs7Ozs7OztHQVVHO0FBQ0gsSUFBWSxVQU9YO0FBUEQsV0FBWSxVQUFVO0lBQ2xCLGlDQUFtQjtJQUNuQix5Q0FBMkI7SUFDM0IsK0JBQWlCO0lBQ2pCLG1DQUFxQjtJQUNyQiw2Q0FBK0I7SUFDL0IsaURBQW1DO0FBQ3ZDLENBQUMsRUFQVyxVQUFVLEtBQVYsVUFBVSxRQU9yQjtBQUVEOzs7Ozs7O0dBT0c7QUFDSCxJQUFZLG1CQUtYO0FBTEQsV0FBWSxtQkFBbUI7SUFDM0IsNEVBQXFEO0lBQ3JELGdGQUF5RDtJQUN6RCwwRUFBbUQ7SUFDbkQsOEVBQXVEO0FBQzNELENBQUMsRUFMVyxtQkFBbUIsS0FBbkIsbUJBQW1CLFFBSzlCO0FBRUQ7Ozs7Ozs7Ozs7OztHQVlHO0FBQ0g7SUFBMkIseUJBQU87SUFPOUIsZUFBWSxLQUFhLEVBQUUsTUFBZ0IsRUFBRSxLQUErRSxFQUN4SCxLQUFhLEVBQUUsZ0JBQStCLEVBQUUsdUJBQXNDLEVBQUUsb0JBQWdDLEVBQ3hILFVBQTJDLEVBQUUsbUJBQXVGO1FBRjNGLG9DQUEwRCxrR0FBcUI7UUFDekcsMERBQStCO1FBQUUsd0VBQXNDO1FBQUUsK0RBQWdDO1FBQ3hILDBDQUF5QixVQUFVLENBQUMsT0FBTztRQUFFLDREQUEyQyxtQkFBbUIsQ0FBQyx3QkFBd0I7UUFGeEksWUFHSSxrQkFBTSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsdUJBQXVCLEVBQUUsb0JBQW9CLENBQUMsU0FNaEY7UUFMRyxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixLQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixLQUFJLENBQUMsbUJBQW1CLEdBQUcsbUJBQW1CLENBQUM7O0lBQ25ELENBQUM7SUFFRDs7O09BR0c7SUFDSCxpQ0FBaUIsR0FBakI7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUM7SUFDekMsQ0FBQztJQUVEOzs7T0FHRztJQUNILHFDQUFxQixHQUFyQjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQztJQUM3QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZ0NBQWdCLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7O09BR0c7SUFDSCxrQ0FBa0IsR0FBbEI7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUM7SUFDMUMsQ0FBQztJQUVEOzs7T0FHRztJQUNILHVDQUF1QixHQUF2QjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gseUNBQXlCLEdBQXpCO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsZUFBZSxDQUFDO0lBQ2pELENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FBQyxDQWpFMEIsd0RBQU8sR0FpRWpDOzs7Ozs7Ozs7Ozs7OztBQzNIRDtBQUFBO0FBQUE7SUFNSSxpQkFBWSxLQUFhLEVBQUUsZ0JBQXdCLEVBQUUsdUJBQStCO1FBQ2hGLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUN6QyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsdUJBQXVCLENBQUM7UUFDdkQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQseUNBQXVCLEdBQXZCLFVBQXdCLHVCQUErQjtRQUNuRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsdUJBQXVCLENBQUM7SUFDeEQsQ0FBQztJQUVELHlDQUF1QixHQUF2QjtRQUNJLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDO0lBQ3JDLENBQUM7SUFFRCw2Q0FBMkIsR0FBM0I7UUFDSSxPQUFPLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxHQUFHLENBQUM7SUFDOUMsQ0FBQztJQUVELG1DQUFpQixHQUFqQjtRQUNJLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztJQUM3RCxDQUFDO0lBRUQsd0NBQXNCLEdBQXRCO1FBQ0ksSUFBSSxRQUFRLEdBQVcsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1FBQy9DLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNwRCxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0lBRUQsK0JBQWEsR0FBYixVQUFjLGFBQXFCO1FBQy9CLElBQUksc0JBQXNCLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDO1FBQ3ZELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsYUFBYSxDQUFDO1FBQ3RFLElBQUksSUFBSSxDQUFDLG9CQUFvQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUNwRCxPQUFPLENBQUMsQ0FBQztTQUNaO2FBQ0k7WUFDRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQ2xELE9BQU8sSUFBSSxDQUFDLGdCQUFnQixHQUFHLHNCQUFzQixDQUFDO1NBQ3pEO0lBQ0wsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIEZvcm1hdFN0cmluZyhzdHJpbmdUb0JlRm9ybWF0ZWQ6IHN0cmluZywgZGVsaW1pdGVyOiBzdHJpbmcpIHtcclxuICAgIGxldCBmb3JtYXRlZFN0cmluZzogc3RyaW5nW107XHJcbiAgICBmb3JtYXRlZFN0cmluZyA9IHN0cmluZ1RvQmVGb3JtYXRlZC5zcGxpdChkZWxpbWl0ZXIpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmb3JtYXRlZFN0cmluZy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICBmb3IgKHZhciBqID0gaSArIDE7IGogPCBmb3JtYXRlZFN0cmluZy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBpZiAoZm9ybWF0ZWRTdHJpbmdbal0gPT09IGZvcm1hdGVkU3RyaW5nW2pdLnRvVXBwZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZvcm1hdGVkU3RyaW5nO1xyXG59IiwiaW1wb3J0IHsgVHJ1Y2ssIFRydWNrU3RhdGUgfSBmcm9tIFwiLi9tb2RlbHMvdHJhbnNwb3J0L3RydWNrL3RydWNrXCI7XHJcbmltcG9ydCB7IEVtcGxveWVlIH0gZnJvbSBcIi4vbW9kZWxzL3Blb3BsZS9lbXBsb3llZS9lbXBsb3llZVwiO1xyXG5pbXBvcnQgeyBFbXBvbHllZXIgfSBmcm9tIFwiLi9tb2RlbHMvcGVvcGxlL2VtcGxveWVlci9lbXBsb3llZXJcIjtcclxuaW1wb3J0IHsgRm9ybWF0U3RyaW5nIH0gZnJvbSBcIi4vLmJpbi9zdHJpbmctbWFuaXB1bGF0aW9uL3N0cmluZy1tYW5pcHVsYXRpb25cIlxyXG5pbXBvcnQgeyBDaG9jb2xhdGVNYXRlcmlhbExpc3QgfSBmcm9tIFwiLi9tb2RlbHMvY2hvY29sYXRlLW1hdGVyaWFscy9jaG9jb2xhdGUtbWF0ZXJpYWwtbGlzdFwiO1xyXG5cclxuY29uc29sZS5sb2coXCJoZWxsb1wiKVxyXG5cclxubGV0IGNob2NvbGF0ZU1hdGVyaWFsTGlzdDogQ2hvY29sYXRlTWF0ZXJpYWxMaXN0O1xyXG5cclxubGV0IHRydWNrID0gbmV3IFRydWNrKFwiZlwiLCBuZXcgRW1wbG95ZWUoXCJzXCIsIFwiZFwiLCBuZXcgRW1wb2x5ZWVyKFwiQm9iXCIsIFwiTWFydGluXCIpKSwgY2hvY29sYXRlTWF0ZXJpYWxMaXN0LCAxLCAyLCAxMDAsIDApO1xyXG5cclxuY29uc29sZS5sb2codHJ1Y2sucmVmaWxGdWVsVGFua1RvTWF4aW11bSgpKTtcclxuXHJcbmNvbnNvbGUubG9nKHRydWNrLmRyaXZlci5mYWN0b3J5RW1wbG95ZWVyLmVtcGxveWVlck1vb2RTdGF0ZSk7XHJcblxyXG5jb25zb2xlLmxvZyhGb3JtYXRTdHJpbmcodHJ1Y2suZHJpdmVyLmZhY3RvcnlFbXBsb3llZXIuZW1wbG95ZWVyV29ya1N0YXRlLnRvU3RyaW5nKCksIFwiXCIpKTtcclxuIiwiaW1wb3J0IHsgQ2hvY29sYXRlTWF0ZXJpYWwgfSBmcm9tIFwiLi9jaG9jb2xhdGUtbWF0ZXJpYWxcIlxyXG5cclxuLyoqXHJcbiAqIEBjbGFzc1xyXG4gKiBSZXByZXNlbnRzIGxpc3Qgb2YgY2hvY29sYXRlIG1hdGVyaWFsc1xyXG4gKiBAcGFyYW0gY2hvY29sYXRlTWF0ZXJpYWxMaXN0IFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENob2NvbGF0ZU1hdGVyaWFsTGlzdCB7XHJcbiAgICBjaG9jb2xhdGVNYXRlcmlhbExpc3Q6IENob2NvbGF0ZU1hdGVyaWFsW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2hvY29sYXRlTWF0ZXJpYWxMaXN0ID0gbmV3IEFycmF5KCkpIHtcclxuICAgICAgICB0aGlzLmNob2NvbGF0ZU1hdGVyaWFsTGlzdCA9IGNob2NvbGF0ZU1hdGVyaWFsTGlzdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBmdW5jdGlvblxyXG4gICAgICogQWRkcyBjaG9jb2xhdGUgbWF0ZXJpYWwgdG8gbGlzdFxyXG4gICAgICogQHBhcmFtIGNob2NvbGF0ZU1hdGVyaWFsIENob2NvbGF0ZSBtYXRlcmlhbCB0aGF0IHdpbGwgYmUgYWRkZWQgdG8gbGlzdFxyXG4gICAgICovXHJcbiAgICBhZGRDaG9jb2xhdGVNYXRlcmlhbFRvTGlzdChjaG9jb2xhdGVNYXRlcmlhbDogQ2hvY29sYXRlTWF0ZXJpYWwpIHtcclxuICAgICAgICB0aGlzLmNob2NvbGF0ZU1hdGVyaWFsTGlzdC5wdXNoKGNob2NvbGF0ZU1hdGVyaWFsKTtcclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiBAZW51bVxyXG4gKiBSZXByZXNlbnRzIGNob2NvbGF0ZSBtYXRlcmlhbCB0eXBlXHJcbiAqIEBwYXJhbSBNaWxrQ2hvY29sYXRlTWF0ZXJpYWwgTWlsayBjaG9jb2xhdGUgbWF0ZXJpYWwgdHlwZVxyXG4gKiBAcGFyYW0gRGFya0Nob2NvbGF0ZU1hdGVyaWFsIERhcmsgY2hvY29sYXRlIG1hdGVyaWFsIHR5cGVcclxuICogQHBhcmFtIFdoaXRlQ2hvY29sYXRlTWF0ZXJpYWwgV2hpdGUgY2hvY29sYXRlIG1hdGVyaWFsIHR5cGVcclxuICogQHBhcmFtIFJ1YnlDaG9jb2xhdGVNYXRlcmlhbCBSdWJ5IGNob2NvbGF0ZSBtYXRlcmlhbCB0eXBlXHJcbiAqL1xyXG5leHBvcnQgZW51bSBDaG9jb2xhdGVNYXRlcmlhbFR5cGUge1xyXG4gICAgTWlsa0Nob2NvbGF0ZU1hdGVyaWFsID0gXCJNaWxrQ2hvY29sYXRlTWF0ZXJpYWxcIixcclxuICAgIERhcmtDaG9jb2xhdGVNYXRlcmlhbCA9IFwiRGFya0Nob2NvbGF0ZU1hdGVyaWFsXCIsXHJcbiAgICBXaGl0ZUNob2NvbGF0ZU1hdGVyaWFsID0gXCJXaGl0ZUNob2NvbGF0ZU1hdGVyaWFsXCIsXHJcbiAgICBSdWJ5Q2hvY29sYXRlTWF0ZXJpYWwgPSBcIlJ1YnlDaG9jb2xhdGVNYXRlcmlhbFwiXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgXHJcbiAqIFJlcHJlc2VudHMgY2hvY29sYXRlIG1hdGVyaWFsIG1vZGVsXHJcbiAqIEBwYXJhbSB7Q2hvY29sYXRlTWF0ZXJpYWxUeXBlfSBjaG9jb2xhdGVNYXRlcmlhbFR5cGUgVHlwZSBvZiBjaG9jb2xhdGUgbWF0ZXJpYWxcclxuICovXHJcbmV4cG9ydCBjbGFzcyBDaG9jb2xhdGVNYXRlcmlhbCB7XHJcbiAgICBjaG9jb2xhdGVNYXRlcmlhbFR5cGU6IENob2NvbGF0ZU1hdGVyaWFsVHlwZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjaG9jb2xhdGVNYXRlcmlhbFR5cGU6IENob2NvbGF0ZU1hdGVyaWFsVHlwZSA9IENob2NvbGF0ZU1hdGVyaWFsVHlwZS5EYXJrQ2hvY29sYXRlTWF0ZXJpYWwpIHtcclxuICAgICAgICB0aGlzLmNob2NvbGF0ZU1hdGVyaWFsVHlwZSA9IGNob2NvbGF0ZU1hdGVyaWFsVHlwZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IENob2NvbGF0ZVByb2R1Y3QgfSBmcm9tIFwiLi9jaG9jb2xhdGUtcHJvZHVjdFwiO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzc1xyXG4gKiBSZXByZXNlbnRzIGxpc3Qgb2YgY2hvY29sYXRlIHByb2R1Y3RzXHJcbiAqIEBwYXJhbSB7Q2hvY29sYXRlUHJvZHVjdFtdfSBjaG9jb2xhdGVQcm9kdWN0TGlzdCBMaXN0IG9mIGNob2NvbGF0ZSBwcm9kdWN0c1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENob2NvbGF0ZVByb2R1Y3RMaXN0IHtcclxuICAgIGNob2NvbGF0ZVByb2R1Y3RMaXN0OiBDaG9jb2xhdGVQcm9kdWN0W107XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2hvY29sYXRlUHJvZHVjdExpc3QgPSBuZXcgQXJyYXkoKSkge1xyXG4gICAgICAgIHRoaXMuY2hvY29sYXRlUHJvZHVjdExpc3QgPSBjaG9jb2xhdGVQcm9kdWN0TGlzdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBmdW5jdGlvblxyXG4gICAgICogQWRkcyBuZXcgY2hvY29sYXRlIHByb2R1Y3QgdG8gbGlzdCBvZiBjaG9jb2xhdGUgcHJvZHVjdHNcclxuICAgICAqIEBwYXJhbSBuZXdDaG9jb2xhdGVQcm9kdWN0IENob2NvbGF0ZSBwcm9kdWN0IHRoYXQgd2lsbCBiZSBhZGRlZCB0byBsaXN0XHJcbiAgICAgKi9cclxuICAgIGFkZENob2NvbGF0ZVByb2R1Y3RUb0xpc3QobmV3Q2hvY29sYXRlUHJvZHVjdDogQ2hvY29sYXRlUHJvZHVjdCkge1xyXG4gICAgICAgIHRoaXMuY2hvY29sYXRlUHJvZHVjdExpc3QucHVzaChuZXdDaG9jb2xhdGVQcm9kdWN0KTtcclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiBAZW51bVxyXG4gKiBSZXByZXNlbnRzIGNob2NvbGF0ZSBwcm9kdWN0IHR5cGVcclxuICogQHBhcmFtIE1pbGtDaG9jb2xhdGUgTWlsayBjaG9jb2xhdGUgcHJvZHVjdFxyXG4gKiBAcGFyYW0gRGFya0Nob2NvbGF0ZSBEYXJrIGNob2NvbGF0ZSBwcm9kdWN0XHJcbiAqIEBwYXJhbSBXaGl0ZUNob2NvbGF0ZSBXaGl0ZSBjaG9jb2xhdGUgcHJvZHVjdFxyXG4gKiBAcGFyYW0gUnVieUNob2NvbGF0ZSBSdWJ5IGNob2NvbGF0ZSBwcm9kdWN0XHJcbiAqL1xyXG5leHBvcnQgZW51bSBDaG9jb2xhdGVQcm9kdWN0VHlwZSB7XHJcbiAgICBNaWxrQ2hvY29sYXRlID0gXCJNaWxrQ2hvY29sYXRlXCIsXHJcbiAgICBEYXJrQ2hvY29sYXRlID0gXCJEYXJrQ2hvY29sYXRlXCIsXHJcbiAgICBXaGl0ZUNob2NvbGF0ZSA9IFwiV2hpdGVDaG9jb2xhdGVcIixcclxuICAgIFJ1YnlDaG9jb2xhdGUgPSBcIlJ1YnlDaG9jb2xhdGVcIlxyXG59XHJcblxyXG4vKipcclxuICogQGNsYXNzXHJcbiAqIFJlcHJlc2VudHMgY2hvY29sYXRlIHByb2R1Y3QgbW9kZWxcclxuICogQHBhcmFtIHtDaG9jb2xhdGVQcm9kdWN0VHlwZX0gY2hvY29sYXRlUHJvZHVjdFR5cGUgQ2hvY29sYXRlIHByb2R1Y3QgdHlwZS4gRGVmYXVsdCB2YWx1ZSA9IFxyXG4gKiBEYXJrQ2hvY29sYXRlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ2hvY29sYXRlUHJvZHVjdCB7XHJcbiAgICBjaG9jb2xhdGVQcm9kdWN0VHlwZTogQ2hvY29sYXRlUHJvZHVjdFR5cGU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2hvY29sYXRlUHJvZHVjdFR5cGU6IENob2NvbGF0ZVByb2R1Y3RUeXBlID0gQ2hvY29sYXRlUHJvZHVjdFR5cGUuRGFya0Nob2NvbGF0ZSkge1xyXG4gICAgICAgIHRoaXMuY2hvY29sYXRlUHJvZHVjdFR5cGUgPSBjaG9jb2xhdGVQcm9kdWN0VHlwZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFBlcnNvbiB9IGZyb20gJy4uL3BlcnNvbi9wZXJzb24nO1xyXG5pbXBvcnQgeyBGYWN0b3J5U2VjdG9yIH0gZnJvbSAnLi4vLi4vY2hvY29sYXRlLWZhY3RvcnkvY2hvY29sYXRlLWZhY3RvcnknO1xyXG5pbXBvcnQgeyBDaG9jb2xhdGVQcm9kdWN0TGlzdCB9IGZyb20gJy4uLy4uL2Nob2NvbGF0ZS1wcm9kdWN0cy9jaG9jb2xhdGUtcHJvZHVjdC1saXN0JztcclxuaW1wb3J0IHsgQ2hvY29sYXRlTWF0ZXJpYWwsIENob2NvbGF0ZU1hdGVyaWFsVHlwZSB9IGZyb20gJy4uLy4uL2Nob2NvbGF0ZS1tYXRlcmlhbHMvY2hvY29sYXRlLW1hdGVyaWFsJztcclxuaW1wb3J0IHsgQ2hvY29sYXRlUHJvZHVjdCwgQ2hvY29sYXRlUHJvZHVjdFR5cGUgfSBmcm9tICcuLi8uLi9jaG9jb2xhdGUtcHJvZHVjdHMvY2hvY29sYXRlLXByb2R1Y3QnO1xyXG5pbXBvcnQgeyBFbXBvbHllZXIgfSBmcm9tICcuLi9lbXBsb3llZXIvZW1wbG95ZWVyJztcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3NcclxuICogUmVwcmVzZW50cyBlbXBsb3llZSBtb2RlbFxyXG4gKiBAcGFyYW0gbmFtZSBFbXBveWVlIG5hbWVcclxuICogQHBhcmFtIGxhc3ROYW1lIEVtcGxveWVlIGxhc3QgbmFtZVxyXG4gKiBAcGFyYW0gZHJpdmluZ0xpY2VuY2UgRW1wbG95ZWUgaGFzIGEgZHJpdmVyJ3MgbGljZW5jZSwgZHJpdmluZ0xpY2VuY2U9dHJ1ZS4gT3RoZXJ3aXNlLCBcclxuICogZHJpdmluZ0xpY2VuY2U9ZmFsc2UuIERlZmF1bHRWYWx1ZT1mYWxzZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEVtcGxveWVlIGV4dGVuZHMgUGVyc29uIHtcclxuICAgIGZhY3RvcnlFbXBsb3llZXI6IEVtcG9seWVlcjtcclxuICAgIGZhY3RvcnlTZWN0b3I6IEZhY3RvcnlTZWN0b3I7XHJcbiAgICBwcm9kdWNlZENob2NvbGF0ZUdvb2RzOiBDaG9jb2xhdGVQcm9kdWN0TGlzdDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcsIGZhY3RvcnlFbXBsb3llZXI6IEVtcG9seWVlciwgZHJpdmluZ0xpY2VuY2U6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIHN1cGVyKG5hbWUsIGxhc3ROYW1lLCBkcml2aW5nTGljZW5jZSk7XHJcbiAgICAgICAgdGhpcy5mYWN0b3J5RW1wbG95ZWVyID0gZmFjdG9yeUVtcGxveWVlcjtcclxuICAgICAgICB0aGlzLnByb2R1Y2VkQ2hvY29sYXRlR29vZHMgPSBuZXcgQ2hvY29sYXRlUHJvZHVjdExpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBmdW5jdGlvblxyXG4gICAgICogUHJvZHVjZXMgb25lIGNob2NvbGF0ZSBvZiBzcGVjZmljIHR5cGUuIFR5cGUgb2YgY2hvY29sYXRlIChDaG9jb2xhdGVQcm9kdWN0VHlwZSkgaXMgXHJcbiAgICAgKiBkZWNpZGVkIGRlcGVuZGluZyBvbiB3aGF0IG1hdGVyaWFsIChDaG9jb2xhdGVNYXRlcmlhbFR5cGUpIGlzIHVzZWQuXHJcbiAgICAgKiBAcGFyYW0gY2hvY29sYXRlTWF0ZXJpYWwgQ2hvY29sYXRlIG1hdGVyaWFsIG5lZWRlZCBmb3IgcHJvZHVjdGlvbiBvZiBvbmUgY2hvY29sYXRlIG9mIFxyXG4gICAgICogc3BlY2lmaWMgdHlwZS5cclxuICAgICAqIEByZXR1cm5zIHtDaG9jb2xhdGVQcm9kdWN0fSBNaWxrQ2hvY29sYXRlIGlmIE1pbGtDaG9jb2xhdGVNYXRlcmlhbCBpcyB1c2VkXHJcbiAgICAgKiBAcmV0dXJucyB7Q2hvY29sYXRlUHJvZHVjdH0gRGFya0Nob2NvbGF0ZSBpZiBEYXJrQ2hvY29sYXRlTWF0ZXJpYWwgaXMgdXNlZFxyXG4gICAgICogQHJldHVybnMge0Nob2NvbGF0ZVByb2R1Y3R9IFdoaXRlQ2hvY29sYXRlIGlmIFdoaXRlQ2hvY29sYXRlTWF0ZXJpYWwgaXMgdXNlZFxyXG4gICAgICogQHJldHVybnMge0Nob2NvbGF0ZVByb2R1Y3R9IFJ1YnlDaG9jb2xhdGUgaWYgUnVieUNob2NvbGF0ZU1hdGVyaWFsIGlzIHVzZWRcclxuICAgICAqIEBPdGhlcndpc2UgcmV0dXJucyBudWxsXHJcbiAgICAgKi9cclxuICAgIHByb2R1Y2VDaG9jb2xhdGVQcm9kdWN0KGNob2NvbGF0ZU1hdGVyaWFsOiBDaG9jb2xhdGVNYXRlcmlhbCkge1xyXG4gICAgICAgIGxldCBwcm9kdWNlZENob2NvbGF0ZVByb2R1Y3QgPSBuZXcgQ2hvY29sYXRlUHJvZHVjdCgpO1xyXG4gICAgICAgIGlmIChjaG9jb2xhdGVNYXRlcmlhbC5jaG9jb2xhdGVNYXRlcmlhbFR5cGUgPT09IENob2NvbGF0ZU1hdGVyaWFsVHlwZS5EYXJrQ2hvY29sYXRlTWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgcHJvZHVjZWRDaG9jb2xhdGVQcm9kdWN0LmNob2NvbGF0ZVByb2R1Y3RUeXBlID0gQ2hvY29sYXRlUHJvZHVjdFR5cGUuRGFya0Nob2NvbGF0ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGNob2NvbGF0ZU1hdGVyaWFsLmNob2NvbGF0ZU1hdGVyaWFsVHlwZSA9PT0gQ2hvY29sYXRlTWF0ZXJpYWxUeXBlLldoaXRlQ2hvY29sYXRlTWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgcHJvZHVjZWRDaG9jb2xhdGVQcm9kdWN0LmNob2NvbGF0ZVByb2R1Y3RUeXBlID0gQ2hvY29sYXRlUHJvZHVjdFR5cGUuV2hpdGVDaG9jb2xhdGU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjaG9jb2xhdGVNYXRlcmlhbC5jaG9jb2xhdGVNYXRlcmlhbFR5cGUgPT09IENob2NvbGF0ZU1hdGVyaWFsVHlwZS5NaWxrQ2hvY29sYXRlTWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgcHJvZHVjZWRDaG9jb2xhdGVQcm9kdWN0LmNob2NvbGF0ZVByb2R1Y3RUeXBlID0gQ2hvY29sYXRlUHJvZHVjdFR5cGUuTWlsa0Nob2NvbGF0ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGNob2NvbGF0ZU1hdGVyaWFsLmNob2NvbGF0ZU1hdGVyaWFsVHlwZSA9PT0gQ2hvY29sYXRlTWF0ZXJpYWxUeXBlLlJ1YnlDaG9jb2xhdGVNYXRlcmlhbCkge1xyXG4gICAgICAgICAgICBwcm9kdWNlZENob2NvbGF0ZVByb2R1Y3QuY2hvY29sYXRlUHJvZHVjdFR5cGUgPSBDaG9jb2xhdGVQcm9kdWN0VHlwZS5SdWJ5Q2hvY29sYXRlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHByb2R1Y2VkQ2hvY29sYXRlUHJvZHVjdCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHJvZHVjZWRDaG9jb2xhdGVHb29kcy5hZGRDaG9jb2xhdGVQcm9kdWN0VG9MaXN0KHByb2R1Y2VkQ2hvY29sYXRlUHJvZHVjdCk7XHJcbiAgICAgICAgcmV0dXJuIHByb2R1Y2VkQ2hvY29sYXRlUHJvZHVjdDtcclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiBzdG8gdmlzZSB2cmVtZW5hIHByb2xhemkgcG9zdGFqZSB1bW9yYW5cclxuICovXHJcbmltcG9ydCB7IFBlcnNvbiB9IGZyb20gXCIuLi9wZXJzb24vcGVyc29uXCI7XHJcblxyXG4vKipcclxuICogQGVudW1cclxuICogUmVwcmVzZW50cyBlbXBsb3llcnMgY3VycmVudCB3b3JrIHN0YXRlXHJcbiAqIEBwYXJhbSBNYXhpbXVtV29ya0RlZGljYXRpb25UaXJlbGVzcyBNYXhpbXVtIHdvcmsgZGVkaWNhdGlvbi4gVGlyZWxlc3MuIENvbmNlbnRyYXRpb24gMTAwJVxyXG4gKiBAcGFyYW0gTWVkaXVtV29ya0RlZGljYXRpb25GZWVsaW5nVGlyZWQgTWVkaXVtIHdvcmsgZGVkaWNhdGlvbi4gRmVlbGluZyB0aXJlZC4gQ29uY2VudHJhdGlvbiA1MCVcclxuICogQHBhcmFtIExvd1dvcmNEZWRpY2F0aW9uVGlyZWQgTG93IHdvcmsgZGVkaWNhdGlvbi4gVGlyZWQuIENvbmNlbnRyYXRpb24gMjUlXHJcbiAqL1xyXG5leHBvcnQgZW51bSBFbXBsb3llZXJXb3JrU3RhdGUge1xyXG4gICAgTWF4aW11bVdvcmtEZWRpY2F0aW9uVGlyZWxlc3MgPSBcIlRpcmVsZXNzXCIsXHJcbiAgICBNZWRpdW1Xb3JrRGVkaWNhdGlvbkZlZWxpbmdUaXJlZCA9IFwiRmVlbGluZ1RpcmVkXCIsXHJcbiAgICBMb3dXb3JjRGVkaWNhdGlvblRpcmVkID0gXCJUaXJlZFwiXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZW51bSBcclxuICogUmVwcmVzZW50cyBlbXBsb3llZXIgbW9vZCBzdGF0ZVxyXG4gKiBAcGFyYW0gRXhlbGVudCBFeGVsZW50IG1vb2Qgc3RhdGUuIFBvc2l0aXZlIG1vb2QgbGV2ZWwgMTAwJVxyXG4gKiBAcGFyYW0gVmVyeUdvb2QgVmVyeSBnb29kIG1vb2Qgc3RhdGUuIFBvc2l0aXZlIG1vb2QgbGV2ZWwgNzUlXHJcbiAqIEBwYXJhbSBHb29kIEdvb2QgbW9vZCBzdGF0ZS4gUG9zaXRpdmUgbW9vZCBsZXZlbCA1MCVcclxuICogQHBhcmFtIFN0cmVzc2VkIFN0cmVzc2VkIG1vb2Qgc3RhdGUuIFBvc2l0aXZlIG1vb2QgbGV2ZWwgMjUlXHJcbiAqIEBwYXJhbSBEZXZhc3RhdGVkIERldmFzdGF0ZWQgbW9vZCBzdGF0ZS4gUG9zaXRpdmUgbW9vZCBsZXZlbCAwJVxyXG4gKi9cclxuZXhwb3J0IGVudW0gRW1wbG95ZWVyTW9vZFN0YXRlIHtcclxuICAgIEV4ZWxlbnQgPSBcIkV4ZWxlbnRcIixcclxuICAgIFZlcnlHb29kID0gXCJWZXJ5R29vZFwiLFxyXG4gICAgR29vZCA9IFwiR29vZFwiLFxyXG4gICAgU3RyZXNzZWQgPSBcIlN0cmVzc2VkXCIsXHJcbiAgICBEZXZhc3RhdGVkID0gXCJEZXZhc3RhdGVkXCJcclxufVxyXG5cclxuLyoqXHJcbiAqIEBjbGFzc1xyXG4gKiBSZXByZXNlbnRzIEVtcGxveWVlciBtb2RlbFxyXG4gKiBAcGFyYW0gZW1wbG95ZWVyV29ya1N0YXRlIFJlcHJlc2VudHMgZW1wbG95ZWVyIHdvcmsgc3RhdGVcclxuICogQHBhcmFtIGVtcGxveWVlck1vb2RTdGF0ZSBSZXByZXNlbnRzIGVtcGxveWVlciBtb29kIHN0YXRlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRW1wb2x5ZWVyIGV4dGVuZHMgUGVyc29uIHtcclxuICAgIGVtcGxveWVlcldvcmtTdGF0ZTogRW1wbG95ZWVyV29ya1N0YXRlO1xyXG4gICAgZW1wbG95ZWVyTW9vZFN0YXRlOiBFbXBsb3llZXJNb29kU3RhdGU7XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nLCBkcml2aW5nTGljZW5jZTogYm9vbGVhbiA9IGZhbHNlLCBlbXBsb3llZXJXb3JrU3RhdGU6IEVtcGxveWVlcldvcmtTdGF0ZSA9XHJcbiAgICAgICAgRW1wbG95ZWVyV29ya1N0YXRlLk1lZGl1bVdvcmtEZWRpY2F0aW9uRmVlbGluZ1RpcmVkLCBlbXBsb3llZXJNb29kU3RhdGU6IEVtcGxveWVlck1vb2RTdGF0ZSA9IEVtcGxveWVlck1vb2RTdGF0ZS5Hb29kKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSwgbGFzdE5hbWUsIGRyaXZpbmdMaWNlbmNlKTtcclxuICAgICAgICB0aGlzLmVtcGxveWVlcldvcmtTdGF0ZSA9IGVtcGxveWVlcldvcmtTdGF0ZTtcclxuICAgICAgICB0aGlzLmVtcGxveWVlck1vb2RTdGF0ZSA9IGVtcGxveWVlck1vb2RTdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRXb3JrU3RhdGVUb01heGltdW1Xb3JrRGVkaWNhdGlvblRpcmVsZXNzKCkge1xyXG4gICAgICAgIHRoaXMuZW1wbG95ZWVyV29ya1N0YXRlID0gRW1wbG95ZWVyV29ya1N0YXRlLk1heGltdW1Xb3JrRGVkaWNhdGlvblRpcmVsZXNzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFdvcmtTdGF0ZVRvTWVkaXVtV29ya0RlZGljYXRpb25GZWVsaW5nVGlyZWQoKSB7XHJcbiAgICAgICAgdGhpcy5lbXBsb3llZXJXb3JrU3RhdGUgPSBFbXBsb3llZXJXb3JrU3RhdGUuTWVkaXVtV29ya0RlZGljYXRpb25GZWVsaW5nVGlyZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0V29ya1N0YXRlVG9Mb3dXb3JrRGVkaWNhdGlvblRpcmVkKCkge1xyXG4gICAgICAgIHRoaXMuZW1wbG95ZWVyV29ya1N0YXRlID0gRW1wbG95ZWVyV29ya1N0YXRlLkxvd1dvcmNEZWRpY2F0aW9uVGlyZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TW9vZFN0YXRlVG9FeGVsZW50KCkge1xyXG4gICAgICAgIHRoaXMuZW1wbG95ZWVyTW9vZFN0YXRlID0gRW1wbG95ZWVyTW9vZFN0YXRlLkV4ZWxlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TW9vZFN0YXRlVG9WZXJ5R29vZCgpIHtcclxuICAgICAgICB0aGlzLmVtcGxveWVlck1vb2RTdGF0ZSA9IEVtcGxveWVlck1vb2RTdGF0ZS5WZXJ5R29vZDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRNb29kU3RhdGVUb0dvb2QoKSB7XHJcbiAgICAgICAgdGhpcy5lbXBsb3llZXJNb29kU3RhdGUgPSBFbXBsb3llZXJNb29kU3RhdGUuR29vZDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRNb29kU3RhdGVUb1N0cmVzc2VkKCkge1xyXG4gICAgICAgIHRoaXMuZW1wbG95ZWVyTW9vZFN0YXRlID0gRW1wbG95ZWVyTW9vZFN0YXRlLlN0cmVzc2VkO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE1vb2RTdGF0ZVRvRGV2YXN0YXRlZCgpIHtcclxuICAgICAgICB0aGlzLmVtcGxveWVlck1vb2RTdGF0ZSA9IEVtcGxveWVlck1vb2RTdGF0ZS5EZXZhc3RhdGVkO1xyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIEBjbGFzc1xyXG4gKiBAcGFyYW0gbmFtZSBQZXJzb24gbmFtZVxyXG4gKiBAcGFyYW0gbGFzdE5hbWUgUGVyc29uIGxhc3QgbmFtZVxyXG4gKiBAcGFyYW0gZHJpdmluZ0xpY2VuY2UgUGVyc29uIGhhcyBhIGRyaXZlcidzIGxpY2VuY2UsIGRyaXZpbmdMaWNlbmNlPXRydWUuIE90aGVyd2lzZSwgXHJcbiAqIGRyaXZpbmdMaWNlbmNlPWZhbHNlLiBEZWZhdWx0VmFsdWU9ZmFsc2VcclxuICovXHJcbmV4cG9ydCBjbGFzcyBQZXJzb24ge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgbGFzdE5hbWU6IHN0cmluZztcclxuICAgIGRyaXZpbmdMaWNlbmNlOiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZywgZHJpdmluZ0xpY2VuY2U6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5sYXN0TmFtZSA9IGxhc3ROYW1lO1xyXG4gICAgICAgIHRoaXMuZHJpdmluZ0xpY2VuY2UgPSBkcml2aW5nTGljZW5jZTtcclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiBBZGQ6XHJcbiAqIC1SZXBhaXIgdGltZSFcclxuICogcmFuZG9tRGVsYXkoMTAwMCwgNTAwMClcclxuICovXHJcbmltcG9ydCB7IEVtcGxveWVlIH0gZnJvbSBcIi4uLy4uL3Blb3BsZS9lbXBsb3llZS9lbXBsb3llZVwiO1xyXG5pbXBvcnQgeyBWZWhpY2xlIH0gZnJvbSBcIi4uL3ZlaGljbGUvdmVoaWNsZVwiO1xyXG5pbXBvcnQgeyBDaG9jb2xhdGVQcm9kdWN0TGlzdCB9IGZyb20gXCIuLi8uLi9jaG9jb2xhdGUtcHJvZHVjdHMvY2hvY29sYXRlLXByb2R1Y3QtbGlzdFwiO1xyXG5pbXBvcnQgeyBDaG9jb2xhdGVNYXRlcmlhbExpc3QgfSBmcm9tIFwiLi4vLi4vY2hvY29sYXRlLW1hdGVyaWFscy9jaG9jb2xhdGUtbWF0ZXJpYWwtbGlzdFwiO1xyXG5cclxuLyoqXHJcbiAqIEBlbnVtXHJcbiAqIFJlcHJlc2VudHMgY3VycmVudCB0cnVjayBzdGF0ZVxyXG4gKiBAcGFyYW0gVHJ1Y2tTdGF0ZSBSZXByZXNlbnRzIHRydWNrcyBjdXJyZW50IHN0YXRlXHJcbiAqIEBwYXJhbSBBdmFpYmxlIFRydWNrIGF2YWlibGUgZm9yIHVzYWdlLCByZWFkeSBvbiBzdGFuZGJ5XHJcbiAqIEBwYXJhbSBJblRyYW5zcG9ydCBUcnVjayBpcyBpbiB0cmFuc3BvcnRcclxuICogQHBhcmFtIEJyb2tlbiBUcnVjayBpcyBicm9rZW4sIHJlcGFpciBuZWVkZWRcclxuICogQHBhcmFtIEluUmVwYWlyIFRydWNrIGluIHJlcGFpciBwcm9jZXNzXHJcbiAqIEBwYXJhbSBJc0JlaW5nTG9hZGVkIFRoZSB0cnVjayBpcyBiZWluZyBmaWxsZWQgd2l0aCBtYXRlcmlhbFxyXG4gKiBAcGFyYW0gSXNCZWluZ1VubG9hZGVkIFVubG9hZGluZyBtYXRlcmlhbCBmcm9tIHRoZSB0cnVja1xyXG4gKi9cclxuZXhwb3J0IGVudW0gVHJ1Y2tTdGF0ZSB7XHJcbiAgICBBdmFpYmxlID0gXCJBdmFpYmxlXCIsXHJcbiAgICBJblRyYW5zcG9ydCA9IFwiSW5UcmFuc3BvcnRcIixcclxuICAgIEJyb2tlbiA9IFwiQnJva2VuXCIsXHJcbiAgICBJblJlcGFpciA9IFwiSW5SZXBhaXJcIixcclxuICAgIElzQmVpbmdMb2FkZWQgPSBcIklzQmVpbmdMb2FkZWRcIixcclxuICAgIElzQmVpbmdVbmxvYWRlZCA9IFwiSXNCZWluZ1VubG9hZGVkXCJcclxufVxyXG5cclxuLyoqXHJcbiAqIEBlbnVtXHJcbiAqIFJlcHJlc2VudHMgVHJ1Y2sgY2FyZ28gd29yayBzdGF0ZS4gTG9hZGluZyBvciB1bmxvYWRpbmcsIG1hdGVyaWFscyBvciBwcm9kdWN0cywgdG8gb3IgZnJvbSBjYXJnb1xyXG4gKiBAcGFyYW0gQ2hvY29sYXRlTWF0ZXJpYWxMb2FkaW5nIExvYWRpbmcgY2hvY29sYXRlIG1hdGVyaWFscyB0byBjYXJnb1xyXG4gKiBAcGFyYW0gQ2hvY29sYXRlTWF0ZXJpYWxVbmxvYWRpbmcgVW5sb2FkaW5nIGNob2NvbGF0ZSBtYXRlcmlhbHMgZnJvbSBjYXJnb1xyXG4gKiBAcGFyYW0gQ2hvY29sYXRlUHJvZHVjdExvYWRpbmcgTG9hZGluZyBjaG9jb2xhdGUgcHJvZHVjdHMgdG8gY2FyZ29cclxuICogQHBhcmFtIENob2NvbGF0ZVByb2R1Y3RVbmxvYWRpbmcgVW5sb2FkaW5nIGNob2NvbGF0ZSBwcm9kdWN0cyBmcm9tIGNhcmdvXHJcbiAqL1xyXG5leHBvcnQgZW51bSBUcnVja0NhcmdvV29ya1N0YXRlIHtcclxuICAgIENob2NvbGF0ZU1hdGVyaWFsTG9hZGluZyA9IFwiQ2hvY29sYXRlTWF0ZXJpYWxMb2FkaW5nXCIsXHJcbiAgICBDaG9jb2xhdGVNYXRlcmlhbFVubG9hZGluZyA9IFwiQ2hvY29sYXRlTWF0ZXJpYWxVbmxvYWRpbmdcIixcclxuICAgIENob2NvbGF0ZVByb2R1Y3RMb2FkaW5nID0gXCJDaG9jb2xhdGVQcm9kdWN0TG9hZGluZ1wiLFxyXG4gICAgQ2hvY29sYXRlUHJvZHVjdFVubG9hZGluZyA9IFwiQ2hvY29sYXRlUHJvZHVjdFVubG9hZGluZ1wiXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3NcclxuICogUmVwcmVzZW50cyB0cnVjayBtb2RlbFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYnJhbmQgVHJ1Y2sgYnJhbmRcclxuICogQHBhcmFtIHtFbXBsb3llZX0gZHJpdmVyIFRydWNrIGRyaXZlciAoZmFjdG9yeSBlbXBsb3llZSlcclxuICogQHBhcmFtIHtudW1iZXJ9IHNwZWVkIFRydWNrIHNwZWVkIChrbS9oIC4uLiBraWxvbWV0ZXJzIHBlciBob3VyKVxyXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4RnVlbFRhbmtMZXZlbCBUcnVjayBtYXhpbXVtIGZ1ZWwgbGV2ZWwgaW4gbGl0cmVzLiBEZWZhdWx0IDE0MDBcclxuICogQHBhcmFtIHtudW1iZXJ9IGZ1ZWxDb25zdW1wdGlvblBlcjEwMEttIFRydWNrIGZ1ZWwgY29uc3VtcHRpb24gbGV2ZWwgcGVyIG9uZSBodW5kcmVkIGtpbG9tZXRyZXMgaW4gbGl0cmVzLiBEZWZhdWx0IDI3LjVcclxuICogQHBhcmFtIHtudW1iZXJ9IGN1cnJlbnRGdWVsVGFua0xldmVsIFRydWNrIGN1cnJlbnQgZnVlbCBsZXZlbC4gRGVmYXVsdCB2YWx1ZSA9IDBcclxuICogQHBhcmFtIHtUcnVja1N0YXRlfSB0cnVja1N0YXRlIFRydWNrIGN1cnJlbnQgc3RhdGUuIERlZmF1bHRWYWx1ZSA9IFRydWNrU3RhdGUuQXZhaWJsZVxyXG4gKiBAcGFyYW0ge1RydWNrQ2FyZ29Xb3JrU3RhdGV9IHRydWNrQ2FyZ29Xb3JrU3RhdGUgVHJ1Y2sgY2FyZ28gY3VycmVudCBzdGF0ZS4gVHJ1Y2tDYXJnb1dvcmtTdGF0ZS5DaG9jb2xhdGVNYXRlcmlhbExvYWRpbmdcclxuICogVHJ1Y2tDYXJnb0N1cmVudFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFRydWNrIGV4dGVuZHMgVmVoaWNsZSB7XHJcbiAgICBicmFuZDogc3RyaW5nO1xyXG4gICAgZHJpdmVyOiBFbXBsb3llZTtcclxuICAgIGNhcmdvOiBDaG9jb2xhdGVQcm9kdWN0TGlzdCB8IENob2NvbGF0ZU1hdGVyaWFsTGlzdDtcclxuICAgIHRydWNrU3RhdGU6IFRydWNrU3RhdGU7XHJcbiAgICB0cnVja0NhcmdvV29ya1N0YXRlOiBUcnVja0NhcmdvV29ya1N0YXRlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGJyYW5kOiBzdHJpbmcsIGRyaXZlcjogRW1wbG95ZWUsIGNhcmdvOiBDaG9jb2xhdGVQcm9kdWN0TGlzdCB8IENob2NvbGF0ZU1hdGVyaWFsTGlzdCA9IG5ldyBDaG9jb2xhdGVNYXRlcmlhbExpc3QsXHJcbiAgICAgICAgc3BlZWQ6IG51bWJlciwgbWF4RnVlbFRhbmtMZXZlbDogbnVtYmVyID0gMTQwMCwgZnVlbENvbnN1bXB0aW9uUGVyMTAwS206IG51bWJlciA9IDI3LjUsIGN1cnJlbnRGdWVsVGFua0xldmVsOiBudW1iZXIgPSAwLFxyXG4gICAgICAgIHRydWNrU3RhdGU6IFRydWNrU3RhdGUgPSBUcnVja1N0YXRlLkF2YWlibGUsIHRydWNrQ2FyZ29Xb3JrU3RhdGU6IFRydWNrQ2FyZ29Xb3JrU3RhdGUgPSBUcnVja0NhcmdvV29ya1N0YXRlLkNob2NvbGF0ZU1hdGVyaWFsTG9hZGluZykge1xyXG4gICAgICAgIHN1cGVyKHNwZWVkLCBtYXhGdWVsVGFua0xldmVsLCBmdWVsQ29uc3VtcHRpb25QZXIxMDBLbSwgY3VycmVudEZ1ZWxUYW5rTGV2ZWwpO1xyXG4gICAgICAgIHRoaXMuYnJhbmQgPSBicmFuZDtcclxuICAgICAgICB0aGlzLmRyaXZlciA9IGRyaXZlcjtcclxuICAgICAgICB0aGlzLmNhcmdvID0gY2FyZ287XHJcbiAgICAgICAgdGhpcy50cnVja1N0YXRlID0gdHJ1Y2tTdGF0ZTtcclxuICAgICAgICB0aGlzLnRydWNrQ2FyZ29Xb3JrU3RhdGUgPSB0cnVja0NhcmdvV29ya1N0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGZ1bmN0aW9uIFxyXG4gICAgICogU2V0cyB0cnVjayBzdGF0ZSB0byBBdmFpYmxlXHJcbiAgICAgKi9cclxuICAgIHNldFN0YXRlVG9BdmFpYmxlKCkge1xyXG4gICAgICAgIHRoaXMudHJ1Y2tTdGF0ZSA9IFRydWNrU3RhdGUuQXZhaWJsZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBmdW5jdGlvbiBcclxuICAgICAqIFNldHMgdHJ1Y2sgc3RhdGUgdG8gSW5UcmFuc3BvcnRcclxuICAgICAqL1xyXG4gICAgc2V0U3RhdGVUb0luVHJhbnNwb3J0KCkge1xyXG4gICAgICAgIHRoaXMudHJ1Y2tTdGF0ZSA9IFRydWNrU3RhdGUuSW5UcmFuc3BvcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZnVuY3Rpb24gXHJcbiAgICAgKiBTZXRzIHRydWNrIHN0YXRlIHRvICBCcm9rZW5cclxuICAgICAqL1xyXG4gICAgc2V0U3RhdGVUb0Jyb2tlbigpIHtcclxuICAgICAgICB0aGlzLnRydWNrU3RhdGUgPSBUcnVja1N0YXRlLkJyb2tlbjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBmdW5jdGlvblxyXG4gICAgICogU2V0cyB0cnVjayBzdGF0ZSB0byBJblJlcGFpclxyXG4gICAgICovXHJcbiAgICBzZXRTdGF0ZVRvSW5SZXBhaXIoKSB7XHJcbiAgICAgICAgdGhpcy50cnVja1N0YXRlID0gVHJ1Y2tTdGF0ZS5JblJlcGFpcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBmdW5jdGlvbiBcclxuICAgICAqIFNldHMgdHJ1Y2sgc3RhdGUgdG8gSXNCZWluZ0xvYWRlZFxyXG4gICAgICovXHJcbiAgICBzZXRTdGF0ZVRvSXNCZWluZ0xvYWRlZCgpIHtcclxuICAgICAgICB0aGlzLnRydWNrU3RhdGUgPSBUcnVja1N0YXRlLklzQmVpbmdMb2FkZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZnVuY3Rpb24gXHJcbiAgICAgKiBTZXRzIHRydWNrIHN0YXRlIHRvIElzQmVpbmdVbmxvYWRlZFxyXG4gICAgICovXHJcbiAgICBzZXRTdGF0ZVRvSXNCZWluZ1VubG9hZGVkKCkge1xyXG4gICAgICAgIHRoaXMudHJ1Y2tTdGF0ZSA9IFRydWNrU3RhdGUuSXNCZWluZ1VubG9hZGVkO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFZlaGljbGUge1xyXG4gICAgc3BlZWQ6IG51bWJlcjtcclxuICAgIG1heEZ1ZWxUYW5rTGV2ZWw6IG51bWJlcjtcclxuICAgIGZ1ZWxDb25zdW1wdGlvblBlcjEwMEttOiBudW1iZXI7XHJcbiAgICBjdXJyZW50RnVlbFRhbmtMZXZlbDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNwZWVkOiBudW1iZXIsIG1heEZ1ZWxUYW5rTGV2ZWw6IG51bWJlciwgZnVlbENvbnN1bXB0aW9uUGVyMTAwS206IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcclxuICAgICAgICB0aGlzLm1heEZ1ZWxUYW5rTGV2ZWwgPSBtYXhGdWVsVGFua0xldmVsO1xyXG4gICAgICAgIHRoaXMuZnVlbENvbnN1bXB0aW9uUGVyMTAwS20gPSBmdWVsQ29uc3VtcHRpb25QZXIxMDBLbTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRGdWVsVGFua0xldmVsID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDdXJyZW50RnVlbFRhbmtMZXZlbChuZXdDdXJyZW50RnVlbFRhbmtMZXZlbDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50RnVlbFRhbmtMZXZlbCA9IG5ld0N1cnJlbnRGdWVsVGFua0xldmVsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEN1cnJlbnRGdWVsVGFua0xldmVsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRGdWVsVGFua0xldmVsO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1ZWxDb25zdW1wdGlvblBlcktpbG9tZXRlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mdWVsQ29uc3VtcHRpb25QZXIxMDBLbSAvIDEwMDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGdWVsRGlmZmVyZW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXhGdWVsVGFua0xldmVsIC0gdGhpcy5jdXJyZW50RnVlbFRhbmtMZXZlbDtcclxuICAgIH1cclxuXHJcbiAgICByZWZpbEZ1ZWxUYW5rVG9NYXhpbXVtKCkge1xyXG4gICAgICAgIGxldCBmdWVsVXNlZDogbnVtYmVyID0gdGhpcy5nZXRGdWVsRGlmZmVyZW5jZSgpXHJcbiAgICAgICAgdGhpcy5zZXRDdXJyZW50RnVlbFRhbmtMZXZlbCh0aGlzLm1heEZ1ZWxUYW5rTGV2ZWwpO1xyXG4gICAgICAgIHJldHVybiBmdWVsVXNlZDtcclxuICAgIH1cclxuXHJcbiAgICByZWZpbEZ1ZWxUYW5rKGxpdHJlc1RvUmVmaWw6IG51bWJlcikge1xyXG4gICAgICAgIGxldCB0bXBDdXJlbnRGdWVsVGFua0xldmVsID0gdGhpcy5jdXJyZW50RnVlbFRhbmtMZXZlbDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRGdWVsVGFua0xldmVsID0gdGhpcy5jdXJyZW50RnVlbFRhbmtMZXZlbCArIGxpdHJlc1RvUmVmaWw7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEZ1ZWxUYW5rTGV2ZWwgPD0gdGhpcy5tYXhGdWVsVGFua0xldmVsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RnVlbFRhbmtMZXZlbCA9IHRoaXMubWF4RnVlbFRhbmtMZXZlbDtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWF4RnVlbFRhbmtMZXZlbCAtIHRtcEN1cmVudEZ1ZWxUYW5rTGV2ZWw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==