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
/* harmony import */ var _models_chocolate_products_chocolate_product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/chocolate-products/chocolate-product */ "./src/models/chocolate-products/chocolate-product.ts");







console.log("hello");
var chocolateMaterialList;
var truck = new _models_transport_truck_truck__WEBPACK_IMPORTED_MODULE_0__["Truck"]("Ford", new _models_people_employee_employee__WEBPACK_IMPORTED_MODULE_1__["Employee"]("Dusan", "Mitrovic", new _models_people_employeer_employeer__WEBPACK_IMPORTED_MODULE_2__["Empolyeer"]("Milos", "Mitrovic")));
var palletJack = new _models_factory_machines_pallet_jack_pallet_jack__WEBPACK_IMPORTED_MODULE_5__["PalletJack"](new _models_people_employee_employee__WEBPACK_IMPORTED_MODULE_1__["Employee"]("Dusan", "Mitrovic", new _models_people_employeer_employeer__WEBPACK_IMPORTED_MODULE_2__["Empolyeer"]("Milos", "Mitrovic")));
var chocolateMaterial1 = new _models_chocolate_materials_chocolate_material__WEBPACK_IMPORTED_MODULE_4__["ChocolateMaterial"](_models_chocolate_materials_chocolate_material__WEBPACK_IMPORTED_MODULE_4__["ChocolateMaterialType"].MilkChocolateMaterial);
var chocolateMaterial2 = new _models_chocolate_materials_chocolate_material__WEBPACK_IMPORTED_MODULE_4__["ChocolateMaterial"](_models_chocolate_materials_chocolate_material__WEBPACK_IMPORTED_MODULE_4__["ChocolateMaterialType"].DarkChocolateMaterial);
var chocolateMaterial3 = new _models_chocolate_materials_chocolate_material__WEBPACK_IMPORTED_MODULE_4__["ChocolateMaterial"](_models_chocolate_materials_chocolate_material__WEBPACK_IMPORTED_MODULE_4__["ChocolateMaterialType"].RubyChocolateMaterial);
var chocolateMaterial4 = new _models_chocolate_materials_chocolate_material__WEBPACK_IMPORTED_MODULE_4__["ChocolateMaterial"](_models_chocolate_materials_chocolate_material__WEBPACK_IMPORTED_MODULE_4__["ChocolateMaterialType"].MilkChocolateMaterial);
var chocolateProduct = new _models_chocolate_products_chocolate_product__WEBPACK_IMPORTED_MODULE_6__["ChocolateProduct"](_models_chocolate_products_chocolate_product__WEBPACK_IMPORTED_MODULE_6__["ChocolateProductType"].DarkChocolate);
truck.setCargoStateToChocolateMaterialLoading();
truck.setStateToIsBeingLoaded();
debugger;
truck.workWithCargoOnce(chocolateMaterial1);
truck.workWithCargoOnce(chocolateMaterial2);
truck.workWithCargoOnce(chocolateMaterial3);
truck.workWithCargoOnce(chocolateMaterial4);
truck.setCargoStateToChocolateProductLoading();
truck.workWithCargoOnce(null, chocolateProduct);
console.log(truck);
palletJack.setCargoStateToChocolateMaterialLoading();
palletJack.setStateToIsBeingLoaded();
palletJack.workWithCargoOnce(chocolateMaterial1);
palletJack.workWithCargoOnce(chocolateMaterial2);
palletJack.workWithCargoOnce(chocolateMaterial3);
palletJack.workWithCargoOnce(chocolateMaterial4);
palletJack.workWithCargoOnce(null, chocolateProduct);
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
console.log(truck.getCurrentFuelTankLevel());
console.log(truck.cargoCurrentlyOccupiedSpace());
truck.setCargoStateToChocolateProductUnloading();
truck.setStateToIsBeingUnloaded();
console.log(truck.workWithCargoOnce(null, null, null, _models_chocolate_products_chocolate_product__WEBPACK_IMPORTED_MODULE_6__["ChocolateProductType"].DarkChocolate));


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
    ChocolateMaterialList.prototype.isProductListEmpty = function () {
        return this.getMaterialListLength() == 0;
    };
    ChocolateMaterialList.prototype.removeAllProductsFromList = function () {
        while (!this.isProductListEmpty()) {
            this.getMaterialFromList();
        }
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
var ProductionState;
(function (ProductionState) {
    ProductionState["ReadyForProduction"] = "ReadyForProduction";
    ProductionState["NotReadyForProduction"] = "NotReadyForProduction";
})(ProductionState || (ProductionState = {}));
var ChocolateMaterial = /** @class */ (function () {
    function ChocolateMaterial(chocolateMaterialType) {
        if (chocolateMaterialType === void 0) { chocolateMaterialType = ChocolateMaterialType.DarkChocolateMaterial; }
        this.id = undefined;
        this.chocolateMaterialType = chocolateMaterialType;
        this.productionState = ProductionState.NotReadyForProduction;
    }
    ChocolateMaterial.prototype.setId = function (id) {
        this.id = id;
    };
    ChocolateMaterial.prototype.getId = function () {
        return this.id;
    };
    ChocolateMaterial.prototype.setMaterialTypeToMilkChocolateMaterial = function () {
        this.chocolateMaterialType == ChocolateMaterialType.MilkChocolateMaterial;
    };
    ChocolateMaterial.prototype.setMaterialTypeToDarkChocolateMaterial = function () {
        this.chocolateMaterialType == ChocolateMaterialType.DarkChocolateMaterial;
    };
    ChocolateMaterial.prototype.setMaterialTypeToWhiteChocolateMaterial = function () {
        this.chocolateMaterialType == ChocolateMaterialType.WhiteChocolateMaterial;
    };
    ChocolateMaterial.prototype.setMaterialTypeToRubyChocolateMaterial = function () {
        this.chocolateMaterialType == ChocolateMaterialType.RubyChocolateMaterial;
    };
    ChocolateMaterial.prototype.isMaterialTypeMilkChocolateMaterial = function () {
        return this.chocolateMaterialType === ChocolateMaterialType.MilkChocolateMaterial;
    };
    ChocolateMaterial.prototype.isMaterialTypeDarkChocolateMaterial = function () {
        return this.chocolateMaterialType === ChocolateMaterialType.DarkChocolateMaterial;
    };
    ChocolateMaterial.prototype.isMaterialTypeWhiteChocolateMaterial = function () {
        return this.chocolateMaterialType === ChocolateMaterialType.WhiteChocolateMaterial;
    };
    ChocolateMaterial.prototype.isMaterialTypeRubyChocolateMaterial = function () {
        return this.chocolateMaterialType === ChocolateMaterialType.RubyChocolateMaterial;
    };
    ChocolateMaterial.prototype.setProductionStateToReadyForProduction = function () {
        this.productionState = ProductionState.ReadyForProduction;
    };
    ChocolateMaterial.prototype.setProductionStateToNotReadyForProduction = function () {
        this.productionState = ProductionState.NotReadyForProduction;
    };
    ChocolateMaterial.prototype.isProductionStateReadyForProduction = function () {
        return this.productionState === ProductionState.ReadyForProduction;
    };
    ChocolateMaterial.prototype.isProductionStateNotReadyForProduction = function () {
        return this.productionState === ProductionState.NotReadyForProduction;
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
    ChocolateProductList.prototype.isProductListEmpty = function () {
        return this.getProductListLength() == 0;
    };
    ChocolateProductList.prototype.removeAllProductsFromList = function () {
        while (!this.isProductListEmpty()) {
            this.getProductFromList();
        }
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
var ProductPackedState;
(function (ProductPackedState) {
    ProductPackedState["Packed"] = "Packed";
    ProductPackedState["NotPacked"] = "NotPacked";
})(ProductPackedState || (ProductPackedState = {}));
var ChocolateProduct = /** @class */ (function () {
    function ChocolateProduct(chocolateProductType) {
        if (chocolateProductType === void 0) { chocolateProductType = ChocolateProductType.DarkChocolate; }
        this.id = undefined;
        this.chocolateProductType = chocolateProductType;
        this.packedState = ProductPackedState.NotPacked;
    }
    ChocolateProduct.prototype.setId = function (id) {
        this.id;
    };
    ChocolateProduct.prototype.getId = function () {
        return this.id;
    };
    ChocolateProduct.prototype.setProductTypeToMilkChocolate = function () {
        this.chocolateProductType = ChocolateProductType.MilkChocolate;
    };
    ChocolateProduct.prototype.setProductTypeToDarkChocolate = function () {
        this.chocolateProductType = ChocolateProductType.DarkChocolate;
    };
    ChocolateProduct.prototype.setProductTypeToWhiteChocolate = function () {
        this.chocolateProductType = ChocolateProductType.WhiteChocolate;
    };
    ChocolateProduct.prototype.setProductTypeToRubyChocolate = function () {
        this.chocolateProductType = ChocolateProductType.RubyChocolate;
    };
    ChocolateProduct.prototype.isChocolateProductTypeMilkChocolate = function () {
        return this.chocolateProductType === ChocolateProductType.MilkChocolate;
    };
    ChocolateProduct.prototype.isChocolateProductTypeDarkChocolate = function () {
        return this.chocolateProductType === ChocolateProductType.DarkChocolate;
    };
    ChocolateProduct.prototype.isChocolateProductTypeWhiteChocolate = function () {
        return this.chocolateProductType === ChocolateProductType.WhiteChocolate;
    };
    ChocolateProduct.prototype.isChocolateProductTypeRubyChocolate = function () {
        return this.chocolateProductType === ChocolateProductType.RubyChocolate;
    };
    ChocolateProduct.prototype.setPackedStateToPacked = function () {
        this.packedState = ProductPackedState.Packed;
    };
    ChocolateProduct.prototype.setPackedStateToNotPacke = function () {
        this.packedState = ProductPackedState.NotPacked;
    };
    ChocolateProduct.prototype.isPackedStatePacked = function () {
        return this.packedState === ProductPackedState.Packed;
    };
    ChocolateProduct.prototype.isPackedStateNotPacked = function () {
        return this.packedState === ProductPackedState.NotPacked;
    };
    ChocolateProduct.prototype.packIt = function () {
        this.setPackedStateToPacked();
    };
    ChocolateProduct.prototype.unpackIt = function () {
        this.setPackedStateToNotPacke();
    };
    return ChocolateProduct;
}());



/***/ }),

/***/ "./src/models/factory-machines/pallet-jack/pallet-jack.ts":
/*!****************************************************************!*\
  !*** ./src/models/factory-machines/pallet-jack/pallet-jack.ts ***!
  \****************************************************************/
/*! exports provided: PalletJack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
        id: undefined;
        this.driver = driver;
        this.cargoMaxCapacity = cargoMaxCapacity;
        this.materialCargo = new _chocolate_materials_chocolate_material_list__WEBPACK_IMPORTED_MODULE_1__["ChocolateMaterialList"]();
        this.productCargo = new _chocolate_products_chocolate_product_list__WEBPACK_IMPORTED_MODULE_0__["ChocolateProductList"]();
        this.state = PalletJackState.Avaible;
        this.cargoWorkState = PalletJackCargoWorkState.ChocolateMaterialLoading;
    }
    PalletJack.prototype.setId = function (id) {
        this.id = id;
    };
    PalletJack.prototype.getId = function () {
        return this.id;
    };
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
/* harmony import */ var _chocolate_products_chocolate_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../chocolate-products/chocolate-product */ "./src/models/chocolate-products/chocolate-product.ts");
/**
 *  nakon jela proizvodnja par sekundi brza
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



var EmployeeWorkState;
(function (EmployeeWorkState) {
    EmployeeWorkState["Working"] = "Working";
    EmployeeWorkState["LunchBreak"] = "LaunchBreak";
    EmployeeWorkState["NotPresent"] = "NotPresent";
})(EmployeeWorkState || (EmployeeWorkState = {}));
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, lastName, factoryEmployeer, drivingLicence) {
        if (drivingLicence === void 0) { drivingLicence = false; }
        var _this = _super.call(this, name, lastName, drivingLicence) || this;
        _this.factoryEmployeer = factoryEmployeer;
        _this.producedChocolateGoods = new _chocolate_products_chocolate_product_list__WEBPACK_IMPORTED_MODULE_1__["ChocolateProductList"]();
        _this.workState = EmployeeWorkState.NotPresent;
        _this.workEficiencyRating = 10;
        _this.stolenChocolates = new _chocolate_products_chocolate_product_list__WEBPACK_IMPORTED_MODULE_1__["ChocolateProductList"]();
        _this.payment = 0;
        return _this;
    }
    Employee.prototype.setWorkStateToWorking = function () {
        this.workState = EmployeeWorkState.Working;
    };
    Employee.prototype.setWorkStateToLaunchBreak = function () {
        this.workState = EmployeeWorkState.LunchBreak;
    };
    Employee.prototype.setWorkStateToNotPresent = function () {
        this.workState = EmployeeWorkState.NotPresent;
    };
    Employee.prototype.isWorkStateWorking = function () {
        return this.workState === EmployeeWorkState.Working;
    };
    Employee.prototype.isWorkStateLaunchBreak = function () {
        return this.workState === EmployeeWorkState.LunchBreak;
    };
    Employee.prototype.isWorkStateNotPresent = function () {
        return this.workState === EmployeeWorkState.NotPresent;
    };
    Employee.prototype.produceChocolateProduct = function (chocolateMaterial) {
        var producedChocolateProduct = new _chocolate_products_chocolate_product__WEBPACK_IMPORTED_MODULE_2__["ChocolateProduct"]();
        if (chocolateMaterial.isMaterialTypeDarkChocolateMaterial()) {
            return this.produceDarkChocolateProduct();
        }
        if (chocolateMaterial.isMaterialTypeWhiteChocolateMaterial()) {
            return this.produceWhiteChocolateProduct();
        }
        if (chocolateMaterial.isMaterialTypeMilkChocolateMaterial()) {
            return this.produceMilkChocolateProduct();
        }
        if (chocolateMaterial.isMaterialTypeRubyChocolateMaterial()) {
            return this.produceRubyChocolateProduct();
        }
        return (producedChocolateProduct = null);
    };
    Employee.prototype.produceDarkChocolateProduct = function () {
        var newChocolateProduct = new _chocolate_products_chocolate_product__WEBPACK_IMPORTED_MODULE_2__["ChocolateProduct"]();
        return newChocolateProduct.setProductTypeToDarkChocolate();
    };
    Employee.prototype.produceWhiteChocolateProduct = function () {
        var newChocolateProduct = new _chocolate_products_chocolate_product__WEBPACK_IMPORTED_MODULE_2__["ChocolateProduct"]();
        return newChocolateProduct.setProductTypeToWhiteChocolate();
    };
    Employee.prototype.produceMilkChocolateProduct = function () {
        var newChocolateProduct = new _chocolate_products_chocolate_product__WEBPACK_IMPORTED_MODULE_2__["ChocolateProduct"]();
        return newChocolateProduct.setProductTypeToMilkChocolate();
    };
    Employee.prototype.produceRubyChocolateProduct = function () {
        var newChocolateProduct = new _chocolate_products_chocolate_product__WEBPACK_IMPORTED_MODULE_2__["ChocolateProduct"]();
        return newChocolateProduct.setProductTypeToRubyChocolate();
    };
    Employee.prototype.packChocolateProduct = function (chocolateProductToPack) {
        if (this.isWorkStateWorking()) {
            chocolateProductToPack.packIt();
        }
    };
    Employee.prototype.unpackChocolateProduct = function (chocolateProductToUnpack) {
        if (this.isWorkStateWorking()) {
            chocolateProductToUnpack.unpackIt();
        }
    };
    Employee.prototype.getPayment = function (payment) {
        this.payment += payment;
    };
    Employee.prototype.reduceFromPayment = function (price) {
        this.payment -= price;
    };
    Employee.prototype.payForStolenProductsThatEmployeeFoundAbout = function (numberOfStolenGoods, priceOfOneStolenProduct) {
        var priceToPay = numberOfStolenGoods * priceOfOneStolenProduct;
        this.reduceFromPayment(priceToPay);
        return priceToPay;
    };
    return Employee;
}(_person_person__WEBPACK_IMPORTED_MODULE_0__["Person"]));



/***/ }),

/***/ "./src/models/people/employeer/employeer.ts":
/*!**************************************************!*\
  !*** ./src/models/people/employeer/employeer.ts ***!
  \**************************************************/
