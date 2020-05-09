/**
 * Add:
 * -Repair time!
 * randomDelay(1000, 5000)
 */
import { Employee } from "../../people/employee/employee";
import { Vehicle } from "../vehicle/vehicle";
import { ChocolateProductList } from "../../chocolate-products/chocolate-product-list";
import { ChocolateMaterialList } from "../../chocolate-materials/chocolate-material-list";
import { ChocolateProduct } from "../../chocolate-products/chocolate-product";

export enum TruckState {
    Avaible = "Avaible",
    InTransport = "InTransport",
    Broken = "Broken",
    InRepair = "InRepair",
    IsBeingLoaded = "IsBeingLoaded",
    IsBeingUnloaded = "IsBeingUnloaded"
}

export enum TruckCargoWorkState {
    ChocolateMaterialLoading = "ChocolateMaterialLoading",
    ChocolateMaterialUnloading = "ChocolateMaterialUnloading",
    ChocolateProductLoading = "ChocolateProductLoading",
    ChocolateProductUnloading = "ChocolateProductUnloading"
}

export class Truck extends Vehicle {
    brand: string;
    driver: Employee;
    cargo: ChocolateProductList | ChocolateMaterialList;
    truckState: TruckState;
    truckCargoWorkState: TruckCargoWorkState;

    constructor(driver: Employee,
        speed: number, maxFuelTankLevel: number = 1400, fuelConsumptionPer100Km: number = 27.5) {
        super(speed, maxFuelTankLevel, fuelConsumptionPer100Km);
        this.brand = "";
        this.driver = driver;
        this.cargo = new ChocolateMaterialList;

        this.currentFuelTankLevel = 0;
        this.truckState = TruckState.Avaible;
        this.truckCargoWorkState = TruckCargoWorkState.ChocolateMaterialLoading;
    }

    setBrand(brand: string) {
        this.brand = brand;
    }

    setDriver(driver: Employee) {
        this.driver = driver;
    }

    setCargoType(cargo: ChocolateMaterialList | ChocolateProductList) {
        this.cargo = cargo;
    }

    setTruckState(truckState: TruckState) {
        this.truckState = truckState;
    }

    setTruckCargoWorkState(truckCargoWorkState: TruckCargoWorkState) {
        this.truckCargoWorkState = truckCargoWorkState;
    }

    setStateToAvaible() {
        this.truckState = TruckState.Avaible;
    }

    setStateToInTransport() {
        this.truckState = TruckState.InTransport;
    }

    setStateToBroken() {
        this.truckState = TruckState.Broken;
    }

    setStateToInRepair() {
        this.truckState = TruckState.InRepair;
    }

    setStateToIsBeingLoaded() {
        this.truckState = TruckState.IsBeingLoaded;
    }

    setStateToIsBeingUnloaded() {
        this.truckState = TruckState.IsBeingUnloaded;
    }
}