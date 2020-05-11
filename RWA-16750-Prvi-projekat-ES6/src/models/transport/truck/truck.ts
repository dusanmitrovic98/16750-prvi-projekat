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
import { ChocolateProduct } from "../../chocolate-products/chocolate-product";
import { ChocolateMaterial } from "../../chocolate-materials/chocolate-material";

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
  materialCargo: ChocolateMaterialList;
  productCargo: ChocolateProductList;
  cargoMaxCapacity: number;
  state: TruckState;
  cargoWorkState: TruckCargoWorkState;

  constructor(brand: string, driver: Employee, cargoMaxCapacity: number = 10000) {
    super(0, 1400, 27.5);
    this.brand = brand;
    this.driver = driver;
    this.materialCargo = new ChocolateMaterialList();
    this.productCargo = new ChocolateProductList();
    this.cargoMaxCapacity = cargoMaxCapacity;
    this.state = TruckState.Avaible;
    this.cargoWorkState = TruckCargoWorkState.ChocolateMaterialLoading;
  }

  setBrand(brand: string) {
    this.brand = brand;
  }

  setDriver(driver: Employee) {
    this.driver = driver;
  }

  setCargoMaxCapacity(newCargoMaxCapacity: number) {
    this.cargoMaxCapacity = newCargoMaxCapacity;
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
    return this.cargoWorkState === TruckCargoWorkState.ChocolateMaterialUnloading;
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

  cargoCurrentlyOccupiedSpace() {
    return this.materialCargo.getMaterialListLength() + this.productCargo.getProductListLength();
  }

  isThereFreeSpace() {
    return this.cargoCurrentlyOccupiedSpace() < this.cargoMaxCapacity;
  }

  isCargoEmpty() {
    return this.cargoCurrentlyOccupiedSpace() == 0;
  }

  isMaterialCargoEmpty() {
    return this.materialCargo.getMaterialListLength() == 0;
  }

  isProductCargoEmpty() {
    return this.productCargo.getProductListLength() == 0;
  }

  loadOneMaterialToCargo(chocolateMaterial: ChocolateMaterial) {
    if (this.isThereFreeSpace()) {
      this.materialCargo.addMaterialToList(chocolateMaterial);
    }
  }

  unloadOneMaterialFromCargo() {
    if (!this.isMaterialCargoEmpty()) {
      return this.materialCargo.getMaterialFromList();
    }
  }

  loadOneProductToCargo(chocolateProduct: ChocolateProduct) {
    if (this.isThereFreeSpace()) {
      this.productCargo.addProductToList(chocolateProduct);
    }
  }

  unloadOneProductFromCargo() {
    if (!this.isProductCargoEmpty()) {
      return this.productCargo.getProductFromList();
    }
  }

  workWithCargoOnce(newMaterial?: ChocolateMaterial, newProduct?: ChocolateProduct) {
    if (this.isMaterialLoading()) {
      this.loadOneMaterialToCargo(newMaterial);
    } else if (this.isMaterialUnloading()) {
      return this.unloadOneMaterialFromCargo();
    } else if (this.isProductLoading()) {
      this.loadOneProductToCargo(newProduct);
    } else if (this.isProductUnloading()) {
      return this.unloadOneProductFromCargo();
    }
  }
}
