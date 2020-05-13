/**
 * Add:
 * -Repair time!
 * randomDelay(1000, 5000)
 *
 *
 * --------------
 *
 *
 *
 * dok se puni radnik je na pauzi
 *
 *
 *
 * check multiple loading unloading
 */
import { Employee } from "../../people/employee/employee";
import { Vehicle } from "../vehicle/vehicle";
import { ChocolateProductList } from "../../chocolate-products/chocolate-product-list";
import { ChocolateMaterialList } from "../../chocolate-materials/chocolate-material-list";
import { ChocolateProduct, ChocolateProductType } from "../../chocolate-products/chocolate-product";
import { ChocolateMaterial, ChocolateMaterialType } from "../../chocolate-materials/chocolate-material";

export enum TruckState {
  Avaible = "Avaible",
  InTransport = "InTransport",
  Broken = "Broken",
  InRepair = "InRepair",
  IsBeingLoaded = "IsBeingLoaded",
  IsBeingUnloaded = "IsBeingUnloaded",
}

export enum TruckCargoWorkState {
  ChocolateMaterialLoading = "ChocolateMaterialLoading",
  ChocolateMaterialUnloading = "ChocolateMaterialUnloading",
  ChocolateProductLoading = "ChocolateProductLoading",
  ChocolateProductUnloading = "ChocolateProductUnloading",
}

export class Truck extends Vehicle {
  brand: string;
  driver: Employee;
  darkChocolateMaterialCargo: ChocolateMaterialList;
  whiteChocolateMaterialCargo: ChocolateMaterialList;
  milkChocolateMaterialCargo: ChocolateMaterialList;
  rubyChocolateMaterialCargo: ChocolateMaterialList;
  darkChocolateProductCargo: ChocolateProductList;
  whiteChocolateProductCargo: ChocolateProductList;
  milkChocolateProductCargo: ChocolateProductList;
  rubyChocolateProductCargo: ChocolateProductList;
  maximumCargoCapacity: number;
  state: TruckState;
  cargoWorkState: TruckCargoWorkState;

  constructor(brand: string, driver: Employee, maximumCargoCapacity: number = 10000) {
    super(0, 1400, 27.5);
    this.brand = brand;
    this.driver = driver;
    this.darkChocolateMaterialCargo = new ChocolateMaterialList();
    this.whiteChocolateMaterialCargo = new ChocolateMaterialList();
    this.milkChocolateMaterialCargo = new ChocolateMaterialList();
    this.rubyChocolateMaterialCargo = new ChocolateMaterialList();
    this.darkChocolateProductCargo = new ChocolateProductList();
    this.whiteChocolateProductCargo = new ChocolateProductList();
    this.milkChocolateProductCargo = new ChocolateProductList();
    this.rubyChocolateProductCargo = new ChocolateProductList();
    this.maximumCargoCapacity = maximumCargoCapacity;
    this.state = TruckState.Avaible;
    this.cargoWorkState = TruckCargoWorkState.ChocolateMaterialLoading;
  }

  setBrand(brand: string) {
    this.brand = brand;
  }

  setDriver(driver: Employee) {
    this.driver = driver;
  }

  setCargoMaxCapacity(newMaximumCargoCapacity: number) {
    this.maximumCargoCapacity = newMaximumCargoCapacity;
  }

  setStateToAvaible() {
    this.state = TruckState.Avaible;
  }

  setStateToInTransport() {
    this.state = TruckState.InTransport;
  }

  setStateToBroken() {
    this.state = TruckState.Broken;
  }

  setStateToInRepair() {
    this.state = TruckState.InRepair;
  }

  setStateToIsBeingLoaded() {
    this.state = TruckState.IsBeingLoaded;
  }

  setStateToIsBeingUnloaded() {
    this.state = TruckState.IsBeingUnloaded;
  }

  isStateAvaible() {
    return this.state === TruckState.Avaible;
  }