/*! exports provided: EmployeerState, EmployeerWorkState, EmployeerMoodState, Empolyeer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeerState", function() { return EmployeerState; });
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

var EmployeerState;
(function (EmployeerState) {
    EmployeerState["Working"] = "Working";
    EmployeerState["LunchBreak"] = "LaunchBreak";
    EmployeerState["NotPresent"] = "NotPresent";
})(EmployeerState || (EmployeerState = {}));
var EmployeerWorkState;
(function (EmployeerWorkState) {
    EmployeerWorkState["MaximumWorkDedicationTireless"] = "Tireless";
    EmployeerWorkState["MediumWorkDedicationFeelingTired"] = "FeelingTired";
    EmployeerWorkState["LowWorkDedicationTired"] = "Tired";
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
    function Empolyeer(name, lastName, drivingLicence) {
        if (drivingLicence === void 0) { drivingLicence = false; }
        var _this = _super.call(this, name, lastName, drivingLicence) || this;
        _this.employeerState = EmployeerState.NotPresent;
        _this.employeerWorkState = EmployeerWorkState.MaximumWorkDedicationTireless;
        _this.employeerMoodState = EmployeerMoodState.Exelent;
        return _this;
    }
    Empolyeer.prototype.setStateToWorking = function () {
        this.employeerState = EmployeerState.Working;
    };
    Empolyeer.prototype.setStateToLaunchBreak = function () {
        this.employeerState = EmployeerState.LunchBreak;
    };
    Empolyeer.prototype.setStateToNotPresent = function () {
        this.employeerState = EmployeerState.NotPresent;
    };
    Empolyeer.prototype.isStateWorking = function () {
        return this.employeerState === EmployeerState.Working;
    };
    Empolyeer.prototype.isStateLaunchBreak = function () {
        return this.employeerState === EmployeerState.LunchBreak;
    };
    Empolyeer.prototype.isStateNotPresent = function () {
        return this.employeerState === EmployeerState.NotPresent;
    };
    Empolyeer.prototype.setWorkStateToMaximumWorkDedicationTireless = function () {
        this.employeerWorkState = EmployeerWorkState.MaximumWorkDedicationTireless;
    };
    Empolyeer.prototype.setWorkStateToMediumWorkDedicationFeelingTired = function () {
        this.employeerWorkState = EmployeerWorkState.MediumWorkDedicationFeelingTired;
    };
    Empolyeer.prototype.setWorkStateToLowWorkDedicationTired = function () {
        this.employeerWorkState = EmployeerWorkState.LowWorkDedicationTired;
    };
    Empolyeer.prototype.isWorkStateToMaximumWorkDedicationTireless = function () {
        return this.employeerWorkState === EmployeerWorkState.MaximumWorkDedicationTireless;
    };
    Empolyeer.prototype.isWorkStateToMediumWorkDedicationFeelingTired = function () {
        return this.employeerWorkState === EmployeerWorkState.MediumWorkDedicationFeelingTired;
    };
    Empolyeer.prototype.isWorkStateToLowWorkDedicationTired = function () {
        this.employeerWorkState === EmployeerWorkState.LowWorkDedicationTired;
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
    Empolyeer.prototype.isMoodStateToExelent = function () {
        return this.employeerMoodState === EmployeerMoodState.Exelent;
    };
    Empolyeer.prototype.isMoodStateToVeryGood = function () {
        return this.employeerMoodState === EmployeerMoodState.VeryGood;
    };
    Empolyeer.prototype.isMoodStateToGood = function () {
        return this.employeerMoodState === EmployeerMoodState.Good;
    };
    Empolyeer.prototype.isMoodStateToStressed = function () {
        return this.employeerMoodState === EmployeerMoodState.Stressed;
    };
    Empolyeer.prototype.isMoodStateToDevastated = function () {
        this.employeerMoodState = EmployeerMoodState.Devastated;
    };
    Empolyeer.prototype.checkForStolenGoods = function (employee) {
        if (this.isStateWorking()) {
        }
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
        this.id = undefined;
        this.name = name;
        this.lastName = lastName;
        this.hasDrivingLicence = drivingLicence;
    }
    Person.prototype.setId = function (id) {
        this.id = id;
    };
    Person.prototype.getId = function () {
        return this.id;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    Person.prototype.getLastName = function () {
        return this.lastName;
    };
    Person.prototype.setHasDrivingLicence = function (hasDrivingLicence) {
        this.hasDrivingLicence = hasDrivingLicence;
    };
    Person.prototype.getHasDrivingLicence = function () {
        return this.hasDrivingLicence;
    };
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
/* harmony import */ var _chocolate_products_chocolate_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../chocolate-products/chocolate-product */ "./src/models/chocolate-products/chocolate-product.ts");
/* harmony import */ var _chocolate_materials_chocolate_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../chocolate-materials/chocolate-material */ "./src/models/chocolate-materials/chocolate-material.ts");
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
    function Truck(brand, driver, maximumCargoCapacity) {
        if (maximumCargoCapacity === void 0) { maximumCargoCapacity = 10000; }
        var _this = _super.call(this, 0, 1400, 27.5) || this;
        _this.brand = brand;
        _this.driver = driver;
        _this.darkChocolateMaterialCargo = new _chocolate_materials_chocolate_material_list__WEBPACK_IMPORTED_MODULE_2__["ChocolateMaterialList"]();
        _this.whiteChocolateMaterialCargo = new _chocolate_materials_chocolate_material_list__WEBPACK_IMPORTED_MODULE_2__["ChocolateMaterialList"]();
        _this.milkChocolateMaterialCargo = new _chocolate_materials_chocolate_material_list__WEBPACK_IMPORTED_MODULE_2__["ChocolateMaterialList"]();
        _this.rubyChocolateMaterialCargo = new _chocolate_materials_chocolate_material_list__WEBPACK_IMPORTED_MODULE_2__["ChocolateMaterialList"]();
        _this.darkChocolateProductCargo = new _chocolate_products_chocolate_product_list__WEBPACK_IMPORTED_MODULE_1__["ChocolateProductList"]();
        _this.whiteChocolateProductCargo = new _chocolate_products_chocolate_product_list__WEBPACK_IMPORTED_MODULE_1__["ChocolateProductList"]();
        _this.milkChocolateProductCargo = new _chocolate_products_chocolate_product_list__WEBPACK_IMPORTED_MODULE_1__["ChocolateProductList"]();
        _this.rubyChocolateProductCargo = new _chocolate_products_chocolate_product_list__WEBPACK_IMPORTED_MODULE_1__["ChocolateProductList"]();
        _this.maximumCargoCapacity = maximumCargoCapacity;
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
    Truck.prototype.setCargoMaxCapacity = function (newMaximumCargoCapacity) {
        this.maximumCargoCapacity = newMaximumCargoCapacity;
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
        return this.cargoWorkState === TruckCargoWorkState.ChocolateProductLoading;
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
    Truck.prototype.getDarkChocolateMaterialCargoListLength = function () {
        return this.darkChocolateMaterialCargo.getMaterialListLength();
    };
    Truck.prototype.getWhiteChocolateMaterialCargoListLength = function () {
        return this.whiteChocolateMaterialCargo.getMaterialListLength();
    };
    Truck.prototype.getMilkChocolateMaterialCargoListLength = function () {
        return this.milkChocolateMaterialCargo.getMaterialListLength();
    };
    Truck.prototype.getRubyChocolateMaterialCargoListLength = function () {
        return this.rubyChocolateMaterialCargo.getMaterialListLength();
    };
    Truck.prototype.getDarkChocolateProductCargoListLength = function () {
        return this.darkChocolateProductCargo.getProductListLength();
    };
    Truck.prototype.getWhiteChocolateProductCargoListLength = function () {
        return this.whiteChocolateProductCargo.getProductListLength();
    };
    Truck.prototype.getMilkChocolateProductCargoListLength = function () {
        return this.milkChocolateProductCargo.getProductListLength();
    };
    Truck.prototype.getRubyChocolateProductCargoListLength = function () {
        return this.rubyChocolateProductCargo.getProductListLength();
    };
    Truck.prototype.getMaterialCargoCurrentlyOccupiedSpace = function () {
        var materialCargoSpace = 0;
        materialCargoSpace += this.getDarkChocolateMaterialCargoListLength();
        materialCargoSpace += this.getWhiteChocolateMaterialCargoListLength();
        materialCargoSpace += this.getMilkChocolateMaterialCargoListLength();
        materialCargoSpace += this.getRubyChocolateMaterialCargoListLength();
        return materialCargoSpace;
    };
    Truck.prototype.getProductCargoCurrentlyOcuppiedSpace = function () {
        var productCargoSpace = 0;
        productCargoSpace += this.getDarkChocolateProductCargoListLength();
        productCargoSpace += this.getWhiteChocolateProductCargoListLength();
        productCargoSpace += this.getMilkChocolateProductCargoListLength();
        productCargoSpace += this.getRubyChocolateProductCargoListLength();
        return productCargoSpace;
    };
    Truck.prototype.cargoCurrentlyOccupiedSpace = function () {
        var materialCargoSpace = this.getMaterialCargoCurrentlyOccupiedSpace();
        var productCargoSpace = this.getProductCargoCurrentlyOcuppiedSpace();
        return materialCargoSpace + productCargoSpace;
    };
    Truck.prototype.isThereFreeSpace = function () {
        return this.cargoCurrentlyOccupiedSpace() < this.maximumCargoCapacity;
    };
    Truck.prototype.isCargoEmpty = function () {
        return this.cargoCurrentlyOccupiedSpace() == 0;
    };
    Truck.prototype.isMaterialCargoEmpty = function () {
        return this.getMaterialCargoCurrentlyOccupiedSpace() == 0;
    };
    Truck.prototype.isProductCargoEmpty = function () {
        return this.getProductCargoCurrentlyOcuppiedSpace() == 0;
    };
    Truck.prototype.isDarkChocolateMaterialCargoEmpty = function () {
        return this.getDarkChocolateMaterialCargoListLength() == 0;
    };
    Truck.prototype.isWhiteChocolateMaterialCargoEmpty = function () {
        return this.getWhiteChocolateMaterialCargoListLength() == 0;
    };
    Truck.prototype.isMilkChocolateMaterialCargoEmpty = function () {
        return this.getMilkChocolateMaterialCargoListLength() == 0;
    };
    Truck.prototype.isRubyChocolateMaterialCargoEmpty = function () {
        return this.getRubyChocolateMaterialCargoListLength() == 0;
    };
    Truck.prototype.isDarkChocolateProductCargoEmpty = function () {
        return this.getDarkChocolateProductCargoListLength() == 0;
    };
    Truck.prototype.isWhiteChocolateProductCargoEmpty = function () {
        return this.getWhiteChocolateProductCargoListLength() == 0;
    };
    Truck.prototype.isMilkChocolateProductCargoEmpty = function () {
        return this.getMilkChocolateProductCargoListLength() == 0;
    };
    Truck.prototype.isRubyChocolateProductCargoEmpty = function () {
        return this.getRubyChocolateProductCargoListLength() == 0;
    };
    Truck.prototype.loadOneDarkChocolateMaterialToCargo = function (chocolateMaterial) {
        if (this.isThereFreeSpace()) {
            this.darkChocolateMaterialCargo.addMaterialToList(chocolateMaterial);
        }
    };
    Truck.prototype.loadOneWhiteChocolateMaterialToCargo = function (chocolateMaterial) {
        if (this.isThereFreeSpace()) {
            this.whiteChocolateMaterialCargo.addMaterialToList(chocolateMaterial);
        }
    };
    Truck.prototype.loadOneMilkChocolateMaterialToCargo = function (chocolateMaterial) {
        if (this.isThereFreeSpace()) {
            this.milkChocolateMaterialCargo.addMaterialToList(chocolateMaterial);
        }
    };
    Truck.prototype.loadOneRubyChocolateMaterialToCargo = function (chocolateMaterial) {
        if (this.isThereFreeSpace()) {
            this.rubyChocolateMaterialCargo.addMaterialToList(chocolateMaterial);
        }
    };
    Truck.prototype.loadOneMaterialToCargo = function (chocolateMaterial) {
        if (chocolateMaterial.isMaterialTypeDarkChocolateMaterial()) {
            this.loadOneDarkChocolateMaterialToCargo(chocolateMaterial);
        }
        if (chocolateMaterial.isMaterialTypeWhiteChocolateMaterial()) {
            this.loadOneWhiteChocolateMaterialToCargo(chocolateMaterial);
        }
        if (chocolateMaterial.isMaterialTypeMilkChocolateMaterial()) {
            this.loadOneMilkChocolateMaterialToCargo(chocolateMaterial);
        }
        if (chocolateMaterial.isMaterialTypeRubyChocolateMaterial()) {
            this.loadOneRubyChocolateMaterialToCargo(chocolateMaterial);
        }
    };
    Truck.prototype.loadOneDarkChocolateProductToCargo = function (chocolateProduct) {
        if (this.isThereFreeSpace()) {
            this.darkChocolateProductCargo.addProductToList(chocolateProduct);
        }
    };
    Truck.prototype.loadOneWhiteChocolateProductToCargo = function (chocolateProduct) {
        if (this.isThereFreeSpace()) {
            this.whiteChocolateProductCargo.addProductToList(chocolateProduct);
        }
    };
    Truck.prototype.loadOneMilkChocolateProductToCargo = function (chocolateProduct) {
        if (this.isThereFreeSpace()) {
            this.milkChocolateProductCargo.addProductToList(chocolateProduct);
        }
    };
    Truck.prototype.loadOneRubyChocolateProductToCargo = function (chocolateProduct) {
        if (this.isThereFreeSpace()) {
            this.rubyChocolateProductCargo.addProductToList(chocolateProduct);
        }
    };
    Truck.prototype.loadOneProductToCargo = function (chocolateProduct) {
        if (chocolateProduct.isChocolateProductTypeDarkChocolate) {
            this.loadOneDarkChocolateProductToCargo(chocolateProduct);
        }
        if (chocolateProduct.isChocolateProductTypeWhiteChocolate()) {
            this.loadOneWhiteChocolateProductToCargo(chocolateProduct);
        }
        if (chocolateProduct.isChocolateProductTypeMilkChocolate()) {
            this.loadOneMilkChocolateProductToCargo(chocolateProduct);
        }
        if (chocolateProduct.isChocolateProductTypeRubyChocolate()) {
            this.loadOneRubyChocolateProductToCargo(chocolateProduct);
        }
    };
    Truck.prototype.unloadOneDarkChocolateMaterialFromCargo = function () {
        if (!this.isDarkChocolateMaterialCargoEmpty()) {
            return this.darkChocolateMaterialCargo.getMaterialFromList();
        }
    };
    Truck.prototype.unloadOneWhiteChocolateMaterialFromCargo = function () {
        if (!this.isWhiteChocolateMaterialCargoEmpty()) {
            return this.whiteChocolateMaterialCargo.getMaterialFromList();
        }
    };
    Truck.prototype.unloadOneMilkChocolateMaterialFromCargo = function () {
        if (!this.isMilkChocolateMaterialCargoEmpty()) {
            return this.milkChocolateMaterialCargo.getMaterialFromList();
        }
    };
    Truck.prototype.unloadOneRubyChocolateMaterialFromCargo = function () {
        if (!this.isRubyChocolateMaterialCargoEmpty()) {
            return this.rubyChocolateMaterialCargo.getMaterialFromList();
        }
    };
    Truck.prototype.unloadOneMaterialFromCargo = function (chocolateMaterialType) {
        if (chocolateMaterialType === _chocolate_materials_chocolate_material__WEBPACK_IMPORTED_MODULE_4__["ChocolateMaterialType"].DarkChocolateMaterial) {
            return this.unloadOneDarkChocolateMaterialFromCargo();
        }
        if (chocolateMaterialType === _chocolate_materials_chocolate_material__WEBPACK_IMPORTED_MODULE_4__["ChocolateMaterialType"].WhiteChocolateMaterial) {
            return this.unloadOneWhiteChocolateMaterialFromCargo();
        }
        if (chocolateMaterialType === _chocolate_materials_chocolate_material__WEBPACK_IMPORTED_MODULE_4__["ChocolateMaterialType"].MilkChocolateMaterial) {
            this.unloadOneMilkChocolateMaterialFromCargo();
        }
        if (chocolateMaterialType === _chocolate_materials_chocolate_material__WEBPACK_IMPORTED_MODULE_4__["ChocolateMaterialType"].RubyChocolateMaterial) {
            return this.unloadOneRubyChocolateMaterialFromCargo();
        }
        return null;
    };
    Truck.prototype.unloadOneDarkChocolateProductFromCargo = function () {
        if (!this.isDarkChocolateProductCargoEmpty()) {
            return this.darkChocolateProductCargo.getProductFromList();
        }
    };
    Truck.prototype.unloadOneWhiteChocolateProductFromCargo = function () {
        if (!this.isWhiteChocolateProductCargoEmpty()) {
            return this.whiteChocolateProductCargo.getProductFromList();
        }
    };
    Truck.prototype.unloadOneMilkChocolateProductFromCargo = function () {
        if (!this.isMilkChocolateProductCargoEmpty()) {
            return this.milkChocolateProductCargo.getProductFromList();
        }
    };
    Truck.prototype.unloadOneRubyChocolateProductFromCargo = function () {
        if (!this.isMilkChocolateProductCargoEmpty()) {
            return this.milkChocolateProductCargo.getProductFromList();
        }
    };
    Truck.prototype.unloadOneProductFromCargo = function (chocolateProductType) {
        if (chocolateProductType === _chocolate_products_chocolate_product__WEBPACK_IMPORTED_MODULE_3__["ChocolateProductType"].DarkChocolate) {
            return this.unloadOneDarkChocolateProductFromCargo();
        }
        if (chocolateProductType === _chocolate_products_chocolate_product__WEBPACK_IMPORTED_MODULE_3__["ChocolateProductType"].WhiteChocolate) {
            return this.unloadOneWhiteChocolateProductFromCargo();
        }
        if (chocolateProductType === _chocolate_products_chocolate_product__WEBPACK_IMPORTED_MODULE_3__["ChocolateProductType"].MilkChocolate) {
            this.unloadOneMilkChocolateProductFromCargo();
        }
        if (chocolateProductType === _chocolate_products_chocolate_product__WEBPACK_IMPORTED_MODULE_3__["ChocolateProductType"].RubyChocolate) {
            return this.unloadOneRubyChocolateProductFromCargo();
        }
        return null;
    };
    Truck.prototype.workWithCargoOnce = function (newMaterial, newProduct, chocolateMaterialType, chocolateProductType) {
        if (this.isMaterialLoading() && newMaterial != null) {
            this.loadOneMaterialToCargo(newMaterial);
        }
        if (this.isMaterialUnloading() && chocolateProductType) {
            return this.unloadOneMaterialFromCargo(chocolateMaterialType);
        }
        if (this.isProductLoading() && newProduct != null) {
            this.loadOneProductToCargo(newProduct);
        }
        if (this.isProductUnloading() && chocolateProductType) {
            return this.unloadOneProductFromCargo(chocolateProductType);
        }
        return null;
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
        this.id = undefined;
        this.speed = speed;
        this.maxFuelTankLevel = maxFuelTankLevel;
        this.fuelConsumptionPer100Km = fuelConsumptionPer100Km;
        this.currentFuelTankLevel = 0;
    }
    Vehicle.prototype.setId = function (id) {
        this.id = id;
    };
    Vehicle.prototype.getId = function () {
        return this.id;
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjLy5iaW4vc3RyaW5nLW1hbmlwdWxhdGlvbi9zdHJpbmctbWFuaXB1bGF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2Nob2NvbGF0ZS1tYXRlcmlhbHMvY2hvY29sYXRlLW1hdGVyaWFsLWxpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9jaG9jb2xhdGUtbWF0ZXJpYWxzL2Nob2NvbGF0ZS1tYXRlcmlhbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2Nob2NvbGF0ZS1wcm9kdWN0cy9jaG9jb2xhdGUtcHJvZHVjdC1saXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvY2hvY29sYXRlLXByb2R1Y3RzL2Nob2NvbGF0ZS1wcm9kdWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvZmFjdG9yeS1tYWNoaW5lcy9wYWxsZXQtamFjay9wYWxsZXQtamFjay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL3Blb3BsZS9lbXBsb3llZS9lbXBsb3llZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL3Blb3BsZS9lbXBsb3llZXIvZW1wbG95ZWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvcGVvcGxlL3BlcnNvbi9wZXJzb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy90cmFuc3BvcnQvdHJ1Y2svdHJ1Y2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy90cmFuc3BvcnQvdmVoaWNsZS92ZWhpY2xlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7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QUE2QyxHQUE3QztRQUNFLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUM1RCxDQUFDO0lBRUQsK0JBQWEsR0FBYixVQUFjLGFBQXFCO1FBQ2pDLElBQUksc0JBQXNCLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDNUQsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLGFBQWEsQ0FBQyxDQUFDO1FBQzdFLElBQUksSUFBSSxDQUFDLDZDQUE2QyxFQUFFLEVBQUU7WUFDeEQsT0FBTyxDQUFDLENBQUM7U0FDVjthQUFNO1lBQ0wsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ3BELE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLHNCQUFzQixDQUFDLENBQUM7U0FDdkQ7SUFDSCxDQUFDO0lBQ0gsY0FBQztBQUFELENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJmdW5jdGlvbiBmaXJzdENoYXJhY3RlclRvVXBwZXJDYXNlKHN0cmluZ1RvQ2FwaXRhbGl6ZTogc3RyaW5nLCBmaXJzdExldHRlclRvVXBwZXJDYXNlOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgaWYgKGZpcnN0TGV0dGVyVG9VcHBlckNhc2UpIHtcclxuICAgICAgICBzdHJpbmdUb0NhcGl0YWxpemUgPSBzdHJpbmdUb0NhcGl0YWxpemUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmdUb0NhcGl0YWxpemUuc2xpY2UoMSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyaW5nVG9DYXBpdGFsaXplO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzcGxpdE9uVXBwZXJjYXNlTGV0dGVycyhzdHJpbmdUb1NwbGl0OiBzdHJpbmcpIHtcclxuICAgIGxldCBzcGxpdGVkT25VcHBlcmNhc2VMZXR0ZXI6IHN0cmluZ1tdID0gc3RyaW5nVG9TcGxpdC5tYXRjaCgvW0EtWl1bYS16XSsvZyk7XHJcbiAgICByZXR1cm4gc3BsaXRlZE9uVXBwZXJjYXNlTGV0dGVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b0xvd2VyQ2FzZUFuZEpvaW5FbGVtZW50cyhzdHJpbmdBcnJheVRvTG93ZXJDYXNlOiBzdHJpbmdbXSwgam9pblNlcGFyYXRvcjogc3RyaW5nKSB7XHJcbiAgICBsZXQgcmV0dXJuU3RyaW5nVmFsdWU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBzdHJpbmdBcnJheVRvTG93ZXJDYXNlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgcmV0dXJuU3RyaW5nVmFsdWUgPSByZXR1cm5TdHJpbmdWYWx1ZSArIGVsZW1lbnQudG9Mb3dlckNhc2UoKSArIGpvaW5TZXBhcmF0b3I7XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHJldHVyblN0cmluZ1ZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpZkxhc3RsZXR0ZXJJc1NwYWNlVGhhblJlbW92ZShzdHJpbmdXaXRoVW5uZWVkZWRTcGFjZTogc3RyaW5nKSB7XHJcbiAgICBpZiAoc3RyaW5nV2l0aFVubmVlZGVkU3BhY2UuY2hhckF0KHN0cmluZ1dpdGhVbm5lZWRlZFNwYWNlLmxlbmd0aCAtIDEpID09IFwiIFwiKSB7XHJcbiAgICAgICAgc3RyaW5nV2l0aFVubmVlZGVkU3BhY2UgPSBzdHJpbmdXaXRoVW5uZWVkZWRTcGFjZS5zbGljZSgwLCBzdHJpbmdXaXRoVW5uZWVkZWRTcGFjZS5sZW5ndGggLSAxKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzdHJpbmdXaXRoVW5uZWVkZWRTcGFjZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEZvcm1hdFN0cmluZyhzdHJpbmdUb0JlRm9ybWF0ZWQ6IHN0cmluZywgam9pblNlcGFyYXRvcjogc3RyaW5nLCBmaXJzdExldHRlclRvVXBwZXJDYXNlOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgbGV0IHNwbGl0ZWRPblVwcGVyY2FzZUxldHRlcjogc3RyaW5nW10gPSBzcGxpdE9uVXBwZXJjYXNlTGV0dGVycyhzdHJpbmdUb0JlRm9ybWF0ZWQpO1xyXG4gICAgbGV0IHJldHVyblN0cmluZ1ZhbHVlOiBzdHJpbmcgPSB0b0xvd2VyQ2FzZUFuZEpvaW5FbGVtZW50cyhzcGxpdGVkT25VcHBlcmNhc2VMZXR0ZXIsIGpvaW5TZXBhcmF0b3IpO1xyXG4gICAgcmV0dXJuU3RyaW5nVmFsdWUgPSBmaXJzdENoYXJhY3RlclRvVXBwZXJDYXNlKHJldHVyblN0cmluZ1ZhbHVlLCBmaXJzdExldHRlclRvVXBwZXJDYXNlKTtcclxuICAgIHJldHVyblN0cmluZ1ZhbHVlID0gaWZMYXN0bGV0dGVySXNTcGFjZVRoYW5SZW1vdmUocmV0dXJuU3RyaW5nVmFsdWUpO1xyXG4gICAgcmV0dXJuIHJldHVyblN0cmluZ1ZhbHVlO1xyXG59IiwiaW1wb3J0IHsgVHJ1Y2ssIFRydWNrU3RhdGUgfSBmcm9tIFwiLi9tb2RlbHMvdHJhbnNwb3J0L3RydWNrL3RydWNrXCI7XHJcbmltcG9ydCB7IEVtcGxveWVlIH0gZnJvbSBcIi4vbW9kZWxzL3Blb3BsZS9lbXBsb3llZS9lbXBsb3llZVwiO1xyXG5pbXBvcnQgeyBFbXBvbHllZXIgfSBmcm9tIFwiLi9tb2RlbHMvcGVvcGxlL2VtcGxveWVlci9lbXBsb3llZXJcIjtcclxuaW1wb3J0IHsgRm9ybWF0U3RyaW5nIH0gZnJvbSBcIi4vLmJpbi9zdHJpbmctbWFuaXB1bGF0aW9uL3N0cmluZy1tYW5pcHVsYXRpb25cIjtcclxuaW1wb3J0IHsgQ2hvY29sYXRlTWF0ZXJpYWxMaXN0IH0gZnJvbSBcIi4vbW9kZWxzL2Nob2NvbGF0ZS1tYXRlcmlhbHMvY2hvY29sYXRlLW1hdGVyaWFsLWxpc3RcIjtcclxuaW1wb3J0IHsgQ2hvY29sYXRlTWF0ZXJpYWwsIENob2NvbGF0ZU1hdGVyaWFsVHlwZSB9IGZyb20gXCIuL21vZGVscy9jaG9jb2xhdGUtbWF0ZXJpYWxzL2Nob2NvbGF0ZS1tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBQYWxsZXRKYWNrIH0gZnJvbSBcIi4vbW9kZWxzL2ZhY3RvcnktbWFjaGluZXMvcGFsbGV0LWphY2svcGFsbGV0LWphY2tcIjtcclxuaW1wb3J0IHsgQ2hvY29sYXRlUHJvZHVjdCwgQ2hvY29sYXRlUHJvZHVjdFR5cGUgfSBmcm9tIFwiLi9tb2RlbHMvY2hvY29sYXRlLXByb2R1Y3RzL2Nob2NvbGF0ZS1wcm9kdWN0XCI7XHJcblxyXG5jb25zb2xlLmxvZyhcImhlbGxvXCIpO1xyXG5cclxubGV0IGNob2NvbGF0ZU1hdGVyaWFsTGlzdDogQ2hvY29sYXRlTWF0ZXJpYWxMaXN0O1xyXG5cclxubGV0IHRydWNrID0gbmV3IFRydWNrKFwiRm9yZFwiLCBuZXcgRW1wbG95ZWUoXCJEdXNhblwiLCBcIk1pdHJvdmljXCIsIG5ldyBFbXBvbHllZXIoXCJNaWxvc1wiLCBcIk1pdHJvdmljXCIpKSk7XHJcbmxldCBwYWxsZXRKYWNrID0gbmV3IFBhbGxldEphY2sobmV3IEVtcGxveWVlKFwiRHVzYW5cIiwgXCJNaXRyb3ZpY1wiLCBuZXcgRW1wb2x5ZWVyKFwiTWlsb3NcIiwgXCJNaXRyb3ZpY1wiKSkpO1xyXG5cclxubGV0IGNob2NvbGF0ZU1hdGVyaWFsMTogQ2hvY29sYXRlTWF0ZXJpYWwgPSBuZXcgQ2hvY29sYXRlTWF0ZXJpYWwoQ2hvY29sYXRlTWF0ZXJpYWxUeXBlLk1pbGtDaG9jb2xhdGVNYXRlcmlhbCk7XHJcbmxldCBjaG9jb2xhdGVNYXRlcmlhbDI6IENob2NvbGF0ZU1hdGVyaWFsID0gbmV3IENob2NvbGF0ZU1hdGVyaWFsKENob2NvbGF0ZU1hdGVyaWFsVHlwZS5EYXJrQ2hvY29sYXRlTWF0ZXJpYWwpO1xyXG5sZXQgY2hvY29sYXRlTWF0ZXJpYWwzOiBDaG9jb2xhdGVNYXRlcmlhbCA9IG5ldyBDaG9jb2xhdGVNYXRlcmlhbChDaG9jb2xhdGVNYXRlcmlhbFR5cGUuUnVieUNob2NvbGF0ZU1hdGVyaWFsKTtcclxubGV0IGNob2NvbGF0ZU1hdGVyaWFsNDogQ2hvY29sYXRlTWF0ZXJpYWwgPSBuZXcgQ2hvY29sYXRlTWF0ZXJpYWwoQ2hvY29sYXRlTWF0ZXJpYWxUeXBlLk1pbGtDaG9jb2xhdGVNYXRlcmlhbCk7XHJcbmxldCBjaG9jb2xhdGVQcm9kdWN0OiBDaG9jb2xhdGVQcm9kdWN0ID0gbmV3IENob2NvbGF0ZVByb2R1Y3QoQ2hvY29sYXRlUHJvZHVjdFR5cGUuRGFya0Nob2NvbGF0ZSk7XHJcbnRydWNrLnNldENhcmdvU3RhdGVUb0Nob2NvbGF0ZU1hdGVyaWFsTG9hZGluZygpO1xyXG50cnVjay5zZXRTdGF0ZVRvSXNCZWluZ0xvYWRlZCgpO1xyXG5cclxuZGVidWdnZXI7XHJcbnRydWNrLndvcmtXaXRoQ2FyZ29PbmNlKGNob2NvbGF0ZU1hdGVyaWFsMSk7XHJcbnRydWNrLndvcmtXaXRoQ2FyZ29PbmNlKGNob2NvbGF0ZU1hdGVyaWFsMik7XHJcbnRydWNrLndvcmtXaXRoQ2FyZ29PbmNlKGNob2NvbGF0ZU1hdGVyaWFsMyk7XHJcbnRydWNrLndvcmtXaXRoQ2FyZ29PbmNlKGNob2NvbGF0ZU1hdGVyaWFsNCk7XHJcbnRydWNrLnNldENhcmdvU3RhdGVUb0Nob2NvbGF0ZVByb2R1Y3RMb2FkaW5nKCk7XHJcbnRydWNrLndvcmtXaXRoQ2FyZ29PbmNlKG51bGwsIGNob2NvbGF0ZVByb2R1Y3QpO1xyXG5jb25zb2xlLmxvZyh0cnVjayk7XHJcbnBhbGxldEphY2suc2V0Q2FyZ29TdGF0ZVRvQ2hvY29sYXRlTWF0ZXJpYWxMb2FkaW5nKCk7XHJcbnBhbGxldEphY2suc2V0U3RhdGVUb0lzQmVpbmdMb2FkZWQoKTtcclxuXHJcbnBhbGxldEphY2sud29ya1dpdGhDYXJnb09uY2UoY2hvY29sYXRlTWF0ZXJpYWwxKTtcclxucGFsbGV0SmFjay53b3JrV2l0aENhcmdvT25jZShjaG9jb2xhdGVNYXRlcmlhbDIpO1xyXG5wYWxsZXRKYWNrLndvcmtXaXRoQ2FyZ29PbmNlKGNob2NvbGF0ZU1hdGVyaWFsMyk7XHJcbnBhbGxldEphY2sud29ya1dpdGhDYXJnb09uY2UoY2hvY29sYXRlTWF0ZXJpYWw0KTtcclxucGFsbGV0SmFjay53b3JrV2l0aENhcmdvT25jZShudWxsLCBjaG9jb2xhdGVQcm9kdWN0KTtcclxuY29uc29sZS5sb2cocGFsbGV0SmFjayk7XHJcbnBhbGxldEphY2suc2V0Q2FyZ29TdGF0ZVRvQ2hvY29sYXRlTWF0ZXJpYWxVbkxvYWRpbmcoKTtcclxucGFsbGV0SmFjay5zZXRTdGF0ZVRvSXNCZWluZ1VubG9hZGVkKCk7XHJcblxyXG53aGlsZSAoIXBhbGxldEphY2suaXNDYXJnb0VtcHR5KCkpIHtcclxuICBsZXQgY006IGFueSA9IHBhbGxldEphY2sud29ya1dpdGhDYXJnb09uY2UoKTtcclxuICB0cnVjay53b3JrV2l0aENhcmdvT25jZShjTSk7XHJcbn1cclxuY29uc29sZS5sb2cocGFsbGV0SmFjayk7XHJcbmNvbnNvbGUubG9nKHRydWNrKTtcclxuXHJcbmNvbnNvbGUubG9nKEZvcm1hdFN0cmluZyh0cnVjay5jYXJnb1dvcmtTdGF0ZSwgXCIgXCIsIHRydWUpKTtcclxuXHJcbmNvbnNvbGUubG9nKHRydWNrLmdldEN1cnJlbnRGdWVsVGFua0xldmVsKCkpO1xyXG5jb25zb2xlLmxvZyh0cnVjay5jYXJnb0N1cnJlbnRseU9jY3VwaWVkU3BhY2UoKSk7XHJcbnRydWNrLnNldENhcmdvU3RhdGVUb0Nob2NvbGF0ZVByb2R1Y3RVbmxvYWRpbmcoKTtcclxudHJ1Y2suc2V0U3RhdGVUb0lzQmVpbmdVbmxvYWRlZCgpO1xyXG5jb25zb2xlLmxvZyh0cnVjay53b3JrV2l0aENhcmdvT25jZShudWxsLCBudWxsLCBudWxsLCBDaG9jb2xhdGVQcm9kdWN0VHlwZS5EYXJrQ2hvY29sYXRlKSk7XHJcbiIsImltcG9ydCB7IENob2NvbGF0ZU1hdGVyaWFsIH0gZnJvbSBcIi4vY2hvY29sYXRlLW1hdGVyaWFsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hvY29sYXRlTWF0ZXJpYWxMaXN0IHtcclxuICBjaG9jb2xhdGVNYXRlcmlhbExpc3Q6IENob2NvbGF0ZU1hdGVyaWFsW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNob2NvbGF0ZU1hdGVyaWFsTGlzdCA9IG5ldyBBcnJheSgpKSB7XHJcbiAgICB0aGlzLmNob2NvbGF0ZU1hdGVyaWFsTGlzdCA9IGNob2NvbGF0ZU1hdGVyaWFsTGlzdDtcclxuICB9XHJcblxyXG4gIGFkZE1hdGVyaWFsVG9MaXN0KGNob2NvbGF0ZU1hdGVyaWFsOiBDaG9jb2xhdGVNYXRlcmlhbCkge1xyXG4gICAgdGhpcy5jaG9jb2xhdGVNYXRlcmlhbExpc3QucHVzaChjaG9jb2xhdGVNYXRlcmlhbCk7XHJcbiAgfVxyXG5cclxuICBnZXRNYXRlcmlhbEZyb21MaXN0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hvY29sYXRlTWF0ZXJpYWxMaXN0LnBvcCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TWF0ZXJpYWxMaXN0TGVuZ3RoKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hvY29sYXRlTWF0ZXJpYWxMaXN0Lmxlbmd0aDtcclxuICB9XHJcblxyXG4gIGlzUHJvZHVjdExpc3RFbXB0eSgpIHtcclxuICAgIHJldHVybiB0aGlzLmdldE1hdGVyaWFsTGlzdExlbmd0aCgpID09IDA7XHJcbiAgfVxyXG5cclxuICByZW1vdmVBbGxQcm9kdWN0c0Zyb21MaXN0KCkge1xyXG4gICAgd2hpbGUgKCF0aGlzLmlzUHJvZHVjdExpc3RFbXB0eSgpKSB7XHJcbiAgICAgIHRoaXMuZ2V0TWF0ZXJpYWxGcm9tTGlzdCgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZW51bSBDaG9jb2xhdGVNYXRlcmlhbFR5cGUge1xyXG4gIE1pbGtDaG9jb2xhdGVNYXRlcmlhbCA9IFwiTWlsa0Nob2NvbGF0ZU1hdGVyaWFsXCIsXHJcbiAgRGFya0Nob2NvbGF0ZU1hdGVyaWFsID0gXCJEYXJrQ2hvY29sYXRlTWF0ZXJpYWxcIixcclxuICBXaGl0ZUNob2NvbGF0ZU1hdGVyaWFsID0gXCJXaGl0ZUNob2NvbGF0ZU1hdGVyaWFsXCIsXHJcbiAgUnVieUNob2NvbGF0ZU1hdGVyaWFsID0gXCJSdWJ5Q2hvY29sYXRlTWF0ZXJpYWxcIixcclxufVxyXG5cclxuZW51bSBQcm9kdWN0aW9uU3RhdGUge1xyXG4gIFJlYWR5Rm9yUHJvZHVjdGlvbiA9IFwiUmVhZHlGb3JQcm9kdWN0aW9uXCIsXHJcbiAgTm90UmVhZHlGb3JQcm9kdWN0aW9uID0gXCJOb3RSZWFkeUZvclByb2R1Y3Rpb25cIixcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENob2NvbGF0ZU1hdGVyaWFsIHtcclxuICBpZDogbnVtYmVyO1xyXG4gIGNob2NvbGF0ZU1hdGVyaWFsVHlwZTogQ2hvY29sYXRlTWF0ZXJpYWxUeXBlO1xyXG4gIHByb2R1Y3Rpb25TdGF0ZTogUHJvZHVjdGlvblN0YXRlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihjaG9jb2xhdGVNYXRlcmlhbFR5cGU6IENob2NvbGF0ZU1hdGVyaWFsVHlwZSA9IENob2NvbGF0ZU1hdGVyaWFsVHlwZS5EYXJrQ2hvY29sYXRlTWF0ZXJpYWwpIHtcclxuICAgIHRoaXMuaWQgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmNob2NvbGF0ZU1hdGVyaWFsVHlwZSA9IGNob2NvbGF0ZU1hdGVyaWFsVHlwZTtcclxuICAgIHRoaXMucHJvZHVjdGlvblN0YXRlID0gUHJvZHVjdGlvblN0YXRlLk5vdFJlYWR5Rm9yUHJvZHVjdGlvbjtcclxuICB9XHJcblxyXG4gIHNldElkKGlkOiBudW1iZXIpIHtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICB9XHJcblxyXG4gIGdldElkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaWQ7XHJcbiAgfVxyXG5cclxuICBzZXRNYXRlcmlhbFR5cGVUb01pbGtDaG9jb2xhdGVNYXRlcmlhbCgpIHtcclxuICAgIHRoaXMuY2hvY29sYXRlTWF0ZXJpYWxUeXBlID09IENob2NvbGF0ZU1hdGVyaWFsVHlwZS5NaWxrQ2hvY29sYXRlTWF0ZXJpYWw7XHJcbiAgfVxyXG4gIHNldE1hdGVyaWFsVHlwZVRvRGFya0Nob2NvbGF0ZU1hdGVyaWFsKCkge1xyXG4gICAgdGhpcy5jaG9jb2xhdGVNYXRlcmlhbFR5cGUgPT0gQ2hvY29sYXRlTWF0ZXJpYWxUeXBlLkRhcmtDaG9jb2xhdGVNYXRlcmlhbDtcclxuICB9XHJcblxyXG4gIHNldE1hdGVyaWFsVHlwZVRvV2hpdGVDaG9jb2xhdGVNYXRlcmlhbCgpIHtcclxuICAgIHRoaXMuY2hvY29sYXRlTWF0ZXJpYWxUeXBlID09IENob2NvbGF0ZU1hdGVyaWFsVHlwZS5XaGl0ZUNob2NvbGF0ZU1hdGVyaWFsO1xyXG4gIH1cclxuXHJcbiAgc2V0TWF0ZXJpYWxUeXBlVG9SdWJ5Q2hvY29sYXRlTWF0ZXJpYWwoKSB7XHJcbiAgICB0aGlzLmNob2NvbGF0ZU1hdGVyaWFsVHlwZSA9PSBDaG9jb2xhdGVNYXRlcmlhbFR5cGUuUnVieUNob2NvbGF0ZU1hdGVyaWFsO1xyXG4gIH1cclxuXHJcbiAgaXNNYXRlcmlhbFR5cGVNaWxrQ2hvY29sYXRlTWF0ZXJpYWwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jaG9jb2xhdGVNYXRlcmlhbFR5cGUgPT09IENob2NvbGF0ZU1hdGVyaWFsVHlwZS5NaWxrQ2hvY29sYXRlTWF0ZXJpYWw7XHJcbiAgfVxyXG5cclxuICBpc01hdGVyaWFsVHlwZURhcmtDaG9jb2xhdGVNYXRlcmlhbCgpIHtcclxuICAgIHJldHVybiB0aGlzLmNob2NvbGF0ZU1hdGVyaWFsVHlwZSA9PT0gQ2hvY29sYXRlTWF0ZXJpYWxUeXBlLkRhcmtDaG9jb2xhdGVNYXRlcmlhbDtcclxuICB9XHJcblxyXG4gIGlzTWF0ZXJpYWxUeXBlV2hpdGVDaG9jb2xhdGVNYXRlcmlhbCgpIHtcclxuICAgIHJldHVybiB0aGlzLmNob2NvbGF0ZU1hdGVyaWFsVHlwZSA9PT0gQ2hvY29sYXRlTWF0ZXJpYWxUeXBlLldoaXRlQ2hvY29sYXRlTWF0ZXJpYWw7XHJcbiAgfVxyXG5cclxuICBpc01hdGVyaWFsVHlwZVJ1YnlDaG9jb2xhdGVNYXRlcmlhbCgpIHtcclxuICAgIHJldHVybiB0aGlzLmNob2NvbGF0ZU1hdGVyaWFsVHlwZSA9PT0gQ2hvY29sYXRlTWF0ZXJpYWxUeXBlLlJ1YnlDaG9jb2xhdGVNYXRlcmlhbDtcclxuICB9XHJcblxyXG4gIHNldFByb2R1Y3Rpb25TdGF0ZVRvUmVhZHlGb3JQcm9kdWN0aW9uKCkge1xyXG4gICAgdGhpcy5wcm9kdWN0aW9uU3RhdGUgPSBQcm9kdWN0aW9uU3RhdGUuUmVhZHlGb3JQcm9kdWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgc2V0UHJvZHVjdGlvblN0YXRlVG9Ob3RSZWFkeUZvclByb2R1Y3Rpb24oKSB7XHJcbiAgICB0aGlzLnByb2R1Y3Rpb25TdGF0ZSA9IFByb2R1Y3Rpb25TdGF0ZS5Ob3RSZWFkeUZvclByb2R1Y3Rpb247XHJcbiAgfVxyXG5cclxuICBpc1Byb2R1Y3Rpb25TdGF0ZVJlYWR5Rm9yUHJvZHVjdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLnByb2R1Y3Rpb25TdGF0ZSA9PT0gUHJvZHVjdGlvblN0YXRlLlJlYWR5Rm9yUHJvZHVjdGlvbjtcclxuICB9XHJcblxyXG4gIGlzUHJvZHVjdGlvblN0YXRlTm90UmVhZHlGb3JQcm9kdWN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvZHVjdGlvblN0YXRlID09PSBQcm9kdWN0aW9uU3RhdGUuTm90UmVhZHlGb3JQcm9kdWN0aW9uO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDaG9jb2xhdGVQcm9kdWN0IH0gZnJvbSBcIi4vY2hvY29sYXRlLXByb2R1Y3RcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDaG9jb2xhdGVQcm9kdWN0TGlzdCB7XHJcbiAgY2hvY29sYXRlUHJvZHVjdExpc3Q6IENob2NvbGF0ZVByb2R1Y3RbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoY2hvY29sYXRlUHJvZHVjdExpc3QgPSBuZXcgQXJyYXkoKSkge1xyXG4gICAgdGhpcy5jaG9jb2xhdGVQcm9kdWN0TGlzdCA9IGNob2NvbGF0ZVByb2R1Y3RMaXN0O1xyXG4gIH1cclxuXHJcbiAgYWRkUHJvZHVjdFRvTGlzdChuZXdDaG9jb2xhdGVQcm9kdWN0OiBDaG9jb2xhdGVQcm9kdWN0KSB7XHJcbiAgICB0aGlzLmNob2NvbGF0ZVByb2R1Y3RMaXN0LnB1c2gobmV3Q2hvY29sYXRlUHJvZHVjdCk7XHJcbiAgfVxyXG5cclxuICBnZXRQcm9kdWN0RnJvbUxpc3QoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jaG9jb2xhdGVQcm9kdWN0TGlzdC5wb3AoKTtcclxuICB9XHJcblxyXG4gIGdldFByb2R1Y3RMaXN0TGVuZ3RoKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hvY29sYXRlUHJvZHVjdExpc3QubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgaXNQcm9kdWN0TGlzdEVtcHR5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0UHJvZHVjdExpc3RMZW5ndGgoKSA9PSAwO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlQWxsUHJvZHVjdHNGcm9tTGlzdCgpIHtcclxuICAgIHdoaWxlICghdGhpcy5pc1Byb2R1Y3RMaXN0RW1wdHkoKSkge1xyXG4gICAgICB0aGlzLmdldFByb2R1Y3RGcm9tTGlzdCgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZW51bSBDaG9jb2xhdGVQcm9kdWN0VHlwZSB7XHJcbiAgTWlsa0Nob2NvbGF0ZSA9IFwiTWlsa0Nob2NvbGF0ZVwiLFxyXG4gIERhcmtDaG9jb2xhdGUgPSBcIkRhcmtDaG9jb2xhdGVcIixcclxuICBXaGl0ZUNob2NvbGF0ZSA9IFwiV2hpdGVDaG9jb2xhdGVcIixcclxuICBSdWJ5Q2hvY29sYXRlID0gXCJSdWJ5Q2hvY29sYXRlXCIsXHJcbn1cclxuXHJcbmVudW0gUHJvZHVjdFBhY2tlZFN0YXRlIHtcclxuICBQYWNrZWQgPSBcIlBhY2tlZFwiLFxyXG4gIE5vdFBhY2tlZCA9IFwiTm90UGFja2VkXCIsXHJcbn1cclxuZXhwb3J0IGNsYXNzIENob2NvbGF0ZVByb2R1Y3Qge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgY2hvY29sYXRlUHJvZHVjdFR5cGU6IENob2NvbGF0ZVByb2R1Y3RUeXBlO1xyXG4gIHBhY2tlZFN0YXRlOiBQcm9kdWN0UGFja2VkU3RhdGU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNob2NvbGF0ZVByb2R1Y3RUeXBlOiBDaG9jb2xhdGVQcm9kdWN0VHlwZSA9IENob2NvbGF0ZVByb2R1Y3RUeXBlLkRhcmtDaG9jb2xhdGUpIHtcclxuICAgIHRoaXMuaWQgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmNob2NvbGF0ZVByb2R1Y3RUeXBlID0gY2hvY29sYXRlUHJvZHVjdFR5cGU7XHJcbiAgICB0aGlzLnBhY2tlZFN0YXRlID0gUHJvZHVjdFBhY2tlZFN0YXRlLk5vdFBhY2tlZDtcclxuICB9XHJcblxyXG4gIHNldElkKGlkOiBudW1iZXIpIHtcclxuICAgIHRoaXMuaWQ7XHJcbiAgfVxyXG5cclxuICBnZXRJZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmlkO1xyXG4gIH1cclxuXHJcbiAgc2V0UHJvZHVjdFR5cGVUb01pbGtDaG9jb2xhdGUoKSB7XHJcbiAgICB0aGlzLmNob2NvbGF0ZVByb2R1Y3RUeXBlID0gQ2hvY29sYXRlUHJvZHVjdFR5cGUuTWlsa0Nob2NvbGF0ZTtcclxuICB9XHJcblxyXG4gIHNldFByb2R1Y3RUeXBlVG9EYXJrQ2hvY29sYXRlKCkge1xyXG4gICAgdGhpcy5jaG9jb2xhdGVQcm9kdWN0VHlwZSA9IENob2NvbGF0ZVByb2R1Y3RUeXBlLkRhcmtDaG9jb2xhdGU7XHJcbiAgfVxyXG5cclxuICBzZXRQcm9kdWN0VHlwZVRvV2hpdGVDaG9jb2xhdGUoKSB7XHJcbiAgICB0aGlzLmNob2NvbGF0ZVByb2R1Y3RUeXBlID0gQ2hvY29sYXRlUHJvZHVjdFR5cGUuV2hpdGVDaG9jb2xhdGU7XHJcbiAgfVxyXG5cclxuICBzZXRQcm9kdWN0VHlwZVRvUnVieUNob2NvbGF0ZSgpIHtcclxuICAgIHRoaXMuY2hvY29sYXRlUHJvZHVjdFR5cGUgPSBDaG9jb2xhdGVQcm9kdWN0VHlwZS5SdWJ5Q2hvY29sYXRlO1xyXG4gIH1cclxuXHJcbiAgaXNDaG9jb2xhdGVQcm9kdWN0VHlwZU1pbGtDaG9jb2xhdGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jaG9jb2xhdGVQcm9kdWN0VHlwZSA9PT0gQ2hvY29sYXRlUHJvZHVjdFR5cGUuTWlsa0Nob2NvbGF0ZTtcclxuICB9XHJcblxyXG4gIGlzQ2hvY29sYXRlUHJvZHVjdFR5cGVEYXJrQ2hvY29sYXRlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hvY29sYXRlUHJvZHVjdFR5cGUgPT09IENob2NvbGF0ZVByb2R1Y3RUeXBlLkRhcmtDaG9jb2xhdGU7XHJcbiAgfVxyXG5cclxuICBpc0Nob2NvbGF0ZVByb2R1Y3RUeXBlV2hpdGVDaG9jb2xhdGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jaG9jb2xhdGVQcm9kdWN0VHlwZSA9PT0gQ2hvY29sYXRlUHJvZHVjdFR5cGUuV2hpdGVDaG9jb2xhdGU7XHJcbiAgfVxyXG5cclxuICBpc0Nob2NvbGF0ZVByb2R1Y3RUeXBlUnVieUNob2NvbGF0ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmNob2NvbGF0ZVByb2R1Y3RUeXBlID09PSBDaG9jb2xhdGVQcm9kdWN0VHlwZS5SdWJ5Q2hvY29sYXRlO1xyXG4gIH1cclxuXHJcbiAgc2V0UGFja2VkU3RhdGVUb1BhY2tlZCgpIHtcclxuICAgIHRoaXMucGFja2VkU3RhdGUgPSBQcm9kdWN0UGFja2VkU3RhdGUuUGFja2VkO1xyXG4gIH1cclxuXHJcbiAgc2V0UGFja2VkU3RhdGVUb05vdFBhY2tlKCkge1xyXG4gICAgdGhpcy5wYWNrZWRTdGF0ZSA9IFByb2R1Y3RQYWNrZWRTdGF0ZS5Ob3RQYWNrZWQ7XHJcbiAgfVxyXG5cclxuICBpc1BhY2tlZFN0YXRlUGFja2VkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucGFja2VkU3RhdGUgPT09IFByb2R1Y3RQYWNrZWRTdGF0ZS5QYWNrZWQ7XHJcbiAgfVxyXG5cclxuICBpc1BhY2tlZFN0YXRlTm90UGFja2VkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucGFja2VkU3RhdGUgPT09IFByb2R1Y3RQYWNrZWRTdGF0ZS5Ob3RQYWNrZWQ7XHJcbiAgfVxyXG5cclxuICBwYWNrSXQoKSB7XHJcbiAgICB0aGlzLnNldFBhY2tlZFN0YXRlVG9QYWNrZWQoKTtcclxuICB9XHJcblxyXG4gIHVucGFja0l0KCkge1xyXG4gICAgdGhpcy5zZXRQYWNrZWRTdGF0ZVRvTm90UGFja2UoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRW1wbG95ZWUgfSBmcm9tIFwiLi4vLi4vcGVvcGxlL2VtcGxveWVlL2VtcGxveWVlXCI7XHJcbmltcG9ydCB7IENob2NvbGF0ZVByb2R1Y3RMaXN0IH0gZnJvbSBcIi4uLy4uL2Nob2NvbGF0ZS1wcm9kdWN0cy9jaG9jb2xhdGUtcHJvZHVjdC1saXN0XCI7XHJcbmltcG9ydCB7IENob2NvbGF0ZU1hdGVyaWFsTGlzdCB9IGZyb20gXCIuLi8uLi9jaG9jb2xhdGUtbWF0ZXJpYWxzL2Nob2NvbGF0ZS1tYXRlcmlhbC1saXN0XCI7XHJcbmltcG9ydCB7IENob2NvbGF0ZU1hdGVyaWFsIH0gZnJvbSBcIi4uLy4uL2Nob2NvbGF0ZS1tYXRlcmlhbHMvY2hvY29sYXRlLW1hdGVyaWFsXCI7XHJcbmltcG9ydCB7IENob2NvbGF0ZVByb2R1Y3QgfSBmcm9tIFwiLi4vLi4vY2hvY29sYXRlLXByb2R1Y3RzL2Nob2NvbGF0ZS1wcm9kdWN0XCI7XHJcblxyXG5lbnVtIFBhbGxldEphY2tTdGF0ZSB7XHJcbiAgQXZhaWJsZSA9IFwiQXZhaWJsZVwiLFxyXG4gIEJyb2tlbiA9IFwiQnJva2VuXCIsXHJcbiAgSW5SZXBhaXIgPSBcIkluUmVwYWlyXCIsXHJcbiAgSXNCZWluZ0xvYWRlZCA9IFwiSXNCZWluZ0xvYWRlZFwiLFxyXG4gIElzQmVpbmdVbmxvYWRlZCA9IFwiSXNCZWluZ1VubG9hZGVkXCIsXHJcbn1cclxuXHJcbmVudW0gUGFsbGV0SmFja0NhcmdvV29ya1N0YXRlIHtcclxuICBDaG9jb2xhdGVNYXRlcmlhbExvYWRpbmcgPSBcIkNob2NvbGF0ZU1hdGVyaWFsTG9hZGluZ1wiLFxyXG4gIENob2NvbGF0ZU1hdGVyaWFsVW5sb2FkaW5nID0gXCJDaG9jb2xhdGVNYXRlcmlhbFVubG9hZGluZ1wiLFxyXG4gIENob2NvbGF0ZVByb2R1Y3RMb2FkaW5nID0gXCJDaG9jb2xhdGVQcm9kdWN0TG9hZGluZ1wiLFxyXG4gIENob2NvbGF0ZVByb2R1Y3RVbmxvYWRpbmcgPSBcIkNob2NvbGF0ZVByb2R1Y3RVbmxvYWRpbmdcIixcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhbGxldEphY2sge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgZHJpdmVyOiBFbXBsb3llZTtcclxuICBtYXRlcmlhbENhcmdvOiBDaG9jb2xhdGVNYXRlcmlhbExpc3Q7XHJcbiAgcHJvZHVjdENhcmdvOiBDaG9jb2xhdGVQcm9kdWN0TGlzdDtcclxuICBjYXJnb01heENhcGFjaXR5OiBudW1iZXI7XHJcbiAgc3RhdGU6IFBhbGxldEphY2tTdGF0ZTtcclxuICBjYXJnb1dvcmtTdGF0ZTogUGFsbGV0SmFja0NhcmdvV29ya1N0YXRlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihkcml2ZXI6IEVtcGxveWVlLCBjYXJnb01heENhcGFjaXR5OiBudW1iZXIgPSA0MDApIHtcclxuICAgIGlkOiB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmRyaXZlciA9IGRyaXZlcjtcclxuICAgIHRoaXMuY2FyZ29NYXhDYXBhY2l0eSA9IGNhcmdvTWF4Q2FwYWNpdHk7XHJcbiAgICB0aGlzLm1hdGVyaWFsQ2FyZ28gPSBuZXcgQ2hvY29sYXRlTWF0ZXJpYWxMaXN0KCk7XHJcbiAgICB0aGlzLnByb2R1Y3RDYXJnbyA9IG5ldyBDaG9jb2xhdGVQcm9kdWN0TGlzdCgpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IFBhbGxldEphY2tTdGF0ZS5BdmFpYmxlO1xyXG4gICAgdGhpcy5jYXJnb1dvcmtTdGF0ZSA9IFBhbGxldEphY2tDYXJnb1dvcmtTdGF0ZS5DaG9jb2xhdGVNYXRlcmlhbExvYWRpbmc7XHJcbiAgfVxyXG5cclxuICBzZXRJZChpZDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgfVxyXG5cclxuICBnZXRJZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmlkO1xyXG4gIH1cclxuXHJcbiAgc2V0RHJpdmVyKGRyaXZlcjogRW1wbG95ZWUpIHtcclxuICAgIHRoaXMuZHJpdmVyID0gZHJpdmVyO1xyXG4gIH1cclxuXHJcbiAgc2V0Q2FyZ29NYXhDYXBhY2l0eShuZXdDYXJnb01heENhcGFjaXR5OiBudW1iZXIpIHtcclxuICAgIHRoaXMuY2FyZ29NYXhDYXBhY2l0eSA9IG5ld0NhcmdvTWF4Q2FwYWNpdHk7XHJcbiAgfVxyXG5cclxuICBzZXRTdGF0ZVRvQXZhaWJsZSgpIHtcclxuICAgIHRoaXMuc3RhdGUgPSBQYWxsZXRKYWNrU3RhdGUuQXZhaWJsZTtcclxuICB9XHJcblxyXG4gIHNldFN0YXRlVG9Ccm9rZW4oKSB7XHJcbiAgICB0aGlzLnN0YXRlID0gUGFsbGV0SmFja1N0YXRlLkJyb2tlbjtcclxuICB9XHJcblxyXG4gIHNldFN0YXRlVG9JblJlcGFpcigpIHtcclxuICAgIHRoaXMuc3RhdGUgPSBQYWxsZXRKYWNrU3RhdGUuSW5SZXBhaXI7XHJcbiAgfVxyXG5cclxuICBzZXRTdGF0ZVRvSXNCZWluZ0xvYWRlZCgpIHtcclxuICAgIHRoaXMuc3RhdGUgPSBQYWxsZXRKYWNrU3RhdGUuSXNCZWluZ0xvYWRlZDtcclxuICB9XHJcblxyXG4gIHNldFN0YXRlVG9Jc0JlaW5nVW5sb2FkZWQoKSB7XHJcbiAgICB0aGlzLnN0YXRlID0gUGFsbGV0SmFja1N0YXRlLklzQmVpbmdVbmxvYWRlZDtcclxuICB9XHJcblxyXG4gIGlzU3RhdGVBdmFpYmxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUgPT09IFBhbGxldEphY2tTdGF0ZS5BdmFpYmxlO1xyXG4gIH1cclxuXHJcbiAgaXNTdGF0ZUJyb2tlbigpIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlID09PSBQYWxsZXRKYWNrU3RhdGUuQnJva2VuO1xyXG4gIH1cclxuXHJcbiAgaXNTdGF0ZUluUmVwYWlyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUgPT09IFBhbGxldEphY2tTdGF0ZS5JblJlcGFpcjtcclxuICB9XHJcblxyXG4gIGlzU3RhdGVJc0JlaW5nTG9hZGVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUgPT09IFBhbGxldEphY2tTdGF0ZS5Jc0JlaW5nTG9hZGVkO1xyXG4gIH1cclxuXHJcbiAgaXNTdGF0ZUlzQmVpbmdVbmxvYWRlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlID09PSBQYWxsZXRKYWNrU3RhdGUuSXNCZWluZ1VubG9hZGVkO1xyXG4gIH1cclxuXHJcbiAgc2V0Q2FyZ29TdGF0ZVRvQ2hvY29sYXRlTWF0ZXJpYWxMb2FkaW5nKCkge1xyXG4gICAgdGhpcy5jYXJnb1dvcmtTdGF0ZSA9IFBhbGxldEphY2tDYXJnb1dvcmtTdGF0ZS5DaG9jb2xhdGVNYXRlcmlhbExvYWRpbmc7XHJcbiAgfVxyXG5cclxuICBzZXRDYXJnb1N0YXRlVG9DaG9jb2xhdGVNYXRlcmlhbFVuTG9hZGluZygpIHtcclxuICAgIHRoaXMuY2FyZ29Xb3JrU3RhdGUgPSBQYWxsZXRKYWNrQ2FyZ29Xb3JrU3RhdGUuQ2hvY29sYXRlTWF0ZXJpYWxVbmxvYWRpbmc7XHJcbiAgfVxyXG5cclxuICBzZXRDYXJnb1N0YXRlVG9DaG9jb2xhdGVQcm9kdWN0TG9hZGluZygpIHtcclxuICAgIHRoaXMuY2FyZ29Xb3JrU3RhdGUgPSBQYWxsZXRKYWNrQ2FyZ29Xb3JrU3RhdGUuQ2hvY29sYXRlUHJvZHVjdExvYWRpbmc7XHJcbiAgfVxyXG5cclxuICBzZXRDYXJnb1N0YXRlVG9DaG9jb2xhdGVQcm9kdWN0VW5sb2FkaW5nKCkge1xyXG4gICAgdGhpcy5jYXJnb1dvcmtTdGF0ZSA9IFBhbGxldEphY2tDYXJnb1dvcmtTdGF0ZS5DaG9jb2xhdGVQcm9kdWN0VW5sb2FkaW5nO1xyXG4gIH1cclxuXHJcbiAgaXNDYXJnb1N0YXRlQ2hvY29sYXRlTWF0ZXJpYWxMb2FkaW5nKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2FyZ29Xb3JrU3RhdGUgPT09IFBhbGxldEphY2tDYXJnb1dvcmtTdGF0ZS5DaG9jb2xhdGVNYXRlcmlhbExvYWRpbmc7XHJcbiAgfVxyXG5cclxuICBpc0NhcmdvU3RhdGVDaG9jb2xhdGVNYXRlcmlhbFVubG9hZGluZygpIHtcclxuICAgIHJldHVybiB0aGlzLmNhcmdvV29ya1N0YXRlID09PSBQYWxsZXRKYWNrQ2FyZ29Xb3JrU3RhdGUuQ2hvY29sYXRlTWF0ZXJpYWxVbmxvYWRpbmc7XHJcbiAgfVxyXG5cclxuICBpc0NhcmdvU3RhdGVDaG9jb2xhdGVQcm9kdWN0TG9hZGluZygpIHtcclxuICAgIHJldHVybiB0aGlzLmNhcmdvV29ya1N0YXRlID09PSBQYWxsZXRKYWNrQ2FyZ29Xb3JrU3RhdGUuQ2hvY29sYXRlTWF0ZXJpYWxVbmxvYWRpbmc7XHJcbiAgfVxyXG5cclxuICBpc0NhcmdvU3RhdGVDaG9jb2xhdGVQcm9kdWN0VW5sb2FkaW5nKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2FyZ29Xb3JrU3RhdGUgPT09IFBhbGxldEphY2tDYXJnb1dvcmtTdGF0ZS5DaG9jb2xhdGVQcm9kdWN0VW5sb2FkaW5nO1xyXG4gIH1cclxuXHJcbiAgaXNNYXRlcmlhbExvYWRpbmcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc0NhcmdvU3RhdGVDaG9jb2xhdGVNYXRlcmlhbExvYWRpbmcoKSAmJiB0aGlzLmlzU3RhdGVJc0JlaW5nTG9hZGVkKCk7XHJcbiAgfVxyXG5cclxuICBpc01hdGVyaWFsVW5sb2FkaW5nKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNDYXJnb1N0YXRlQ2hvY29sYXRlTWF0ZXJpYWxVbmxvYWRpbmcoKSAmJiB0aGlzLmlzU3RhdGVJc0JlaW5nVW5sb2FkZWQoKTtcclxuICB9XHJcblxyXG4gIGlzUHJvZHVjdExvYWRpbmcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc0NhcmdvU3RhdGVDaG9jb2xhdGVQcm9kdWN0TG9hZGluZygpICYmIHRoaXMuaXNTdGF0ZUlzQmVpbmdMb2FkZWQoKTtcclxuICB9XHJcblxyXG4gIGlzUHJvZHVjdFVubG9hZGluZygpIHtcclxuICAgIHJldHVybiB0aGlzLmlzQ2FyZ29TdGF0ZUNob2NvbGF0ZVByb2R1Y3RVbmxvYWRpbmcoKSAmJiB0aGlzLmlzU3RhdGVJc0JlaW5nVW5sb2FkZWQoKTtcclxuICB9XHJcblxyXG4gIGNhcmdvQ3VycmVudGx5T2NjdXBpZWRTcGFjZSgpIHtcclxuICAgIHJldHVybiB0aGlzLm1hdGVyaWFsQ2FyZ28uZ2V0TWF0ZXJpYWxMaXN0TGVuZ3RoKCkgKyB0aGlzLnByb2R1Y3RDYXJnby5nZXRQcm9kdWN0TGlzdExlbmd0aCgpO1xyXG4gIH1cclxuXHJcbiAgaXNUaGVyZUZyZWVTcGFjZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmNhcmdvQ3VycmVudGx5T2NjdXBpZWRTcGFjZSgpIDwgdGhpcy5jYXJnb01heENhcGFjaXR5O1xyXG4gIH1cclxuXHJcbiAgaXNDYXJnb0VtcHR5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2FyZ29DdXJyZW50bHlPY2N1cGllZFNwYWNlKCkgPT0gMDtcclxuICB9XHJcblxyXG4gIGlzTWF0ZXJpYWxDYXJnb0VtcHR5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMubWF0ZXJpYWxDYXJnby5nZXRNYXRlcmlhbExpc3RMZW5ndGgoKSA9PSAwO1xyXG4gIH1cclxuXHJcbiAgaXNQcm9kdWN0Q2FyZ29FbXB0eSgpIHtcclxuICAgIHJldHVybiB0aGlzLnByb2R1Y3RDYXJnby5nZXRQcm9kdWN0TGlzdExlbmd0aCgpID09IDA7XHJcbiAgfVxyXG5cclxuICBsb2FkT25lTWF0ZXJpYWxUb0NhcmdvKGNob2NvbGF0ZU1hdGVyaWFsOiBDaG9jb2xhdGVNYXRlcmlhbCkge1xyXG4gICAgaWYgKHRoaXMuaXNUaGVyZUZyZWVTcGFjZSgpKSB7XHJcbiAgICAgIHRoaXMubWF0ZXJpYWxDYXJnby5hZGRNYXRlcmlhbFRvTGlzdChjaG9jb2xhdGVNYXRlcmlhbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1bmxvYWRPbmVNYXRlcmlhbEZyb21DYXJnbygpIHtcclxuICAgIGlmICghdGhpcy5pc01hdGVyaWFsQ2FyZ29FbXB0eSgpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm1hdGVyaWFsQ2FyZ28uZ2V0TWF0ZXJpYWxGcm9tTGlzdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbG9hZE9uZVByb2R1Y3RUb0NhcmdvKGNob2NvbGF0ZVByb2R1Y3Q6IENob2NvbGF0ZVByb2R1Y3QpIHtcclxuICAgIGlmICh0aGlzLmlzVGhlcmVGcmVlU3BhY2UoKSkge1xyXG4gICAgICB0aGlzLnByb2R1Y3RDYXJnby5hZGRQcm9kdWN0VG9MaXN0KGNob2NvbGF0ZVByb2R1Y3QpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdW5sb2FkT25lUHJvZHVjdEZyb21DYXJnbygpIHtcclxuICAgIGlmICghdGhpcy5pc1Byb2R1Y3RDYXJnb0VtcHR5KCkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdENhcmdvLmdldFByb2R1Y3RGcm9tTGlzdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgd29ya1dpdGhDYXJnb09uY2UobmV3TWF0ZXJpYWw/OiBDaG9jb2xhdGVNYXRlcmlhbCwgbmV3UHJvZHVjdD86IENob2NvbGF0ZVByb2R1Y3QpIHtcclxuICAgIGlmICh0aGlzLmlzTWF0ZXJpYWxMb2FkaW5nKCkpIHtcclxuICAgICAgdGhpcy5sb2FkT25lTWF0ZXJpYWxUb0NhcmdvKG5ld01hdGVyaWFsKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5pc01hdGVyaWFsVW5sb2FkaW5nKCkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudW5sb2FkT25lTWF0ZXJpYWxGcm9tQ2FyZ28oKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5pc1Byb2R1Y3RMb2FkaW5nKCkpIHtcclxuICAgICAgdGhpcy5sb2FkT25lUHJvZHVjdFRvQ2FyZ28obmV3UHJvZHVjdCk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNQcm9kdWN0VW5sb2FkaW5nKCkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudW5sb2FkT25lUHJvZHVjdEZyb21DYXJnbygpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvKipcclxuICogIG5ha29uIGplbGEgcHJvaXp2b2RuamEgcGFyIHNla3VuZGkgYnJ6YVxyXG4gKiBwcm9kdWNlIHByb2R1Y3QgYnV0IHJlbW92ZSBtYXRlcmlhbCBmcm9tIGxpc3Qgb2YgbWF0ZXJpYWxzXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgUGVyc29uIH0gZnJvbSBcIi4uL3BlcnNvbi9wZXJzb25cIjtcclxuaW1wb3J0IHsgRmFjdG9yeVNlY3RvciB9IGZyb20gXCIuLi8uLi9jaG9jb2xhdGUtZmFjdG9yeS9jaG9jb2xhdGUtZmFjdG9yeVwiO1xyXG5pbXBvcnQgeyBDaG9jb2xhdGVQcm9kdWN0TGlzdCB9IGZyb20gXCIuLi8uLi9jaG9jb2xhdGUtcHJvZHVjdHMvY2hvY29sYXRlLXByb2R1Y3QtbGlzdFwiO1xyXG5pbXBvcnQgeyBDaG9jb2xhdGVNYXRlcmlhbCB9IGZyb20gXCIuLi8uLi9jaG9jb2xhdGUtbWF0ZXJpYWxzL2Nob2NvbGF0ZS1tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBDaG9jb2xhdGVQcm9kdWN0IH0gZnJvbSBcIi4uLy4uL2Nob2NvbGF0ZS1wcm9kdWN0cy9jaG9jb2xhdGUtcHJvZHVjdFwiO1xyXG5pbXBvcnQgeyBFbXBvbHllZXIgfSBmcm9tIFwiLi4vZW1wbG95ZWVyL2VtcGxveWVlclwiO1xyXG5cclxuZW51bSBFbXBsb3llZVdvcmtTdGF0ZSB7XHJcbiAgV29ya2luZyA9IFwiV29ya2luZ1wiLFxyXG4gIEx1bmNoQnJlYWsgPSBcIkxhdW5jaEJyZWFrXCIsXHJcbiAgTm90UHJlc2VudCA9IFwiTm90UHJlc2VudFwiLFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRW1wbG95ZWUgZXh0ZW5kcyBQZXJzb24ge1xyXG4gIGZhY3RvcnlFbXBsb3llZXI6IEVtcG9seWVlcjtcclxuICBmYWN0b3J5U2VjdG9yOiBGYWN0b3J5U2VjdG9yO1xyXG4gIHByb2R1Y2VkQ2hvY29sYXRlR29vZHM6IENob2NvbGF0ZVByb2R1Y3RMaXN0O1xyXG4gIHdvcmtTdGF0ZTogRW1wbG95ZWVXb3JrU3RhdGU7XHJcbiAgd29ya0VmaWNpZW5jeVJhdGluZzogbnVtYmVyO1xyXG4gIHN0b2xlbkNob2NvbGF0ZXM6IENob2NvbGF0ZVByb2R1Y3RMaXN0O1xyXG4gIHBheW1lbnQ6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nLCBmYWN0b3J5RW1wbG95ZWVyOiBFbXBvbHllZXIsIGRyaXZpbmdMaWNlbmNlOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgIHN1cGVyKG5hbWUsIGxhc3ROYW1lLCBkcml2aW5nTGljZW5jZSk7XHJcbiAgICB0aGlzLmZhY3RvcnlFbXBsb3llZXIgPSBmYWN0b3J5RW1wbG95ZWVyO1xyXG4gICAgdGhpcy5wcm9kdWNlZENob2NvbGF0ZUdvb2RzID0gbmV3IENob2NvbGF0ZVByb2R1Y3RMaXN0KCk7XHJcbiAgICB0aGlzLndvcmtTdGF0ZSA9IEVtcGxveWVlV29ya1N0YXRlLk5vdFByZXNlbnQ7XHJcbiAgICB0aGlzLndvcmtFZmljaWVuY3lSYXRpbmcgPSAxMDtcclxuICAgIHRoaXMuc3RvbGVuQ2hvY29sYXRlcyA9IG5ldyBDaG9jb2xhdGVQcm9kdWN0TGlzdCgpO1xyXG4gICAgdGhpcy5wYXltZW50ID0gMDtcclxuICB9XHJcblxyXG4gIHNldFdvcmtTdGF0ZVRvV29ya2luZygpIHtcclxuICAgIHRoaXMud29ya1N0YXRlID0gRW1wbG95ZWVXb3JrU3RhdGUuV29ya2luZztcclxuICB9XHJcblxyXG4gIHNldFdvcmtTdGF0ZVRvTGF1bmNoQnJlYWsoKSB7XHJcbiAgICB0aGlzLndvcmtTdGF0ZSA9IEVtcGxveWVlV29ya1N0YXRlLkx1bmNoQnJlYWs7XHJcbiAgfVxyXG5cclxuICBzZXRXb3JrU3RhdGVUb05vdFByZXNlbnQoKSB7XHJcbiAgICB0aGlzLndvcmtTdGF0ZSA9IEVtcGxveWVlV29ya1N0YXRlLk5vdFByZXNlbnQ7XHJcbiAgfVxyXG5cclxuICBpc1dvcmtTdGF0ZVdvcmtpbmcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy53b3JrU3RhdGUgPT09IEVtcGxveWVlV29ya1N0YXRlLldvcmtpbmc7XHJcbiAgfVxyXG5cclxuICBpc1dvcmtTdGF0ZUxhdW5jaEJyZWFrKCkge1xyXG4gICAgcmV0dXJuIHRoaXMud29ya1N0YXRlID09PSBFbXBsb3llZVdvcmtTdGF0ZS5MdW5jaEJyZWFrO1xyXG4gIH1cclxuXHJcbiAgaXNXb3JrU3RhdGVOb3RQcmVzZW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMud29ya1N0YXRlID09PSBFbXBsb3llZVdvcmtTdGF0ZS5Ob3RQcmVzZW50O1xyXG4gIH1cclxuXHJcbiAgcHJvZHVjZUNob2NvbGF0ZVByb2R1Y3QoY2hvY29sYXRlTWF0ZXJpYWw6IENob2NvbGF0ZU1hdGVyaWFsKSB7XHJcbiAgICBsZXQgcHJvZHVjZWRDaG9jb2xhdGVQcm9kdWN0ID0gbmV3IENob2NvbGF0ZVByb2R1Y3QoKTtcclxuICAgIGlmIChjaG9jb2xhdGVNYXRlcmlhbC5pc01hdGVyaWFsVHlwZURhcmtDaG9jb2xhdGVNYXRlcmlhbCgpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnByb2R1Y2VEYXJrQ2hvY29sYXRlUHJvZHVjdCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNob2NvbGF0ZU1hdGVyaWFsLmlzTWF0ZXJpYWxUeXBlV2hpdGVDaG9jb2xhdGVNYXRlcmlhbCgpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnByb2R1Y2VXaGl0ZUNob2NvbGF0ZVByb2R1Y3QoKTtcclxuICAgIH1cclxuICAgIGlmIChjaG9jb2xhdGVNYXRlcmlhbC5pc01hdGVyaWFsVHlwZU1pbGtDaG9jb2xhdGVNYXRlcmlhbCgpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnByb2R1Y2VNaWxrQ2hvY29sYXRlUHJvZHVjdCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNob2NvbGF0ZU1hdGVyaWFsLmlzTWF0ZXJpYWxUeXBlUnVieUNob2NvbGF0ZU1hdGVyaWFsKCkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucHJvZHVjZVJ1YnlDaG9jb2xhdGVQcm9kdWN0KCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKHByb2R1Y2VkQ2hvY29sYXRlUHJvZHVjdCA9IG51bGwpO1xyXG4gIH1cclxuXHJcbiAgcHJvZHVjZURhcmtDaG9jb2xhdGVQcm9kdWN0KCkge1xyXG4gICAgbGV0IG5ld0Nob2NvbGF0ZVByb2R1Y3QgPSBuZXcgQ2hvY29sYXRlUHJvZHVjdCgpO1xyXG4gICAgcmV0dXJuIG5ld0Nob2NvbGF0ZVByb2R1Y3Quc2V0UHJvZHVjdFR5cGVUb0RhcmtDaG9jb2xhdGUoKTtcclxuICB9XHJcblxyXG4gIHByb2R1Y2VXaGl0ZUNob2NvbGF0ZVByb2R1Y3QoKSB7XHJcbiAgICBsZXQgbmV3Q2hvY29sYXRlUHJvZHVjdCA9IG5ldyBDaG9jb2xhdGVQcm9kdWN0KCk7XHJcbiAgICByZXR1cm4gbmV3Q2hvY29sYXRlUHJvZHVjdC5zZXRQcm9kdWN0VHlwZVRvV2hpdGVDaG9jb2xhdGUoKTtcclxuICB9XHJcblxyXG4gIHByb2R1Y2VNaWxrQ2hvY29sYXRlUHJvZHVjdCgpIHtcclxuICAgIGxldCBuZXdDaG9jb2xhdGVQcm9kdWN0ID0gbmV3IENob2NvbGF0ZVByb2R1Y3QoKTtcclxuICAgIHJldHVybiBuZXdDaG9jb2xhdGVQcm9kdWN0LnNldFByb2R1Y3RUeXBlVG9NaWxrQ2hvY29sYXRlKCk7XHJcbiAgfVxyXG5cclxuICBwcm9kdWNlUnVieUNob2NvbGF0ZVByb2R1Y3QoKSB7XHJcbiAgICBsZXQgbmV3Q2hvY29sYXRlUHJvZHVjdCA9IG5ldyBDaG9jb2xhdGVQcm9kdWN0KCk7XHJcbiAgICByZXR1cm4gbmV3Q2hvY29sYXRlUHJvZHVjdC5zZXRQcm9kdWN0VHlwZVRvUnVieUNob2NvbGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgcGFja0Nob2NvbGF0ZVByb2R1Y3QoY2hvY29sYXRlUHJvZHVjdFRvUGFjazogQ2hvY29sYXRlUHJvZHVjdCkge1xyXG4gICAgaWYgKHRoaXMuaXNXb3JrU3RhdGVXb3JraW5nKCkpIHtcclxuICAgICAgY2hvY29sYXRlUHJvZHVjdFRvUGFjay5wYWNrSXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVucGFja0Nob2NvbGF0ZVByb2R1Y3QoY2hvY29sYXRlUHJvZHVjdFRvVW5wYWNrOiBDaG9jb2xhdGVQcm9kdWN0KSB7XHJcbiAgICBpZiAodGhpcy5pc1dvcmtTdGF0ZVdvcmtpbmcoKSkge1xyXG4gICAgICBjaG9jb2xhdGVQcm9kdWN0VG9VbnBhY2sudW5wYWNrSXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFBheW1lbnQocGF5bWVudDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnBheW1lbnQgKz0gcGF5bWVudDtcclxuICB9XHJcblxyXG4gIHJlZHVjZUZyb21QYXltZW50KHByaWNlOiBudW1iZXIpIHtcclxuICAgIHRoaXMucGF5bWVudCAtPSBwcmljZTtcclxuICB9XHJcblxyXG4gIHBheUZvclN0b2xlblByb2R1Y3RzVGhhdEVtcGxveWVlRm91bmRBYm91dChudW1iZXJPZlN0b2xlbkdvb2RzOiBudW1iZXIsIHByaWNlT2ZPbmVTdG9sZW5Qcm9kdWN0OiBudW1iZXIpIHtcclxuICAgIGxldCBwcmljZVRvUGF5ID0gbnVtYmVyT2ZTdG9sZW5Hb29kcyAqIHByaWNlT2ZPbmVTdG9sZW5Qcm9kdWN0O1xyXG4gICAgdGhpcy5yZWR1Y2VGcm9tUGF5bWVudChwcmljZVRvUGF5KTtcclxuICAgIHJldHVybiBwcmljZVRvUGF5O1xyXG4gIH1cclxufVxyXG4iLCIvKipcclxuICogc3RvIHZpc2UgdnJlbWVuYSBwcm9sYXppIHBvc3RhamUgdW1vcmFuXHJcbiAqL1xyXG5pbXBvcnQgeyBQZXJzb24gfSBmcm9tIFwiLi4vcGVyc29uL3BlcnNvblwiO1xyXG5pbXBvcnQgeyBFbXBsb3llZSB9IGZyb20gXCIuLi9lbXBsb3llZS9lbXBsb3llZVwiO1xyXG5cclxuZXhwb3J0IGVudW0gRW1wbG95ZWVyU3RhdGUge1xyXG4gIFdvcmtpbmcgPSBcIldvcmtpbmdcIixcclxuICBMdW5jaEJyZWFrID0gXCJMYXVuY2hCcmVha1wiLFxyXG4gIE5vdFByZXNlbnQgPSBcIk5vdFByZXNlbnRcIixcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRW1wbG95ZWVyV29ya1N0YXRlIHtcclxuICBNYXhpbXVtV29ya0RlZGljYXRpb25UaXJlbGVzcyA9IFwiVGlyZWxlc3NcIiwgLy8xMDAlXHJcbiAgTWVkaXVtV29ya0RlZGljYXRpb25GZWVsaW5nVGlyZWQgPSBcIkZlZWxpbmdUaXJlZFwiLCAvLzUwJVxyXG4gIExvd1dvcmtEZWRpY2F0aW9uVGlyZWQgPSBcIlRpcmVkXCIsIC8vMjUlXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEVtcGxveWVlck1vb2RTdGF0ZSB7XHJcbiAgRXhlbGVudCA9IFwiRXhlbGVudFwiLCAvLzAlXHJcbiAgVmVyeUdvb2QgPSBcIlZlcnlHb29kXCIsIC8vMjUlXHJcbiAgR29vZCA9IFwiR29vZFwiLCAvLzUwJVxyXG4gIFN0cmVzc2VkID0gXCJTdHJlc3NlZFwiLCAvLzc1JVxyXG4gIERldmFzdGF0ZWQgPSBcIkRldmFzdGF0ZWRcIiwgLy8xMDAlXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFbXBvbHllZXIgZXh0ZW5kcyBQZXJzb24ge1xyXG4gIGVtcGxveWVlclN0YXRlOiBFbXBsb3llZXJTdGF0ZTtcclxuICBlbXBsb3llZXJXb3JrU3RhdGU6IEVtcGxveWVlcldvcmtTdGF0ZTtcclxuICBlbXBsb3llZXJNb29kU3RhdGU6IEVtcGxveWVlck1vb2RTdGF0ZTtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nLCBkcml2aW5nTGljZW5jZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICBzdXBlcihuYW1lLCBsYXN0TmFtZSwgZHJpdmluZ0xpY2VuY2UpO1xyXG4gICAgdGhpcy5lbXBsb3llZXJTdGF0ZSA9IEVtcGxveWVlclN0YXRlLk5vdFByZXNlbnQ7XHJcbiAgICB0aGlzLmVtcGxveWVlcldvcmtTdGF0ZSA9IEVtcGxveWVlcldvcmtTdGF0ZS5NYXhpbXVtV29ya0RlZGljYXRpb25UaXJlbGVzcztcclxuICAgIHRoaXMuZW1wbG95ZWVyTW9vZFN0YXRlID0gRW1wbG95ZWVyTW9vZFN0YXRlLkV4ZWxlbnQ7XHJcbiAgfVxyXG5cclxuICBzZXRTdGF0ZVRvV29ya2luZygpIHtcclxuICAgIHRoaXMuZW1wbG95ZWVyU3RhdGUgPSBFbXBsb3llZXJTdGF0ZS5Xb3JraW5nO1xyXG4gIH1cclxuXHJcbiAgc2V0U3RhdGVUb0xhdW5jaEJyZWFrKCkge1xyXG4gICAgdGhpcy5lbXBsb3llZXJTdGF0ZSA9IEVtcGxveWVlclN0YXRlLkx1bmNoQnJlYWs7XHJcbiAgfVxyXG5cclxuICBzZXRTdGF0ZVRvTm90UHJlc2VudCgpIHtcclxuICAgIHRoaXMuZW1wbG95ZWVyU3RhdGUgPSBFbXBsb3llZXJTdGF0ZS5Ob3RQcmVzZW50O1xyXG4gIH1cclxuXHJcbiAgaXNTdGF0ZVdvcmtpbmcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5lbXBsb3llZXJTdGF0ZSA9PT0gRW1wbG95ZWVyU3RhdGUuV29ya2luZztcclxuICB9XHJcblxyXG4gIGlzU3RhdGVMYXVuY2hCcmVhaygpIHtcclxuICAgIHJldHVybiB0aGlzLmVtcGxveWVlclN0YXRlID09PSBFbXBsb3llZXJTdGF0ZS5MdW5jaEJyZWFrO1xyXG4gIH1cclxuXHJcbiAgaXNTdGF0ZU5vdFByZXNlbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5lbXBsb3llZXJTdGF0ZSA9PT0gRW1wbG95ZWVyU3RhdGUuTm90UHJlc2VudDtcclxuICB9XHJcblxyXG4gIHNldFdvcmtTdGF0ZVRvTWF4aW11bVdvcmtEZWRpY2F0aW9uVGlyZWxlc3MoKSB7XHJcbiAgICB0aGlzLmVtcGxveWVlcldvcmtTdGF0ZSA9IEVtcGxveWVlcldvcmtTdGF0ZS5NYXhpbXVtV29ya0RlZGljYXRpb25UaXJlbGVzcztcclxuICB9XHJcblxyXG4gIHNldFdvcmtTdGF0ZVRvTWVkaXVtV29ya0RlZGljYXRpb25GZWVsaW5nVGlyZWQoKSB7XHJcbiAgICB0aGlzLmVtcGxveWVlcldvcmtTdGF0ZSA9IEVtcGxveWVlcldvcmtTdGF0ZS5NZWRpdW1Xb3JrRGVkaWNhdGlvbkZlZWxpbmdUaXJlZDtcclxuICB9XHJcblxyXG4gIHNldFdvcmtTdGF0ZVRvTG93V29ya0RlZGljYXRpb25UaXJlZCgpIHtcclxuICAgIHRoaXMuZW1wbG95ZWVyV29ya1N0YXRlID0gRW1wbG95ZWVyV29ya1N0YXRlLkxvd1dvcmtEZWRpY2F0aW9uVGlyZWQ7XHJcbiAgfVxyXG5cclxuICBpc1dvcmtTdGF0ZVRvTWF4aW11bVdvcmtEZWRpY2F0aW9uVGlyZWxlc3MoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5lbXBsb3llZXJXb3JrU3RhdGUgPT09IEVtcGxveWVlcldvcmtTdGF0ZS5NYXhpbXVtV29ya0RlZGljYXRpb25UaXJlbGVzcztcclxuICB9XHJcblxyXG4gIGlzV29ya1N0YXRlVG9NZWRpdW1Xb3JrRGVkaWNhdGlvbkZlZWxpbmdUaXJlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmVtcGxveWVlcldvcmtTdGF0ZSA9PT0gRW1wbG95ZWVyV29ya1N0YXRlLk1lZGl1bVdvcmtEZWRpY2F0aW9uRmVlbGluZ1RpcmVkO1xyXG4gIH1cclxuXHJcbiAgaXNXb3JrU3RhdGVUb0xvd1dvcmtEZWRpY2F0aW9uVGlyZWQoKSB7XHJcbiAgICB0aGlzLmVtcGxveWVlcldvcmtTdGF0ZSA9PT0gRW1wbG95ZWVyV29ya1N0YXRlLkxvd1dvcmtEZWRpY2F0aW9uVGlyZWQ7XHJcbiAgfVxyXG5cclxuICBzZXRNb29kU3RhdGVUb0V4ZWxlbnQoKSB7XHJcbiAgICB0aGlzLmVtcGxveWVlck1vb2RTdGF0ZSA9IEVtcGxveWVlck1vb2RTdGF0ZS5FeGVsZW50O1xyXG4gIH1cclxuXHJcbiAgc2V0TW9vZFN0YXRlVG9WZXJ5R29vZCgpIHtcclxuICAgIHRoaXMuZW1wbG95ZWVyTW9vZFN0YXRlID0gRW1wbG95ZWVyTW9vZFN0YXRlLlZlcnlHb29kO1xyXG4gIH1cclxuXHJcbiAgc2V0TW9vZFN0YXRlVG9Hb29kKCkge1xyXG4gICAgdGhpcy5lbXBsb3llZXJNb29kU3RhdGUgPSBFbXBsb3llZXJNb29kU3RhdGUuR29vZDtcclxuICB9XHJcblxyXG4gIHNldE1vb2RTdGF0ZVRvU3RyZXNzZWQoKSB7XHJcbiAgICB0aGlzLmVtcGxveWVlck1vb2RTdGF0ZSA9IEVtcGxveWVlck1vb2RTdGF0ZS5TdHJlc3NlZDtcclxuICB9XHJcblxyXG4gIHNldE1vb2RTdGF0ZVRvRGV2YXN0YXRlZCgpIHtcclxuICAgIHRoaXMuZW1wbG95ZWVyTW9vZFN0YXRlID0gRW1wbG95ZWVyTW9vZFN0YXRlLkRldmFzdGF0ZWQ7XHJcbiAgfVxyXG5cclxuICBpc01vb2RTdGF0ZVRvRXhlbGVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmVtcGxveWVlck1vb2RTdGF0ZSA9PT0gRW1wbG95ZWVyTW9vZFN0YXRlLkV4ZWxlbnQ7XHJcbiAgfVxyXG5cclxuICBpc01vb2RTdGF0ZVRvVmVyeUdvb2QoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5lbXBsb3llZXJNb29kU3RhdGUgPT09IEVtcGxveWVlck1vb2RTdGF0ZS5WZXJ5R29vZDtcclxuICB9XHJcblxyXG4gIGlzTW9vZFN0YXRlVG9Hb29kKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZW1wbG95ZWVyTW9vZFN0YXRlID09PSBFbXBsb3llZXJNb29kU3RhdGUuR29vZDtcclxuICB9XHJcblxyXG4gIGlzTW9vZFN0YXRlVG9TdHJlc3NlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmVtcGxveWVlck1vb2RTdGF0ZSA9PT0gRW1wbG95ZWVyTW9vZFN0YXRlLlN0cmVzc2VkO1xyXG4gIH1cclxuXHJcbiAgaXNNb29kU3RhdGVUb0RldmFzdGF0ZWQoKSB7XHJcbiAgICB0aGlzLmVtcGxveWVlck1vb2RTdGF0ZSA9IEVtcGxveWVlck1vb2RTdGF0ZS5EZXZhc3RhdGVkO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tGb3JTdG9sZW5Hb29kcyhlbXBsb3llZTogRW1wbG95ZWUpIHtcclxuICAgIGlmICh0aGlzLmlzU3RhdGVXb3JraW5nKCkpIHtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFBlcnNvbiB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbGFzdE5hbWU6IHN0cmluZztcclxuICBoYXNEcml2aW5nTGljZW5jZTogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nLCBkcml2aW5nTGljZW5jZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICB0aGlzLmlkID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMubGFzdE5hbWUgPSBsYXN0TmFtZTtcclxuICAgIHRoaXMuaGFzRHJpdmluZ0xpY2VuY2UgPSBkcml2aW5nTGljZW5jZTtcclxuICB9XHJcblxyXG4gIHNldElkKGlkOiBudW1iZXIpIHtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICB9XHJcblxyXG4gIGdldElkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaWQ7XHJcbiAgfVxyXG5cclxuICBzZXROYW1lKG5hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICB9XHJcblxyXG4gIGdldE5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gIH1cclxuXHJcbiAgc2V0TGFzdE5hbWUobGFzdE5hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5sYXN0TmFtZSA9IGxhc3ROYW1lO1xyXG4gIH1cclxuXHJcbiAgZ2V0TGFzdE5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5sYXN0TmFtZTtcclxuICB9XHJcblxyXG4gIHNldEhhc0RyaXZpbmdMaWNlbmNlKGhhc0RyaXZpbmdMaWNlbmNlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmhhc0RyaXZpbmdMaWNlbmNlID0gaGFzRHJpdmluZ0xpY2VuY2U7XHJcbiAgfVxyXG5cclxuICBnZXRIYXNEcml2aW5nTGljZW5jZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmhhc0RyaXZpbmdMaWNlbmNlO1xyXG4gIH1cclxufVxyXG4iLCIvKipcclxuICogQWRkOlxyXG4gKiAtUmVwYWlyIHRpbWUhXHJcbiAqIHJhbmRvbURlbGF5KDEwMDAsIDUwMDApXHJcbiAqXHJcbiAqXHJcbiAqIC0tLS0tLS0tLS0tLS0tXHJcbiAqXHJcbiAqXHJcbiAqXHJcbiAqIGRvayBzZSBwdW5pIHJhZG5payBqZSBuYSBwYXV6aVxyXG4gKlxyXG4gKlxyXG4gKlxyXG4gKiBjaGVjayBtdWx0aXBsZSBsb2FkaW5nIHVubG9hZGluZ1xyXG4gKi9cclxuaW1wb3J0IHsgRW1wbG95ZWUgfSBmcm9tIFwiLi4vLi4vcGVvcGxlL2VtcGxveWVlL2VtcGxveWVlXCI7XHJcbmltcG9ydCB7IFZlaGljbGUgfSBmcm9tIFwiLi4vdmVoaWNsZS92ZWhpY2xlXCI7XHJcbmltcG9ydCB7IENob2NvbGF0ZVByb2R1Y3RMaXN0IH0gZnJvbSBcIi4uLy4uL2Nob2NvbGF0ZS1wcm9kdWN0cy9jaG9jb2xhdGUtcHJvZHVjdC1saXN0XCI7XHJcbmltcG9ydCB7IENob2NvbGF0ZU1hdGVyaWFsTGlzdCB9IGZyb20gXCIuLi8uLi9jaG9jb2xhdGUtbWF0ZXJpYWxzL2Nob2NvbGF0ZS1tYXRlcmlhbC1saXN0XCI7XHJcbmltcG9ydCB7IENob2NvbGF0ZVByb2R1Y3QsIENob2NvbGF0ZVByb2R1Y3RUeXBlIH0gZnJvbSBcIi4uLy4uL2Nob2NvbGF0ZS1wcm9kdWN0cy9jaG9jb2xhdGUtcHJvZHVjdFwiO1xyXG5pbXBvcnQgeyBDaG9jb2xhdGVNYXRlcmlhbCwgQ2hvY29sYXRlTWF0ZXJpYWxUeXBlIH0gZnJvbSBcIi4uLy4uL2Nob2NvbGF0ZS1tYXRlcmlhbHMvY2hvY29sYXRlLW1hdGVyaWFsXCI7XHJcblxyXG5leHBvcnQgZW51bSBUcnVja1N0YXRlIHtcclxuICBBdmFpYmxlID0gXCJBdmFpYmxlXCIsXHJcbiAgSW5UcmFuc3BvcnQgPSBcIkluVHJhbnNwb3J0XCIsXHJcbiAgQnJva2VuID0gXCJCcm9rZW5cIixcclxuICBJblJlcGFpciA9IFwiSW5SZXBhaXJcIixcclxuICBJc0JlaW5nTG9hZGVkID0gXCJJc0JlaW5nTG9hZGVkXCIsXHJcbiAgSXNCZWluZ1VubG9hZGVkID0gXCJJc0JlaW5nVW5sb2FkZWRcIixcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVHJ1Y2tDYXJnb1dvcmtTdGF0ZSB7XHJcbiAgQ2hvY29sYXRlTWF0ZXJpYWxMb2FkaW5nID0gXCJDaG9jb2xhdGVNYXRlcmlhbExvYWRpbmdcIixcclxuICBDaG9jb2xhdGVNYXRlcmlhbFVubG9hZGluZyA9IFwiQ2hvY29sYXRlTWF0ZXJpYWxVbmxvYWRpbmdcIixcclxuICBDaG9jb2xhdGVQcm9kdWN0TG9hZGluZyA9IFwiQ2hvY29sYXRlUHJvZHVjdExvYWRpbmdcIixcclxuICBDaG9jb2xhdGVQcm9kdWN0VW5sb2FkaW5nID0gXCJDaG9jb2xhdGVQcm9kdWN0VW5sb2FkaW5nXCIsXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUcnVjayBleHRlbmRzIFZlaGljbGUge1xyXG4gIGJyYW5kOiBzdHJpbmc7XHJcbiAgZHJpdmVyOiBFbXBsb3llZTtcclxuICBkYXJrQ2hvY29sYXRlTWF0ZXJpYWxDYXJnbzogQ2hvY29sYXRlTWF0ZXJpYWxMaXN0O1xyXG4gIHdoaXRlQ2hvY29sYXRlTWF0ZXJpYWxDYXJnbzogQ2hvY29sYXRlTWF0ZXJpYWxMaXN0O1xyXG4gIG1pbGtDaG9jb2xhdGVNYXRlcmlhbENhcmdvOiBDaG9jb2xhdGVNYXRlcmlhbExpc3Q7XHJcbiAgcnVieUNob2NvbGF0ZU1hdGVyaWFsQ2FyZ286IENob2NvbGF0ZU1hdGVyaWFsTGlzdDtcclxuICBkYXJrQ2hvY29sYXRlUHJvZHVjdENhcmdvOiBDaG9jb2xhdGVQcm9kdWN0TGlzdDtcclxuICB3aGl0ZUNob2NvbGF0ZVByb2R1Y3RDYXJnbzogQ2hvY29sYXRlUHJvZHVjdExpc3Q7XHJcbiAgbWlsa0Nob2NvbGF0ZVByb2R1Y3RDYXJnbzogQ2hvY29sYXRlUHJvZHVjdExpc3Q7XHJcbiAgcnVieUNob2NvbGF0ZVByb2R1Y3RDYXJnbzogQ2hvY29sYXRlUHJvZHVjdExpc3Q7XHJcbiAgbWF4aW11bUNhcmdvQ2FwYWNpdHk6IG51bWJlcjtcclxuICBzdGF0ZTogVHJ1Y2tTdGF0ZTtcclxuICBjYXJnb1dvcmtTdGF0ZTogVHJ1Y2tDYXJnb1dvcmtTdGF0ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoYnJhbmQ6IHN0cmluZywgZHJpdmVyOiBFbXBsb3llZSwgbWF4aW11bUNhcmdvQ2FwYWNpdHk6IG51bWJlciA9IDEwMDAwKSB7XHJcbiAgICBzdXBlcigwLCAxNDAwLCAyNy41KTtcclxuICAgIHRoaXMuYnJhbmQgPSBicmFuZDtcclxuICAgIHRoaXMuZHJpdmVyID0gZHJpdmVyO1xyXG4gICAgdGhpcy5kYXJrQ2hvY29sYXRlTWF0ZXJpYWxDYXJnbyA9IG5ldyBDaG9jb2xhdGVNYXRlcmlhbExpc3QoKTtcclxuICAgIHRoaXMud2hpdGVDaG9jb2xhdGVNYXRlcmlhbENhcmdvID0gbmV3IENob2NvbGF0ZU1hdGVyaWFsTGlzdCgpO1xyXG4gICAgdGhpcy5taWxrQ2hvY29sYXRlTWF0ZXJpYWxDYXJnbyA9IG5ldyBDaG9jb2xhdGVNYXRlcmlhbExpc3QoKTtcclxuICAgIHRoaXMucnVieUNob2NvbGF0ZU1hdGVyaWFsQ2FyZ28gPSBuZXcgQ2hvY29sYXRlTWF0ZXJpYWxMaXN0KCk7XHJcbiAgICB0aGlzLmRhcmtDaG9jb2xhdGVQcm9kdWN0Q2FyZ28gPSBuZXcgQ2hvY29sYXRlUHJvZHVjdExpc3QoKTtcclxuICAgIHRoaXMud2hpdGVDaG9jb2xhdGVQcm9kdWN0Q2FyZ28gPSBuZXcgQ2hvY29sYXRlUHJvZHVjdExpc3QoKTtcclxuICAgIHRoaXMubWlsa0Nob2NvbGF0ZVByb2R1Y3RDYXJnbyA9IG5ldyBDaG9jb2xhdGVQcm9kdWN0TGlzdCgpO1xyXG4gICAgdGhpcy5ydWJ5Q2hvY29sYXRlUHJvZHVjdENhcmdvID0gbmV3IENob2NvbGF0ZVByb2R1Y3RMaXN0KCk7XHJcbiAgICB0aGlzLm1heGltdW1DYXJnb0NhcGFjaXR5ID0gbWF4aW11bUNhcmdvQ2FwYWNpdHk7XHJcbiAgICB0aGlzLnN0YXRlID0gVHJ1Y2tTdGF0ZS5BdmFpYmxlO1xyXG4gICAgdGhpcy5jYXJnb1dvcmtTdGF0ZSA9IFRydWNrQ2FyZ29Xb3JrU3RhdGUuQ2hvY29sYXRlTWF0ZXJpYWxMb2FkaW5nO1xyXG4gIH1cclxuXHJcbiAgc2V0QnJhbmQoYnJhbmQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5icmFuZCA9IGJyYW5kO1xyXG4gIH1cclxuXHJcbiAgc2V0RHJpdmVyKGRyaXZlcjogRW1wbG95ZWUpIHtcclxuICAgIHRoaXMuZHJpdmVyID0gZHJpdmVyO1xyXG4gIH1cclxuXHJcbiAgc2V0Q2FyZ29NYXhDYXBhY2l0eShuZXdNYXhpbXVtQ2FyZ29DYXBhY2l0eTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLm1heGltdW1DYXJnb0NhcGFjaXR5ID0gbmV3TWF4aW11bUNhcmdvQ2FwYWNpdHk7XHJcbiAgfVxyXG5cclxuICBzZXRTdGF0ZVRvQXZhaWJsZSgpIHtcclxuICAgIHRoaXMuc3RhdGUgPSBUcnVja1N0YXRlLkF2YWlibGU7XHJcbiAgfVxyXG5cclxuICBzZXRTdGF0ZVRvSW5UcmFuc3BvcnQoKSB7XHJcbiAgICB0aGlzLnN0YXRlID0gVHJ1Y2tTdGF0ZS5JblRyYW5zcG9ydDtcclxuICB9XHJcblxyXG4gIHNldFN0YXRlVG9Ccm9rZW4oKSB7XHJcbiAgICB0aGlzLnN0YXRlID0gVHJ1Y2tTdGF0ZS5Ccm9rZW47XHJcbiAgfVxyXG5cclxuICBzZXRTdGF0ZVRvSW5SZXBhaXIoKSB7XHJcbiAgICB0aGlzLnN0YXRlID0gVHJ1Y2tTdGF0ZS5JblJlcGFpcjtcclxuICB9XHJcblxyXG4gIHNldFN0YXRlVG9Jc0JlaW5nTG9hZGVkKCkge1xyXG4gICAgdGhpcy5zdGF0ZSA9IFRydWNrU3RhdGUuSXNCZWluZ0xvYWRlZDtcclxuICB9XHJcblxyXG4gIHNldFN0YXRlVG9Jc0JlaW5nVW5sb2FkZWQoKSB7XHJcbiAgICB0aGlzLnN0YXRlID0gVHJ1Y2tTdGF0ZS5Jc0JlaW5nVW5sb2FkZWQ7XHJcbiAgfVxyXG5cclxuICBpc1N0YXRlQXZhaWJsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlID09PSBUcnVja1N0YXRlLkF2YWlibGU7XHJcbiAgfVxyXG5cclxuICBpc1N0YXRlSW5UcmFuc3BvcnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZSA9PT0gVHJ1Y2tTdGF0ZS5JblRyYW5zcG9ydDtcclxuICB9XHJcblxyXG4gIGlzU3RhdGVCcm9rZW4oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZSA9PT0gVHJ1Y2tTdGF0ZS5Ccm9rZW47XHJcbiAgfVxyXG5cclxuICBpc1N0YXRlSW5SZXBhaXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZSA9PT0gVHJ1Y2tTdGF0ZS5JblJlcGFpcjtcclxuICB9XHJcblxyXG4gIGlzU3RhdGVJc0JlaW5nTG9hZGVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUgPT09IFRydWNrU3RhdGUuSXNCZWluZ0xvYWRlZDtcclxuICB9XHJcblxyXG4gIGlzU3RhdGVJc0JlaW5nVW5sb2FkZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZSA9PT0gVHJ1Y2tTdGF0ZS5Jc0JlaW5nVW5sb2FkZWQ7XHJcbiAgfVxyXG5cclxuICBzZXRDYXJnb1N0YXRlVG9DaG9jb2xhdGVNYXRlcmlhbExvYWRpbmcoKSB7XHJcbiAgICB0aGlzLmNhcmdvV29ya1N0YXRlID0gVHJ1Y2tDYXJnb1dvcmtTdGF0ZS5DaG9jb2xhdGVNYXRlcmlhbExvYWRpbmc7XHJcbiAgfVxyXG5cclxuICBzZXRDYXJnb1N0YXRlVG9DaG9jb2xhdGVNYXRlcmlhbFVuTG9hZGluZygpIHtcclxuICAgIHRoaXMuY2FyZ29Xb3JrU3RhdGUgPSBUcnVja0NhcmdvV29ya1N0YXRlLkNob2NvbGF0ZU1hdGVyaWFsVW5sb2FkaW5nO1xyXG4gIH1cclxuXHJcbiAgc2V0Q2FyZ29TdGF0ZVRvQ2hvY29sYXRlUHJvZHVjdExvYWRpbmcoKSB7XHJcbiAgICB0aGlzLmNhcmdvV29ya1N0YXRlID0gVHJ1Y2tDYXJnb1dvcmtTdGF0ZS5DaG9jb2xhdGVQcm9kdWN0TG9hZGluZztcclxuICB9XHJcblxyXG4gIHNldENhcmdvU3RhdGVUb0Nob2NvbGF0ZVByb2R1Y3RVbmxvYWRpbmcoKSB7XHJcbiAgICB0aGlzLmNhcmdvV29ya1N0YXRlID0gVHJ1Y2tDYXJnb1dvcmtTdGF0ZS5DaG9jb2xhdGVQcm9kdWN0VW5sb2FkaW5nO1xyXG4gIH1cclxuXHJcbiAgaXNDYXJnb1N0YXRlQ2hvY29sYXRlTWF0ZXJpYWxMb2FkaW5nKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2FyZ29Xb3JrU3RhdGUgPT09IFRydWNrQ2FyZ29Xb3JrU3RhdGUuQ2hvY29sYXRlTWF0ZXJpYWxMb2FkaW5nO1xyXG4gIH1cclxuXHJcbiAgaXNDYXJnb1N0YXRlQ2hvY29sYXRlTWF0ZXJpYWxVbmxvYWRpbmcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jYXJnb1dvcmtTdGF0ZSA9PT0gVHJ1Y2tDYXJnb1dvcmtTdGF0ZS5DaG9jb2xhdGVNYXRlcmlhbFVubG9hZGluZztcclxuICB9XHJcblxyXG4gIGlzQ2FyZ29TdGF0ZUNob2NvbGF0ZVByb2R1Y3RMb2FkaW5nKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2FyZ29Xb3JrU3RhdGUgPT09IFRydWNrQ2FyZ29Xb3JrU3RhdGUuQ2hvY29sYXRlUHJvZHVjdExvYWRpbmc7XHJcbiAgfVxyXG5cclxuICBpc0NhcmdvU3RhdGVDaG9jb2xhdGVQcm9kdWN0VW5sb2FkaW5nKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2FyZ29Xb3JrU3RhdGUgPT09IFRydWNrQ2FyZ29Xb3JrU3RhdGUuQ2hvY29sYXRlUHJvZHVjdFVubG9hZGluZztcclxuICB9XHJcblxyXG4gIGlzTWF0ZXJpYWxMb2FkaW5nKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNDYXJnb1N0YXRlQ2hvY29sYXRlTWF0ZXJpYWxMb2FkaW5nKCkgJiYgdGhpcy5pc1N0YXRlSXNCZWluZ0xvYWRlZCgpO1xyXG4gIH1cclxuXHJcbiAgaXNNYXRlcmlhbFVubG9hZGluZygpIHtcclxuICAgIHJldHVybiB0aGlzLmlzQ2FyZ29TdGF0ZUNob2NvbGF0ZU1hdGVyaWFsVW5sb2FkaW5nKCkgJiYgdGhpcy5pc1N0YXRlSXNCZWluZ1VubG9hZGVkKCk7XHJcbiAgfVxyXG5cclxuICBpc1Byb2R1Y3RMb2FkaW5nKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNDYXJnb1N0YXRlQ2hvY29sYXRlUHJvZHVjdExvYWRpbmcoKSAmJiB0aGlzLmlzU3RhdGVJc0JlaW5nTG9hZGVkKCk7XHJcbiAgfVxyXG5cclxuICBpc1Byb2R1Y3RVbmxvYWRpbmcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc0NhcmdvU3RhdGVDaG9jb2xhdGVQcm9kdWN0VW5sb2FkaW5nKCkgJiYgdGhpcy5pc1N0YXRlSXNCZWluZ1VubG9hZGVkKCk7XHJcbiAgfVxyXG5cclxuICBnZXREYXJrQ2hvY29sYXRlTWF0ZXJpYWxDYXJnb0xpc3RMZW5ndGgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXJrQ2hvY29sYXRlTWF0ZXJpYWxDYXJnby5nZXRNYXRlcmlhbExpc3RMZW5ndGgoKTtcclxuICB9XHJcblxyXG4gIGdldFdoaXRlQ2hvY29sYXRlTWF0ZXJpYWxDYXJnb0xpc3RMZW5ndGgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy53aGl0ZUNob2NvbGF0ZU1hdGVyaWFsQ2FyZ28uZ2V0TWF0ZXJpYWxMaXN0TGVuZ3RoKCk7XHJcbiAgfVxyXG5cclxuICBnZXRNaWxrQ2hvY29sYXRlTWF0ZXJpYWxDYXJnb0xpc3RMZW5ndGgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5taWxrQ2hvY29sYXRlTWF0ZXJpYWxDYXJnby5nZXRNYXRlcmlhbExpc3RMZW5ndGgoKTtcclxuICB9XHJcblxyXG4gIGdldFJ1YnlDaG9jb2xhdGVNYXRlcmlhbENhcmdvTGlzdExlbmd0aCgpIHtcclxuICAgIHJldHVybiB0aGlzLnJ1YnlDaG9jb2xhdGVNYXRlcmlhbENhcmdvLmdldE1hdGVyaWFsTGlzdExlbmd0aCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGFya0Nob2NvbGF0ZVByb2R1Y3RDYXJnb0xpc3RMZW5ndGgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXJrQ2hvY29sYXRlUHJvZHVjdENhcmdvLmdldFByb2R1Y3RMaXN0TGVuZ3RoKCk7XHJcbiAgfVxyXG5cclxuICBnZXRXaGl0ZUNob2NvbGF0ZVByb2R1Y3RDYXJnb0xpc3RMZW5ndGgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy53aGl0ZUNob2NvbGF0ZVByb2R1Y3RDYXJnby5nZXRQcm9kdWN0TGlzdExlbmd0aCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TWlsa0Nob2NvbGF0ZVByb2R1Y3RDYXJnb0xpc3RMZW5ndGgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5taWxrQ2hvY29sYXRlUHJvZHVjdENhcmdvLmdldFByb2R1Y3RMaXN0TGVuZ3RoKCk7XHJcbiAgfVxyXG5cclxuICBnZXRSdWJ5Q2hvY29sYXRlUHJvZHVjdENhcmdvTGlzdExlbmd0aCgpIHtcclxuICAgIHJldHVybiB0aGlzLnJ1YnlDaG9jb2xhdGVQcm9kdWN0Q2FyZ28uZ2V0UHJvZHVjdExpc3RMZW5ndGgoKTtcclxuICB9XHJcblxyXG4gIGdldE1hdGVyaWFsQ2FyZ29DdXJyZW50bHlPY2N1cGllZFNwYWNlKCkge1xyXG4gICAgbGV0IG1hdGVyaWFsQ2FyZ29TcGFjZTogbnVtYmVyID0gMDtcclxuICAgIG1hdGVyaWFsQ2FyZ29TcGFjZSArPSB0aGlzLmdldERhcmtDaG9jb2xhdGVNYXRlcmlhbENhcmdvTGlzdExlbmd0aCgpO1xyXG4gICAgbWF0ZXJpYWxDYXJnb1NwYWNlICs9IHRoaXMuZ2V0V2hpdGVDaG9jb2xhdGVNYXRlcmlhbENhcmdvTGlzdExlbmd0aCgpO1xyXG4gICAgbWF0ZXJpYWxDYXJnb1NwYWNlICs9IHRoaXMuZ2V0TWlsa0Nob2NvbGF0ZU1hdGVyaWFsQ2FyZ29MaXN0TGVuZ3RoKCk7XHJcbiAgICBtYXRlcmlhbENhcmdvU3BhY2UgKz0gdGhpcy5nZXRSdWJ5Q2hvY29sYXRlTWF0ZXJpYWxDYXJnb0xpc3RMZW5ndGgoKTtcclxuICAgIHJldHVybiBtYXRlcmlhbENhcmdvU3BhY2U7XHJcbiAgfVxyXG5cclxuICBnZXRQcm9kdWN0Q2FyZ29DdXJyZW50bHlPY3VwcGllZFNwYWNlKCkge1xyXG4gICAgbGV0IHByb2R1Y3RDYXJnb1NwYWNlOiBudW1iZXIgPSAwO1xyXG4gICAgcHJvZHVjdENhcmdvU3BhY2UgKz0gdGhpcy5nZXREYXJrQ2hvY29sYXRlUHJvZHVjdENhcmdvTGlzdExlbmd0aCgpO1xyXG4gICAgcHJvZHVjdENhcmdvU3BhY2UgKz0gdGhpcy5nZXRXaGl0ZUNob2NvbGF0ZVByb2R1Y3RDYXJnb0xpc3RMZW5ndGgoKTtcclxuICAgIHByb2R1Y3RDYXJnb1NwYWNlICs9IHRoaXMuZ2V0TWlsa0Nob2NvbGF0ZVByb2R1Y3RDYXJnb0xpc3RMZW5ndGgoKTtcclxuICAgIHByb2R1Y3RDYXJnb1NwYWNlICs9IHRoaXMuZ2V0UnVieUNob2NvbGF0ZVByb2R1Y3RDYXJnb0xpc3RMZW5ndGgoKTtcclxuICAgIHJldHVybiBwcm9kdWN0Q2FyZ29TcGFjZTtcclxuICB9XHJcblxyXG4gIGNhcmdvQ3VycmVudGx5T2NjdXBpZWRTcGFjZSgpIHtcclxuICAgIGxldCBtYXRlcmlhbENhcmdvU3BhY2U6IG51bWJlciA9IHRoaXMuZ2V0TWF0ZXJpYWxDYXJnb0N1cnJlbnRseU9jY3VwaWVkU3BhY2UoKTtcclxuICAgIGxldCBwcm9kdWN0Q2FyZ29TcGFjZTogbnVtYmVyID0gdGhpcy5nZXRQcm9kdWN0Q2FyZ29DdXJyZW50bHlPY3VwcGllZFNwYWNlKCk7XHJcbiAgICByZXR1cm4gbWF0ZXJpYWxDYXJnb1NwYWNlICsgcHJvZHVjdENhcmdvU3BhY2U7XHJcbiAgfVxyXG5cclxuICBpc1RoZXJlRnJlZVNwYWNlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2FyZ29DdXJyZW50bHlPY2N1cGllZFNwYWNlKCkgPCB0aGlzLm1heGltdW1DYXJnb0NhcGFjaXR5O1xyXG4gIH1cclxuXHJcbiAgaXNDYXJnb0VtcHR5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2FyZ29DdXJyZW50bHlPY2N1cGllZFNwYWNlKCkgPT0gMDtcclxuICB9XHJcblxyXG4gIGlzTWF0ZXJpYWxDYXJnb0VtcHR5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0TWF0ZXJpYWxDYXJnb0N1cnJlbnRseU9jY3VwaWVkU3BhY2UoKSA9PSAwO1xyXG4gIH1cclxuXHJcbiAgaXNQcm9kdWN0Q2FyZ29FbXB0eSgpIHtcclxuICAgIHJldHVybiB0aGlzLmdldFByb2R1Y3RDYXJnb0N1cnJlbnRseU9jdXBwaWVkU3BhY2UoKSA9PSAwO1xyXG4gIH1cclxuXHJcbiAgaXNEYXJrQ2hvY29sYXRlTWF0ZXJpYWxDYXJnb0VtcHR5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0RGFya0Nob2NvbGF0ZU1hdGVyaWFsQ2FyZ29MaXN0TGVuZ3RoKCkgPT0gMDtcclxuICB9XHJcblxyXG4gIGlzV2hpdGVDaG9jb2xhdGVNYXRlcmlhbENhcmdvRW1wdHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRXaGl0ZUNob2NvbGF0ZU1hdGVyaWFsQ2FyZ29MaXN0TGVuZ3RoKCkgPT0gMDtcclxuICB9XHJcblxyXG4gIGlzTWlsa0Nob2NvbGF0ZU1hdGVyaWFsQ2FyZ29FbXB0eSgpIHtcclxuICAgIHJldHVybiB0aGlzLmdldE1pbGtDaG9jb2xhdGVNYXRlcmlhbENhcmdvTGlzdExlbmd0aCgpID09IDA7XHJcbiAgfVxyXG5cclxuICBpc1J1YnlDaG9jb2xhdGVNYXRlcmlhbENhcmdvRW1wdHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRSdWJ5Q2hvY29sYXRlTWF0ZXJpYWxDYXJnb0xpc3RMZW5ndGgoKSA9PSAwO1xyXG4gIH1cclxuXHJcbiAgaXNEYXJrQ2hvY29sYXRlUHJvZHVjdENhcmdvRW1wdHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXREYXJrQ2hvY29sYXRlUHJvZHVjdENhcmdvTGlzdExlbmd0aCgpID09IDA7XHJcbiAgfVxyXG5cclxuICBpc1doaXRlQ2hvY29sYXRlUHJvZHVjdENhcmdvRW1wdHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRXaGl0ZUNob2NvbGF0ZVByb2R1Y3RDYXJnb0xpc3RMZW5ndGgoKSA9PSAwO1xyXG4gIH1cclxuXHJcbiAgaXNNaWxrQ2hvY29sYXRlUHJvZHVjdENhcmdvRW1wdHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRNaWxrQ2hvY29sYXRlUHJvZHVjdENhcmdvTGlzdExlbmd0aCgpID09IDA7XHJcbiAgfVxyXG5cclxuICBpc1J1YnlDaG9jb2xhdGVQcm9kdWN0Q2FyZ29FbXB0eSgpIHtcclxuICAgIHJldHVybiB0aGlzLmdldFJ1YnlDaG9jb2xhdGVQcm9kdWN0Q2FyZ29MaXN0TGVuZ3RoKCkgPT0gMDtcclxuICB9XHJcblxyXG4gIGxvYWRPbmVEYXJrQ2hvY29sYXRlTWF0ZXJpYWxUb0NhcmdvKGNob2NvbGF0ZU1hdGVyaWFsOiBDaG9jb2xhdGVNYXRlcmlhbCkge1xyXG4gICAgaWYgKHRoaXMuaXNUaGVyZUZyZWVTcGFjZSgpKSB7XHJcbiAgICAgIHRoaXMuZGFya0Nob2NvbGF0ZU1hdGVyaWFsQ2FyZ28uYWRkTWF0ZXJpYWxUb0xpc3QoY2hvY29sYXRlTWF0ZXJpYWwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbG9hZE9uZVdoaXRlQ2hvY29sYXRlTWF0ZXJpYWxUb0NhcmdvKGNob2NvbGF0ZU1hdGVyaWFsOiBDaG9jb2xhdGVNYXRlcmlhbCkge1xyXG4gICAgaWYgKHRoaXMuaXNUaGVyZUZyZWVTcGFjZSgpKSB7XHJcbiAgICAgIHRoaXMud2hpdGVDaG9jb2xhdGVNYXRlcmlhbENhcmdvLmFkZE1hdGVyaWFsVG9MaXN0KGNob2NvbGF0ZU1hdGVyaWFsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxvYWRPbmVNaWxrQ2hvY29sYXRlTWF0ZXJpYWxUb0NhcmdvKGNob2NvbGF0ZU1hdGVyaWFsOiBDaG9jb2xhdGVNYXRlcmlhbCkge1xyXG4gICAgaWYgKHRoaXMuaXNUaGVyZUZyZWVTcGFjZSgpKSB7XHJcbiAgICAgIHRoaXMubWlsa0Nob2NvbGF0ZU1hdGVyaWFsQ2FyZ28uYWRkTWF0ZXJpYWxUb0xpc3QoY2hvY29sYXRlTWF0ZXJpYWwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbG9hZE9uZVJ1YnlDaG9jb2xhdGVNYXRlcmlhbFRvQ2FyZ28oY2hvY29sYXRlTWF0ZXJpYWw6IENob2NvbGF0ZU1hdGVyaWFsKSB7XHJcbiAgICBpZiAodGhpcy5pc1RoZXJlRnJlZVNwYWNlKCkpIHtcclxuICAgICAgdGhpcy5ydWJ5Q2hvY29sYXRlTWF0ZXJpYWxDYXJnby5hZGRNYXRlcmlhbFRvTGlzdChjaG9jb2xhdGVNYXRlcmlhbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsb2FkT25lTWF0ZXJpYWxUb0NhcmdvKGNob2NvbGF0ZU1hdGVyaWFsOiBDaG9jb2xhdGVNYXRlcmlhbCkge1xyXG4gICAgaWYgKGNob2NvbGF0ZU1hdGVyaWFsLmlzTWF0ZXJpYWxUeXBlRGFya0Nob2NvbGF0ZU1hdGVyaWFsKCkpIHtcclxuICAgICAgdGhpcy5sb2FkT25lRGFya0Nob2NvbGF0ZU1hdGVyaWFsVG9DYXJnbyhjaG9jb2xhdGVNYXRlcmlhbCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hvY29sYXRlTWF0ZXJpYWwuaXNNYXRlcmlhbFR5cGVXaGl0ZUNob2NvbGF0ZU1hdGVyaWFsKCkpIHtcclxuICAgICAgdGhpcy5sb2FkT25lV2hpdGVDaG9jb2xhdGVNYXRlcmlhbFRvQ2FyZ28oY2hvY29sYXRlTWF0ZXJpYWwpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNob2NvbGF0ZU1hdGVyaWFsLmlzTWF0ZXJpYWxUeXBlTWlsa0Nob2NvbGF0ZU1hdGVyaWFsKCkpIHtcclxuICAgICAgdGhpcy5sb2FkT25lTWlsa0Nob2NvbGF0ZU1hdGVyaWFsVG9DYXJnbyhjaG9jb2xhdGVNYXRlcmlhbCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hvY29sYXRlTWF0ZXJpYWwuaXNNYXRlcmlhbFR5cGVSdWJ5Q2hvY29sYXRlTWF0ZXJpYWwoKSkge1xyXG4gICAgICB0aGlzLmxvYWRPbmVSdWJ5Q2hvY29sYXRlTWF0ZXJpYWxUb0NhcmdvKGNob2NvbGF0ZU1hdGVyaWFsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxvYWRPbmVEYXJrQ2hvY29sYXRlUHJvZHVjdFRvQ2FyZ28oY2hvY29sYXRlUHJvZHVjdDogQ2hvY29sYXRlUHJvZHVjdCkge1xyXG4gICAgaWYgKHRoaXMuaXNUaGVyZUZyZWVTcGFjZSgpKSB7XHJcbiAgICAgIHRoaXMuZGFya0Nob2NvbGF0ZVByb2R1Y3RDYXJnby5hZGRQcm9kdWN0VG9MaXN0KGNob2NvbGF0ZVByb2R1Y3QpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbG9hZE9uZVdoaXRlQ2hvY29sYXRlUHJvZHVjdFRvQ2FyZ28oY2hvY29sYXRlUHJvZHVjdDogQ2hvY29sYXRlUHJvZHVjdCkge1xyXG4gICAgaWYgKHRoaXMuaXNUaGVyZUZyZWVTcGFjZSgpKSB7XHJcbiAgICAgIHRoaXMud2hpdGVDaG9jb2xhdGVQcm9kdWN0Q2FyZ28uYWRkUHJvZHVjdFRvTGlzdChjaG9jb2xhdGVQcm9kdWN0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxvYWRPbmVNaWxrQ2hvY29sYXRlUHJvZHVjdFRvQ2FyZ28oY2hvY29sYXRlUHJvZHVjdDogQ2hvY29sYXRlUHJvZHVjdCkge1xyXG4gICAgaWYgKHRoaXMuaXNUaGVyZUZyZWVTcGFjZSgpKSB7XHJcbiAgICAgIHRoaXMubWlsa0Nob2NvbGF0ZVByb2R1Y3RDYXJnby5hZGRQcm9kdWN0VG9MaXN0KGNob2NvbGF0ZVByb2R1Y3QpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbG9hZE9uZVJ1YnlDaG9jb2xhdGVQcm9kdWN0VG9DYXJnbyhjaG9jb2xhdGVQcm9kdWN0OiBDaG9jb2xhdGVQcm9kdWN0KSB7XHJcbiAgICBpZiAodGhpcy5pc1RoZXJlRnJlZVNwYWNlKCkpIHtcclxuICAgICAgdGhpcy5ydWJ5Q2hvY29sYXRlUHJvZHVjdENhcmdvLmFkZFByb2R1Y3RUb0xpc3QoY2hvY29sYXRlUHJvZHVjdCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsb2FkT25lUHJvZHVjdFRvQ2FyZ28oY2hvY29sYXRlUHJvZHVjdDogQ2hvY29sYXRlUHJvZHVjdCkge1xyXG4gICAgaWYgKGNob2NvbGF0ZVByb2R1Y3QuaXNDaG9jb2xhdGVQcm9kdWN0VHlwZURhcmtDaG9jb2xhdGUpIHtcclxuICAgICAgdGhpcy5sb2FkT25lRGFya0Nob2NvbGF0ZVByb2R1Y3RUb0NhcmdvKGNob2NvbGF0ZVByb2R1Y3QpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNob2NvbGF0ZVByb2R1Y3QuaXNDaG9jb2xhdGVQcm9kdWN0VHlwZVdoaXRlQ2hvY29sYXRlKCkpIHtcclxuICAgICAgdGhpcy5sb2FkT25lV2hpdGVDaG9jb2xhdGVQcm9kdWN0VG9DYXJnbyhjaG9jb2xhdGVQcm9kdWN0KTtcclxuICAgIH1cclxuICAgIGlmIChjaG9jb2xhdGVQcm9kdWN0LmlzQ2hvY29sYXRlUHJvZHVjdFR5cGVNaWxrQ2hvY29sYXRlKCkpIHtcclxuICAgICAgdGhpcy5sb2FkT25lTWlsa0Nob2NvbGF0ZVByb2R1Y3RUb0NhcmdvKGNob2NvbGF0ZVByb2R1Y3QpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNob2NvbGF0ZVByb2R1Y3QuaXNDaG9jb2xhdGVQcm9kdWN0VHlwZVJ1YnlDaG9jb2xhdGUoKSkge1xyXG4gICAgICB0aGlzLmxvYWRPbmVSdWJ5Q2hvY29sYXRlUHJvZHVjdFRvQ2FyZ28oY2hvY29sYXRlUHJvZHVjdCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1bmxvYWRPbmVEYXJrQ2hvY29sYXRlTWF0ZXJpYWxGcm9tQ2FyZ28oKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNEYXJrQ2hvY29sYXRlTWF0ZXJpYWxDYXJnb0VtcHR5KCkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZGFya0Nob2NvbGF0ZU1hdGVyaWFsQ2FyZ28uZ2V0TWF0ZXJpYWxGcm9tTGlzdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdW5sb2FkT25lV2hpdGVDaG9jb2xhdGVNYXRlcmlhbEZyb21DYXJnbygpIHtcclxuICAgIGlmICghdGhpcy5pc1doaXRlQ2hvY29sYXRlTWF0ZXJpYWxDYXJnb0VtcHR5KCkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMud2hpdGVDaG9jb2xhdGVNYXRlcmlhbENhcmdvLmdldE1hdGVyaWFsRnJvbUxpc3QoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVubG9hZE9uZU1pbGtDaG9jb2xhdGVNYXRlcmlhbEZyb21DYXJnbygpIHtcclxuICAgIGlmICghdGhpcy5pc01pbGtDaG9jb2xhdGVNYXRlcmlhbENhcmdvRW1wdHkoKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5taWxrQ2hvY29sYXRlTWF0ZXJpYWxDYXJnby5nZXRNYXRlcmlhbEZyb21MaXN0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1bmxvYWRPbmVSdWJ5Q2hvY29sYXRlTWF0ZXJpYWxGcm9tQ2FyZ28oKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNSdWJ5Q2hvY29sYXRlTWF0ZXJpYWxDYXJnb0VtcHR5KCkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucnVieUNob2NvbGF0ZU1hdGVyaWFsQ2FyZ28uZ2V0TWF0ZXJpYWxGcm9tTGlzdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdW5sb2FkT25lTWF0ZXJpYWxGcm9tQ2FyZ28oY2hvY29sYXRlTWF0ZXJpYWxUeXBlOiBDaG9jb2xhdGVNYXRlcmlhbFR5cGUpIHtcclxuICAgIGlmIChjaG9jb2xhdGVNYXRlcmlhbFR5cGUgPT09IENob2NvbGF0ZU1hdGVyaWFsVHlwZS5EYXJrQ2hvY29sYXRlTWF0ZXJpYWwpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudW5sb2FkT25lRGFya0Nob2NvbGF0ZU1hdGVyaWFsRnJvbUNhcmdvKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hvY29sYXRlTWF0ZXJpYWxUeXBlID09PSBDaG9jb2xhdGVNYXRlcmlhbFR5cGUuV2hpdGVDaG9jb2xhdGVNYXRlcmlhbCkge1xyXG4gICAgICByZXR1cm4gdGhpcy51bmxvYWRPbmVXaGl0ZUNob2NvbGF0ZU1hdGVyaWFsRnJvbUNhcmdvKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hvY29sYXRlTWF0ZXJpYWxUeXBlID09PSBDaG9jb2xhdGVNYXRlcmlhbFR5cGUuTWlsa0Nob2NvbGF0ZU1hdGVyaWFsKSB7XHJcbiAgICAgIHRoaXMudW5sb2FkT25lTWlsa0Nob2NvbGF0ZU1hdGVyaWFsRnJvbUNhcmdvKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hvY29sYXRlTWF0ZXJpYWxUeXBlID09PSBDaG9jb2xhdGVNYXRlcmlhbFR5cGUuUnVieUNob2NvbGF0ZU1hdGVyaWFsKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnVubG9hZE9uZVJ1YnlDaG9jb2xhdGVNYXRlcmlhbEZyb21DYXJnbygpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICB1bmxvYWRPbmVEYXJrQ2hvY29sYXRlUHJvZHVjdEZyb21DYXJnbygpIHtcclxuICAgIGlmICghdGhpcy5pc0RhcmtDaG9jb2xhdGVQcm9kdWN0Q2FyZ29FbXB0eSgpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmRhcmtDaG9jb2xhdGVQcm9kdWN0Q2FyZ28uZ2V0UHJvZHVjdEZyb21MaXN0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1bmxvYWRPbmVXaGl0ZUNob2NvbGF0ZVByb2R1Y3RGcm9tQ2FyZ28oKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNXaGl0ZUNob2NvbGF0ZVByb2R1Y3RDYXJnb0VtcHR5KCkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMud2hpdGVDaG9jb2xhdGVQcm9kdWN0Q2FyZ28uZ2V0UHJvZHVjdEZyb21MaXN0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1bmxvYWRPbmVNaWxrQ2hvY29sYXRlUHJvZHVjdEZyb21DYXJnbygpIHtcclxuICAgIGlmICghdGhpcy5pc01pbGtDaG9jb2xhdGVQcm9kdWN0Q2FyZ29FbXB0eSgpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm1pbGtDaG9jb2xhdGVQcm9kdWN0Q2FyZ28uZ2V0UHJvZHVjdEZyb21MaXN0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1bmxvYWRPbmVSdWJ5Q2hvY29sYXRlUHJvZHVjdEZyb21DYXJnbygpIHtcclxuICAgIGlmICghdGhpcy5pc01pbGtDaG9jb2xhdGVQcm9kdWN0Q2FyZ29FbXB0eSgpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm1pbGtDaG9jb2xhdGVQcm9kdWN0Q2FyZ28uZ2V0UHJvZHVjdEZyb21MaXN0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1bmxvYWRPbmVQcm9kdWN0RnJvbUNhcmdvKGNob2NvbGF0ZVByb2R1Y3RUeXBlOiBDaG9jb2xhdGVQcm9kdWN0VHlwZSkge1xyXG4gICAgaWYgKGNob2NvbGF0ZVByb2R1Y3RUeXBlID09PSBDaG9jb2xhdGVQcm9kdWN0VHlwZS5EYXJrQ2hvY29sYXRlKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnVubG9hZE9uZURhcmtDaG9jb2xhdGVQcm9kdWN0RnJvbUNhcmdvKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hvY29sYXRlUHJvZHVjdFR5cGUgPT09IENob2NvbGF0ZVByb2R1Y3RUeXBlLldoaXRlQ2hvY29sYXRlKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnVubG9hZE9uZVdoaXRlQ2hvY29sYXRlUHJvZHVjdEZyb21DYXJnbygpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNob2NvbGF0ZVByb2R1Y3RUeXBlID09PSBDaG9jb2xhdGVQcm9kdWN0VHlwZS5NaWxrQ2hvY29sYXRlKSB7XHJcbiAgICAgIHRoaXMudW5sb2FkT25lTWlsa0Nob2NvbGF0ZVByb2R1Y3RGcm9tQ2FyZ28oKTtcclxuICAgIH1cclxuICAgIGlmIChjaG9jb2xhdGVQcm9kdWN0VHlwZSA9PT0gQ2hvY29sYXRlUHJvZHVjdFR5cGUuUnVieUNob2NvbGF0ZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy51bmxvYWRPbmVSdWJ5Q2hvY29sYXRlUHJvZHVjdEZyb21DYXJnbygpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICB3b3JrV2l0aENhcmdvT25jZShcclxuICAgIG5ld01hdGVyaWFsPzogQ2hvY29sYXRlTWF0ZXJpYWwsXHJcbiAgICBuZXdQcm9kdWN0PzogQ2hvY29sYXRlUHJvZHVjdCxcclxuICAgIGNob2NvbGF0ZU1hdGVyaWFsVHlwZT86IENob2NvbGF0ZU1hdGVyaWFsVHlwZSxcclxuICAgIGNob2NvbGF0ZVByb2R1Y3RUeXBlPzogQ2hvY29sYXRlUHJvZHVjdFR5cGVcclxuICApIHtcclxuICAgIGlmICh0aGlzLmlzTWF0ZXJpYWxMb2FkaW5nKCkgJiYgbmV3TWF0ZXJpYWwgIT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmxvYWRPbmVNYXRlcmlhbFRvQ2FyZ28obmV3TWF0ZXJpYWwpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaXNNYXRlcmlhbFVubG9hZGluZygpICYmIGNob2NvbGF0ZVByb2R1Y3RUeXBlKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnVubG9hZE9uZU1hdGVyaWFsRnJvbUNhcmdvKGNob2NvbGF0ZU1hdGVyaWFsVHlwZSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5pc1Byb2R1Y3RMb2FkaW5nKCkgJiYgbmV3UHJvZHVjdCAhPSBudWxsKSB7XHJcbiAgICAgIHRoaXMubG9hZE9uZVByb2R1Y3RUb0NhcmdvKG5ld1Byb2R1Y3QpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaXNQcm9kdWN0VW5sb2FkaW5nKCkgJiYgY2hvY29sYXRlUHJvZHVjdFR5cGUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudW5sb2FkT25lUHJvZHVjdEZyb21DYXJnbyhjaG9jb2xhdGVQcm9kdWN0VHlwZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFZlaGljbGUge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgc3BlZWQ6IG51bWJlcjtcclxuICBtYXhGdWVsVGFua0xldmVsOiBudW1iZXI7XHJcbiAgZnVlbENvbnN1bXB0aW9uUGVyMTAwS206IG51bWJlcjtcclxuICBjdXJyZW50RnVlbFRhbmtMZXZlbDogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihzcGVlZDogbnVtYmVyLCBtYXhGdWVsVGFua0xldmVsOiBudW1iZXIsIGZ1ZWxDb25zdW1wdGlvblBlcjEwMEttOiBudW1iZXIpIHtcclxuICAgIHRoaXMuaWQgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XHJcbiAgICB0aGlzLm1heEZ1ZWxUYW5rTGV2ZWwgPSBtYXhGdWVsVGFua0xldmVsO1xyXG4gICAgdGhpcy5mdWVsQ29uc3VtcHRpb25QZXIxMDBLbSA9IGZ1ZWxDb25zdW1wdGlvblBlcjEwMEttO1xyXG4gICAgdGhpcy5jdXJyZW50RnVlbFRhbmtMZXZlbCA9IDA7XHJcbiAgfVxyXG5cclxuICBzZXRJZChpZDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgfVxyXG5cclxuICBnZXRJZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmlkO1xyXG4gIH1cclxuXHJcbiAgc2V0Q3VycmVudEZ1ZWxUYW5rTGV2ZWwobmV3Q3VycmVudEZ1ZWxUYW5rTGV2ZWw6IG51bWJlcikge1xyXG4gICAgdGhpcy5jdXJyZW50RnVlbFRhbmtMZXZlbCA9IG5ld0N1cnJlbnRGdWVsVGFua0xldmVsO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q3VycmVudEZ1ZWxUYW5rTGV2ZWwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50RnVlbFRhbmtMZXZlbDtcclxuICB9XHJcblxyXG4gIGZ1ZWxDb25zdW1wdGlvblBlcktpbG9tZXRlcigpIHtcclxuICAgIHJldHVybiB0aGlzLmZ1ZWxDb25zdW1wdGlvblBlcjEwMEttIC8gMTAwO1xyXG4gIH1cclxuXHJcbiAgZ2V0RnVlbERpZmZlcmVuY2UoZnVlbFRhbmtMZXZlbFRvQ2hlY2s/OiBudW1iZXIpIHtcclxuICAgIGlmIChmdWVsVGFua0xldmVsVG9DaGVjaykge1xyXG4gICAgICByZXR1cm4gdGhpcy5tYXhGdWVsVGFua0xldmVsIC0gZnVlbFRhbmtMZXZlbFRvQ2hlY2s7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5tYXhGdWVsVGFua0xldmVsIC0gdGhpcy5jdXJyZW50RnVlbFRhbmtMZXZlbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlZmlsRnVlbFRhbmtUb01heGltdW0oKSB7XHJcbiAgICBsZXQgZnVlbFVzZWQ6IG51bWJlciA9IHRoaXMuZ2V0RnVlbERpZmZlcmVuY2UoKTtcclxuICAgIHRoaXMuc2V0Q3VycmVudEZ1ZWxUYW5rTGV2ZWwodGhpcy5tYXhGdWVsVGFua0xldmVsKTtcclxuICAgIHJldHVybiBmdWVsVXNlZDtcclxuICB9XHJcblxyXG4gIGlzQ3VycmVudExvd2VyT3JFcXVhbFRoYW5NYXhpbXVtVGFua0Z1ZWxMZXZlbCgpIHtcclxuICAgIHJldHVybiB0aGlzLmN1cnJlbnRGdWVsVGFua0xldmVsIDw9IHRoaXMubWF4RnVlbFRhbmtMZXZlbDtcclxuICB9XHJcblxyXG4gIHJlZmlsRnVlbFRhbmsobGl0cmVzVG9SZWZpbDogbnVtYmVyKSB7XHJcbiAgICBsZXQgdG1wQ3VyZW50RnVlbFRhbmtMZXZlbCA9IHRoaXMuZ2V0Q3VycmVudEZ1ZWxUYW5rTGV2ZWwoKTtcclxuICAgIHRoaXMuc2V0Q3VycmVudEZ1ZWxUYW5rTGV2ZWwodGhpcy5nZXRDdXJyZW50RnVlbFRhbmtMZXZlbCgpICsgbGl0cmVzVG9SZWZpbCk7XHJcbiAgICBpZiAodGhpcy5pc0N1cnJlbnRMb3dlck9yRXF1YWxUaGFuTWF4aW11bVRhbmtGdWVsTGV2ZWwoKSkge1xyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0Q3VycmVudEZ1ZWxUYW5rTGV2ZWwodGhpcy5tYXhGdWVsVGFua0xldmVsKTtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0RnVlbERpZmZlcmVuY2UodG1wQ3VyZW50RnVlbFRhbmtMZXZlbCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=