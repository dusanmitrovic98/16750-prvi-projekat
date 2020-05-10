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
function firstCharacterToUpperCase(stringToCapitalize, firstLetterToUpperCase) {
    if (firstLetterToUpperCase === void 0) { firstLetterToUpperCase = true; }
    if (firstLetterToUpperCase) {
        stringToCapitalize = stringToCapitalize.charAt(0).toUpperCase() + stringToCapitalize.slice(1);
    }
    return stringToCapitalize;
}
function splitOnUppercaseLetters(stringToSplit) {
    var splitedOnUppercaseLetter = stringToSplit.match(/[A-Z][a-z]+/g);
    return splitedOnUppercaseLetter;
}
function toLowerCaseAndJoinElements(stringArrayToLowerCase, joinSeparator) {
    var returnStringValue = "";
    stringArrayToLowerCase.forEach(function (element) {
        returnStringValue = returnStringValue + element.toLowerCase() + joinSeparator;
    });
    return returnStringValue;
}
function ifLastletterIsSpaceThanRemove(stringWithUnneededSpace) {
    if (stringWithUnneededSpace.charAt(stringWithUnneededSpace.length - 1) == " ") {
        stringWithUnneededSpace = stringWithUnneededSpace.slice(0, stringWithUnneededSpace.length - 1);
    }
    return stringWithUnneededSpace;
}
function FormatString(stringToBeFormated, joinSeparator, firstLetterToUpperCase) {
    if (firstLetterToUpperCase === void 0) { firstLetterToUpperCase = true; }
    var splitedOnUppercaseLetter = splitOnUppercaseLetters(stringToBeFormated);
    var returnStringValue = toLowerCaseAndJoinElements(splitedOnUppercaseLetter, joinSeparator);
    returnStringValue = firstCharacterToUpperCase(returnStringValue, firstLetterToUpperCase);
    returnStringValue = ifLastletterIsSpaceThanRemove(returnStringValue);
    return returnStringValue;
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
/* harmony import */ var _models_chocolate_materials_chocolate_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/chocolate-materials/chocolate-material */ "./src/models/chocolate-materials/chocolate-material.ts");
/* harmony import */ var _models_factory_machines_pallet_jack_pallet_jack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/factory-machines/pallet-jack/pallet-jack */ "./src/models/factory-machines/pallet-jack/pallet-jack.ts");