  isStateInTransport() {
    return this.state === TruckState.InTransport;
  }

  isStateBroken() {
    return this.state === TruckState.Broken;
  }

  isStateInRepair() {
    return this.state === TruckState.InRepair;
  }

  isStateIsBeingLoaded() {
    return this.state === TruckState.IsBeingLoaded;
  }

  isStateIsBeingUnloaded() {
    return this.state === TruckState.IsBeingUnloaded;
  }

  setCargoStateToChocolateMaterialLoading() {
    this.cargoWorkState = TruckCargoWorkState.ChocolateMaterialLoading;
  }

  setCargoStateToChocolateMaterialUnLoading() {
    this.cargoWorkState = TruckCargoWorkState.ChocolateMaterialUnloading;
  }

  setCargoStateToChocolateProductLoading() {
    this.cargoWorkState = TruckCargoWorkState.ChocolateProductLoading;
  }

  setCargoStateToChocolateProductUnloading() {
    this.cargoWorkState = TruckCargoWorkState.ChocolateProductUnloading;
  }

  isCargoStateChocolateMaterialLoading() {
    return this.cargoWorkState === TruckCargoWorkState.ChocolateMaterialLoading;
  }

  isCargoStateChocolateMaterialUnloading() {
    return this.cargoWorkState === TruckCargoWorkState.ChocolateMaterialUnloading;
  }

  isCargoStateChocolateProductLoading() {
    return this.cargoWorkState === TruckCargoWorkState.ChocolateProductLoading;
  }

  isCargoStateChocolateProductUnloading() {
    return this.cargoWorkState === TruckCargoWorkState.ChocolateProductUnloading;
  }

  isMaterialLoading() {
    return this.isCargoStateChocolateMaterialLoading() && this.isStateIsBeingLoaded();
  }

  isMaterialUnloading() {
    return this.isCargoStateChocolateMaterialUnloading() && this.isStateIsBeingUnloaded();
  }

  isProductLoading() {
    return this.isCargoStateChocolateProductLoading() && this.isStateIsBeingLoaded();
  }

  isProductUnloading() {
    return this.isCargoStateChocolateProductUnloading() && this.isStateIsBeingUnloaded();
  }

  getDarkChocolateMaterialCargoListLength() {
    return this.darkChocolateMaterialCargo.getMaterialListLength();
  }

  getWhiteChocolateMaterialCargoListLength() {
    return this.whiteChocolateMaterialCargo.getMaterialListLength();
  }

  getMilkChocolateMaterialCargoListLength() {
    return this.milkChocolateMaterialCargo.getMaterialListLength();
  }

  getRubyChocolateMaterialCargoListLength() {
    return this.rubyChocolateMaterialCargo.getMaterialListLength();
  }

  getDarkChocolateProductCargoListLength() {
    return this.darkChocolateProductCargo.getProductListLength();
  }

  getWhiteChocolateProductCargoListLength() {
    return this.whiteChocolateProductCargo.getProductListLength();
  }

  getMilkChocolateProductCargoListLength() {
    return this.milkChocolateProductCargo.getProductListLength();
  }

  getRubyChocolateProductCargoListLength() {
    return this.rubyChocolateProductCargo.getProductListLength();
  }

  getMaterialCargoCurrentlyOccupiedSpace() {
    let materialCargoSpace: number = 0;
    materialCargoSpace += this.getDarkChocolateMaterialCargoListLength();
    materialCargoSpace += this.getWhiteChocolateMaterialCargoListLength();
    materialCargoSpace += this.getMilkChocolateMaterialCargoListLength();
    materialCargoSpace += this.getRubyChocolateMaterialCargoListLength();
    return materialCargoSpace;
  }

