/**
 * Add:
 * -Repair time!
 * randomDelay(1000, 5000)
 */
import { Employee } from "../../people/employee/employee";
import { Vehicle } from "../vehicle/vehicle";
import { ChocolateProductList } from "../../chocolate-products/chocolate-product-list";
import { ChocolateMaterialList } from "../../chocolate-materials/chocolate-material-list";

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
export enum TruckState {
    Avaible = "Avaible",
    InTransport = "InTransport",
    Broken = "Broken",
    InRepair = "InRepair",
    IsBeingLoaded = "IsBeingLoaded",
    IsBeingUnloaded = "IsBeingUnloaded"
}

/**
 * @enum
 * Represents Truck cargo work state. Loading or unloading, materials or products, to or from cargo
 * @param ChocolateMaterialLoading Loading chocolate materials to cargo
 * @param ChocolateMaterialUnloading Unloading chocolate materials from cargo
 * @param ChocolateProductLoading Loading chocolate products to cargo
 * @param ChocolateProductUnloading Unloading chocolate products from cargo
 */
export enum TruckCargoWorkState {
    ChocolateMaterialLoading = "ChocolateMaterialLoading",
    ChocolateMaterialUnloading = "ChocolateMaterialUnloading",
    ChocolateProductLoading = "ChocolateProductLoading",
    ChocolateProductUnloading = "ChocolateProductUnloading"
}

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
export class Truck extends Vehicle {
    brand: string;
    driver: Employee;
    cargo: ChocolateProductList | ChocolateMaterialList;
    truckState: TruckState;
    truckCargoWorkState: TruckCargoWorkState;

    constructor(brand: string, driver: Employee, cargo: ChocolateProductList | ChocolateMaterialList = new ChocolateMaterialList,
        speed: number, maxFuelTankLevel: number = 1400, fuelConsumptionPer100Km: number = 27.5, currentFuelTankLevel: number = 0,
        truckState: TruckState = TruckState.Avaible, truckCargoWorkState: TruckCargoWorkState = TruckCargoWorkState.ChocolateMaterialLoading) {
        super(speed, maxFuelTankLevel, fuelConsumptionPer100Km, currentFuelTankLevel);
        this.brand = brand;
        this.driver = driver;
        this.cargo = cargo;
        this.truckState = truckState;
        this.truckCargoWorkState = truckCargoWorkState;
    }

    /**
     * @function 
     * Sets truck state to Avaible
     */
    setStateToAvaible() {
        this.truckState = TruckState.Avaible;
    }

    /**
     * @function 
     * Sets truck state to InTransport
     */
    setStateToInTransport() {
        this.truckState = TruckState.InTransport;
    }

    /**
     * @function 
     * Sets truck state to  Broken
     */
    setStateToBroken() {
        this.truckState = TruckState.Broken;
    }

    /**
     * @function
     * Sets truck state to InRepair
     */
    setStateToInRepair() {
        this.truckState = TruckState.InRepair;
    }

    /**
     * @function 
     * Sets truck state to IsBeingLoaded
     */
    setStateToIsBeingLoaded() {
        this.truckState = TruckState.IsBeingLoaded;
    }

    /**
     * @function 
     * Sets truck state to IsBeingUnloaded
     */
    setStateToIsBeingUnloaded() {
        this.truckState = TruckState.IsBeingUnloaded;
    }
}