console.log("hello");
var chocolateMaterialList;
var truck = new _models_transport_truck_truck__WEBPACK_IMPORTED_MODULE_0__["Truck"]("Ford", new _models_people_employee_employee__WEBPACK_IMPORTED_MODULE_1__["Employee"]("Dusan", "Mitrovic", new _models_people_employeer_employeer__WEBPACK_IMPORTED_MODULE_2__["Empolyeer"]("Milos", "Mitrovic")));
var palletJack = new _models_factory_machines_pallet_jack_pallet_jack__WEBPACK_IMPORTED_MODULE_5__["PalletJack"](new _models_people_employee_employee__WEBPACK_IMPORTED_MODULE_1__["Employee"]("Dusan", "Mitrovic", new _models_people_employeer_employeer__WEBPACK_IMPORTED_MODULE_2__["Empolyeer"]("Milos", "Mitrovic")));
var chocolateMaterial1 = new _models_chocolate_materials_chocolate_material__WEBPACK_IMPORTED_MODULE_4__["ChocolateMaterial"](_models_chocolate_materials_chocolate_material__WEBPACK_IMPORTED_MODULE_4__["ChocolateMaterialType"].MilkChocolateMaterial);
var chocolateMaterial2 = new _models_chocolate_materials_chocolate_material__WEBPACK_IMPORTED_MODULE_4__["ChocolateMaterial"](_models_chocolate_materials_chocolate_material__WEBPACK_IMPORTED_MODULE_4__["ChocolateMaterialType"].DarkChocolateMaterial);
;
var chocolateMaterial3 = new _models_chocolate_materials_chocolate_material__WEBPACK_IMPORTED_MODULE_4__["ChocolateMaterial"](_models_chocolate_materials_chocolate_material__WEBPACK_IMPORTED_MODULE_4__["ChocolateMaterialType"].RubyChocolateMaterial);
;
var chocolateMaterial4 = new _models_chocolate_materials_chocolate_material__WEBPACK_IMPORTED_MODULE_4__["ChocolateMaterial"](_models_chocolate_materials_chocolate_material__WEBPACK_IMPORTED_MODULE_4__["ChocolateMaterialType"].MilkChocolateMaterial);
;
var chocolateMaterial5 = new _models_chocolate_materials_chocolate_material__WEBPACK_IMPORTED_MODULE_4__["ChocolateMaterial"](_models_chocolate_materials_chocolate_material__WEBPACK_IMPORTED_MODULE_4__["ChocolateMaterialType"].DarkChocolateMaterial);
;
truck.setCargoStateToChocolateMaterialLoading();
truck.setStateToIsBeingLoaded();
truck.workWithCargoOnce(chocolateMaterial1);
truck.workWithCargoOnce(chocolateMaterial2);
truck.workWithCargoOnce(chocolateMaterial3);
truck.workWithCargoOnce(chocolateMaterial4);
truck.workWithCargoOnce(chocolateMaterial5);
palletJack.setCargoStateToChocolateMaterialLoading();
palletJack.setStateToIsBeingLoaded();
palletJack.workWithCargoOnce(chocolateMaterial1);
palletJack.workWithCargoOnce(chocolateMaterial2);
palletJack.workWithCargoOnce(chocolateMaterial3);
palletJack.workWithCargoOnce(chocolateMaterial4);
palletJack.workWithCargoOnce(chocolateMaterial5);
console.log(truck);
console.log(palletJack);
palletJack.setCargoStateToChocolateMaterialUnLoading();
palletJack.setStateToIsBeingUnloaded();
/*
while (!palletJack.isCargoEmpty()) {
    truck.workWithCargoOnce();
}*/
console.log(palletJack.workWithCargoOnce());
console.log(truck);
console.log(Object(_bin_string_manipulation_string_manipulation__WEBPACK_IMPORTED_MODULE_3__["FormatString"])(truck.cargoWorkState, " ", true));


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
var ChocolateMaterialList = /** @class */ (function () {
    function ChocolateMaterialList(chocolateMaterialList) {
        if (chocolateMaterialList === void 0) { chocolateMaterialList = new Array(); }
        this.chocolateMaterialList = chocolateMaterialList;
    }
    ChocolateMaterialList.prototype.addMaterialToList = function (chocolateMaterial) {
        this.chocolateMaterialList.push(chocolateMaterial);
    };
    ChocolateMaterialList.prototype.getMaterialFromList = function () {
        return this.chocolateMaterialList.pop();
    };
    ChocolateMaterialList.prototype.getMaterialListLength = function () {
        return this.chocolateMaterialList.length;
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
var ChocolateMaterialType;
(function (ChocolateMaterialType) {
    ChocolateMaterialType["MilkChocolateMaterial"] = "MilkChocolateMaterial";
    ChocolateMaterialType["DarkChocolateMaterial"] = "DarkChocolateMaterial";
    ChocolateMaterialType["WhiteChocolateMaterial"] = "WhiteChocolateMaterial";
    ChocolateMaterialType["RubyChocolateMaterial"] = "RubyChocolateMaterial";
})(ChocolateMaterialType || (ChocolateMaterialType = {}));
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
var ChocolateProductList = /** @class */ (function () {
    function ChocolateProductList(chocolateProductList) {
        if (chocolateProductList === void 0) { chocolateProductList = new Array(); }
        this.chocolateProductList = chocolateProductList;
    }
    ChocolateProductList.prototype.addProductToList = function (newChocolateProduct) {
        this.chocolateProductList.push(newChocolateProduct);
    };
    ChocolateProductList.prototype.getProductFromList = function () {
        return this.chocolateProductList.pop();
    };
    ChocolateProductList.prototype.getProductListLength = function () {
        return this.chocolateProductList.length;
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
var ChocolateProductType;
(function (ChocolateProductType) {
    ChocolateProductType["MilkChocolate"] = "MilkChocolate";
    ChocolateProductType["DarkChocolate"] = "DarkChocolate";
    ChocolateProductType["WhiteChocolate"] = "WhiteChocolate";
    ChocolateProductType["RubyChocolate"] = "RubyChocolate";
})(ChocolateProductType || (ChocolateProductType = {}));
var ChocolateProduct = /** @class */ (function () {
    function ChocolateProduct(chocolateProductType) {
        if (chocolateProductType === void 0) { chocolateProductType = ChocolateProductType.DarkChocolate; }
        this.chocolateProductType = chocolateProductType;
    }
    return ChocolateProduct;
}());



/***/ }),

/***/ "./src/models/factory-machines/pallet-jack/pallet-jack.ts":
/*!****************************************************************!*\
  !*** ./src/models/factory-machines/pallet-jack/pallet-jack.ts ***!
  \****************************************************************/
/*! exports provided: PalletJackState, PalletJackCargoWorkState, PalletJack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PalletJackState", function() { return PalletJackState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PalletJackCargoWorkState", function() { return PalletJackCargoWorkState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PalletJack", function() { return PalletJack; });
/* harmony import */ var _chocolate_products_chocolate_product_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chocolate-products/chocolate-product-list */ "./src/models/chocolate-products/chocolate-product-list.ts");
/* harmony import */ var _chocolate_materials_chocolate_material_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chocolate-materials/chocolate-material-list */ "./src/models/chocolate-materials/chocolate-material-list.ts");


var PalletJackState;
(function (PalletJackState) {
    PalletJackState["Avaible"] = "Avaible";
    PalletJackState["Broken"] = "Broken";
    PalletJackState["InRepair"] = "InRepair";
    PalletJackState["IsBeingLoaded"] = "IsBeingLoaded";
    PalletJackState["IsBeingUnloaded"] = "IsBeingUnloaded";
})(PalletJackState || (PalletJackState = {}));
var PalletJackCargoWorkState;
(function (PalletJackCargoWorkState) {
    PalletJackCargoWorkState["ChocolateMaterialLoading"] = "ChocolateMaterialLoading";
    PalletJackCargoWorkState["ChocolateMaterialUnloading"] = "ChocolateMaterialUnloading";
    PalletJackCargoWorkState["ChocolateProductLoading"] = "ChocolateProductLoading";
    PalletJackCargoWorkState["ChocolateProductUnloading"] = "ChocolateProductUnloading";
})(PalletJackCargoWorkState || (PalletJackCargoWorkState = {}));
var PalletJack = /** @class */ (function () {
    function PalletJack(driver, cargoMaxCapacity) {
        if (cargoMaxCapacity === void 0) { cargoMaxCapacity = 400; }
        this.driver = driver;
        this.cargoMaxCapacity = cargoMaxCapacity;
        this.materialCargo = new _chocolate_materials_chocolate_material_list__WEBPACK_IMPORTED_MODULE_1__["ChocolateMaterialList"];
        this.productCargo = new _chocolate_products_chocolate_product_list__WEBPACK_IMPORTED_MODULE_0__["ChocolateProductList"];
        this.state = PalletJackState.Avaible;
        this.cargoWorkState = PalletJackCargoWorkState.ChocolateMaterialLoading;
    }
    PalletJack.prototype.setDriver = function (driver) {
        this.driver = driver;
    };
    PalletJack.prototype.setCargoMaxCapacity = function (newCargoMaxCapacity) {
        this.cargoMaxCapacity = newCargoMaxCapacity;
    };
    PalletJack.prototype.setStateToAvaible = function () {
        this.state = PalletJackState.Avaible;
    };
    PalletJack.prototype.setStateToBroken = function () {
        this.state = PalletJackState.Broken;
    };
    PalletJack.prototype.setStateToInRepair = function () {
        this.state = PalletJackState.InRepair;
    };
    PalletJack.prototype.setStateToIsBeingLoaded = function () {
        this.state = PalletJackState.IsBeingLoaded;
    };
    PalletJack.prototype.setStateToIsBeingUnloaded = function () {
        this.state = PalletJackState.IsBeingUnloaded;
    };
    PalletJack.prototype.isStateAvaible = function () {
        return this.state === PalletJackState.Avaible;
    };
    PalletJack.prototype.isStateBroken = function () {
        return this.state === PalletJackState.Broken;
    };
    PalletJack.prototype.isStateInRepair = function () {
        return this.state === PalletJackState.InRepair;
    };
    PalletJack.prototype.isStateIsBeingLoaded = function () {
        return this.state === PalletJackState.IsBeingLoaded;
    };
    PalletJack.prototype.isStateIsBeingUnloaded = function () {
        return this.state === PalletJackState.IsBeingUnloaded;
    };
    PalletJack.prototype.setCargoStateToChocolateMaterialLoading = function () {
        this.cargoWorkState = PalletJackCargoWorkState.ChocolateMaterialLoading;
    };
    PalletJack.prototype.setCargoStateToChocolateMaterialUnLoading = function () {
        this.cargoWorkState = PalletJackCargoWorkState.ChocolateMaterialUnloading;
    };
    PalletJack.prototype.setCargoStateToChocolateProductLoading = function () {
        this.cargoWorkState = PalletJackCargoWorkState.ChocolateProductLoading;
    };
    PalletJack.prototype.setCargoStateToChocolateProductUnloading = function () {
        this.cargoWorkState = PalletJackCargoWorkState.ChocolateProductUnloading;
    };
    PalletJack.prototype.isCargoStateChocolateMaterialLoading = function () {
        return this.cargoWorkState === PalletJackCargoWorkState.ChocolateMaterialLoading;
    };
    PalletJack.prototype.isCargoStateChocolateMaterialUnloading = function () {
        return this.cargoWorkState === PalletJackCargoWorkState.ChocolateMaterialUnloading;
    };
    PalletJack.prototype.isCargoStateChocolateProductLoading = function () {
        return this.cargoWorkState === PalletJackCargoWorkState.ChocolateMaterialUnloading;
    };
    PalletJack.prototype.isCargoStateChocolateProductUnloading = function () {
        return this.cargoWorkState === PalletJackCargoWorkState.ChocolateProductUnloading;
    };
    PalletJack.prototype.isMaterialLoading = function () {
        return this.isCargoStateChocolateMaterialLoading() && this.isStateIsBeingLoaded();
    };
    PalletJack.prototype.isMaterialUnloading = function () {
        return this.isCargoStateChocolateMaterialUnloading() && this.isStateIsBeingUnloaded();
    };
    PalletJack.prototype.isProductLoading = function () {
        return this.isCargoStateChocolateProductLoading() && this.isStateIsBeingLoaded();
    };
    PalletJack.prototype.isProductUnloading = function () {
        return this.isCargoStateChocolateProductUnloading() && this.isStateIsBeingUnloaded();
    };
    PalletJack.prototype.cargoCurrentlyOccupiedSpace = function () {
        return this.materialCargo.getMaterialListLength() + this.productCargo.getProductListLength();
    };
    PalletJack.prototype.isThereFreeSpace = function () {
        return this.cargoCurrentlyOccupiedSpace() < this.cargoMaxCapacity;
    };
    PalletJack.prototype.isCargoEmpty = function () {
        return this.cargoCurrentlyOccupiedSpace() == 0;
    };
    PalletJack.prototype.isMaterialCargoEmpty = function () {
        return this.materialCargo.getMaterialListLength() == 0;
    };
    PalletJack.prototype.isProductCargoEmpty = function () {
        return this.productCargo.getProductListLength() == 0;
    };
    PalletJack.prototype.loadOneMaterialToCargo = function (chocolateMaterial) {
        if (this.isThereFreeSpace()) {
            this.materialCargo.addMaterialToList(chocolateMaterial);
        }
    };
    PalletJack.prototype.unloadOneMaterialFromCargo = function () {
        if (!this.isMaterialCargoEmpty()) {
            return this.materialCargo.getMaterialFromList();
        }
    };
    PalletJack.prototype.loadOneProductToCargo = function (chocolateProduct) {
        if (this.isThereFreeSpace()) {
            this.productCargo.addProductToList(chocolateProduct);
        }
    };
    PalletJack.prototype.unloadOneProductFromCargo = function () {
        if (!this.isProductCargoEmpty()) {
            return this.productCargo.getProductFromList();
        }
    };
    PalletJack.prototype.workWithCargoOnce = function (newMaterial, newProduct) {
        if (this.isMaterialLoading()) {
            this.loadOneMaterialToCargo(newMaterial);
        }
        else if (this.isMaterialUnloading()) {
            return this.unloadOneMaterialFromCargo();
        }
        else if (this.isProductLoading()) {
            this.loadOneProductToCargo(newProduct);
        }
        else if (this.isProductUnloading()) {
            return this.unloadOneProductFromCargo();
        }
    };
    return PalletJack;
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
/**
 *
 * produce product but remove material from list of materials
 */
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
    function Employee(name, lastName, factoryEmployeer, drivingLicence) {
        if (drivingLicence === void 0) { drivingLicence = false; }
        var _this = _super.call(this, name, lastName, drivingLicence) || this;
        _this.factoryEmployeer = factoryEmployeer;
        _this.producedChocolateGoods = new _chocolate_products_chocolate_product_list__WEBPACK_IMPORTED_MODULE_1__["ChocolateProductList"]();
        return _this;
    }
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
        this.producedChocolateGoods.addProductToList(producedChocolateProduct);
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

var EmployeerWorkState;
(function (EmployeerWorkState) {
    EmployeerWorkState["MaximumWorkDedicationTireless"] = "Tireless";
    EmployeerWorkState["MediumWorkDedicationFeelingTired"] = "FeelingTired";
    EmployeerWorkState["LowWorcDedicationTired"] = "Tired";
})(EmployeerWorkState || (EmployeerWorkState = {}));
var EmployeerMoodState;
(function (EmployeerMoodState) {
    EmployeerMoodState["Exelent"] = "Exelent";
    EmployeerMoodState["VeryGood"] = "VeryGood";
    EmployeerMoodState["Good"] = "Good";
    EmployeerMoodState["Stressed"] = "Stressed";
    EmployeerMoodState["Devastated"] = "Devastated";
})(EmployeerMoodState || (EmployeerMoodState = {}));
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
/* harmony import */ var _chocolate_products_chocolate_product_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chocolate-products/chocolate-product-list */ "./src/models/chocolate-products/chocolate-product-list.ts");
/* harmony import */ var _chocolate_materials_chocolate_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../chocolate-materials/chocolate-material-list */ "./src/models/chocolate-materials/chocolate-material-list.ts");
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



var TruckState;
(function (TruckState) {
    TruckState["Avaible"] = "Avaible";
    TruckState["InTransport"] = "InTransport";
    TruckState["Broken"] = "Broken";
    TruckState["InRepair"] = "InRepair";
    TruckState["IsBeingLoaded"] = "IsBeingLoaded";
    TruckState["IsBeingUnloaded"] = "IsBeingUnloaded";
})(TruckState || (TruckState = {}));
var TruckCargoWorkState;
(function (TruckCargoWorkState) {
    TruckCargoWorkState["ChocolateMaterialLoading"] = "ChocolateMaterialLoading";
    TruckCargoWorkState["ChocolateMaterialUnloading"] = "ChocolateMaterialUnloading";
    TruckCargoWorkState["ChocolateProductLoading"] = "ChocolateProductLoading";
    TruckCargoWorkState["ChocolateProductUnloading"] = "ChocolateProductUnloading";
})(TruckCargoWorkState || (TruckCargoWorkState = {}));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(brand, driver, cargoMaxCapacity) {
        if (cargoMaxCapacity === void 0) { cargoMaxCapacity = 10000; }
        var _this = _super.call(this, 0, 1400, 27.5) || this;
        _this.brand = brand;
        _this.driver = driver;
        _this.materialCargo = new _chocolate_materials_chocolate_material_list__WEBPACK_IMPORTED_MODULE_2__["ChocolateMaterialList"];
        _this.productCargo = new _chocolate_products_chocolate_product_list__WEBPACK_IMPORTED_MODULE_1__["ChocolateProductList"];
        _this.cargoMaxCapacity = cargoMaxCapacity;
        _this.state = TruckState.Avaible;
        _this.cargoWorkState = TruckCargoWorkState.ChocolateMaterialLoading;
        return _this;
    }
    Truck.prototype.setBrand = function (brand) {
        this.brand = brand;
    };
    Truck.prototype.setDriver = function (driver) {
        this.driver = driver;
    };
    Truck.prototype.setCargoMaxCapacity = function (newCargoMaxCapacity) {
        this.cargoMaxCapacity = newCargoMaxCapacity;
    };
    Truck.prototype.setStateToAvaible = function () {
        this.state = TruckState.Avaible;
    };
    Truck.prototype.setStateToInTransport = function () {
        this.state = TruckState.InTransport;
    };
    Truck.prototype.setStateToBroken = function () {
        this.state = TruckState.Broken;
    };
    Truck.prototype.setStateToInRepair = function () {
        this.state = TruckState.InRepair;
    };
    Truck.prototype.setStateToIsBeingLoaded = function () {
        this.state = TruckState.IsBeingLoaded;
    };
    Truck.prototype.setStateToIsBeingUnloaded = function () {
        this.state = TruckState.IsBeingUnloaded;
    };
    Truck.prototype.isStateAvaible = function () {
        return this.state === TruckState.Avaible;
    };
    Truck.prototype.isStateInTransport = function () {
        return this.state === TruckState.InTransport;
    };
    Truck.prototype.isStateBroken = function () {
        return this.state === TruckState.Broken;
    };
    Truck.prototype.isStateInRepair = function () {
        return this.state === TruckState.InRepair;
    };
    Truck.prototype.isStateIsBeingLoaded = function () {
        return this.state === TruckState.IsBeingLoaded;
    };
    Truck.prototype.isStateIsBeingUnloaded = function () {
        return this.state === TruckState.IsBeingUnloaded;
    };
    Truck.prototype.setCargoStateToChocolateMaterialLoading = function () {
        this.cargoWorkState = TruckCargoWorkState.ChocolateMaterialLoading;
    };
    Truck.prototype.setCargoStateToChocolateMaterialUnLoading = function () {
        this.cargoWorkState = TruckCargoWorkState.ChocolateMaterialUnloading;
    };
    Truck.prototype.setCargoStateToChocolateProductLoading = function () {
        this.cargoWorkState = TruckCargoWorkState.ChocolateProductLoading;
    };
    Truck.prototype.setCargoStateToChocolateProductUnloading = function () {
        this.cargoWorkState = TruckCargoWorkState.ChocolateProductUnloading;
    };
    Truck.prototype.isCargoStateChocolateMaterialLoading = function () {
        return this.cargoWorkState === TruckCargoWorkState.ChocolateMaterialLoading;
    };
    Truck.prototype.isCargoStateChocolateMaterialUnloading = function () {
        return this.cargoWorkState === TruckCargoWorkState.ChocolateMaterialUnloading;
    };
    Truck.prototype.isCargoStateChocolateProductLoading = function () {
        return this.cargoWorkState === TruckCargoWorkState.ChocolateMaterialUnloading;
    };
    Truck.prototype.isCargoStateChocolateProductUnloading = function () {
        return this.cargoWorkState === TruckCargoWorkState.ChocolateProductUnloading;
    };
    Truck.prototype.isMaterialLoading = function () {
        return this.isCargoStateChocolateMaterialLoading() && this.isStateIsBeingLoaded();
    };
    Truck.prototype.isMaterialUnloading = function () {
        return this.isCargoStateChocolateMaterialUnloading() && this.isStateIsBeingUnloaded();
    };
    Truck.prototype.isProductLoading = function () {
        return this.isCargoStateChocolateProductLoading() && this.isStateIsBeingLoaded();
    };
    Truck.prototype.isProductUnloading = function () {
        return this.isCargoStateChocolateProductUnloading() && this.isStateIsBeingUnloaded();
    };
    Truck.prototype.cargoCurrentlyOccupiedSpace = function () {
        return this.materialCargo.getMaterialListLength() + this.productCargo.getProductListLength();
    };
    Truck.prototype.isThereFreeSpace = function () {
        return this.cargoCurrentlyOccupiedSpace() < this.cargoMaxCapacity;
    };
    Truck.prototype.isCargoEmpty = function () {
        return this.cargoCurrentlyOccupiedSpace() == 0;
    };
    Truck.prototype.isMaterialCargoEmpty = function () {
        return this.materialCargo.getMaterialListLength() == 0;
    };
    Truck.prototype.isProductCargoEmpty = function () {
        return this.productCargo.getProductListLength() == 0;
    };
    Truck.prototype.loadOneMaterialToCargo = function (chocolateMaterial) {
        if (this.isThereFreeSpace()) {
            this.materialCargo.addMaterialToList(chocolateMaterial);
        }
    };
    Truck.prototype.unloadOneMaterialFromCargo = function () {
        if (!this.isMaterialCargoEmpty()) {
            return this.materialCargo.getMaterialFromList();
        }
    };
    Truck.prototype.loadOneProductToCargo = function (chocolateProduct) {
        if (this.isThereFreeSpace()) {
            this.productCargo.addProductToList(chocolateProduct);
        }
    };
    Truck.prototype.unloadOneProductFromCargo = function () {
        if (!this.isProductCargoEmpty()) {
            return this.productCargo.getProductFromList();
        }
    };
    Truck.prototype.workWithCargoOnce = function (newMaterial, newProduct) {
        if (this.isMaterialLoading()) {
            this.loadOneMaterialToCargo(newMaterial);
        }
        else if (this.isMaterialUnloading()) {
            return this.unloadOneMaterialFromCargo();
        }
        else if (this.isProductLoading()) {
            this.loadOneProductToCargo(newProduct);
        }
        else if (this.isProductUnloading()) {
            return this.unloadOneProductFromCargo();
        }
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
    Vehicle.prototype.getFuelDifference = function (fuelTankLevelToCheck) {
        if (fuelTankLevelToCheck) {
            return this.maxFuelTankLevel - fuelTankLevelToCheck;
        }
        else {
            return this.maxFuelTankLevel - this.currentFuelTankLevel;
        }
    };
    Vehicle.prototype.refilFuelTankToMaximum = function () {
        var fuelUsed = this.getFuelDifference();
        this.setCurrentFuelTankLevel(this.maxFuelTankLevel);
        return fuelUsed;
    };
    Vehicle.prototype.isCurrentLowerOrEqualThanMaximumTankFuelLevel = function () {
        return this.currentFuelTankLevel <= this.maxFuelTankLevel;
    };
    Vehicle.prototype.refilFuelTank = function (litresToRefil) {
        var tmpCurentFuelTankLevel = this.getCurrentFuelTankLevel();
        this.setCurrentFuelTankLevel(this.getCurrentFuelTankLevel() + litresToRefil);
        if (this.isCurrentLowerOrEqualThanMaximumTankFuelLevel()) {
            return 0;
        }
        else {
            this.setCurrentFuelTankLevel(this.maxFuelTankLevel);
            return this.getFuelDifference(tmpCurentFuelTankLevel);
        }
    };
    return Vehicle;
}());



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjLy5iaW4vc3RyaW5nLW1hbmlwdWxhdGlvbi9zdHJpbmctbWFuaXB1bGF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2Nob2NvbGF0ZS1tYXRlcmlhbHMvY2hvY29sYXRlLW1hdGVyaWFsLWxpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9jaG9jb2xhdGUtbWF0ZXJpYWxzL2Nob2NvbGF0ZS1tYXRlcmlhbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2Nob2NvbGF0ZS1wcm9kdWN0cy9jaG9jb2xhdGUtcHJvZHVjdC1saXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvY2hvY29sYXRlLXByb2R1Y3RzL2Nob2NvbGF0ZS1wcm9kdWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvZmFjdG9yeS1tYWNoaW5lcy9wYWxsZXQtamFjay9wYWxsZXQtamFjay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL3Blb3BsZS9lbXBsb3llZS9lbXBsb3llZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL3Blb3BsZS9lbXBsb3llZXIvZW1wbG95ZWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvcGVvcGxlL3BlcnNvbi9wZXJzb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy90cmFuc3BvcnQvdHJ1Y2svdHJ1Y2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy90cmFuc3BvcnQvdmVoaWNsZS92ZWhpY2xlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7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YSxHQUFiLFVBQWMsYUFBcUI7UUFDL0IsSUFBSSxzQkFBc0IsR0FBRyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUM1RCxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLEdBQUcsYUFBYSxDQUFDLENBQUM7UUFDN0UsSUFBSSxJQUFJLENBQUMsNkNBQTZDLEVBQUUsRUFBRTtZQUN0RCxPQUFPLENBQUMsQ0FBQztTQUNaO2FBQ0k7WUFDRCxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDcEQsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsc0JBQXNCLENBQUMsQ0FBQztTQUN6RDtJQUNMLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImZ1bmN0aW9uIGZpcnN0Q2hhcmFjdGVyVG9VcHBlckNhc2Uoc3RyaW5nVG9DYXBpdGFsaXplOiBzdHJpbmcsIGZpcnN0TGV0dGVyVG9VcHBlckNhc2U6IGJvb2xlYW4gPSB0cnVlKSB7XHJcbiAgICBpZiAoZmlyc3RMZXR0ZXJUb1VwcGVyQ2FzZSkge1xyXG4gICAgICAgIHN0cmluZ1RvQ2FwaXRhbGl6ZSA9IHN0cmluZ1RvQ2FwaXRhbGl6ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZ1RvQ2FwaXRhbGl6ZS5zbGljZSgxKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzdHJpbmdUb0NhcGl0YWxpemU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNwbGl0T25VcHBlcmNhc2VMZXR0ZXJzKHN0cmluZ1RvU3BsaXQ6IHN0cmluZykge1xyXG4gICAgbGV0IHNwbGl0ZWRPblVwcGVyY2FzZUxldHRlcjogc3RyaW5nW10gPSBzdHJpbmdUb1NwbGl0Lm1hdGNoKC9bQS1aXVthLXpdKy9nKTtcclxuICAgIHJldHVybiBzcGxpdGVkT25VcHBlcmNhc2VMZXR0ZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvTG93ZXJDYXNlQW5kSm9pbkVsZW1lbnRzKHN0cmluZ0FycmF5VG9Mb3dlckNhc2U6IHN0cmluZ1tdLCBqb2luU2VwYXJhdG9yOiBzdHJpbmcpIHtcclxuICAgIGxldCByZXR1cm5TdHJpbmdWYWx1ZTogc3RyaW5nID0gXCJcIjtcclxuICAgIHN0cmluZ0FycmF5VG9Mb3dlckNhc2UuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICByZXR1cm5TdHJpbmdWYWx1ZSA9IHJldHVyblN0cmluZ1ZhbHVlICsgZWxlbWVudC50b0xvd2VyQ2FzZSgpICsgam9pblNlcGFyYXRvcjtcclxuICAgIH0pXHJcbiAgICByZXR1cm4gcmV0dXJuU3RyaW5nVmFsdWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlmTGFzdGxldHRlcklzU3BhY2VUaGFuUmVtb3ZlKHN0cmluZ1dpdGhVbm5lZWRlZFNwYWNlOiBzdHJpbmcpIHtcclxuICAgIGlmIChzdHJpbmdXaXRoVW5uZWVkZWRTcGFjZS5jaGFyQXQoc3RyaW5nV2l0aFVubmVlZGVkU3BhY2UubGVuZ3RoIC0gMSkgPT0gXCIgXCIpIHtcclxuICAgICAgICBzdHJpbmdXaXRoVW5uZWVkZWRTcGFjZSA9IHN0cmluZ1dpdGhVbm5lZWRlZFNwYWNlLnNsaWNlKDAsIHN0cmluZ1dpdGhVbm5lZWRlZFNwYWNlLmxlbmd0aCAtIDEpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0cmluZ1dpdGhVbm5lZWRlZFNwYWNlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRm9ybWF0U3RyaW5nKHN0cmluZ1RvQmVGb3JtYXRlZDogc3RyaW5nLCBqb2luU2VwYXJhdG9yOiBzdHJpbmcsIGZpcnN0TGV0dGVyVG9VcHBlckNhc2U6IGJvb2xlYW4gPSB0cnVlKSB7XHJcbiAgICBsZXQgc3BsaXRlZE9uVXBwZXJjYXNlTGV0dGVyOiBzdHJpbmdbXSA9IHNwbGl0T25VcHBlcmNhc2VMZXR0ZXJzKHN0cmluZ1RvQmVGb3JtYXRlZCk7XHJcbiAgICBsZXQgcmV0dXJuU3RyaW5nVmFsdWU6IHN0cmluZyA9IHRvTG93ZXJDYXNlQW5kSm9pbkVsZW1lbnRzKHNwbGl0ZWRPblVwcGVyY2FzZUxldHRlciwgam9pblNlcGFyYXRvcik7XHJcbiAgICByZXR1cm5TdHJpbmdWYWx1ZSA9IGZpcnN0Q2hhcmFjdGVyVG9VcHBlckNhc2UocmV0dXJuU3RyaW5nVmFsdWUsIGZpcnN0TGV0dGVyVG9VcHBlckNhc2UpO1xyXG4gICAgcmV0dXJuU3RyaW5nVmFsdWUgPSBpZkxhc3RsZXR0ZXJJc1NwYWNlVGhhblJlbW92ZShyZXR1cm5TdHJpbmdWYWx1ZSk7XHJcbiAgICByZXR1cm4gcmV0dXJuU3RyaW5nVmFsdWU7XHJcbn0iLCJpbXBvcnQgeyBUcnVjaywgVHJ1Y2tTdGF0ZSB9IGZyb20gXCIuL21vZGVscy90cmFuc3BvcnQvdHJ1Y2svdHJ1Y2tcIjtcclxuaW1wb3J0IHsgRW1wbG95ZWUgfSBmcm9tIFwiLi9tb2RlbHMvcGVvcGxlL2VtcGxveWVlL2VtcGxveWVlXCI7XHJcbmltcG9ydCB7IEVtcG9seWVlciB9IGZyb20gXCIuL21vZGVscy9wZW9wbGUvZW1wbG95ZWVyL2VtcGxveWVlclwiO1xyXG5pbXBvcnQgeyBGb3JtYXRTdHJpbmcgfSBmcm9tIFwiLi8uYmluL3N0cmluZy1tYW5pcHVsYXRpb24vc3RyaW5nLW1hbmlwdWxhdGlvblwiXHJcbmltcG9ydCB7IENob2NvbGF0ZU1hdGVyaWFsTGlzdCB9IGZyb20gXCIuL21vZGVscy9jaG9jb2xhdGUtbWF0ZXJpYWxzL2Nob2NvbGF0ZS1tYXRlcmlhbC1saXN0XCI7XHJcbmltcG9ydCB7IENob2NvbGF0ZU1hdGVyaWFsLCBDaG9jb2xhdGVNYXRlcmlhbFR5cGUgfSBmcm9tIFwiLi9tb2RlbHMvY2hvY29sYXRlLW1hdGVyaWFscy9jaG9jb2xhdGUtbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgUGFsbGV0SmFjayB9IGZyb20gXCIuL21vZGVscy9mYWN0b3J5LW1hY2hpbmVzL3BhbGxldC1qYWNrL3BhbGxldC1qYWNrXCI7XHJcblxyXG5jb25zb2xlLmxvZyhcImhlbGxvXCIpXHJcblxyXG5sZXQgY2hvY29sYXRlTWF0ZXJpYWxMaXN0OiBDaG9jb2xhdGVNYXRlcmlhbExpc3Q7XHJcblxyXG5sZXQgdHJ1Y2sgPSBuZXcgVHJ1Y2soXCJGb3JkXCIsIG5ldyBFbXBsb3llZShcIkR1c2FuXCIsIFwiTWl0cm92aWNcIiwgbmV3IEVtcG9seWVlcihcIk1pbG9zXCIsIFwiTWl0cm92aWNcIikpKTtcclxubGV0IHBhbGxldEphY2sgPSBuZXcgUGFsbGV0SmFjayhuZXcgRW1wbG95ZWUoXCJEdXNhblwiLCBcIk1pdHJvdmljXCIsIG5ldyBFbXBvbHllZXIoXCJNaWxvc1wiLCBcIk1pdHJvdmljXCIpKSk7XHJcblxyXG5sZXQgY2hvY29sYXRlTWF0ZXJpYWwxOiBDaG9jb2xhdGVNYXRlcmlhbCA9IG5ldyBDaG9jb2xhdGVNYXRlcmlhbChDaG9jb2xhdGVNYXRlcmlhbFR5cGUuTWlsa0Nob2NvbGF0ZU1hdGVyaWFsKTtcclxubGV0IGNob2NvbGF0ZU1hdGVyaWFsMjogQ2hvY29sYXRlTWF0ZXJpYWwgPSBuZXcgQ2hvY29sYXRlTWF0ZXJpYWwoQ2hvY29sYXRlTWF0ZXJpYWxUeXBlLkRhcmtDaG9jb2xhdGVNYXRlcmlhbCk7O1xyXG5sZXQgY2hvY29sYXRlTWF0ZXJpYWwzOiBDaG9jb2xhdGVNYXRlcmlhbCA9IG5ldyBDaG9jb2xhdGVNYXRlcmlhbChDaG9jb2xhdGVNYXRlcmlhbFR5cGUuUnVieUNob2NvbGF0ZU1hdGVyaWFsKTs7XHJcbmxldCBjaG9jb2xhdGVNYXRlcmlhbDQ6IENob2NvbGF0ZU1hdGVyaWFsID0gbmV3IENob2NvbGF0ZU1hdGVyaWFsKENob2NvbGF0ZU1hdGVyaWFsVHlwZS5NaWxrQ2hvY29sYXRlTWF0ZXJpYWwpOztcclxubGV0IGNob2NvbGF0ZU1hdGVyaWFsNTogQ2hvY29sYXRlTWF0ZXJpYWwgPSBuZXcgQ2hvY29sYXRlTWF0ZXJpYWwoQ2hvY29sYXRlTWF0ZXJpYWxUeXBlLkRhcmtDaG9jb2xhdGVNYXRlcmlhbCk7O1xyXG5cclxuXHJcbnRydWNrLnNldENhcmdvU3RhdGVUb0Nob2NvbGF0ZU1hdGVyaWFsTG9hZGluZygpO1xyXG50cnVjay5zZXRTdGF0ZVRvSXNCZWluZ0xvYWRlZCgpO1xyXG5cclxudHJ1Y2sud29ya1dpdGhDYXJnb09uY2UoY2hvY29sYXRlTWF0ZXJpYWwxKTtcclxudHJ1Y2sud29ya1dpdGhDYXJnb09uY2UoY2hvY29sYXRlTWF0ZXJpYWwyKTtcclxudHJ1Y2sud29ya1dpdGhDYXJnb09uY2UoY2hvY29sYXRlTWF0ZXJpYWwzKTtcclxudHJ1Y2sud29ya1dpdGhDYXJnb09uY2UoY2hvY29sYXRlTWF0ZXJpYWw0KTtcclxudHJ1Y2sud29ya1dpdGhDYXJnb09uY2UoY2hvY29sYXRlTWF0ZXJpYWw1KTtcclxuXHJcblxyXG5wYWxsZXRKYWNrLnNldENhcmdvU3RhdGVUb0Nob2NvbGF0ZU1hdGVyaWFsTG9hZGluZygpO1xyXG5wYWxsZXRKYWNrLnNldFN0YXRlVG9Jc0JlaW5nTG9hZGVkKCk7XHJcblxyXG5wYWxsZXRKYWNrLndvcmtXaXRoQ2FyZ29PbmNlKGNob2NvbGF0ZU1hdGVyaWFsMSk7XHJcbnBhbGxldEphY2sud29ya1dpdGhDYXJnb09uY2UoY2hvY29sYXRlTWF0ZXJpYWwyKTtcclxucGFsbGV0SmFjay53b3JrV2l0aENhcmdvT25jZShjaG9jb2xhdGVNYXRlcmlhbDMpO1xyXG5wYWxsZXRKYWNrLndvcmtXaXRoQ2FyZ29PbmNlKGNob2NvbGF0ZU1hdGVyaWFsNCk7XHJcbnBhbGxldEphY2sud29ya1dpdGhDYXJnb09uY2UoY2hvY29sYXRlTWF0ZXJpYWw1KTtcclxuXHJcbmNvbnNvbGUubG9nKHRydWNrKTtcclxuY29uc29sZS5sb2cocGFsbGV0SmFjayk7XHJcblxyXG5cclxuXHJcbnBhbGxldEphY2suc2V0Q2FyZ29TdGF0ZVRvQ2hvY29sYXRlTWF0ZXJpYWxVbkxvYWRpbmcoKTtcclxucGFsbGV0SmFjay5zZXRTdGF0ZVRvSXNCZWluZ1VubG9hZGVkKCk7XHJcblxyXG4vKlxyXG53aGlsZSAoIXBhbGxldEphY2suaXNDYXJnb0VtcHR5KCkpIHtcclxuICAgIHRydWNrLndvcmtXaXRoQ2FyZ29PbmNlKCk7XHJcbn0qL1xyXG5jb25zb2xlLmxvZyhwYWxsZXRKYWNrLndvcmtXaXRoQ2FyZ29PbmNlKCkpO1xyXG5jb25zb2xlLmxvZyh0cnVjayk7XHJcblxyXG5jb25zb2xlLmxvZyhGb3JtYXRTdHJpbmcodHJ1Y2suY2FyZ29Xb3JrU3RhdGUsIFwiIFwiLCB0cnVlKSk7XHJcblxyXG4iLCJpbXBvcnQgeyBDaG9jb2xhdGVNYXRlcmlhbCB9IGZyb20gXCIuL2Nob2NvbGF0ZS1tYXRlcmlhbFwiXHJcblxyXG5leHBvcnQgY2xhc3MgQ2hvY29sYXRlTWF0ZXJpYWxMaXN0IHtcclxuICAgIGNob2NvbGF0ZU1hdGVyaWFsTGlzdDogQ2hvY29sYXRlTWF0ZXJpYWxbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjaG9jb2xhdGVNYXRlcmlhbExpc3QgPSBuZXcgQXJyYXkoKSkge1xyXG4gICAgICAgIHRoaXMuY2hvY29sYXRlTWF0ZXJpYWxMaXN0ID0gY2hvY29sYXRlTWF0ZXJpYWxMaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIGFkZE1hdGVyaWFsVG9MaXN0KGNob2NvbGF0ZU1hdGVyaWFsOiBDaG9jb2xhdGVNYXRlcmlhbCkge1xyXG4gICAgICAgIHRoaXMuY2hvY29sYXRlTWF0ZXJpYWxMaXN0LnB1c2goY2hvY29sYXRlTWF0ZXJpYWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1hdGVyaWFsRnJvbUxpc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hvY29sYXRlTWF0ZXJpYWxMaXN0LnBvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1hdGVyaWFsTGlzdExlbmd0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jaG9jb2xhdGVNYXRlcmlhbExpc3QubGVuZ3RoO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGVudW0gQ2hvY29sYXRlTWF0ZXJpYWxUeXBlIHtcclxuICAgIE1pbGtDaG9jb2xhdGVNYXRlcmlhbCA9IFwiTWlsa0Nob2NvbGF0ZU1hdGVyaWFsXCIsXHJcbiAgICBEYXJrQ2hvY29sYXRlTWF0ZXJpYWwgPSBcIkRhcmtDaG9jb2xhdGVNYXRlcmlhbFwiLFxyXG4gICAgV2hpdGVDaG9jb2xhdGVNYXRlcmlhbCA9IFwiV2hpdGVDaG9jb2xhdGVNYXRlcmlhbFwiLFxyXG4gICAgUnVieUNob2NvbGF0ZU1hdGVyaWFsID0gXCJSdWJ5Q2hvY29sYXRlTWF0ZXJpYWxcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hvY29sYXRlTWF0ZXJpYWwge1xyXG4gICAgY2hvY29sYXRlTWF0ZXJpYWxUeXBlOiBDaG9jb2xhdGVNYXRlcmlhbFR5cGU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2hvY29sYXRlTWF0ZXJpYWxUeXBlOiBDaG9jb2xhdGVNYXRlcmlhbFR5cGUgPSBDaG9jb2xhdGVNYXRlcmlhbFR5cGUuRGFya0Nob2NvbGF0ZU1hdGVyaWFsKSB7XHJcbiAgICAgICAgdGhpcy5jaG9jb2xhdGVNYXRlcmlhbFR5cGUgPSBjaG9jb2xhdGVNYXRlcmlhbFR5cGU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBDaG9jb2xhdGVQcm9kdWN0IH0gZnJvbSBcIi4vY2hvY29sYXRlLXByb2R1Y3RcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDaG9jb2xhdGVQcm9kdWN0TGlzdCB7XHJcbiAgICBjaG9jb2xhdGVQcm9kdWN0TGlzdDogQ2hvY29sYXRlUHJvZHVjdFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNob2NvbGF0ZVByb2R1Y3RMaXN0ID0gbmV3IEFycmF5KCkpIHtcclxuICAgICAgICB0aGlzLmNob2NvbGF0ZVByb2R1Y3RMaXN0ID0gY2hvY29sYXRlUHJvZHVjdExpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkUHJvZHVjdFRvTGlzdChuZXdDaG9jb2xhdGVQcm9kdWN0OiBDaG9jb2xhdGVQcm9kdWN0KSB7XHJcbiAgICAgICAgdGhpcy5jaG9jb2xhdGVQcm9kdWN0TGlzdC5wdXNoKG5ld0Nob2NvbGF0ZVByb2R1Y3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFByb2R1Y3RGcm9tTGlzdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jaG9jb2xhdGVQcm9kdWN0TGlzdC5wb3AoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQcm9kdWN0TGlzdExlbmd0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jaG9jb2xhdGVQcm9kdWN0TGlzdC5sZW5ndGg7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZW51bSBDaG9jb2xhdGVQcm9kdWN0VHlwZSB7XHJcbiAgICBNaWxrQ2hvY29sYXRlID0gXCJNaWxrQ2hvY29sYXRlXCIsXHJcbiAgICBEYXJrQ2hvY29sYXRlID0gXCJEYXJrQ2hvY29sYXRlXCIsXHJcbiAgICBXaGl0ZUNob2NvbGF0ZSA9IFwiV2hpdGVDaG9jb2xhdGVcIixcclxuICAgIFJ1YnlDaG9jb2xhdGUgPSBcIlJ1YnlDaG9jb2xhdGVcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hvY29sYXRlUHJvZHVjdCB7XHJcbiAgICBjaG9jb2xhdGVQcm9kdWN0VHlwZTogQ2hvY29sYXRlUHJvZHVjdFR5cGU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2hvY29sYXRlUHJvZHVjdFR5cGU6IENob2NvbGF0ZVByb2R1Y3RUeXBlID0gQ2hvY29sYXRlUHJvZHVjdFR5cGUuRGFya0Nob2NvbGF0ZSkge1xyXG4gICAgICAgIHRoaXMuY2hvY29sYXRlUHJvZHVjdFR5cGUgPSBjaG9jb2xhdGVQcm9kdWN0VHlwZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEVtcGxveWVlIH0gZnJvbSBcIi4uLy4uL3Blb3BsZS9lbXBsb3llZS9lbXBsb3llZVwiO1xyXG5pbXBvcnQgeyBDaG9jb2xhdGVQcm9kdWN0TGlzdCB9IGZyb20gXCIuLi8uLi9jaG9jb2xhdGUtcHJvZHVjdHMvY2hvY29sYXRlLXByb2R1Y3QtbGlzdFwiO1xyXG5pbXBvcnQgeyBDaG9jb2xhdGVNYXRlcmlhbExpc3QgfSBmcm9tIFwiLi4vLi4vY2hvY29sYXRlLW1hdGVyaWFscy9jaG9jb2xhdGUtbWF0ZXJpYWwtbGlzdFwiO1xyXG5pbXBvcnQgeyBDaG9jb2xhdGVNYXRlcmlhbCB9IGZyb20gXCIuLi8uLi9jaG9jb2xhdGUtbWF0ZXJpYWxzL2Nob2NvbGF0ZS1tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBDaG9jb2xhdGVQcm9kdWN0IH0gZnJvbSBcIi4uLy4uL2Nob2NvbGF0ZS1wcm9kdWN0cy9jaG9jb2xhdGUtcHJvZHVjdFwiO1xyXG5cclxuZXhwb3J0IGVudW0gUGFsbGV0SmFja1N0YXRlIHtcclxuICAgIEF2YWlibGUgPSBcIkF2YWlibGVcIixcclxuICAgIEJyb2tlbiA9IFwiQnJva2VuXCIsXHJcbiAgICBJblJlcGFpciA9IFwiSW5SZXBhaXJcIixcclxuICAgIElzQmVpbmdMb2FkZWQgPSBcIklzQmVpbmdMb2FkZWRcIixcclxuICAgIElzQmVpbmdVbmxvYWRlZCA9IFwiSXNCZWluZ1VubG9hZGVkXCJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gUGFsbGV0SmFja0NhcmdvV29ya1N0YXRlIHtcclxuICAgIENob2NvbGF0ZU1hdGVyaWFsTG9hZGluZyA9IFwiQ2hvY29sYXRlTWF0ZXJpYWxMb2FkaW5nXCIsXHJcbiAgICBDaG9jb2xhdGVNYXRlcmlhbFVubG9hZGluZyA9IFwiQ2hvY29sYXRlTWF0ZXJpYWxVbmxvYWRpbmdcIixcclxuICAgIENob2NvbGF0ZVByb2R1Y3RMb2FkaW5nID0gXCJDaG9jb2xhdGVQcm9kdWN0TG9hZGluZ1wiLFxyXG4gICAgQ2hvY29sYXRlUHJvZHVjdFVubG9hZGluZyA9IFwiQ2hvY29sYXRlUHJvZHVjdFVubG9hZGluZ1wiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQYWxsZXRKYWNrIHtcclxuICAgIGRyaXZlcjogRW1wbG95ZWU7XHJcbiAgICBtYXRlcmlhbENhcmdvOiBDaG9jb2xhdGVNYXRlcmlhbExpc3Q7XHJcbiAgICBwcm9kdWN0Q2FyZ286IENob2NvbGF0ZVByb2R1Y3RMaXN0O1xyXG4gICAgY2FyZ29NYXhDYXBhY2l0eTogbnVtYmVyO1xyXG4gICAgc3RhdGU6IFBhbGxldEphY2tTdGF0ZTtcclxuICAgIGNhcmdvV29ya1N0YXRlOiBQYWxsZXRKYWNrQ2FyZ29Xb3JrU3RhdGU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZHJpdmVyOiBFbXBsb3llZSwgY2FyZ29NYXhDYXBhY2l0eTogbnVtYmVyID0gNDAwKSB7XHJcbiAgICAgICAgdGhpcy5kcml2ZXIgPSBkcml2ZXI7XHJcbiAgICAgICAgdGhpcy5jYXJnb01heENhcGFjaXR5ID0gY2FyZ29NYXhDYXBhY2l0eTtcclxuICAgICAgICB0aGlzLm1hdGVyaWFsQ2FyZ28gPSBuZXcgQ2hvY29sYXRlTWF0ZXJpYWxMaXN0O1xyXG4gICAgICAgIHRoaXMucHJvZHVjdENhcmdvID0gbmV3IENob2NvbGF0ZVByb2R1Y3RMaXN0O1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBQYWxsZXRKYWNrU3RhdGUuQXZhaWJsZTtcclxuICAgICAgICB0aGlzLmNhcmdvV29ya1N0YXRlID0gUGFsbGV0SmFja0NhcmdvV29ya1N0YXRlLkNob2NvbGF0ZU1hdGVyaWFsTG9hZGluZztcclxuICAgIH1cclxuXHJcbiAgICBzZXREcml2ZXIoZHJpdmVyOiBFbXBsb3llZSkge1xyXG4gICAgICAgIHRoaXMuZHJpdmVyID0gZHJpdmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENhcmdvTWF4Q2FwYWNpdHkobmV3Q2FyZ29NYXhDYXBhY2l0eTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jYXJnb01heENhcGFjaXR5ID0gbmV3Q2FyZ29NYXhDYXBhY2l0eTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTdGF0ZVRvQXZhaWJsZSgpIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gUGFsbGV0SmFja1N0YXRlLkF2YWlibGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3RhdGVUb0Jyb2tlbigpIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gUGFsbGV0SmFja1N0YXRlLkJyb2tlbjtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTdGF0ZVRvSW5SZXBhaXIoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFBhbGxldEphY2tTdGF0ZS5JblJlcGFpcjtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTdGF0ZVRvSXNCZWluZ0xvYWRlZCgpIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gUGFsbGV0SmFja1N0YXRlLklzQmVpbmdMb2FkZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3RhdGVUb0lzQmVpbmdVbmxvYWRlZCgpIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gUGFsbGV0SmFja1N0YXRlLklzQmVpbmdVbmxvYWRlZDtcclxuICAgIH1cclxuXHJcbiAgICBpc1N0YXRlQXZhaWJsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZSA9PT0gUGFsbGV0SmFja1N0YXRlLkF2YWlibGU7XHJcbiAgICB9XHJcblxyXG4gICAgaXNTdGF0ZUJyb2tlbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZSA9PT0gUGFsbGV0SmFja1N0YXRlLkJyb2tlbjtcclxuICAgIH1cclxuXHJcbiAgICBpc1N0YXRlSW5SZXBhaXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUgPT09IFBhbGxldEphY2tTdGF0ZS5JblJlcGFpcjtcclxuICAgIH1cclxuXHJcbiAgICBpc1N0YXRlSXNCZWluZ0xvYWRlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZSA9PT0gUGFsbGV0SmFja1N0YXRlLklzQmVpbmdMb2FkZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaXNTdGF0ZUlzQmVpbmdVbmxvYWRlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZSA9PT0gUGFsbGV0SmFja1N0YXRlLklzQmVpbmdVbmxvYWRlZDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDYXJnb1N0YXRlVG9DaG9jb2xhdGVNYXRlcmlhbExvYWRpbmcoKSB7XHJcbiAgICAgICAgdGhpcy5jYXJnb1dvcmtTdGF0ZSA9IFBhbGxldEphY2tDYXJnb1dvcmtTdGF0ZS5DaG9jb2xhdGVNYXRlcmlhbExvYWRpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q2FyZ29TdGF0ZVRvQ2hvY29sYXRlTWF0ZXJpYWxVbkxvYWRpbmcoKSB7XHJcbiAgICAgICAgdGhpcy5jYXJnb1dvcmtTdGF0ZSA9IFBhbGxldEphY2tDYXJnb1dvcmtTdGF0ZS5DaG9jb2xhdGVNYXRlcmlhbFVubG9hZGluZztcclxuICAgIH1cclxuXHJcbiAgICBzZXRDYXJnb1N0YXRlVG9DaG9jb2xhdGVQcm9kdWN0TG9hZGluZygpIHtcclxuICAgICAgICB0aGlzLmNhcmdvV29ya1N0YXRlID0gUGFsbGV0SmFja0NhcmdvV29ya1N0YXRlLkNob2NvbGF0ZVByb2R1Y3RMb2FkaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENhcmdvU3RhdGVUb0Nob2NvbGF0ZVByb2R1Y3RVbmxvYWRpbmcoKSB7XHJcbiAgICAgICAgdGhpcy5jYXJnb1dvcmtTdGF0ZSA9IFBhbGxldEphY2tDYXJnb1dvcmtTdGF0ZS5DaG9jb2xhdGVQcm9kdWN0VW5sb2FkaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGlzQ2FyZ29TdGF0ZUNob2NvbGF0ZU1hdGVyaWFsTG9hZGluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYXJnb1dvcmtTdGF0ZSA9PT0gUGFsbGV0SmFja0NhcmdvV29ya1N0YXRlLkNob2NvbGF0ZU1hdGVyaWFsTG9hZGluZztcclxuICAgIH1cclxuXHJcbiAgICBpc0NhcmdvU3RhdGVDaG9jb2xhdGVNYXRlcmlhbFVubG9hZGluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYXJnb1dvcmtTdGF0ZSA9PT0gUGFsbGV0SmFja0NhcmdvV29ya1N0YXRlLkNob2NvbGF0ZU1hdGVyaWFsVW5sb2FkaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGlzQ2FyZ29TdGF0ZUNob2NvbGF0ZVByb2R1Y3RMb2FkaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhcmdvV29ya1N0YXRlID09PSBQYWxsZXRKYWNrQ2FyZ29Xb3JrU3RhdGUuQ2hvY29sYXRlTWF0ZXJpYWxVbmxvYWRpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgaXNDYXJnb1N0YXRlQ2hvY29sYXRlUHJvZHVjdFVubG9hZGluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYXJnb1dvcmtTdGF0ZSA9PT0gUGFsbGV0SmFja0NhcmdvV29ya1N0YXRlLkNob2NvbGF0ZVByb2R1Y3RVbmxvYWRpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgaXNNYXRlcmlhbExvYWRpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNDYXJnb1N0YXRlQ2hvY29sYXRlTWF0ZXJpYWxMb2FkaW5nKCkgJiYgdGhpcy5pc1N0YXRlSXNCZWluZ0xvYWRlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzTWF0ZXJpYWxVbmxvYWRpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNDYXJnb1N0YXRlQ2hvY29sYXRlTWF0ZXJpYWxVbmxvYWRpbmcoKSAmJiB0aGlzLmlzU3RhdGVJc0JlaW5nVW5sb2FkZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpc1Byb2R1Y3RMb2FkaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzQ2FyZ29TdGF0ZUNob2NvbGF0ZVByb2R1Y3RMb2FkaW5nKCkgJiYgdGhpcy5pc1N0YXRlSXNCZWluZ0xvYWRlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzUHJvZHVjdFVubG9hZGluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0NhcmdvU3RhdGVDaG9jb2xhdGVQcm9kdWN0VW5sb2FkaW5nKCkgJiYgdGhpcy5pc1N0YXRlSXNCZWluZ1VubG9hZGVkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FyZ29DdXJyZW50bHlPY2N1cGllZFNwYWNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hdGVyaWFsQ2FyZ28uZ2V0TWF0ZXJpYWxMaXN0TGVuZ3RoKCkgKyB0aGlzLnByb2R1Y3RDYXJnby5nZXRQcm9kdWN0TGlzdExlbmd0aCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzVGhlcmVGcmVlU3BhY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FyZ29DdXJyZW50bHlPY2N1cGllZFNwYWNlKCkgPCB0aGlzLmNhcmdvTWF4Q2FwYWNpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNDYXJnb0VtcHR5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhcmdvQ3VycmVudGx5T2NjdXBpZWRTcGFjZSgpID09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaXNNYXRlcmlhbENhcmdvRW1wdHkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWF0ZXJpYWxDYXJnby5nZXRNYXRlcmlhbExpc3RMZW5ndGgoKSA9PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlzUHJvZHVjdENhcmdvRW1wdHkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdENhcmdvLmdldFByb2R1Y3RMaXN0TGVuZ3RoKCkgPT0gMDtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkT25lTWF0ZXJpYWxUb0NhcmdvKGNob2NvbGF0ZU1hdGVyaWFsOiBDaG9jb2xhdGVNYXRlcmlhbCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzVGhlcmVGcmVlU3BhY2UoKSkge1xyXG4gICAgICAgICAgICB0aGlzLm1hdGVyaWFsQ2FyZ28uYWRkTWF0ZXJpYWxUb0xpc3QoY2hvY29sYXRlTWF0ZXJpYWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1bmxvYWRPbmVNYXRlcmlhbEZyb21DYXJnbygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNNYXRlcmlhbENhcmdvRW1wdHkoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXRlcmlhbENhcmdvLmdldE1hdGVyaWFsRnJvbUxpc3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZE9uZVByb2R1Y3RUb0NhcmdvKGNob2NvbGF0ZVByb2R1Y3Q6IENob2NvbGF0ZVByb2R1Y3QpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1RoZXJlRnJlZVNwYWNlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9kdWN0Q2FyZ28uYWRkUHJvZHVjdFRvTGlzdChjaG9jb2xhdGVQcm9kdWN0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdW5sb2FkT25lUHJvZHVjdEZyb21DYXJnbygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNQcm9kdWN0Q2FyZ29FbXB0eSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RDYXJnby5nZXRQcm9kdWN0RnJvbUxpc3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgd29ya1dpdGhDYXJnb09uY2UobmV3TWF0ZXJpYWw/OiBDaG9jb2xhdGVNYXRlcmlhbCwgbmV3UHJvZHVjdD86IENob2NvbGF0ZVByb2R1Y3QpIHtcclxuICAgICAgICBpZiAodGhpcy5pc01hdGVyaWFsTG9hZGluZygpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZE9uZU1hdGVyaWFsVG9DYXJnbyhuZXdNYXRlcmlhbCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzTWF0ZXJpYWxVbmxvYWRpbmcoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy51bmxvYWRPbmVNYXRlcmlhbEZyb21DYXJnbygpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1Byb2R1Y3RMb2FkaW5nKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkT25lUHJvZHVjdFRvQ2FyZ28obmV3UHJvZHVjdCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzUHJvZHVjdFVubG9hZGluZygpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVubG9hZE9uZVByb2R1Y3RGcm9tQ2FyZ28oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICogXHJcbiAqIHByb2R1Y2UgcHJvZHVjdCBidXQgcmVtb3ZlIG1hdGVyaWFsIGZyb20gbGlzdCBvZiBtYXRlcmlhbHNcclxuICovXHJcblxyXG5pbXBvcnQgeyBQZXJzb24gfSBmcm9tICcuLi9wZXJzb24vcGVyc29uJztcclxuaW1wb3J0IHsgRmFjdG9yeVNlY3RvciB9IGZyb20gJy4uLy4uL2Nob2NvbGF0ZS1mYWN0b3J5L2Nob2NvbGF0ZS1mYWN0b3J5JztcclxuaW1wb3J0IHsgQ2hvY29sYXRlUHJvZHVjdExpc3QgfSBmcm9tICcuLi8uLi9jaG9jb2xhdGUtcHJvZHVjdHMvY2hvY29sYXRlLXByb2R1Y3QtbGlzdCc7XHJcbmltcG9ydCB7IENob2NvbGF0ZU1hdGVyaWFsLCBDaG9jb2xhdGVNYXRlcmlhbFR5cGUgfSBmcm9tICcuLi8uLi9jaG9jb2xhdGUtbWF0ZXJpYWxzL2Nob2NvbGF0ZS1tYXRlcmlhbCc7XHJcbmltcG9ydCB7IENob2NvbGF0ZVByb2R1Y3QsIENob2NvbGF0ZVByb2R1Y3RUeXBlIH0gZnJvbSAnLi4vLi4vY2hvY29sYXRlLXByb2R1Y3RzL2Nob2NvbGF0ZS1wcm9kdWN0JztcclxuaW1wb3J0IHsgRW1wb2x5ZWVyIH0gZnJvbSAnLi4vZW1wbG95ZWVyL2VtcGxveWVlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgRW1wbG95ZWUgZXh0ZW5kcyBQZXJzb24ge1xyXG4gICAgZmFjdG9yeUVtcGxveWVlcjogRW1wb2x5ZWVyO1xyXG4gICAgZmFjdG9yeVNlY3RvcjogRmFjdG9yeVNlY3RvcjtcclxuICAgIHByb2R1Y2VkQ2hvY29sYXRlR29vZHM6IENob2NvbGF0ZVByb2R1Y3RMaXN0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZywgZmFjdG9yeUVtcGxveWVlcjogRW1wb2x5ZWVyLCBkcml2aW5nTGljZW5jZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSwgbGFzdE5hbWUsIGRyaXZpbmdMaWNlbmNlKTtcclxuICAgICAgICB0aGlzLmZhY3RvcnlFbXBsb3llZXIgPSBmYWN0b3J5RW1wbG95ZWVyO1xyXG4gICAgICAgIHRoaXMucHJvZHVjZWRDaG9jb2xhdGVHb29kcyA9IG5ldyBDaG9jb2xhdGVQcm9kdWN0TGlzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb2R1Y2VDaG9jb2xhdGVQcm9kdWN0KGNob2NvbGF0ZU1hdGVyaWFsOiBDaG9jb2xhdGVNYXRlcmlhbCkge1xyXG4gICAgICAgIGxldCBwcm9kdWNlZENob2NvbGF0ZVByb2R1Y3QgPSBuZXcgQ2hvY29sYXRlUHJvZHVjdCgpO1xyXG4gICAgICAgIGlmIChjaG9jb2xhdGVNYXRlcmlhbC5jaG9jb2xhdGVNYXRlcmlhbFR5cGUgPT09IENob2NvbGF0ZU1hdGVyaWFsVHlwZS5EYXJrQ2hvY29sYXRlTWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgcHJvZHVjZWRDaG9jb2xhdGVQcm9kdWN0LmNob2NvbGF0ZVByb2R1Y3RUeXBlID0gQ2hvY29sYXRlUHJvZHVjdFR5cGUuRGFya0Nob2NvbGF0ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGNob2NvbGF0ZU1hdGVyaWFsLmNob2NvbGF0ZU1hdGVyaWFsVHlwZSA9PT0gQ2hvY29sYXRlTWF0ZXJpYWxUeXBlLldoaXRlQ2hvY29sYXRlTWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgcHJvZHVjZWRDaG9jb2xhdGVQcm9kdWN0LmNob2NvbGF0ZVByb2R1Y3RUeXBlID0gQ2hvY29sYXRlUHJvZHVjdFR5cGUuV2hpdGVDaG9jb2xhdGU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjaG9jb2xhdGVNYXRlcmlhbC5jaG9jb2xhdGVNYXRlcmlhbFR5cGUgPT09IENob2NvbGF0ZU1hdGVyaWFsVHlwZS5NaWxrQ2hvY29sYXRlTWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgcHJvZHVjZWRDaG9jb2xhdGVQcm9kdWN0LmNob2NvbGF0ZVByb2R1Y3RUeXBlID0gQ2hvY29sYXRlUHJvZHVjdFR5cGUuTWlsa0Nob2NvbGF0ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGNob2NvbGF0ZU1hdGVyaWFsLmNob2NvbGF0ZU1hdGVyaWFsVHlwZSA9PT0gQ2hvY29sYXRlTWF0ZXJpYWxUeXBlLlJ1YnlDaG9jb2xhdGVNYXRlcmlhbCkge1xyXG4gICAgICAgICAgICBwcm9kdWNlZENob2NvbGF0ZVByb2R1Y3QuY2hvY29sYXRlUHJvZHVjdFR5cGUgPSBDaG9jb2xhdGVQcm9kdWN0VHlwZS5SdWJ5Q2hvY29sYXRlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHByb2R1Y2VkQ2hvY29sYXRlUHJvZHVjdCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHJvZHVjZWRDaG9jb2xhdGVHb29kcy5hZGRQcm9kdWN0VG9MaXN0KHByb2R1Y2VkQ2hvY29sYXRlUHJvZHVjdCk7XHJcbiAgICAgICAgcmV0dXJuIHByb2R1Y2VkQ2hvY29sYXRlUHJvZHVjdDtcclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiBzdG8gdmlzZSB2cmVtZW5hIHByb2xhemkgcG9zdGFqZSB1bW9yYW5cclxuICovXHJcbmltcG9ydCB7IFBlcnNvbiB9IGZyb20gXCIuLi9wZXJzb24vcGVyc29uXCI7XHJcblxyXG5leHBvcnQgZW51bSBFbXBsb3llZXJXb3JrU3RhdGUge1xyXG4gICAgTWF4aW11bVdvcmtEZWRpY2F0aW9uVGlyZWxlc3MgPSBcIlRpcmVsZXNzXCIsXHJcbiAgICBNZWRpdW1Xb3JrRGVkaWNhdGlvbkZlZWxpbmdUaXJlZCA9IFwiRmVlbGluZ1RpcmVkXCIsXHJcbiAgICBMb3dXb3JjRGVkaWNhdGlvblRpcmVkID0gXCJUaXJlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEVtcGxveWVlck1vb2RTdGF0ZSB7XHJcbiAgICBFeGVsZW50ID0gXCJFeGVsZW50XCIsXHJcbiAgICBWZXJ5R29vZCA9IFwiVmVyeUdvb2RcIixcclxuICAgIEdvb2QgPSBcIkdvb2RcIixcclxuICAgIFN0cmVzc2VkID0gXCJTdHJlc3NlZFwiLFxyXG4gICAgRGV2YXN0YXRlZCA9IFwiRGV2YXN0YXRlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFbXBvbHllZXIgZXh0ZW5kcyBQZXJzb24ge1xyXG4gICAgZW1wbG95ZWVyV29ya1N0YXRlOiBFbXBsb3llZXJXb3JrU3RhdGU7XHJcbiAgICBlbXBsb3llZXJNb29kU3RhdGU6IEVtcGxveWVlck1vb2RTdGF0ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcsIGRyaXZpbmdMaWNlbmNlOiBib29sZWFuID0gZmFsc2UsIGVtcGxveWVlcldvcmtTdGF0ZTogRW1wbG95ZWVyV29ya1N0YXRlID1cclxuICAgICAgICBFbXBsb3llZXJXb3JrU3RhdGUuTWVkaXVtV29ya0RlZGljYXRpb25GZWVsaW5nVGlyZWQsIGVtcGxveWVlck1vb2RTdGF0ZTogRW1wbG95ZWVyTW9vZFN0YXRlID0gRW1wbG95ZWVyTW9vZFN0YXRlLkdvb2QpIHtcclxuICAgICAgICBzdXBlcihuYW1lLCBsYXN0TmFtZSwgZHJpdmluZ0xpY2VuY2UpO1xyXG4gICAgICAgIHRoaXMuZW1wbG95ZWVyV29ya1N0YXRlID0gZW1wbG95ZWVyV29ya1N0YXRlO1xyXG4gICAgICAgIHRoaXMuZW1wbG95ZWVyTW9vZFN0YXRlID0gZW1wbG95ZWVyTW9vZFN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFdvcmtTdGF0ZVRvTWF4aW11bVdvcmtEZWRpY2F0aW9uVGlyZWxlc3MoKSB7XHJcbiAgICAgICAgdGhpcy5lbXBsb3llZXJXb3JrU3RhdGUgPSBFbXBsb3llZXJXb3JrU3RhdGUuTWF4aW11bVdvcmtEZWRpY2F0aW9uVGlyZWxlc3M7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0V29ya1N0YXRlVG9NZWRpdW1Xb3JrRGVkaWNhdGlvbkZlZWxpbmdUaXJlZCgpIHtcclxuICAgICAgICB0aGlzLmVtcGxveWVlcldvcmtTdGF0ZSA9IEVtcGxveWVlcldvcmtTdGF0ZS5NZWRpdW1Xb3JrRGVkaWNhdGlvbkZlZWxpbmdUaXJlZDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRXb3JrU3RhdGVUb0xvd1dvcmtEZWRpY2F0aW9uVGlyZWQoKSB7XHJcbiAgICAgICAgdGhpcy5lbXBsb3llZXJXb3JrU3RhdGUgPSBFbXBsb3llZXJXb3JrU3RhdGUuTG93V29yY0RlZGljYXRpb25UaXJlZDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRNb29kU3RhdGVUb0V4ZWxlbnQoKSB7XHJcbiAgICAgICAgdGhpcy5lbXBsb3llZXJNb29kU3RhdGUgPSBFbXBsb3llZXJNb29kU3RhdGUuRXhlbGVudDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRNb29kU3RhdGVUb1ZlcnlHb29kKCkge1xyXG4gICAgICAgIHRoaXMuZW1wbG95ZWVyTW9vZFN0YXRlID0gRW1wbG95ZWVyTW9vZFN0YXRlLlZlcnlHb29kO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE1vb2RTdGF0ZVRvR29vZCgpIHtcclxuICAgICAgICB0aGlzLmVtcGxveWVlck1vb2RTdGF0ZSA9IEVtcGxveWVlck1vb2RTdGF0ZS5Hb29kO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE1vb2RTdGF0ZVRvU3RyZXNzZWQoKSB7XHJcbiAgICAgICAgdGhpcy5lbXBsb3llZXJNb29kU3RhdGUgPSBFbXBsb3llZXJNb29kU3RhdGUuU3RyZXNzZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TW9vZFN0YXRlVG9EZXZhc3RhdGVkKCkge1xyXG4gICAgICAgIHRoaXMuZW1wbG95ZWVyTW9vZFN0YXRlID0gRW1wbG95ZWVyTW9vZFN0YXRlLkRldmFzdGF0ZWQ7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgUGVyc29uIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGxhc3ROYW1lOiBzdHJpbmc7XHJcbiAgICBkcml2aW5nTGljZW5jZTogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcsIGRyaXZpbmdMaWNlbmNlOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMubGFzdE5hbWUgPSBsYXN0TmFtZTtcclxuICAgICAgICB0aGlzLmRyaXZpbmdMaWNlbmNlID0gZHJpdmluZ0xpY2VuY2U7XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICogQWRkOlxyXG4gKiAtUmVwYWlyIHRpbWUhXHJcbiAqIHJhbmRvbURlbGF5KDEwMDAsIDUwMDApXHJcbiAqIFxyXG4gKiBcclxuICogLS0tLS0tLS0tLS0tLS1cclxuICogXHJcbiAqIFxyXG4gKiBcclxuICogZG9rIHNlIHB1bmkgcmFkbmlrIGplIG5hIHBhdXppXHJcbiAqIFxyXG4gKiBcclxuICogXHJcbiAqIGNoZWNrIG11bHRpcGxlIGxvYWRpbmcgdW5sb2FkaW5nXHJcbiAqL1xyXG5pbXBvcnQgeyBFbXBsb3llZSB9IGZyb20gXCIuLi8uLi9wZW9wbGUvZW1wbG95ZWUvZW1wbG95ZWVcIjtcclxuaW1wb3J0IHsgVmVoaWNsZSB9IGZyb20gXCIuLi92ZWhpY2xlL3ZlaGljbGVcIjtcclxuaW1wb3J0IHsgQ2hvY29sYXRlUHJvZHVjdExpc3QgfSBmcm9tIFwiLi4vLi4vY2hvY29sYXRlLXByb2R1Y3RzL2Nob2NvbGF0ZS1wcm9kdWN0LWxpc3RcIjtcclxuaW1wb3J0IHsgQ2hvY29sYXRlTWF0ZXJpYWxMaXN0IH0gZnJvbSBcIi4uLy4uL2Nob2NvbGF0ZS1tYXRlcmlhbHMvY2hvY29sYXRlLW1hdGVyaWFsLWxpc3RcIjtcclxuaW1wb3J0IHsgQ2hvY29sYXRlUHJvZHVjdCB9IGZyb20gXCIuLi8uLi9jaG9jb2xhdGUtcHJvZHVjdHMvY2hvY29sYXRlLXByb2R1Y3RcIjtcclxuaW1wb3J0IHsgQ2hvY29sYXRlTWF0ZXJpYWwgfSBmcm9tIFwiLi4vLi4vY2hvY29sYXRlLW1hdGVyaWFscy9jaG9jb2xhdGUtbWF0ZXJpYWxcIjtcclxuXHJcbmV4cG9ydCBlbnVtIFRydWNrU3RhdGUge1xyXG4gICAgQXZhaWJsZSA9IFwiQXZhaWJsZVwiLFxyXG4gICAgSW5UcmFuc3BvcnQgPSBcIkluVHJhbnNwb3J0XCIsXHJcbiAgICBCcm9rZW4gPSBcIkJyb2tlblwiLFxyXG4gICAgSW5SZXBhaXIgPSBcIkluUmVwYWlyXCIsXHJcbiAgICBJc0JlaW5nTG9hZGVkID0gXCJJc0JlaW5nTG9hZGVkXCIsXHJcbiAgICBJc0JlaW5nVW5sb2FkZWQgPSBcIklzQmVpbmdVbmxvYWRlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFRydWNrQ2FyZ29Xb3JrU3RhdGUge1xyXG4gICAgQ2hvY29sYXRlTWF0ZXJpYWxMb2FkaW5nID0gXCJDaG9jb2xhdGVNYXRlcmlhbExvYWRpbmdcIixcclxuICAgIENob2NvbGF0ZU1hdGVyaWFsVW5sb2FkaW5nID0gXCJDaG9jb2xhdGVNYXRlcmlhbFVubG9hZGluZ1wiLFxyXG4gICAgQ2hvY29sYXRlUHJvZHVjdExvYWRpbmcgPSBcIkNob2NvbGF0ZVByb2R1Y3RMb2FkaW5nXCIsXHJcbiAgICBDaG9jb2xhdGVQcm9kdWN0VW5sb2FkaW5nID0gXCJDaG9jb2xhdGVQcm9kdWN0VW5sb2FkaW5nXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRydWNrIGV4dGVuZHMgVmVoaWNsZSB7XHJcbiAgICBicmFuZDogc3RyaW5nO1xyXG4gICAgZHJpdmVyOiBFbXBsb3llZTtcclxuICAgIG1hdGVyaWFsQ2FyZ286IENob2NvbGF0ZU1hdGVyaWFsTGlzdDtcclxuICAgIHByb2R1Y3RDYXJnbzogQ2hvY29sYXRlUHJvZHVjdExpc3Q7XHJcbiAgICBjYXJnb01heENhcGFjaXR5OiBudW1iZXI7XHJcbiAgICBzdGF0ZTogVHJ1Y2tTdGF0ZTtcclxuICAgIGNhcmdvV29ya1N0YXRlOiBUcnVja0NhcmdvV29ya1N0YXRlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGJyYW5kOiBzdHJpbmcsIGRyaXZlcjogRW1wbG95ZWUsIGNhcmdvTWF4Q2FwYWNpdHk6IG51bWJlciA9IDEwMDAwKSB7XHJcbiAgICAgICAgc3VwZXIoMCwgMTQwMCwgMjcuNSk7XHJcbiAgICAgICAgdGhpcy5icmFuZCA9IGJyYW5kO1xyXG4gICAgICAgIHRoaXMuZHJpdmVyID0gZHJpdmVyO1xyXG4gICAgICAgIHRoaXMubWF0ZXJpYWxDYXJnbyA9IG5ldyBDaG9jb2xhdGVNYXRlcmlhbExpc3Q7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0Q2FyZ28gPSBuZXcgQ2hvY29sYXRlUHJvZHVjdExpc3Q7XHJcbiAgICAgICAgdGhpcy5jYXJnb01heENhcGFjaXR5ID0gY2FyZ29NYXhDYXBhY2l0eTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gVHJ1Y2tTdGF0ZS5BdmFpYmxlO1xyXG4gICAgICAgIHRoaXMuY2FyZ29Xb3JrU3RhdGUgPSBUcnVja0NhcmdvV29ya1N0YXRlLkNob2NvbGF0ZU1hdGVyaWFsTG9hZGluZztcclxuICAgIH1cclxuXHJcbiAgICBzZXRCcmFuZChicmFuZDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5icmFuZCA9IGJyYW5kO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERyaXZlcihkcml2ZXI6IEVtcGxveWVlKSB7XHJcbiAgICAgICAgdGhpcy5kcml2ZXIgPSBkcml2ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q2FyZ29NYXhDYXBhY2l0eShuZXdDYXJnb01heENhcGFjaXR5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmNhcmdvTWF4Q2FwYWNpdHkgPSBuZXdDYXJnb01heENhcGFjaXR5O1xyXG4gICAgfVxyXG5cclxuICAgIHNldFN0YXRlVG9BdmFpYmxlKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBUcnVja1N0YXRlLkF2YWlibGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3RhdGVUb0luVHJhbnNwb3J0KCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBUcnVja1N0YXRlLkluVHJhbnNwb3J0O1xyXG4gICAgfVxyXG5cclxuICAgIHNldFN0YXRlVG9Ccm9rZW4oKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFRydWNrU3RhdGUuQnJva2VuO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFN0YXRlVG9JblJlcGFpcigpIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gVHJ1Y2tTdGF0ZS5JblJlcGFpcjtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTdGF0ZVRvSXNCZWluZ0xvYWRlZCgpIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gVHJ1Y2tTdGF0ZS5Jc0JlaW5nTG9hZGVkO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFN0YXRlVG9Jc0JlaW5nVW5sb2FkZWQoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFRydWNrU3RhdGUuSXNCZWluZ1VubG9hZGVkO1xyXG4gICAgfVxyXG5cclxuICAgIGlzU3RhdGVBdmFpYmxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlID09PSBUcnVja1N0YXRlLkF2YWlibGU7XHJcbiAgICB9XHJcblxyXG4gICAgaXNTdGF0ZUluVHJhbnNwb3J0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlID09PSBUcnVja1N0YXRlLkluVHJhbnNwb3J0O1xyXG4gICAgfVxyXG5cclxuICAgIGlzU3RhdGVCcm9rZW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUgPT09IFRydWNrU3RhdGUuQnJva2VuO1xyXG4gICAgfVxyXG5cclxuICAgIGlzU3RhdGVJblJlcGFpcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZSA9PT0gVHJ1Y2tTdGF0ZS5JblJlcGFpcjtcclxuICAgIH1cclxuXHJcbiAgICBpc1N0YXRlSXNCZWluZ0xvYWRlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZSA9PT0gVHJ1Y2tTdGF0ZS5Jc0JlaW5nTG9hZGVkO1xyXG4gICAgfVxyXG5cclxuICAgIGlzU3RhdGVJc0JlaW5nVW5sb2FkZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUgPT09IFRydWNrU3RhdGUuSXNCZWluZ1VubG9hZGVkO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENhcmdvU3RhdGVUb0Nob2NvbGF0ZU1hdGVyaWFsTG9hZGluZygpIHtcclxuICAgICAgICB0aGlzLmNhcmdvV29ya1N0YXRlID0gVHJ1Y2tDYXJnb1dvcmtTdGF0ZS5DaG9jb2xhdGVNYXRlcmlhbExvYWRpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q2FyZ29TdGF0ZVRvQ2hvY29sYXRlTWF0ZXJpYWxVbkxvYWRpbmcoKSB7XHJcbiAgICAgICAgdGhpcy5jYXJnb1dvcmtTdGF0ZSA9IFRydWNrQ2FyZ29Xb3JrU3RhdGUuQ2hvY29sYXRlTWF0ZXJpYWxVbmxvYWRpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q2FyZ29TdGF0ZVRvQ2hvY29sYXRlUHJvZHVjdExvYWRpbmcoKSB7XHJcbiAgICAgICAgdGhpcy5jYXJnb1dvcmtTdGF0ZSA9IFRydWNrQ2FyZ29Xb3JrU3RhdGUuQ2hvY29sYXRlUHJvZHVjdExvYWRpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q2FyZ29TdGF0ZVRvQ2hvY29sYXRlUHJvZHVjdFVubG9hZGluZygpIHtcclxuICAgICAgICB0aGlzLmNhcmdvV29ya1N0YXRlID0gVHJ1Y2tDYXJnb1dvcmtTdGF0ZS5DaG9jb2xhdGVQcm9kdWN0VW5sb2FkaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGlzQ2FyZ29TdGF0ZUNob2NvbGF0ZU1hdGVyaWFsTG9hZGluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYXJnb1dvcmtTdGF0ZSA9PT0gVHJ1Y2tDYXJnb1dvcmtTdGF0ZS5DaG9jb2xhdGVNYXRlcmlhbExvYWRpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgaXNDYXJnb1N0YXRlQ2hvY29sYXRlTWF0ZXJpYWxVbmxvYWRpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FyZ29Xb3JrU3RhdGUgPT09IFRydWNrQ2FyZ29Xb3JrU3RhdGUuQ2hvY29sYXRlTWF0ZXJpYWxVbmxvYWRpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgaXNDYXJnb1N0YXRlQ2hvY29sYXRlUHJvZHVjdExvYWRpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FyZ29Xb3JrU3RhdGUgPT09IFRydWNrQ2FyZ29Xb3JrU3RhdGUuQ2hvY29sYXRlTWF0ZXJpYWxVbmxvYWRpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgaXNDYXJnb1N0YXRlQ2hvY29sYXRlUHJvZHVjdFVubG9hZGluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYXJnb1dvcmtTdGF0ZSA9PT0gVHJ1Y2tDYXJnb1dvcmtTdGF0ZS5DaG9jb2xhdGVQcm9kdWN0VW5sb2FkaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGlzTWF0ZXJpYWxMb2FkaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzQ2FyZ29TdGF0ZUNob2NvbGF0ZU1hdGVyaWFsTG9hZGluZygpICYmIHRoaXMuaXNTdGF0ZUlzQmVpbmdMb2FkZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpc01hdGVyaWFsVW5sb2FkaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzQ2FyZ29TdGF0ZUNob2NvbGF0ZU1hdGVyaWFsVW5sb2FkaW5nKCkgJiYgdGhpcy5pc1N0YXRlSXNCZWluZ1VubG9hZGVkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNQcm9kdWN0TG9hZGluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0NhcmdvU3RhdGVDaG9jb2xhdGVQcm9kdWN0TG9hZGluZygpICYmIHRoaXMuaXNTdGF0ZUlzQmVpbmdMb2FkZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpc1Byb2R1Y3RVbmxvYWRpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNDYXJnb1N0YXRlQ2hvY29sYXRlUHJvZHVjdFVubG9hZGluZygpICYmIHRoaXMuaXNTdGF0ZUlzQmVpbmdVbmxvYWRlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhcmdvQ3VycmVudGx5T2NjdXBpZWRTcGFjZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXRlcmlhbENhcmdvLmdldE1hdGVyaWFsTGlzdExlbmd0aCgpICsgdGhpcy5wcm9kdWN0Q2FyZ28uZ2V0UHJvZHVjdExpc3RMZW5ndGgoKTtcclxuICAgIH1cclxuXHJcbiAgICBpc1RoZXJlRnJlZVNwYWNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhcmdvQ3VycmVudGx5T2NjdXBpZWRTcGFjZSgpIDwgdGhpcy5jYXJnb01heENhcGFjaXR5O1xyXG4gICAgfVxyXG5cclxuICAgIGlzQ2FyZ29FbXB0eSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYXJnb0N1cnJlbnRseU9jY3VwaWVkU3BhY2UoKSA9PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlzTWF0ZXJpYWxDYXJnb0VtcHR5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hdGVyaWFsQ2FyZ28uZ2V0TWF0ZXJpYWxMaXN0TGVuZ3RoKCkgPT0gMDtcclxuICAgIH1cclxuXHJcbiAgICBpc1Byb2R1Y3RDYXJnb0VtcHR5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RDYXJnby5nZXRQcm9kdWN0TGlzdExlbmd0aCgpID09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZE9uZU1hdGVyaWFsVG9DYXJnbyhjaG9jb2xhdGVNYXRlcmlhbDogQ2hvY29sYXRlTWF0ZXJpYWwpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1RoZXJlRnJlZVNwYWNlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5tYXRlcmlhbENhcmdvLmFkZE1hdGVyaWFsVG9MaXN0KGNob2NvbGF0ZU1hdGVyaWFsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdW5sb2FkT25lTWF0ZXJpYWxGcm9tQ2FyZ28oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzTWF0ZXJpYWxDYXJnb0VtcHR5KCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWF0ZXJpYWxDYXJnby5nZXRNYXRlcmlhbEZyb21MaXN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvYWRPbmVQcm9kdWN0VG9DYXJnbyhjaG9jb2xhdGVQcm9kdWN0OiBDaG9jb2xhdGVQcm9kdWN0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNUaGVyZUZyZWVTcGFjZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdENhcmdvLmFkZFByb2R1Y3RUb0xpc3QoY2hvY29sYXRlUHJvZHVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVubG9hZE9uZVByb2R1Y3RGcm9tQ2FyZ28oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzUHJvZHVjdENhcmdvRW1wdHkoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0Q2FyZ28uZ2V0UHJvZHVjdEZyb21MaXN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHdvcmtXaXRoQ2FyZ29PbmNlKG5ld01hdGVyaWFsPzogQ2hvY29sYXRlTWF0ZXJpYWwsIG5ld1Byb2R1Y3Q/OiBDaG9jb2xhdGVQcm9kdWN0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNNYXRlcmlhbExvYWRpbmcoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRPbmVNYXRlcmlhbFRvQ2FyZ28obmV3TWF0ZXJpYWwpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc01hdGVyaWFsVW5sb2FkaW5nKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudW5sb2FkT25lTWF0ZXJpYWxGcm9tQ2FyZ28oKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNQcm9kdWN0TG9hZGluZygpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZE9uZVByb2R1Y3RUb0NhcmdvKG5ld1Byb2R1Y3QpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1Byb2R1Y3RVbmxvYWRpbmcoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy51bmxvYWRPbmVQcm9kdWN0RnJvbUNhcmdvKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFZlaGljbGUge1xyXG4gICAgc3BlZWQ6IG51bWJlcjtcclxuICAgIG1heEZ1ZWxUYW5rTGV2ZWw6IG51bWJlcjtcclxuICAgIGZ1ZWxDb25zdW1wdGlvblBlcjEwMEttOiBudW1iZXI7XHJcbiAgICBjdXJyZW50RnVlbFRhbmtMZXZlbDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNwZWVkOiBudW1iZXIsIG1heEZ1ZWxUYW5rTGV2ZWw6IG51bWJlciwgZnVlbENvbnN1bXB0aW9uUGVyMTAwS206IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcclxuICAgICAgICB0aGlzLm1heEZ1ZWxUYW5rTGV2ZWwgPSBtYXhGdWVsVGFua0xldmVsO1xyXG4gICAgICAgIHRoaXMuZnVlbENvbnN1bXB0aW9uUGVyMTAwS20gPSBmdWVsQ29uc3VtcHRpb25QZXIxMDBLbTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRGdWVsVGFua0xldmVsID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDdXJyZW50RnVlbFRhbmtMZXZlbChuZXdDdXJyZW50RnVlbFRhbmtMZXZlbDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50RnVlbFRhbmtMZXZlbCA9IG5ld0N1cnJlbnRGdWVsVGFua0xldmVsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEN1cnJlbnRGdWVsVGFua0xldmVsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRGdWVsVGFua0xldmVsO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1ZWxDb25zdW1wdGlvblBlcktpbG9tZXRlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mdWVsQ29uc3VtcHRpb25QZXIxMDBLbSAvIDEwMDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGdWVsRGlmZmVyZW5jZShmdWVsVGFua0xldmVsVG9DaGVjaz86IG51bWJlcikge1xyXG4gICAgICAgIGlmIChmdWVsVGFua0xldmVsVG9DaGVjaykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXhGdWVsVGFua0xldmVsIC0gZnVlbFRhbmtMZXZlbFRvQ2hlY2s7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWF4RnVlbFRhbmtMZXZlbCAtIHRoaXMuY3VycmVudEZ1ZWxUYW5rTGV2ZWw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlZmlsRnVlbFRhbmtUb01heGltdW0oKSB7XHJcbiAgICAgICAgbGV0IGZ1ZWxVc2VkOiBudW1iZXIgPSB0aGlzLmdldEZ1ZWxEaWZmZXJlbmNlKClcclxuICAgICAgICB0aGlzLnNldEN1cnJlbnRGdWVsVGFua0xldmVsKHRoaXMubWF4RnVlbFRhbmtMZXZlbCk7XHJcbiAgICAgICAgcmV0dXJuIGZ1ZWxVc2VkO1xyXG4gICAgfVxyXG5cclxuICAgIGlzQ3VycmVudExvd2VyT3JFcXVhbFRoYW5NYXhpbXVtVGFua0Z1ZWxMZXZlbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50RnVlbFRhbmtMZXZlbCA8PSB0aGlzLm1heEZ1ZWxUYW5rTGV2ZWw7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmaWxGdWVsVGFuayhsaXRyZXNUb1JlZmlsOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgdG1wQ3VyZW50RnVlbFRhbmtMZXZlbCA9IHRoaXMuZ2V0Q3VycmVudEZ1ZWxUYW5rTGV2ZWwoKTtcclxuICAgICAgICB0aGlzLnNldEN1cnJlbnRGdWVsVGFua0xldmVsKHRoaXMuZ2V0Q3VycmVudEZ1ZWxUYW5rTGV2ZWwoKSArIGxpdHJlc1RvUmVmaWwpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzQ3VycmVudExvd2VyT3JFcXVhbFRoYW5NYXhpbXVtVGFua0Z1ZWxMZXZlbCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRDdXJyZW50RnVlbFRhbmtMZXZlbCh0aGlzLm1heEZ1ZWxUYW5rTGV2ZWwpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRGdWVsRGlmZmVyZW5jZSh0bXBDdXJlbnRGdWVsVGFua0xldmVsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9