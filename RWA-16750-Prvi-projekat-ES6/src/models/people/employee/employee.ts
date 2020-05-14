/**
 *  nakon jela proizvodnja par sekundi brza
 * produce product but remove material from list of materials
 */

import { Person } from "../person/person";
import { FactorySector } from "../../chocolate-factory/chocolate-factory";
import { ChocolateProductList } from "../../chocolate-products/chocolate-product-list";
import { ChocolateMaterial } from "../../chocolate-materials/chocolate-material";
import { ChocolateProduct } from "../../chocolate-products/chocolate-product";
import { Employeer } from "../employeer/employeer";
import { getRandomIntInclusive, getRandomProductType } from "../../../.bin/random-numbers/random-numbers";
import { ProductStorage } from "../../warehouse/product-storage";

enum EmployeeGreedLevel {
  High = "High",
  Medium = "Medium",
  Low = "Low",
}

enum StateOfHunger {
  High = "ReallyHungry",
  Medium = "Hungry",
  Low = "NotHungry",
}

enum EmployeeWorkState {
  Working = "Working",
  LunchBreak = "LaunchBreak",
  NotPresent = "NotPresent",
}

export class Employee extends Person {
  factoryEmployeer: Employeer;
  factorySector: FactorySector;
  producedChocolateGoods: ChocolateProductList;
  workState: EmployeeWorkState;
  stolenChocolates: ChocolateProductList;
  greedLevel: EmployeeGreedLevel;
  stateOfHunger: StateOfHunger;
  payment: number;

  constructor(name: string, lastName: string, factoryEmployeer: Employeer, drivingLicence: boolean = false) {
    super(name, lastName, drivingLicence);
    this.factoryEmployeer = factoryEmployeer;
    this.producedChocolateGoods = new ChocolateProductList();
    this.workState = EmployeeWorkState.NotPresent;
    this.stolenChocolates = new ChocolateProductList();
    this.greedLevel = EmployeeGreedLevel.Low;
    this.stateOfHunger = StateOfHunger.Low;
    this.payment = 0;
  }

  setStateOfHungerToHigh() {
    this.stateOfHunger = StateOfHunger.High;
  }

  setStateOfHungerToMedium() {
    this.stateOfHunger = StateOfHunger.Medium;
  }

  setStateOfHungerToLow() {
    this.stateOfHunger = StateOfHunger.Low;
  }

  isStateOfHungerHigh() {
    return this.stateOfHunger === StateOfHunger.High;
  }

  isStateOfHungerMedium() {
    return this.stateOfHunger === StateOfHunger.Medium;
  }

  changeStateOfHunger() {
    let stateOfHunger: number = getRandomIntInclusive(25, 100);
    if (stateOfHunger <= 100 && stateOfHunger > 75) {
      this.setStateOfHungerToHigh();
    }
    if (stateOfHunger <= 75 && stateOfHunger > 50) {
      this.setStateOfHungerToMedium();
    }
    if (stateOfHunger <= 50 && stateOfHunger >= 25) {
      this.setStateOfHungerToLow();
    }
  }

  isStateOfHungerLow() {
    return this.stateOfHunger === StateOfHunger.Low;
  }

  setGreedLevelToHigh() {
    this.greedLevel = EmployeeGreedLevel.High;
  }

  setGreedLevelToMedium() {
    this.greedLevel = EmployeeGreedLevel.Medium;
  }

  setGreedLevelToLow() {
    this.greedLevel = EmployeeGreedLevel.Low;
  }

  isGreedLevelHigh() {
    return this.greedLevel === EmployeeGreedLevel.High;
  }

  isGreedLevelMedium() {
    return this.greedLevel === EmployeeGreedLevel.Medium;
  }

  isGreedLevelLow() {
    return this.greedLevel === EmployeeGreedLevel.Low;
  }

  changeGreedLevel() {
    let greedLevel: number = getRandomIntInclusive(25, 100);
    if (greedLevel <= 100 && greedLevel > 75) {
      this.setGreedLevelToHigh();
    }
    if (greedLevel <= 75 && greedLevel > 50) {
      this.setGreedLevelToMedium();
    }
    if (greedLevel <= 50 && greedLevel >= 25) {
      this.setGreedLevelToLow();
    }
  }

  decidedToSteal() {
    this.changeGreedLevel();
    this.changeStateOfHunger();
    if (this.isGreedLevelHigh) {
      return true;
    }
    if (this.isStateOfHungerHigh) {
      return true;
    }
    if (this.isGreedLevelMedium && this.isStateOfHungerMedium) {
      return true;
    }
    return false;
  }

  stealProduct(chocolateProductStorage: ProductStorage) {
    let stolenProduct: ChocolateProduct;
    if (this.decidedToSteal()) {
      chocolateProductStorage.setStateToProductRemoval();
      stolenProduct = chocolateProductStorage.workWithStorageOnce(null, getRandomProductType());
      if (stolenProduct != null || stolenProduct != undefined) {
        this.stolenChocolates.addProductToList(stolenProduct);
      }
    }
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

  produceChocolate(chocolateMaterial: ChocolateMaterial) {
    this.producedChocolateGoods.addProductToList(this.produceChocolateProduct(chocolateMaterial));
  }

  produceDarkChocolateProduct() {
    let newChocolateProduct = new ChocolateProduct();
    if (this.isWorkStateWorking()) {
      newChocolateProduct.setProductTypeToDarkChocolate();
    }
    return newChocolateProduct;
  }

  produceWhiteChocolateProduct() {
    let newChocolateProduct = new ChocolateProduct();
    newChocolateProduct.setProductTypeToWhiteChocolate();
    return newChocolateProduct;
  }

  produceMilkChocolateProduct() {
    let newChocolateProduct = new ChocolateProduct();
    newChocolateProduct.setProductTypeToMilkChocolate();
    return newChocolateProduct;
  }

  produceRubyChocolateProduct() {
    let newChocolateProduct = new ChocolateProduct();
    newChocolateProduct.setProductTypeToRubyChocolate();
    return newChocolateProduct;
  }

  packChocolateProduct(chocolateProductToPack: ChocolateProduct) {
    let packedChocolateProduct: ChocolateProduct;
    if (this.isWorkStateWorking()) {
      chocolateProductToPack.setPackedStateToPacked();
      packedChocolateProduct = chocolateProductToPack;
    }
    return packedChocolateProduct;
  }

  unpackChocolateProduct(chocolateProductToUnpack: ChocolateProduct) {
    if (this.isWorkStateWorking()) {
      chocolateProductToUnpack.unpackIt();
    }
  }

  prepareProduct(unpreparedChocolateMaterial: ChocolateMaterial) {
    if (this.isWorkStateWorking()) {
      unpreparedChocolateMaterial.setProductionStateToReadyForProduction();
      return unpreparedChocolateMaterial;
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
