/**
 *
 * produce product but remove material from list of materials
 */

import { Person } from "../person/person";
import { FactorySector } from "../../chocolate-factory/chocolate-factory";
import { ChocolateProductList } from "../../chocolate-products/chocolate-product-list";
import { ChocolateMaterial, ChocolateMaterialType } from "../../chocolate-materials/chocolate-material";
import { ChocolateProduct, ChocolateProductType } from "../../chocolate-products/chocolate-product";
import { Empolyeer } from "../employeer/employeer";

export enum EmployeeWorkState {
  Working = "Working",
  LunchPause = "",
}

export class Employee extends Person {
  factoryEmployeer: Empolyeer;
  factorySector: FactorySector;
  producedChocolateGoods: ChocolateProductList;

  constructor(name: string, lastName: string, factoryEmployeer: Empolyeer, drivingLicence: boolean = false) {
    super(name, lastName, drivingLicence);
    this.factoryEmployeer = factoryEmployeer;
    this.producedChocolateGoods = new ChocolateProductList();
  }

  produceChocolateProduct(chocolateMaterial: ChocolateMaterial) {
    let producedChocolateProduct = new ChocolateProduct();
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
  }

  produceDarkChocolateProduct() {
    let newChocolateProduct = new ChocolateProduct();
    return newChocolateProduct.setProductTypeToDarkChocolate();
  }

  produceWhiteChocolateProduct() {
    let newChocolateProduct = new ChocolateProduct();
    return newChocolateProduct.setProductTypeToWhiteChocolate();
  }

  produceMilkChocolateProduct() {
    let newChocolateProduct = new ChocolateProduct();
    return newChocolateProduct.setProductTypeToMilkChocolate();
  }

  produceRubyChocolateProduct() {
    let newChocolateProduct = new ChocolateProduct();
    return newChocolateProduct.setProductTypeToRubyChocolate();
  }

  packChocolateProduct(chocolateProductToPack: ChocolateProduct) {
    chocolateProductToPack.packIt();
  }

  unpackChocolateProduct(chocolateProductToUnpack: ChocolateProduct) {
    chocolateProductToUnpack.unpackIt();
  }
}
