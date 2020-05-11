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
var chocolateMaterial3 = new _models_chocolate_materials_chocolate_material__WEBPACK_IMPORTED_MODULE_4__["ChocolateMaterial"](_models_chocolate_materials_chocolate_material__WEBPACK_IMPORTED_MODULE_4__["ChocolateMaterialType"].RubyChocolateMaterial);
var chocolateMaterial4 = new _models_chocolate_materials_chocolate_material__WEBPACK_IMPORTED_MODULE_4__["ChocolateMaterial"](_models_chocolate_materials_chocolate_material__WEBPACK_IMPORTED_MODULE_4__["ChocolateMaterialType"].MilkChocolateMaterial);
var chocolateMaterial5 = new _models_chocolate_materials_chocolate_material__WEBPACK_IMPORTED_MODULE_4__["ChocolateMaterial"](_models_chocolate_materials_chocolate_material__WEBPACK_IMPORTED_MODULE_4__["ChocolateMaterialType"].DarkChocolateMaterial);
truck.setCargoStateToChocolateMaterialLoading();
truck.setStateToIsBeingLoaded();
truck.workWithCargoOnce(chocolateMaterial1);
truck.workWithCargoOnce(chocolateMaterial2);
truck.workWithCargoOnce(chocolateMaterial3);
truck.workWithCargoOnce(chocolateMaterial4);
truck.workWithCargoOnce(chocolateMaterial5);
console.log(truck);
palletJack.setCargoStateToChocolateMaterialLoading();
palletJack.setStateToIsBeingLoaded();
palletJack.workWithCargoOnce(chocolateMaterial1);
palletJack.workWithCargoOnce(chocolateMaterial2);
palletJack.workWithCargoOnce(chocolateMaterial3);
palletJack.workWithCargoOnce(chocolateMaterial4);
palletJack.workWithCargoOnce(chocolateMaterial5);
console.log(palletJack);
palletJack.setCargoStateToChocolateMaterialUnLoading();
palletJack.setStateToIsBeingUnloaded();
while (!palletJack.isCargoEmpty()) {
    var cM = palletJack.workWithCargoOnce();
    truck.workWithCargoOnce(cM);
}
console.log(palletJack);
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
    ChocolateMaterial.prototype.setChocolateProductTypeMilkChocolateMaterial = function () {
        this.chocolateMaterialType == ChocolateMaterialType.MilkChocolateMaterial;
    };
    ChocolateMaterial.prototype.setChocolateProductTypeDarkChocolate = function () {
        this.chocolateMaterialType == ChocolateMaterialType.DarkChocolateMaterial;
    };
    ChocolateMaterial.prototype.setChocolateProductTypeWhiteChocolate = function () {
        this.chocolateMaterialType == ChocolateMaterialType.WhiteChocolateMaterial;
    };
    ChocolateMaterial.prototype.setChocolateProductTypeRubyChocolate = function () {
        this.chocolateMaterialType == ChocolateMaterialType.RubyChocolateMaterial;
    };
    ChocolateMaterial.prototype.isChocolateProductTypeMilkChocolateMaterial = function () {
        return (this.chocolateMaterialType === ChocolateMaterialType.MilkChocolateMaterial);
    };
    ChocolateMaterial.prototype.isChocolateProductTypeDarkChocolate = function () {
        return (this.chocolateMaterialType === ChocolateMaterialType.DarkChocolateMaterial);
    };
    ChocolateMaterial.prototype.isChocolateProductTypeWhiteChocolate = function () {
        return (this.chocolateMaterialType ===
            ChocolateMaterialType.WhiteChocolateMaterial);
    };
    ChocolateMaterial.prototype.isChocolateProductTypeRubyChocolate = function () {
        return (this.chocolateMaterialType === ChocolateMaterialType.RubyChocolateMaterial);
    };
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
        this.materialCargo = new _chocolate_materials_chocolate_material_list__WEBPACK_IMPORTED_MODULE_1__["ChocolateMaterialList"]();
        this.productCargo = new _chocolate_products_chocolate_product_list__WEBPACK_IMPORTED_MODULE_0__["ChocolateProductList"]();
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
        return (this.cargoWorkState === PalletJackCargoWorkState.ChocolateMaterialLoading);
    };
    PalletJack.prototype.isCargoStateChocolateMaterialUnloading = function () {
        return (this.cargoWorkState ===
            PalletJackCargoWorkState.ChocolateMaterialUnloading);
    };
    PalletJack.prototype.isCargoStateChocolateProductLoading = function () {
        return (this.cargoWorkState ===
            PalletJackCargoWorkState.ChocolateMaterialUnloading);
    };
    PalletJack.prototype.isCargoStateChocolateProductUnloading = function () {
        return (this.cargoWorkState === PalletJackCargoWorkState.ChocolateProductUnloading);
    };
    PalletJack.prototype.isMaterialLoading = function () {
        return (this.isCargoStateChocolateMaterialLoading() && this.isStateIsBeingLoaded());
    };
    PalletJack.prototype.isMaterialUnloading = function () {
        return (this.isCargoStateChocolateMaterialUnloading() &&
            this.isStateIsBeingUnloaded());
    };
    PalletJack.prototype.isProductLoading = function () {
        return (this.isCargoStateChocolateProductLoading() && this.isStateIsBeingLoaded());
    };
    PalletJack.prototype.isProductUnloading = function () {
        return (this.isCargoStateChocolateProductUnloading() &&
            this.isStateIsBeingUnloaded());
    };
    PalletJack.prototype.cargoCurrentlyOccupiedSpace = function () {
        return (this.materialCargo.getMaterialListLength() +
            this.productCargo.getProductListLength());
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
/***/ (function(module, exports) {

throw new Error("Module parse failed: Argument name clash (58:82)\nFile was processed with these loaders:\n * ./node_modules/ts-loader/index.js\nYou may need an additional loader to handle the result of these loaders.\n|         return producedChocolateProduct;\n|     };\n>     Employee.prototype.produceDarkChocolateProduct = function (chocolateMaterial, chocolateMaterial) {\n|         if (chocolateMaterial.isChocolateProductTypeDarkChocolate()) {\n|             var newChocolateProduct = new ChocolateProduct();");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjLy5iaW4vc3RyaW5nLW1hbmlwdWxhdGlvbi9zdHJpbmctbWFuaXB1bGF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2Nob2NvbGF0ZS1tYXRlcmlhbHMvY2hvY29sYXRlLW1hdGVyaWFsLWxpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9jaG9jb2xhdGUtbWF0ZXJpYWxzL2Nob2NvbGF0ZS1tYXRlcmlhbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2Nob2NvbGF0ZS1wcm9kdWN0cy9jaG9jb2xhdGUtcHJvZHVjdC1saXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvZmFjdG9yeS1tYWNoaW5lcy9wYWxsZXQtamFjay9wYWxsZXQtamFjay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL3Blb3BsZS9lbXBsb3llZXIvZW1wbG95ZWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvcGVvcGxlL3BlcnNvbi9wZXJzb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy90cmFuc3BvcnQvdHJ1Y2svdHJ1Y2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy90cmFuc3BvcnQvdmVoaWNsZS92ZWhpY2xlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlE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QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxvQkFBb0IsQ0FBQztTQUN2RDthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDO1NBQzVEO0lBQ0wsQ0FBQztJQUVELHdDQUFzQixHQUF0QjtRQUNJLElBQUksUUFBUSxHQUFXLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtRQUMvQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDcEQsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQztJQUVELCtEQUE2QyxHQUE3QztRQUNJLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUM5RCxDQUFDO0lBRUQsK0JBQWEsR0FBYixVQUFjLGFBQXFCO1FBQy9CLElBQUksc0JBQXNCLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDNUQsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLGFBQWEsQ0FBQyxDQUFDO1FBQzdFLElBQUksSUFBSSxDQUFDLDZDQUE2QyxFQUFFLEVBQUU7WUFDdEQsT0FBTyxDQUFDLENBQUM7U0FDWjthQUNJO1lBQ0QsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ3BELE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLHNCQUFzQixDQUFDLENBQUM7U0FDekQ7SUFDTCxDQUFDO0lBQ0wsY0FBQztBQUFELENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJmdW5jdGlvbiBmaXJzdENoYXJhY3RlclRvVXBwZXJDYXNlKHN0cmluZ1RvQ2FwaXRhbGl6ZTogc3RyaW5nLCBmaXJzdExldHRlclRvVXBwZXJDYXNlOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgaWYgKGZpcnN0TGV0dGVyVG9VcHBlckNhc2UpIHtcclxuICAgICAgICBzdHJpbmdUb0NhcGl0YWxpemUgPSBzdHJpbmdUb0NhcGl0YWxpemUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmdUb0NhcGl0YWxpemUuc2xpY2UoMSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyaW5nVG9DYXBpdGFsaXplO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzcGxpdE9uVXBwZXJjYXNlTGV0dGVycyhzdHJpbmdUb1NwbGl0OiBzdHJpbmcpIHtcclxuICAgIGxldCBzcGxpdGVkT25VcHBlcmNhc2VMZXR0ZXI6IHN0cmluZ1tdID0gc3RyaW5nVG9TcGxpdC5tYXRjaCgvW0EtWl1bYS16XSsvZyk7XHJcbiAgICByZXR1cm4gc3BsaXRlZE9uVXBwZXJjYXNlTGV0dGVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b0xvd2VyQ2FzZUFuZEpvaW5FbGVtZW50cyhzdHJpbmdBcnJheVRvTG93ZXJDYXNlOiBzdHJpbmdbXSwgam9pblNlcGFyYXRvcjogc3RyaW5nKSB7XHJcbiAgICBsZXQgcmV0dXJuU3RyaW5nVmFsdWU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBzdHJpbmdBcnJheVRvTG93ZXJDYXNlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgcmV0dXJuU3RyaW5nVmFsdWUgPSByZXR1cm5TdHJpbmdWYWx1ZSArIGVsZW1lbnQudG9Mb3dlckNhc2UoKSArIGpvaW5TZXBhcmF0b3I7XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHJldHVyblN0cmluZ1ZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpZkxhc3RsZXR0ZXJJc1NwYWNlVGhhblJlbW92ZShzdHJpbmdXaXRoVW5uZWVkZWRTcGFjZTogc3RyaW5nKSB7XHJcbiAgICBpZiAoc3RyaW5nV2l0aFVubmVlZGVkU3BhY2UuY2hhckF0KHN0cmluZ1dpdGhVbm5lZWRlZFNwYWNlLmxlbmd0aCAtIDEpID09IFwiIFwiKSB7XHJcbiAgICAgICAgc3RyaW5nV2l0aFVubmVlZGVkU3BhY2UgPSBzdHJpbmdXaXRoVW5uZWVkZWRTcGFjZS5zbGljZSgwLCBzdHJpbmdXaXRoVW5uZWVkZWRTcGFjZS5sZW5ndGggLSAxKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzdHJpbmdXaXRoVW5uZWVkZWRTcGFjZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEZvcm1hdFN0cmluZyhzdHJpbmdUb0JlRm9ybWF0ZWQ6IHN0cmluZywgam9pblNlcGFyYXRvcjogc3RyaW5nLCBmaXJzdExldHRlclRvVXBwZXJDYXNlOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgbGV0IHNwbGl0ZWRPblVwcGVyY2FzZUxldHRlcjogc3RyaW5nW10gPSBzcGxpdE9uVXBwZXJjYXNlTGV0dGVycyhzdHJpbmdUb0JlRm9ybWF0ZWQpO1xyXG4gICAgbGV0IHJldHVyblN0cmluZ1ZhbHVlOiBzdHJpbmcgPSB0b0xvd2VyQ2FzZUFuZEpvaW5FbGVtZW50cyhzcGxpdGVkT25VcHBlcmNhc2VMZXR0ZXIsIGpvaW5TZXBhcmF0b3IpO1xyXG4gICAgcmV0dXJuU3RyaW5nVmFsdWUgPSBmaXJzdENoYXJhY3RlclRvVXBwZXJDYXNlKHJldHVyblN0cmluZ1ZhbHVlLCBmaXJzdExldHRlclRvVXBwZXJDYXNlKTtcclxuICAgIHJldHVyblN0cmluZ1ZhbHVlID0gaWZMYXN0bGV0dGVySXNTcGFjZVRoYW5SZW1vdmUocmV0dXJuU3RyaW5nVmFsdWUpO1xyXG4gICAgcmV0dXJuIHJldHVyblN0cmluZ1ZhbHVlO1xyXG59IiwiaW1wb3J0IHsgVHJ1Y2ssIFRydWNrU3RhdGUgfSBmcm9tIFwiLi9tb2RlbHMvdHJhbnNwb3J0L3RydWNrL3RydWNrXCI7XHJcbmltcG9ydCB7IEVtcGxveWVlIH0gZnJvbSBcIi4vbW9kZWxzL3Blb3BsZS9lbXBsb3llZS9lbXBsb3llZVwiO1xyXG5pbXBvcnQgeyBFbXBvbHllZXIgfSBmcm9tIFwiLi9tb2RlbHMvcGVvcGxlL2VtcGxveWVlci9lbXBsb3llZXJcIjtcclxuaW1wb3J0IHsgRm9ybWF0U3RyaW5nIH0gZnJvbSBcIi4vLmJpbi9zdHJpbmctbWFuaXB1bGF0aW9uL3N0cmluZy1tYW5pcHVsYXRpb25cIjtcclxuaW1wb3J0IHsgQ2hvY29sYXRlTWF0ZXJpYWxMaXN0IH0gZnJvbSBcIi4vbW9kZWxzL2Nob2NvbGF0ZS1tYXRlcmlhbHMvY2hvY29sYXRlLW1hdGVyaWFsLWxpc3RcIjtcclxuaW1wb3J0IHtcclxuICBDaG9jb2xhdGVNYXRlcmlhbCxcclxuICBDaG9jb2xhdGVNYXRlcmlhbFR5cGUsXHJcbn0gZnJvbSBcIi4vbW9kZWxzL2Nob2NvbGF0ZS1tYXRlcmlhbHMvY2hvY29sYXRlLW1hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFBhbGxldEphY2sgfSBmcm9tIFwiLi9tb2RlbHMvZmFjdG9yeS1tYWNoaW5lcy9wYWxsZXQtamFjay9wYWxsZXQtamFja1wiO1xyXG5pbXBvcnQgeyBDaG9jb2xhdGVQcm9kdWN0IH0gZnJvbSBcIi4vbW9kZWxzL2Nob2NvbGF0ZS1wcm9kdWN0cy9jaG9jb2xhdGUtcHJvZHVjdFwiO1xyXG5cclxuY29uc29sZS5sb2coXCJoZWxsb1wiKTtcclxuXHJcbmxldCBjaG9jb2xhdGVNYXRlcmlhbExpc3Q6IENob2NvbGF0ZU1hdGVyaWFsTGlzdDtcclxuXHJcbmxldCB0cnVjayA9IG5ldyBUcnVjayhcclxuICBcIkZvcmRcIixcclxuICBuZXcgRW1wbG95ZWUoXCJEdXNhblwiLCBcIk1pdHJvdmljXCIsIG5ldyBFbXBvbHllZXIoXCJNaWxvc1wiLCBcIk1pdHJvdmljXCIpKVxyXG4pO1xyXG5sZXQgcGFsbGV0SmFjayA9IG5ldyBQYWxsZXRKYWNrKFxyXG4gIG5ldyBFbXBsb3llZShcIkR1c2FuXCIsIFwiTWl0cm92aWNcIiwgbmV3IEVtcG9seWVlcihcIk1pbG9zXCIsIFwiTWl0cm92aWNcIikpXHJcbik7XHJcblxyXG5sZXQgY2hvY29sYXRlTWF0ZXJpYWwxOiBDaG9jb2xhdGVNYXRlcmlhbCA9IG5ldyBDaG9jb2xhdGVNYXRlcmlhbChcclxuICBDaG9jb2xhdGVNYXRlcmlhbFR5cGUuTWlsa0Nob2NvbGF0ZU1hdGVyaWFsXHJcbik7XHJcbmxldCBjaG9jb2xhdGVNYXRlcmlhbDI6IENob2NvbGF0ZU1hdGVyaWFsID0gbmV3IENob2NvbGF0ZU1hdGVyaWFsKFxyXG4gIENob2NvbGF0ZU1hdGVyaWFsVHlwZS5EYXJrQ2hvY29sYXRlTWF0ZXJpYWxcclxuKTtcclxubGV0IGNob2NvbGF0ZU1hdGVyaWFsMzogQ2hvY29sYXRlTWF0ZXJpYWwgPSBuZXcgQ2hvY29sYXRlTWF0ZXJpYWwoXHJcbiAgQ2hvY29sYXRlTWF0ZXJpYWxUeXBlLlJ1YnlDaG9jb2xhdGVNYXRlcmlhbFxyXG4pO1xyXG5sZXQgY2hvY29sYXRlTWF0ZXJpYWw0OiBDaG9jb2xhdGVNYXRlcmlhbCA9IG5ldyBDaG9jb2xhdGVNYXRlcmlhbChcclxuICBDaG9jb2xhdGVNYXRlcmlhbFR5cGUuTWlsa0Nob2NvbGF0ZU1hdGVyaWFsXHJcbik7XHJcbmxldCBjaG9jb2xhdGVNYXRlcmlhbDU6IENob2NvbGF0ZU1hdGVyaWFsID0gbmV3IENob2NvbGF0ZU1hdGVyaWFsKFxyXG4gIENob2NvbGF0ZU1hdGVyaWFsVHlwZS5EYXJrQ2hvY29sYXRlTWF0ZXJpYWxcclxuKTtcclxudHJ1Y2suc2V0Q2FyZ29TdGF0ZVRvQ2hvY29sYXRlTWF0ZXJpYWxMb2FkaW5nKCk7XHJcbnRydWNrLnNldFN0YXRlVG9Jc0JlaW5nTG9hZGVkKCk7XHJcblxyXG50cnVjay53b3JrV2l0aENhcmdvT25jZShjaG9jb2xhdGVNYXRlcmlhbDEpO1xyXG50cnVjay53b3JrV2l0aENhcmdvT25jZShjaG9jb2xhdGVNYXRlcmlhbDIpO1xyXG50cnVjay53b3JrV2l0aENhcmdvT25jZShjaG9jb2xhdGVNYXRlcmlhbDMpO1xyXG50cnVjay53b3JrV2l0aENhcmdvT25jZShjaG9jb2xhdGVNYXRlcmlhbDQpO1xyXG50cnVjay53b3JrV2l0aENhcmdvT25jZShjaG9jb2xhdGVNYXRlcmlhbDUpO1xyXG5jb25zb2xlLmxvZyh0cnVjayk7XHJcbnBhbGxldEphY2suc2V0Q2FyZ29TdGF0ZVRvQ2hvY29sYXRlTWF0ZXJpYWxMb2FkaW5nKCk7XHJcbnBhbGxldEphY2suc2V0U3RhdGVUb0lzQmVpbmdMb2FkZWQoKTtcclxuXHJcbnBhbGxldEphY2sud29ya1dpdGhDYXJnb09uY2UoY2hvY29sYXRlTWF0ZXJpYWwxKTtcclxucGFsbGV0SmFjay53b3JrV2l0aENhcmdvT25jZShjaG9jb2xhdGVNYXRlcmlhbDIpO1xyXG5wYWxsZXRKYWNrLndvcmtXaXRoQ2FyZ29PbmNlKGNob2NvbGF0ZU1hdGVyaWFsMyk7XHJcbnBhbGxldEphY2sud29ya1dpdGhDYXJnb09uY2UoY2hvY29sYXRlTWF0ZXJpYWw0KTtcclxucGFsbGV0SmFjay53b3JrV2l0aENhcmdvT25jZShjaG9jb2xhdGVNYXRlcmlhbDUpO1xyXG5jb25zb2xlLmxvZyhwYWxsZXRKYWNrKTtcclxucGFsbGV0SmFjay5zZXRDYXJnb1N0YXRlVG9DaG9jb2xhdGVNYXRlcmlhbFVuTG9hZGluZygpO1xyXG5wYWxsZXRKYWNrLnNldFN0YXRlVG9Jc0JlaW5nVW5sb2FkZWQoKTtcclxuXHJcbndoaWxlICghcGFsbGV0SmFjay5pc0NhcmdvRW1wdHkoKSkge1xyXG4gIGxldCBjTTogYW55ID0gcGFsbGV0SmFjay53b3JrV2l0aENhcmdvT25jZSgpO1xyXG4gIHRydWNrLndvcmtXaXRoQ2FyZ29PbmNlKGNNKTtcclxufVxyXG5jb25zb2xlLmxvZyhwYWxsZXRKYWNrKTtcclxuY29uc29sZS5sb2codHJ1Y2spO1xyXG5cclxuY29uc29sZS5sb2coRm9ybWF0U3RyaW5nKHRydWNrLmNhcmdvV29ya1N0YXRlLCBcIiBcIiwgdHJ1ZSkpO1xyXG4iLCJpbXBvcnQgeyBDaG9jb2xhdGVNYXRlcmlhbCB9IGZyb20gXCIuL2Nob2NvbGF0ZS1tYXRlcmlhbFwiXHJcblxyXG5leHBvcnQgY2xhc3MgQ2hvY29sYXRlTWF0ZXJpYWxMaXN0IHtcclxuICAgIGNob2NvbGF0ZU1hdGVyaWFsTGlzdDogQ2hvY29sYXRlTWF0ZXJpYWxbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjaG9jb2xhdGVNYXRlcmlhbExpc3QgPSBuZXcgQXJyYXkoKSkge1xyXG4gICAgICAgIHRoaXMuY2hvY29sYXRlTWF0ZXJpYWxMaXN0ID0gY2hvY29sYXRlTWF0ZXJpYWxMaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIGFkZE1hdGVyaWFsVG9MaXN0KGNob2NvbGF0ZU1hdGVyaWFsOiBDaG9jb2xhdGVNYXRlcmlhbCkge1xyXG4gICAgICAgIHRoaXMuY2hvY29sYXRlTWF0ZXJpYWxMaXN0LnB1c2goY2hvY29sYXRlTWF0ZXJpYWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1hdGVyaWFsRnJvbUxpc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hvY29sYXRlTWF0ZXJpYWxMaXN0LnBvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1hdGVyaWFsTGlzdExlbmd0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jaG9jb2xhdGVNYXRlcmlhbExpc3QubGVuZ3RoO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGVudW0gQ2hvY29sYXRlTWF0ZXJpYWxUeXBlIHtcclxuICBNaWxrQ2hvY29sYXRlTWF0ZXJpYWwgPSBcIk1pbGtDaG9jb2xhdGVNYXRlcmlhbFwiLFxyXG4gIERhcmtDaG9jb2xhdGVNYXRlcmlhbCA9IFwiRGFya0Nob2NvbGF0ZU1hdGVyaWFsXCIsXHJcbiAgV2hpdGVDaG9jb2xhdGVNYXRlcmlhbCA9IFwiV2hpdGVDaG9jb2xhdGVNYXRlcmlhbFwiLFxyXG4gIFJ1YnlDaG9jb2xhdGVNYXRlcmlhbCA9IFwiUnVieUNob2NvbGF0ZU1hdGVyaWFsXCIsXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDaG9jb2xhdGVNYXRlcmlhbCB7XHJcbiAgY2hvY29sYXRlTWF0ZXJpYWxUeXBlOiBDaG9jb2xhdGVNYXRlcmlhbFR5cGU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgY2hvY29sYXRlTWF0ZXJpYWxUeXBlOiBDaG9jb2xhdGVNYXRlcmlhbFR5cGUgPSBDaG9jb2xhdGVNYXRlcmlhbFR5cGUuRGFya0Nob2NvbGF0ZU1hdGVyaWFsXHJcbiAgKSB7XHJcbiAgICB0aGlzLmNob2NvbGF0ZU1hdGVyaWFsVHlwZSA9IGNob2NvbGF0ZU1hdGVyaWFsVHlwZTtcclxuICB9XHJcblxyXG4gIHNldENob2NvbGF0ZVByb2R1Y3RUeXBlTWlsa0Nob2NvbGF0ZU1hdGVyaWFsKCkge1xyXG4gICAgdGhpcy5jaG9jb2xhdGVNYXRlcmlhbFR5cGUgPT0gQ2hvY29sYXRlTWF0ZXJpYWxUeXBlLk1pbGtDaG9jb2xhdGVNYXRlcmlhbDtcclxuICB9XHJcbiAgc2V0Q2hvY29sYXRlUHJvZHVjdFR5cGVEYXJrQ2hvY29sYXRlKCkge1xyXG4gICAgdGhpcy5jaG9jb2xhdGVNYXRlcmlhbFR5cGUgPT0gQ2hvY29sYXRlTWF0ZXJpYWxUeXBlLkRhcmtDaG9jb2xhdGVNYXRlcmlhbDtcclxuICB9XHJcblxyXG4gIHNldENob2NvbGF0ZVByb2R1Y3RUeXBlV2hpdGVDaG9jb2xhdGUoKSB7XHJcbiAgICB0aGlzLmNob2NvbGF0ZU1hdGVyaWFsVHlwZSA9PSBDaG9jb2xhdGVNYXRlcmlhbFR5cGUuV2hpdGVDaG9jb2xhdGVNYXRlcmlhbDtcclxuICB9XHJcblxyXG4gIHNldENob2NvbGF0ZVByb2R1Y3RUeXBlUnVieUNob2NvbGF0ZSgpIHtcclxuICAgIHRoaXMuY2hvY29sYXRlTWF0ZXJpYWxUeXBlID09IENob2NvbGF0ZU1hdGVyaWFsVHlwZS5SdWJ5Q2hvY29sYXRlTWF0ZXJpYWw7XHJcbiAgfVxyXG5cclxuICBpc0Nob2NvbGF0ZVByb2R1Y3RUeXBlTWlsa0Nob2NvbGF0ZU1hdGVyaWFsKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5jaG9jb2xhdGVNYXRlcmlhbFR5cGUgPT09IENob2NvbGF0ZU1hdGVyaWFsVHlwZS5NaWxrQ2hvY29sYXRlTWF0ZXJpYWxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBpc0Nob2NvbGF0ZVByb2R1Y3RUeXBlRGFya0Nob2NvbGF0ZSgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRoaXMuY2hvY29sYXRlTWF0ZXJpYWxUeXBlID09PSBDaG9jb2xhdGVNYXRlcmlhbFR5cGUuRGFya0Nob2NvbGF0ZU1hdGVyaWFsXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgaXNDaG9jb2xhdGVQcm9kdWN0VHlwZVdoaXRlQ2hvY29sYXRlKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5jaG9jb2xhdGVNYXRlcmlhbFR5cGUgPT09XHJcbiAgICAgIENob2NvbGF0ZU1hdGVyaWFsVHlwZS5XaGl0ZUNob2NvbGF0ZU1hdGVyaWFsXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgaXNDaG9jb2xhdGVQcm9kdWN0VHlwZVJ1YnlDaG9jb2xhdGUoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0aGlzLmNob2NvbGF0ZU1hdGVyaWFsVHlwZSA9PT0gQ2hvY29sYXRlTWF0ZXJpYWxUeXBlLlJ1YnlDaG9jb2xhdGVNYXRlcmlhbFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ2hvY29sYXRlUHJvZHVjdCB9IGZyb20gXCIuL2Nob2NvbGF0ZS1wcm9kdWN0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hvY29sYXRlUHJvZHVjdExpc3Qge1xyXG4gICAgY2hvY29sYXRlUHJvZHVjdExpc3Q6IENob2NvbGF0ZVByb2R1Y3RbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjaG9jb2xhdGVQcm9kdWN0TGlzdCA9IG5ldyBBcnJheSgpKSB7XHJcbiAgICAgICAgdGhpcy5jaG9jb2xhdGVQcm9kdWN0TGlzdCA9IGNob2NvbGF0ZVByb2R1Y3RMaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFByb2R1Y3RUb0xpc3QobmV3Q2hvY29sYXRlUHJvZHVjdDogQ2hvY29sYXRlUHJvZHVjdCkge1xyXG4gICAgICAgIHRoaXMuY2hvY29sYXRlUHJvZHVjdExpc3QucHVzaChuZXdDaG9jb2xhdGVQcm9kdWN0KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQcm9kdWN0RnJvbUxpc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hvY29sYXRlUHJvZHVjdExpc3QucG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UHJvZHVjdExpc3RMZW5ndGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hvY29sYXRlUHJvZHVjdExpc3QubGVuZ3RoO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRW1wbG95ZWUgfSBmcm9tIFwiLi4vLi4vcGVvcGxlL2VtcGxveWVlL2VtcGxveWVlXCI7XHJcbmltcG9ydCB7IENob2NvbGF0ZVByb2R1Y3RMaXN0IH0gZnJvbSBcIi4uLy4uL2Nob2NvbGF0ZS1wcm9kdWN0cy9jaG9jb2xhdGUtcHJvZHVjdC1saXN0XCI7XHJcbmltcG9ydCB7IENob2NvbGF0ZU1hdGVyaWFsTGlzdCB9IGZyb20gXCIuLi8uLi9jaG9jb2xhdGUtbWF0ZXJpYWxzL2Nob2NvbGF0ZS1tYXRlcmlhbC1saXN0XCI7XHJcbmltcG9ydCB7IENob2NvbGF0ZU1hdGVyaWFsIH0gZnJvbSBcIi4uLy4uL2Nob2NvbGF0ZS1tYXRlcmlhbHMvY2hvY29sYXRlLW1hdGVyaWFsXCI7XHJcbmltcG9ydCB7IENob2NvbGF0ZVByb2R1Y3QgfSBmcm9tIFwiLi4vLi4vY2hvY29sYXRlLXByb2R1Y3RzL2Nob2NvbGF0ZS1wcm9kdWN0XCI7XHJcblxyXG5leHBvcnQgZW51bSBQYWxsZXRKYWNrU3RhdGUge1xyXG4gIEF2YWlibGUgPSBcIkF2YWlibGVcIixcclxuICBCcm9rZW4gPSBcIkJyb2tlblwiLFxyXG4gIEluUmVwYWlyID0gXCJJblJlcGFpclwiLFxyXG4gIElzQmVpbmdMb2FkZWQgPSBcIklzQmVpbmdMb2FkZWRcIixcclxuICBJc0JlaW5nVW5sb2FkZWQgPSBcIklzQmVpbmdVbmxvYWRlZFwiLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBQYWxsZXRKYWNrQ2FyZ29Xb3JrU3RhdGUge1xyXG4gIENob2NvbGF0ZU1hdGVyaWFsTG9hZGluZyA9IFwiQ2hvY29sYXRlTWF0ZXJpYWxMb2FkaW5nXCIsXHJcbiAgQ2hvY29sYXRlTWF0ZXJpYWxVbmxvYWRpbmcgPSBcIkNob2NvbGF0ZU1hdGVyaWFsVW5sb2FkaW5nXCIsXHJcbiAgQ2hvY29sYXRlUHJvZHVjdExvYWRpbmcgPSBcIkNob2NvbGF0ZVByb2R1Y3RMb2FkaW5nXCIsXHJcbiAgQ2hvY29sYXRlUHJvZHVjdFVubG9hZGluZyA9IFwiQ2hvY29sYXRlUHJvZHVjdFVubG9hZGluZ1wiLFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGFsbGV0SmFjayB7XHJcbiAgZHJpdmVyOiBFbXBsb3llZTtcclxuICBtYXRlcmlhbENhcmdvOiBDaG9jb2xhdGVNYXRlcmlhbExpc3Q7XHJcbiAgcHJvZHVjdENhcmdvOiBDaG9jb2xhdGVQcm9kdWN0TGlzdDtcclxuICBjYXJnb01heENhcGFjaXR5OiBudW1iZXI7XHJcbiAgc3RhdGU6IFBhbGxldEphY2tTdGF0ZTtcclxuICBjYXJnb1dvcmtTdGF0ZTogUGFsbGV0SmFja0NhcmdvV29ya1N0YXRlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihkcml2ZXI6IEVtcGxveWVlLCBjYXJnb01heENhcGFjaXR5OiBudW1iZXIgPSA0MDApIHtcclxuICAgIHRoaXMuZHJpdmVyID0gZHJpdmVyO1xyXG4gICAgdGhpcy5jYXJnb01heENhcGFjaXR5ID0gY2FyZ29NYXhDYXBhY2l0eTtcclxuICAgIHRoaXMubWF0ZXJpYWxDYXJnbyA9IG5ldyBDaG9jb2xhdGVNYXRlcmlhbExpc3QoKTtcclxuICAgIHRoaXMucHJvZHVjdENhcmdvID0gbmV3IENob2NvbGF0ZVByb2R1Y3RMaXN0KCk7XHJcbiAgICB0aGlzLnN0YXRlID0gUGFsbGV0SmFja1N0YXRlLkF2YWlibGU7XHJcbiAgICB0aGlzLmNhcmdvV29ya1N0YXRlID0gUGFsbGV0SmFja0NhcmdvV29ya1N0YXRlLkNob2NvbGF0ZU1hdGVyaWFsTG9hZGluZztcclxuICB9XHJcblxyXG4gIHNldERyaXZlcihkcml2ZXI6IEVtcGxveWVlKSB7XHJcbiAgICB0aGlzLmRyaXZlciA9IGRyaXZlcjtcclxuICB9XHJcblxyXG4gIHNldENhcmdvTWF4Q2FwYWNpdHkobmV3Q2FyZ29NYXhDYXBhY2l0eTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmNhcmdvTWF4Q2FwYWNpdHkgPSBuZXdDYXJnb01heENhcGFjaXR5O1xyXG4gIH1cclxuXHJcbiAgc2V0U3RhdGVUb0F2YWlibGUoKSB7XHJcbiAgICB0aGlzLnN0YXRlID0gUGFsbGV0SmFja1N0YXRlLkF2YWlibGU7XHJcbiAgfVxyXG5cclxuICBzZXRTdGF0ZVRvQnJva2VuKCkge1xyXG4gICAgdGhpcy5zdGF0ZSA9IFBhbGxldEphY2tTdGF0ZS5Ccm9rZW47XHJcbiAgfVxyXG5cclxuICBzZXRTdGF0ZVRvSW5SZXBhaXIoKSB7XHJcbiAgICB0aGlzLnN0YXRlID0gUGFsbGV0SmFja1N0YXRlLkluUmVwYWlyO1xyXG4gIH1cclxuXHJcbiAgc2V0U3RhdGVUb0lzQmVpbmdMb2FkZWQoKSB7XHJcbiAgICB0aGlzLnN0YXRlID0gUGFsbGV0SmFja1N0YXRlLklzQmVpbmdMb2FkZWQ7XHJcbiAgfVxyXG5cclxuICBzZXRTdGF0ZVRvSXNCZWluZ1VubG9hZGVkKCkge1xyXG4gICAgdGhpcy5zdGF0ZSA9IFBhbGxldEphY2tTdGF0ZS5Jc0JlaW5nVW5sb2FkZWQ7XHJcbiAgfVxyXG5cclxuICBpc1N0YXRlQXZhaWJsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlID09PSBQYWxsZXRKYWNrU3RhdGUuQXZhaWJsZTtcclxuICB9XHJcblxyXG4gIGlzU3RhdGVCcm9rZW4oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZSA9PT0gUGFsbGV0SmFja1N0YXRlLkJyb2tlbjtcclxuICB9XHJcblxyXG4gIGlzU3RhdGVJblJlcGFpcigpIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlID09PSBQYWxsZXRKYWNrU3RhdGUuSW5SZXBhaXI7XHJcbiAgfVxyXG5cclxuICBpc1N0YXRlSXNCZWluZ0xvYWRlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlID09PSBQYWxsZXRKYWNrU3RhdGUuSXNCZWluZ0xvYWRlZDtcclxuICB9XHJcblxyXG4gIGlzU3RhdGVJc0JlaW5nVW5sb2FkZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZSA9PT0gUGFsbGV0SmFja1N0YXRlLklzQmVpbmdVbmxvYWRlZDtcclxuICB9XHJcblxyXG4gIHNldENhcmdvU3RhdGVUb0Nob2NvbGF0ZU1hdGVyaWFsTG9hZGluZygpIHtcclxuICAgIHRoaXMuY2FyZ29Xb3JrU3RhdGUgPSBQYWxsZXRKYWNrQ2FyZ29Xb3JrU3RhdGUuQ2hvY29sYXRlTWF0ZXJpYWxMb2FkaW5nO1xyXG4gIH1cclxuXHJcbiAgc2V0Q2FyZ29TdGF0ZVRvQ2hvY29sYXRlTWF0ZXJpYWxVbkxvYWRpbmcoKSB7XHJcbiAgICB0aGlzLmNhcmdvV29ya1N0YXRlID0gUGFsbGV0SmFja0NhcmdvV29ya1N0YXRlLkNob2NvbGF0ZU1hdGVyaWFsVW5sb2FkaW5nO1xyXG4gIH1cclxuXHJcbiAgc2V0Q2FyZ29TdGF0ZVRvQ2hvY29sYXRlUHJvZHVjdExvYWRpbmcoKSB7XHJcbiAgICB0aGlzLmNhcmdvV29ya1N0YXRlID0gUGFsbGV0SmFja0NhcmdvV29ya1N0YXRlLkNob2NvbGF0ZVByb2R1Y3RMb2FkaW5nO1xyXG4gIH1cclxuXHJcbiAgc2V0Q2FyZ29TdGF0ZVRvQ2hvY29sYXRlUHJvZHVjdFVubG9hZGluZygpIHtcclxuICAgIHRoaXMuY2FyZ29Xb3JrU3RhdGUgPSBQYWxsZXRKYWNrQ2FyZ29Xb3JrU3RhdGUuQ2hvY29sYXRlUHJvZHVjdFVubG9hZGluZztcclxuICB9XHJcblxyXG4gIGlzQ2FyZ29TdGF0ZUNob2NvbGF0ZU1hdGVyaWFsTG9hZGluZygpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRoaXMuY2FyZ29Xb3JrU3RhdGUgPT09IFBhbGxldEphY2tDYXJnb1dvcmtTdGF0ZS5DaG9jb2xhdGVNYXRlcmlhbExvYWRpbmdcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBpc0NhcmdvU3RhdGVDaG9jb2xhdGVNYXRlcmlhbFVubG9hZGluZygpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRoaXMuY2FyZ29Xb3JrU3RhdGUgPT09XHJcbiAgICAgIFBhbGxldEphY2tDYXJnb1dvcmtTdGF0ZS5DaG9jb2xhdGVNYXRlcmlhbFVubG9hZGluZ1xyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGlzQ2FyZ29TdGF0ZUNob2NvbGF0ZVByb2R1Y3RMb2FkaW5nKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5jYXJnb1dvcmtTdGF0ZSA9PT1cclxuICAgICAgUGFsbGV0SmFja0NhcmdvV29ya1N0YXRlLkNob2NvbGF0ZU1hdGVyaWFsVW5sb2FkaW5nXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgaXNDYXJnb1N0YXRlQ2hvY29sYXRlUHJvZHVjdFVubG9hZGluZygpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRoaXMuY2FyZ29Xb3JrU3RhdGUgPT09IFBhbGxldEphY2tDYXJnb1dvcmtTdGF0ZS5DaG9jb2xhdGVQcm9kdWN0VW5sb2FkaW5nXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgaXNNYXRlcmlhbExvYWRpbmcoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0aGlzLmlzQ2FyZ29TdGF0ZUNob2NvbGF0ZU1hdGVyaWFsTG9hZGluZygpICYmIHRoaXMuaXNTdGF0ZUlzQmVpbmdMb2FkZWQoKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGlzTWF0ZXJpYWxVbmxvYWRpbmcoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0aGlzLmlzQ2FyZ29TdGF0ZUNob2NvbGF0ZU1hdGVyaWFsVW5sb2FkaW5nKCkgJiZcclxuICAgICAgdGhpcy5pc1N0YXRlSXNCZWluZ1VubG9hZGVkKClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBpc1Byb2R1Y3RMb2FkaW5nKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5pc0NhcmdvU3RhdGVDaG9jb2xhdGVQcm9kdWN0TG9hZGluZygpICYmIHRoaXMuaXNTdGF0ZUlzQmVpbmdMb2FkZWQoKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGlzUHJvZHVjdFVubG9hZGluZygpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRoaXMuaXNDYXJnb1N0YXRlQ2hvY29sYXRlUHJvZHVjdFVubG9hZGluZygpICYmXHJcbiAgICAgIHRoaXMuaXNTdGF0ZUlzQmVpbmdVbmxvYWRlZCgpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY2FyZ29DdXJyZW50bHlPY2N1cGllZFNwYWNlKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5tYXRlcmlhbENhcmdvLmdldE1hdGVyaWFsTGlzdExlbmd0aCgpICtcclxuICAgICAgdGhpcy5wcm9kdWN0Q2FyZ28uZ2V0UHJvZHVjdExpc3RMZW5ndGgoKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGlzVGhlcmVGcmVlU3BhY2UoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jYXJnb0N1cnJlbnRseU9jY3VwaWVkU3BhY2UoKSA8IHRoaXMuY2FyZ29NYXhDYXBhY2l0eTtcclxuICB9XHJcblxyXG4gIGlzQ2FyZ29FbXB0eSgpIHtcclxuICAgIHJldHVybiB0aGlzLmNhcmdvQ3VycmVudGx5T2NjdXBpZWRTcGFjZSgpID09IDA7XHJcbiAgfVxyXG5cclxuICBpc01hdGVyaWFsQ2FyZ29FbXB0eSgpIHtcclxuICAgIHJldHVybiB0aGlzLm1hdGVyaWFsQ2FyZ28uZ2V0TWF0ZXJpYWxMaXN0TGVuZ3RoKCkgPT0gMDtcclxuICB9XHJcblxyXG4gIGlzUHJvZHVjdENhcmdvRW1wdHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0Q2FyZ28uZ2V0UHJvZHVjdExpc3RMZW5ndGgoKSA9PSAwO1xyXG4gIH1cclxuXHJcbiAgbG9hZE9uZU1hdGVyaWFsVG9DYXJnbyhjaG9jb2xhdGVNYXRlcmlhbDogQ2hvY29sYXRlTWF0ZXJpYWwpIHtcclxuICAgIGlmICh0aGlzLmlzVGhlcmVGcmVlU3BhY2UoKSkge1xyXG4gICAgICB0aGlzLm1hdGVyaWFsQ2FyZ28uYWRkTWF0ZXJpYWxUb0xpc3QoY2hvY29sYXRlTWF0ZXJpYWwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdW5sb2FkT25lTWF0ZXJpYWxGcm9tQ2FyZ28oKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNNYXRlcmlhbENhcmdvRW1wdHkoKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5tYXRlcmlhbENhcmdvLmdldE1hdGVyaWFsRnJvbUxpc3QoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxvYWRPbmVQcm9kdWN0VG9DYXJnbyhjaG9jb2xhdGVQcm9kdWN0OiBDaG9jb2xhdGVQcm9kdWN0KSB7XHJcbiAgICBpZiAodGhpcy5pc1RoZXJlRnJlZVNwYWNlKCkpIHtcclxuICAgICAgdGhpcy5wcm9kdWN0Q2FyZ28uYWRkUHJvZHVjdFRvTGlzdChjaG9jb2xhdGVQcm9kdWN0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVubG9hZE9uZVByb2R1Y3RGcm9tQ2FyZ28oKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNQcm9kdWN0Q2FyZ29FbXB0eSgpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RDYXJnby5nZXRQcm9kdWN0RnJvbUxpc3QoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHdvcmtXaXRoQ2FyZ29PbmNlKFxyXG4gICAgbmV3TWF0ZXJpYWw/OiBDaG9jb2xhdGVNYXRlcmlhbCxcclxuICAgIG5ld1Byb2R1Y3Q/OiBDaG9jb2xhdGVQcm9kdWN0XHJcbiAgKSB7XHJcbiAgICBpZiAodGhpcy5pc01hdGVyaWFsTG9hZGluZygpKSB7XHJcbiAgICAgIHRoaXMubG9hZE9uZU1hdGVyaWFsVG9DYXJnbyhuZXdNYXRlcmlhbCk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNNYXRlcmlhbFVubG9hZGluZygpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnVubG9hZE9uZU1hdGVyaWFsRnJvbUNhcmdvKCk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNQcm9kdWN0TG9hZGluZygpKSB7XHJcbiAgICAgIHRoaXMubG9hZE9uZVByb2R1Y3RUb0NhcmdvKG5ld1Byb2R1Y3QpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmlzUHJvZHVjdFVubG9hZGluZygpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnVubG9hZE9uZVByb2R1Y3RGcm9tQ2FyZ28oKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIHN0byB2aXNlIHZyZW1lbmEgcHJvbGF6aSBwb3N0YWplIHVtb3JhblxyXG4gKi9cclxuaW1wb3J0IHsgUGVyc29uIH0gZnJvbSBcIi4uL3BlcnNvbi9wZXJzb25cIjtcclxuXHJcbmV4cG9ydCBlbnVtIEVtcGxveWVlcldvcmtTdGF0ZSB7XHJcbiAgICBNYXhpbXVtV29ya0RlZGljYXRpb25UaXJlbGVzcyA9IFwiVGlyZWxlc3NcIixcclxuICAgIE1lZGl1bVdvcmtEZWRpY2F0aW9uRmVlbGluZ1RpcmVkID0gXCJGZWVsaW5nVGlyZWRcIixcclxuICAgIExvd1dvcmNEZWRpY2F0aW9uVGlyZWQgPSBcIlRpcmVkXCJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRW1wbG95ZWVyTW9vZFN0YXRlIHtcclxuICAgIEV4ZWxlbnQgPSBcIkV4ZWxlbnRcIixcclxuICAgIFZlcnlHb29kID0gXCJWZXJ5R29vZFwiLFxyXG4gICAgR29vZCA9IFwiR29vZFwiLFxyXG4gICAgU3RyZXNzZWQgPSBcIlN0cmVzc2VkXCIsXHJcbiAgICBEZXZhc3RhdGVkID0gXCJEZXZhc3RhdGVkXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEVtcG9seWVlciBleHRlbmRzIFBlcnNvbiB7XHJcbiAgICBlbXBsb3llZXJXb3JrU3RhdGU6IEVtcGxveWVlcldvcmtTdGF0ZTtcclxuICAgIGVtcGxveWVlck1vb2RTdGF0ZTogRW1wbG95ZWVyTW9vZFN0YXRlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZywgZHJpdmluZ0xpY2VuY2U6IGJvb2xlYW4gPSBmYWxzZSwgZW1wbG95ZWVyV29ya1N0YXRlOiBFbXBsb3llZXJXb3JrU3RhdGUgPVxyXG4gICAgICAgIEVtcGxveWVlcldvcmtTdGF0ZS5NZWRpdW1Xb3JrRGVkaWNhdGlvbkZlZWxpbmdUaXJlZCwgZW1wbG95ZWVyTW9vZFN0YXRlOiBFbXBsb3llZXJNb29kU3RhdGUgPSBFbXBsb3llZXJNb29kU3RhdGUuR29vZCkge1xyXG4gICAgICAgIHN1cGVyKG5hbWUsIGxhc3ROYW1lLCBkcml2aW5nTGljZW5jZSk7XHJcbiAgICAgICAgdGhpcy5lbXBsb3llZXJXb3JrU3RhdGUgPSBlbXBsb3llZXJXb3JrU3RhdGU7XHJcbiAgICAgICAgdGhpcy5lbXBsb3llZXJNb29kU3RhdGUgPSBlbXBsb3llZXJNb29kU3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0V29ya1N0YXRlVG9NYXhpbXVtV29ya0RlZGljYXRpb25UaXJlbGVzcygpIHtcclxuICAgICAgICB0aGlzLmVtcGxveWVlcldvcmtTdGF0ZSA9IEVtcGxveWVlcldvcmtTdGF0ZS5NYXhpbXVtV29ya0RlZGljYXRpb25UaXJlbGVzcztcclxuICAgIH1cclxuXHJcbiAgICBzZXRXb3JrU3RhdGVUb01lZGl1bVdvcmtEZWRpY2F0aW9uRmVlbGluZ1RpcmVkKCkge1xyXG4gICAgICAgIHRoaXMuZW1wbG95ZWVyV29ya1N0YXRlID0gRW1wbG95ZWVyV29ya1N0YXRlLk1lZGl1bVdvcmtEZWRpY2F0aW9uRmVlbGluZ1RpcmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFdvcmtTdGF0ZVRvTG93V29ya0RlZGljYXRpb25UaXJlZCgpIHtcclxuICAgICAgICB0aGlzLmVtcGxveWVlcldvcmtTdGF0ZSA9IEVtcGxveWVlcldvcmtTdGF0ZS5Mb3dXb3JjRGVkaWNhdGlvblRpcmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE1vb2RTdGF0ZVRvRXhlbGVudCgpIHtcclxuICAgICAgICB0aGlzLmVtcGxveWVlck1vb2RTdGF0ZSA9IEVtcGxveWVlck1vb2RTdGF0ZS5FeGVsZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHNldE1vb2RTdGF0ZVRvVmVyeUdvb2QoKSB7XHJcbiAgICAgICAgdGhpcy5lbXBsb3llZXJNb29kU3RhdGUgPSBFbXBsb3llZXJNb29kU3RhdGUuVmVyeUdvb2Q7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TW9vZFN0YXRlVG9Hb29kKCkge1xyXG4gICAgICAgIHRoaXMuZW1wbG95ZWVyTW9vZFN0YXRlID0gRW1wbG95ZWVyTW9vZFN0YXRlLkdvb2Q7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TW9vZFN0YXRlVG9TdHJlc3NlZCgpIHtcclxuICAgICAgICB0aGlzLmVtcGxveWVlck1vb2RTdGF0ZSA9IEVtcGxveWVlck1vb2RTdGF0ZS5TdHJlc3NlZDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRNb29kU3RhdGVUb0RldmFzdGF0ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5lbXBsb3llZXJNb29kU3RhdGUgPSBFbXBsb3llZXJNb29kU3RhdGUuRGV2YXN0YXRlZDtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBQZXJzb24ge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgbGFzdE5hbWU6IHN0cmluZztcclxuICAgIGRyaXZpbmdMaWNlbmNlOiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZywgZHJpdmluZ0xpY2VuY2U6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5sYXN0TmFtZSA9IGxhc3ROYW1lO1xyXG4gICAgICAgIHRoaXMuZHJpdmluZ0xpY2VuY2UgPSBkcml2aW5nTGljZW5jZTtcclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiBBZGQ6XHJcbiAqIC1SZXBhaXIgdGltZSFcclxuICogcmFuZG9tRGVsYXkoMTAwMCwgNTAwMClcclxuICogXHJcbiAqIFxyXG4gKiAtLS0tLS0tLS0tLS0tLVxyXG4gKiBcclxuICogXHJcbiAqIFxyXG4gKiBkb2sgc2UgcHVuaSByYWRuaWsgamUgbmEgcGF1emlcclxuICogXHJcbiAqIFxyXG4gKiBcclxuICogY2hlY2sgbXVsdGlwbGUgbG9hZGluZyB1bmxvYWRpbmdcclxuICovXHJcbmltcG9ydCB7IEVtcGxveWVlIH0gZnJvbSBcIi4uLy4uL3Blb3BsZS9lbXBsb3llZS9lbXBsb3llZVwiO1xyXG5pbXBvcnQgeyBWZWhpY2xlIH0gZnJvbSBcIi4uL3ZlaGljbGUvdmVoaWNsZVwiO1xyXG5pbXBvcnQgeyBDaG9jb2xhdGVQcm9kdWN0TGlzdCB9IGZyb20gXCIuLi8uLi9jaG9jb2xhdGUtcHJvZHVjdHMvY2hvY29sYXRlLXByb2R1Y3QtbGlzdFwiO1xyXG5pbXBvcnQgeyBDaG9jb2xhdGVNYXRlcmlhbExpc3QgfSBmcm9tIFwiLi4vLi4vY2hvY29sYXRlLW1hdGVyaWFscy9jaG9jb2xhdGUtbWF0ZXJpYWwtbGlzdFwiO1xyXG5pbXBvcnQgeyBDaG9jb2xhdGVQcm9kdWN0IH0gZnJvbSBcIi4uLy4uL2Nob2NvbGF0ZS1wcm9kdWN0cy9jaG9jb2xhdGUtcHJvZHVjdFwiO1xyXG5pbXBvcnQgeyBDaG9jb2xhdGVNYXRlcmlhbCB9IGZyb20gXCIuLi8uLi9jaG9jb2xhdGUtbWF0ZXJpYWxzL2Nob2NvbGF0ZS1tYXRlcmlhbFwiO1xyXG5cclxuZXhwb3J0IGVudW0gVHJ1Y2tTdGF0ZSB7XHJcbiAgICBBdmFpYmxlID0gXCJBdmFpYmxlXCIsXHJcbiAgICBJblRyYW5zcG9ydCA9IFwiSW5UcmFuc3BvcnRcIixcclxuICAgIEJyb2tlbiA9IFwiQnJva2VuXCIsXHJcbiAgICBJblJlcGFpciA9IFwiSW5SZXBhaXJcIixcclxuICAgIElzQmVpbmdMb2FkZWQgPSBcIklzQmVpbmdMb2FkZWRcIixcclxuICAgIElzQmVpbmdVbmxvYWRlZCA9IFwiSXNCZWluZ1VubG9hZGVkXCJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVHJ1Y2tDYXJnb1dvcmtTdGF0ZSB7XHJcbiAgICBDaG9jb2xhdGVNYXRlcmlhbExvYWRpbmcgPSBcIkNob2NvbGF0ZU1hdGVyaWFsTG9hZGluZ1wiLFxyXG4gICAgQ2hvY29sYXRlTWF0ZXJpYWxVbmxvYWRpbmcgPSBcIkNob2NvbGF0ZU1hdGVyaWFsVW5sb2FkaW5nXCIsXHJcbiAgICBDaG9jb2xhdGVQcm9kdWN0TG9hZGluZyA9IFwiQ2hvY29sYXRlUHJvZHVjdExvYWRpbmdcIixcclxuICAgIENob2NvbGF0ZVByb2R1Y3RVbmxvYWRpbmcgPSBcIkNob2NvbGF0ZVByb2R1Y3RVbmxvYWRpbmdcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVHJ1Y2sgZXh0ZW5kcyBWZWhpY2xlIHtcclxuICAgIGJyYW5kOiBzdHJpbmc7XHJcbiAgICBkcml2ZXI6IEVtcGxveWVlO1xyXG4gICAgbWF0ZXJpYWxDYXJnbzogQ2hvY29sYXRlTWF0ZXJpYWxMaXN0O1xyXG4gICAgcHJvZHVjdENhcmdvOiBDaG9jb2xhdGVQcm9kdWN0TGlzdDtcclxuICAgIGNhcmdvTWF4Q2FwYWNpdHk6IG51bWJlcjtcclxuICAgIHN0YXRlOiBUcnVja1N0YXRlO1xyXG4gICAgY2FyZ29Xb3JrU3RhdGU6IFRydWNrQ2FyZ29Xb3JrU3RhdGU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYnJhbmQ6IHN0cmluZywgZHJpdmVyOiBFbXBsb3llZSwgY2FyZ29NYXhDYXBhY2l0eTogbnVtYmVyID0gMTAwMDApIHtcclxuICAgICAgICBzdXBlcigwLCAxNDAwLCAyNy41KTtcclxuICAgICAgICB0aGlzLmJyYW5kID0gYnJhbmQ7XHJcbiAgICAgICAgdGhpcy5kcml2ZXIgPSBkcml2ZXI7XHJcbiAgICAgICAgdGhpcy5tYXRlcmlhbENhcmdvID0gbmV3IENob2NvbGF0ZU1hdGVyaWFsTGlzdDtcclxuICAgICAgICB0aGlzLnByb2R1Y3RDYXJnbyA9IG5ldyBDaG9jb2xhdGVQcm9kdWN0TGlzdDtcclxuICAgICAgICB0aGlzLmNhcmdvTWF4Q2FwYWNpdHkgPSBjYXJnb01heENhcGFjaXR5O1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBUcnVja1N0YXRlLkF2YWlibGU7XHJcbiAgICAgICAgdGhpcy5jYXJnb1dvcmtTdGF0ZSA9IFRydWNrQ2FyZ29Xb3JrU3RhdGUuQ2hvY29sYXRlTWF0ZXJpYWxMb2FkaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEJyYW5kKGJyYW5kOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmJyYW5kID0gYnJhbmQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RHJpdmVyKGRyaXZlcjogRW1wbG95ZWUpIHtcclxuICAgICAgICB0aGlzLmRyaXZlciA9IGRyaXZlcjtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDYXJnb01heENhcGFjaXR5KG5ld0NhcmdvTWF4Q2FwYWNpdHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuY2FyZ29NYXhDYXBhY2l0eSA9IG5ld0NhcmdvTWF4Q2FwYWNpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3RhdGVUb0F2YWlibGUoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFRydWNrU3RhdGUuQXZhaWJsZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTdGF0ZVRvSW5UcmFuc3BvcnQoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFRydWNrU3RhdGUuSW5UcmFuc3BvcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3RhdGVUb0Jyb2tlbigpIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gVHJ1Y2tTdGF0ZS5Ccm9rZW47XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3RhdGVUb0luUmVwYWlyKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBUcnVja1N0YXRlLkluUmVwYWlyO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFN0YXRlVG9Jc0JlaW5nTG9hZGVkKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBUcnVja1N0YXRlLklzQmVpbmdMb2FkZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3RhdGVUb0lzQmVpbmdVbmxvYWRlZCgpIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gVHJ1Y2tTdGF0ZS5Jc0JlaW5nVW5sb2FkZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaXNTdGF0ZUF2YWlibGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUgPT09IFRydWNrU3RhdGUuQXZhaWJsZTtcclxuICAgIH1cclxuXHJcbiAgICBpc1N0YXRlSW5UcmFuc3BvcnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUgPT09IFRydWNrU3RhdGUuSW5UcmFuc3BvcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgaXNTdGF0ZUJyb2tlbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZSA9PT0gVHJ1Y2tTdGF0ZS5Ccm9rZW47XHJcbiAgICB9XHJcblxyXG4gICAgaXNTdGF0ZUluUmVwYWlyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlID09PSBUcnVja1N0YXRlLkluUmVwYWlyO1xyXG4gICAgfVxyXG5cclxuICAgIGlzU3RhdGVJc0JlaW5nTG9hZGVkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlID09PSBUcnVja1N0YXRlLklzQmVpbmdMb2FkZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaXNTdGF0ZUlzQmVpbmdVbmxvYWRlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZSA9PT0gVHJ1Y2tTdGF0ZS5Jc0JlaW5nVW5sb2FkZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q2FyZ29TdGF0ZVRvQ2hvY29sYXRlTWF0ZXJpYWxMb2FkaW5nKCkge1xyXG4gICAgICAgIHRoaXMuY2FyZ29Xb3JrU3RhdGUgPSBUcnVja0NhcmdvV29ya1N0YXRlLkNob2NvbGF0ZU1hdGVyaWFsTG9hZGluZztcclxuICAgIH1cclxuXHJcbiAgICBzZXRDYXJnb1N0YXRlVG9DaG9jb2xhdGVNYXRlcmlhbFVuTG9hZGluZygpIHtcclxuICAgICAgICB0aGlzLmNhcmdvV29ya1N0YXRlID0gVHJ1Y2tDYXJnb1dvcmtTdGF0ZS5DaG9jb2xhdGVNYXRlcmlhbFVubG9hZGluZztcclxuICAgIH1cclxuXHJcbiAgICBzZXRDYXJnb1N0YXRlVG9DaG9jb2xhdGVQcm9kdWN0TG9hZGluZygpIHtcclxuICAgICAgICB0aGlzLmNhcmdvV29ya1N0YXRlID0gVHJ1Y2tDYXJnb1dvcmtTdGF0ZS5DaG9jb2xhdGVQcm9kdWN0TG9hZGluZztcclxuICAgIH1cclxuXHJcbiAgICBzZXRDYXJnb1N0YXRlVG9DaG9jb2xhdGVQcm9kdWN0VW5sb2FkaW5nKCkge1xyXG4gICAgICAgIHRoaXMuY2FyZ29Xb3JrU3RhdGUgPSBUcnVja0NhcmdvV29ya1N0YXRlLkNob2NvbGF0ZVByb2R1Y3RVbmxvYWRpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgaXNDYXJnb1N0YXRlQ2hvY29sYXRlTWF0ZXJpYWxMb2FkaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhcmdvV29ya1N0YXRlID09PSBUcnVja0NhcmdvV29ya1N0YXRlLkNob2NvbGF0ZU1hdGVyaWFsTG9hZGluZztcclxuICAgIH1cclxuXHJcbiAgICBpc0NhcmdvU3RhdGVDaG9jb2xhdGVNYXRlcmlhbFVubG9hZGluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYXJnb1dvcmtTdGF0ZSA9PT0gVHJ1Y2tDYXJnb1dvcmtTdGF0ZS5DaG9jb2xhdGVNYXRlcmlhbFVubG9hZGluZztcclxuICAgIH1cclxuXHJcbiAgICBpc0NhcmdvU3RhdGVDaG9jb2xhdGVQcm9kdWN0TG9hZGluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYXJnb1dvcmtTdGF0ZSA9PT0gVHJ1Y2tDYXJnb1dvcmtTdGF0ZS5DaG9jb2xhdGVNYXRlcmlhbFVubG9hZGluZztcclxuICAgIH1cclxuXHJcbiAgICBpc0NhcmdvU3RhdGVDaG9jb2xhdGVQcm9kdWN0VW5sb2FkaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhcmdvV29ya1N0YXRlID09PSBUcnVja0NhcmdvV29ya1N0YXRlLkNob2NvbGF0ZVByb2R1Y3RVbmxvYWRpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgaXNNYXRlcmlhbExvYWRpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNDYXJnb1N0YXRlQ2hvY29sYXRlTWF0ZXJpYWxMb2FkaW5nKCkgJiYgdGhpcy5pc1N0YXRlSXNCZWluZ0xvYWRlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzTWF0ZXJpYWxVbmxvYWRpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNDYXJnb1N0YXRlQ2hvY29sYXRlTWF0ZXJpYWxVbmxvYWRpbmcoKSAmJiB0aGlzLmlzU3RhdGVJc0JlaW5nVW5sb2FkZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpc1Byb2R1Y3RMb2FkaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzQ2FyZ29TdGF0ZUNob2NvbGF0ZVByb2R1Y3RMb2FkaW5nKCkgJiYgdGhpcy5pc1N0YXRlSXNCZWluZ0xvYWRlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzUHJvZHVjdFVubG9hZGluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0NhcmdvU3RhdGVDaG9jb2xhdGVQcm9kdWN0VW5sb2FkaW5nKCkgJiYgdGhpcy5pc1N0YXRlSXNCZWluZ1VubG9hZGVkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FyZ29DdXJyZW50bHlPY2N1cGllZFNwYWNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hdGVyaWFsQ2FyZ28uZ2V0TWF0ZXJpYWxMaXN0TGVuZ3RoKCkgKyB0aGlzLnByb2R1Y3RDYXJnby5nZXRQcm9kdWN0TGlzdExlbmd0aCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzVGhlcmVGcmVlU3BhY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FyZ29DdXJyZW50bHlPY2N1cGllZFNwYWNlKCkgPCB0aGlzLmNhcmdvTWF4Q2FwYWNpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNDYXJnb0VtcHR5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhcmdvQ3VycmVudGx5T2NjdXBpZWRTcGFjZSgpID09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaXNNYXRlcmlhbENhcmdvRW1wdHkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWF0ZXJpYWxDYXJnby5nZXRNYXRlcmlhbExpc3RMZW5ndGgoKSA9PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlzUHJvZHVjdENhcmdvRW1wdHkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdENhcmdvLmdldFByb2R1Y3RMaXN0TGVuZ3RoKCkgPT0gMDtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkT25lTWF0ZXJpYWxUb0NhcmdvKGNob2NvbGF0ZU1hdGVyaWFsOiBDaG9jb2xhdGVNYXRlcmlhbCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzVGhlcmVGcmVlU3BhY2UoKSkge1xyXG4gICAgICAgICAgICB0aGlzLm1hdGVyaWFsQ2FyZ28uYWRkTWF0ZXJpYWxUb0xpc3QoY2hvY29sYXRlTWF0ZXJpYWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1bmxvYWRPbmVNYXRlcmlhbEZyb21DYXJnbygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNNYXRlcmlhbENhcmdvRW1wdHkoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXRlcmlhbENhcmdvLmdldE1hdGVyaWFsRnJvbUxpc3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZE9uZVByb2R1Y3RUb0NhcmdvKGNob2NvbGF0ZVByb2R1Y3Q6IENob2NvbGF0ZVByb2R1Y3QpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1RoZXJlRnJlZVNwYWNlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9kdWN0Q2FyZ28uYWRkUHJvZHVjdFRvTGlzdChjaG9jb2xhdGVQcm9kdWN0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdW5sb2FkT25lUHJvZHVjdEZyb21DYXJnbygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNQcm9kdWN0Q2FyZ29FbXB0eSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RDYXJnby5nZXRQcm9kdWN0RnJvbUxpc3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgd29ya1dpdGhDYXJnb09uY2UobmV3TWF0ZXJpYWw/OiBDaG9jb2xhdGVNYXRlcmlhbCwgbmV3UHJvZHVjdD86IENob2NvbGF0ZVByb2R1Y3QpIHtcclxuICAgICAgICBpZiAodGhpcy5pc01hdGVyaWFsTG9hZGluZygpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZE9uZU1hdGVyaWFsVG9DYXJnbyhuZXdNYXRlcmlhbCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzTWF0ZXJpYWxVbmxvYWRpbmcoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy51bmxvYWRPbmVNYXRlcmlhbEZyb21DYXJnbygpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1Byb2R1Y3RMb2FkaW5nKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkT25lUHJvZHVjdFRvQ2FyZ28obmV3UHJvZHVjdCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzUHJvZHVjdFVubG9hZGluZygpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVubG9hZE9uZVByb2R1Y3RGcm9tQ2FyZ28oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgVmVoaWNsZSB7XHJcbiAgICBzcGVlZDogbnVtYmVyO1xyXG4gICAgbWF4RnVlbFRhbmtMZXZlbDogbnVtYmVyO1xyXG4gICAgZnVlbENvbnN1bXB0aW9uUGVyMTAwS206IG51bWJlcjtcclxuICAgIGN1cnJlbnRGdWVsVGFua0xldmVsOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc3BlZWQ6IG51bWJlciwgbWF4RnVlbFRhbmtMZXZlbDogbnVtYmVyLCBmdWVsQ29uc3VtcHRpb25QZXIxMDBLbTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xyXG4gICAgICAgIHRoaXMubWF4RnVlbFRhbmtMZXZlbCA9IG1heEZ1ZWxUYW5rTGV2ZWw7XHJcbiAgICAgICAgdGhpcy5mdWVsQ29uc3VtcHRpb25QZXIxMDBLbSA9IGZ1ZWxDb25zdW1wdGlvblBlcjEwMEttO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEZ1ZWxUYW5rTGV2ZWwgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEN1cnJlbnRGdWVsVGFua0xldmVsKG5ld0N1cnJlbnRGdWVsVGFua0xldmVsOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRGdWVsVGFua0xldmVsID0gbmV3Q3VycmVudEZ1ZWxUYW5rTGV2ZWw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q3VycmVudEZ1ZWxUYW5rTGV2ZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudEZ1ZWxUYW5rTGV2ZWw7XHJcbiAgICB9XHJcblxyXG4gICAgZnVlbENvbnN1bXB0aW9uUGVyS2lsb21ldGVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZ1ZWxDb25zdW1wdGlvblBlcjEwMEttIC8gMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEZ1ZWxEaWZmZXJlbmNlKGZ1ZWxUYW5rTGV2ZWxUb0NoZWNrPzogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKGZ1ZWxUYW5rTGV2ZWxUb0NoZWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1heEZ1ZWxUYW5rTGV2ZWwgLSBmdWVsVGFua0xldmVsVG9DaGVjaztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXhGdWVsVGFua0xldmVsIC0gdGhpcy5jdXJyZW50RnVlbFRhbmtMZXZlbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVmaWxGdWVsVGFua1RvTWF4aW11bSgpIHtcclxuICAgICAgICBsZXQgZnVlbFVzZWQ6IG51bWJlciA9IHRoaXMuZ2V0RnVlbERpZmZlcmVuY2UoKVxyXG4gICAgICAgIHRoaXMuc2V0Q3VycmVudEZ1ZWxUYW5rTGV2ZWwodGhpcy5tYXhGdWVsVGFua0xldmVsKTtcclxuICAgICAgICByZXR1cm4gZnVlbFVzZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaXNDdXJyZW50TG93ZXJPckVxdWFsVGhhbk1heGltdW1UYW5rRnVlbExldmVsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRGdWVsVGFua0xldmVsIDw9IHRoaXMubWF4RnVlbFRhbmtMZXZlbDtcclxuICAgIH1cclxuXHJcbiAgICByZWZpbEZ1ZWxUYW5rKGxpdHJlc1RvUmVmaWw6IG51bWJlcikge1xyXG4gICAgICAgIGxldCB0bXBDdXJlbnRGdWVsVGFua0xldmVsID0gdGhpcy5nZXRDdXJyZW50RnVlbFRhbmtMZXZlbCgpO1xyXG4gICAgICAgIHRoaXMuc2V0Q3VycmVudEZ1ZWxUYW5rTGV2ZWwodGhpcy5nZXRDdXJyZW50RnVlbFRhbmtMZXZlbCgpICsgbGl0cmVzVG9SZWZpbCk7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNDdXJyZW50TG93ZXJPckVxdWFsVGhhbk1heGltdW1UYW5rRnVlbExldmVsKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldEN1cnJlbnRGdWVsVGFua0xldmVsKHRoaXMubWF4RnVlbFRhbmtMZXZlbCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEZ1ZWxEaWZmZXJlbmNlKHRtcEN1cmVudEZ1ZWxUYW5rTGV2ZWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=