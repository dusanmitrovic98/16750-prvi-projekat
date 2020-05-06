/**
 * Add:
 * -Repair time!
 */
import Employee from "../../people/employee/employee";
import { Vehicle } from "../vehicle/vehicle";

/**
 * @param TruckState Represents trucks current state
 * @param Avaible Truck avaible for usage, ready on standby
 * @param InTransport Truck is in transport
 * @param Broken Truck is broken, repair needed
 * @param InRepair Truck in repair process
 * @param IsBeingLoaded The truck is being filled with material
 * @param IsBeingUnloaded Unloading material from the truck
 */
export enum TruckState {
    Avaible,
    InTransport,
    Broken,
    InRepair,
    IsBeingLoaded,
    IsBeingUnloaded
}

/**
 * @param {string} brand Truck brand
 * @param {TruckState} truckState Truck current state
 * @param {Employee} driver Truck driver (factory employee)
 * @param {number} speed Truck speed (km/h ... kilometers per hour)
 * @param {number} maxFuelTankLevel Truck maximum fuel level in litres. Default 1400
 * @param {number} fuelConsumptionPer100Km Truck fuel consumption level per one hundred kilometres in litres. Default 27.5
 * @param {number} currentFuelTankLevel Truck current fuel level. Default value = 0
 */
export class Truck extends Vehicle {
    brand: string;
    truckState: TruckState;

    constructor(brand: string, driver: Employee, speed: number, maxFuelTankLevel: number = 1400, fuelConsumptionPer100Km: number = 27.5, currentFuelTankLevel: number = 0) {
        super(driver, speed, maxFuelTankLevel, fuelConsumptionPer100Km, currentFuelTankLevel);
        this.brand = brand;
    }

    /**
     * @function 
     * Sets truck state to avaible
     */
    setStateToAvaible() {
        this.truckState = TruckState.Avaible;
    }

    /**
     * @function 
     * Sets truck state to in transport
     */
    setStateToInTransport() {
        this.truckState = TruckState.InTransport;
    }

    /**
     * @function 
     * Sets truck state to broken
     */
    setStateToBroken() {
        this.truckState = TruckState.Broken;
    }

    /**
     * @function
     * Sets truck state to in repair
     */
    setStateToInRepair() {
        this.truckState = TruckState.InRepair;
    }

    /**
     * @function 
     * Sets truck state to is being loaded
     */
    setStateToIsBeingLoaded() {
        this.truckState = TruckState.IsBeingLoaded;
    }

    /**
     * @function 
     * Sets truck state to is being unloaded
     */
    setStateToIsBeingUnloaded() {
        this.truckState = TruckState.IsBeingUnloaded;
    }
}