  getProductCargoCurrentlyOcuppiedSpace() {
    let productCargoSpace: number = 0;
    productCargoSpace += this.getDarkChocolateProductCargoListLength();
    productCargoSpace += this.getWhiteChocolateProductCargoListLength();
    productCargoSpace += this.getMilkChocolateProductCargoListLength();
    productCargoSpace += this.getRubyChocolateProductCargoListLength();
    return productCargoSpace;
  }

  cargoCurrentlyOccupiedSpace() {
    let materialCargoSpace: number = this.getMaterialCargoCurrentlyOccupiedSpace();
    let productCargoSpace: number = this.getProductCargoCurrentlyOcuppiedSpace();
    return materialCargoSpace + productCargoSpace;
  }

  isThereFreeSpace() {
    return this.cargoCurrentlyOccupiedSpace() < this.maximumCargoCapacity;
  }

  isCargoEmpty() {
    return this.cargoCurrentlyOccupiedSpace() == 0;
  }

  isMaterialCargoEmpty() {
    return this.getMaterialCargoCurrentlyOccupiedSpace() == 0;
  }

  isProductCargoEmpty() {
    return this.getProductCargoCurrentlyOcuppiedSpace() == 0;
  }

  isDarkChocolateMaterialCargoEmpty() {
    return this.getDarkChocolateMaterialCargoListLength() == 0;
  }

  isWhiteChocolateMaterialCargoEmpty() {
    return this.getWhiteChocolateMaterialCargoListLength() == 0;
  }

  isMilkChocolateMaterialCargoEmpty() {
    return this.getMilkChocolateMaterialCargoListLength() == 0;
  }

  isRubyChocolateMaterialCargoEmpty() {
    return this.getRubyChocolateMaterialCargoListLength() == 0;
  }

  isDarkChocolateProductCargoEmpty() {
    return this.getDarkChocolateProductCargoListLength() == 0;
  }

  isWhiteChocolateProductCargoEmpty() {
    return this.getWhiteChocolateProductCargoListLength() == 0;
  }

  isMilkChocolateProductCargoEmpty() {
    return this.getMilkChocolateProductCargoListLength() == 0;
  }

  isRubyChocolateProductCargoEmpty() {
    return this.getRubyChocolateProductCargoListLength() == 0;
  }

  loadOneDarkChocolateMaterialToCargo(chocolateMaterial: ChocolateMaterial) {
    if (this.isThereFreeSpace()) {
      this.darkChocolateMaterialCargo.addMaterialToList(chocolateMaterial);
    }
  }

  loadOneWhiteChocolateMaterialToCargo(chocolateMaterial: ChocolateMaterial) {
    if (this.isThereFreeSpace()) {
      this.whiteChocolateMaterialCargo.addMaterialToList(chocolateMaterial);
    }
  }

  loadOneMilkChocolateMaterialToCargo(chocolateMaterial: ChocolateMaterial) {
    if (this.isThereFreeSpace()) {
      this.milkChocolateMaterialCargo.addMaterialToList(chocolateMaterial);
    }
  }

  loadOneRubyChocolateMaterialToCargo(chocolateMaterial: ChocolateMaterial) {
    if (this.isThereFreeSpace()) {
      this.rubyChocolateMaterialCargo.addMaterialToList(chocolateMaterial);
    }
  }

  loadOneMaterialToCargo(chocolateMaterial: ChocolateMaterial) {
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
  }

  loadOneDarkChocolateProductToCargo(chocolateProduct: ChocolateProduct) {
    if (this.isThereFreeSpace()) {
      this.darkChocolateProductCargo.addProductToList(chocolateProduct);
    }
  }

  loadOneWhiteChocolateProductToCargo(chocolateProduct: ChocolateProduct) {
    if (this.isThereFreeSpace()) {
      this.whiteChocolateProductCargo.addProductToList(chocolateProduct);
    }
  }

  loadOneMilkChocolateProductToCargo(chocolateProduct: ChocolateProduct) {
    if (this.isThereFreeSpace()) {
      this.milkChocolateProductCargo.addProductToList(chocolateProduct);
    }
  }

