/**
 *  nakon jela proizvodnja par sekundi brza
 * produce product but remove material from list of materials
 */

import { Person } from "../person/person";
import { FactorySector } from "../../chocolate-factory/chocolate-factory";
import { ChocolateProductList } from "../../chocolate-products/chocolate-product-list";
import { ChocolateMaterial } from "../../chocolate-materials/chocolate-material";
import { ChocolateProduct } from "../../chocolate-products/chocolate-product";
import { Empolyeer } from "../employeer/employeer";

enum EmployeeWorkState {
  Working = "Working",
  LunchBreak = "LaunchBreak",
  NotPresent = "NotPresent",
}

export class Employee extends Person {
  factoryEmployeer: Empolyeer;
  factorySector: FactorySector;
  producedChocolateGoods: ChocolateProductList;
  workState: EmployeeWorkState;
  workEficiencyRating: number;
  stolenChocolates: ChocolateProductList;
  payment: number;

  constructor(name: string, lastName: string, factoryEmployeer: Empolyeer, drivingLicence: boolean = false) {
    super(name, lastName, drivingLicence);
    this.factoryEmployeer = factoryEmployeer;
    this.producedChocolateGoods = new ChocolateProductList();
    this.workState = EmployeeWorkState.NotPresent;
    this.workEficiencyRating = 10;
    this.stolenChocolates = new ChocolateProductList();
    this.payment = 0;
  }

  setWorkStateToWorking() {
    this.workState = EmployeeWorkState.Working;
  }

  setWorkStateToLaunchBreak() {
    this.workState = EmployeeWorkState.LunchBreak;
  }

  setWorkStateToNotPresent() {
    this.workState = EmployeeWorkState.NotPresent;
  }

  isWorkStateWorking() {
    return this.workState === EmployeeWorkState.Working;
  }

  isWorkStateLaunchBreak() {
    return this.workState === EmployeeWorkState.LunchBreak;
  }

  isWorkStateNotPresent() {
    return this.workState === EmployeeWorkState.NotPresent;
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
    if (this.isWorkStateWorking()) {
      chocolateProductToPack.packIt();
    }
  }

  unpackChocolateProduct(chocolateProductToUnpack: ChocolateProduct) {
    if (this.isWorkStateWorking()) {
      chocolateProductToUnpack.unpackIt();
    }
  }

  getPayment(payment: number) {
    this.payment += payment;
  }

  reduceFromPayment(price: number) {
    this.payment -= price;
  }

  payForStolenProductsThatEmployeeFoundAbout(numberOfStolenGoods: number, priceOfOneStolenProduct: number) {
    let priceToPay = numberOfStolenGoods * priceOfOneStolenProduct;
    this.reduceFromPayment(priceToPay);
    return priceToPay;
  }
}