  loadOneRubyChocolateProductToCargo(chocolateProduct: ChocolateProduct) {
    if (this.isThereFreeSpace()) {
      this.rubyChocolateProductCargo.addProductToList(chocolateProduct);
    }
  }

  loadOneProductToCargo(chocolateProduct: ChocolateProduct) {
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
  }

  unloadOneDarkChocolateMaterialFromCargo() {
    if (!this.isDarkChocolateMaterialCargoEmpty()) {
      return this.darkChocolateMaterialCargo.getMaterialFromList();
    }
  }

  unloadOneWhiteChocolateMaterialFromCargo() {
    if (!this.isWhiteChocolateMaterialCargoEmpty()) {
      return this.whiteChocolateMaterialCargo.getMaterialFromList();
    }
  }

  unloadOneMilkChocolateMaterialFromCargo() {
    if (!this.isMilkChocolateMaterialCargoEmpty()) {
      return this.milkChocolateMaterialCargo.getMaterialFromList();
    }
  }

  unloadOneRubyChocolateMaterialFromCargo() {
    if (!this.isRubyChocolateMaterialCargoEmpty()) {
      return this.rubyChocolateMaterialCargo.getMaterialFromList();
    }
  }

  unloadOneMaterialFromCargo(chocolateMaterialType: ChocolateMaterialType) {
    if (chocolateMaterialType === ChocolateMaterialType.DarkChocolateMaterial) {
      return this.unloadOneDarkChocolateMaterialFromCargo();
    }
    if (chocolateMaterialType === ChocolateMaterialType.WhiteChocolateMaterial) {
      return this.unloadOneWhiteChocolateMaterialFromCargo();
    }
    if (chocolateMaterialType === ChocolateMaterialType.MilkChocolateMaterial) {
      this.unloadOneMilkChocolateMaterialFromCargo();
    }
    if (chocolateMaterialType === ChocolateMaterialType.RubyChocolateMaterial) {
      return this.unloadOneRubyChocolateMaterialFromCargo();
    }
    return null;
  }

  unloadOneDarkChocolateProductFromCargo() {
    if (!this.isDarkChocolateProductCargoEmpty()) {
      return this.darkChocolateProductCargo.getProductFromList();
    }
  }

  unloadOneWhiteChocolateProductFromCargo() {
    if (!this.isWhiteChocolateProductCargoEmpty()) {
      return this.whiteChocolateProductCargo.getProductFromList();
    }
  }

  unloadOneMilkChocolateProductFromCargo() {
    if (!this.isMilkChocolateProductCargoEmpty()) {
      return this.milkChocolateProductCargo.getProductFromList();
    }
  }

  unloadOneRubyChocolateProductFromCargo() {
    if (!this.isMilkChocolateProductCargoEmpty()) {
      return this.milkChocolateProductCargo.getProductFromList();
    }
  }

  unloadOneProductFromCargo(chocolateProductType: ChocolateProductType) {
    if (chocolateProductType === ChocolateProductType.DarkChocolate) {
      return this.unloadOneDarkChocolateProductFromCargo();
    }
    if (chocolateProductType === ChocolateProductType.WhiteChocolate) {
      return this.unloadOneWhiteChocolateProductFromCargo();
    }
    if (chocolateProductType === ChocolateProductType.MilkChocolate) {
      this.unloadOneMilkChocolateProductFromCargo();
    }
    if (chocolateProductType === ChocolateProductType.RubyChocolate) {
      return this.unloadOneRubyChocolateProductFromCargo();
    }
    return null;
  }

  workWithCargoOnce(
    newMaterial?: ChocolateMaterial,
    newProduct?: ChocolateProduct,
    chocolateMaterialType?: ChocolateMaterialType,
    chocolateProductType?: ChocolateProductType
  ) {
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
  }
}
