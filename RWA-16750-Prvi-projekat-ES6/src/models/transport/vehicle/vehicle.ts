import { Person } from "../../people/person/person";

/**
 * @class
 * @param driver Vehicle driver
 * @param speed Vehicle speed (km/h ... kilometers per hour)
 * @param currentFuelTankLevel Vehicle current fuel level. Default value = 0
 * @param maxFuelTankLevel Vehicle maximum fuel level in litres. 
 * @param fuelConsumptionPer100Km Vehicle fuel consumption level per one hundred kilometres in litres.
 */
export class Vehicle {
    driver: Person;
    speed: number;
    maxFuelTankLevel: number;
    fuelConsumptionPer100Km: number;
    currentFuelTankLevel: number;

    constructor(driver: Person, speed: number, maxFuelTankLevel: number, fuelConsumptionPer100Km: number, currentFuelTankLevel: number = 0) {
        this.driver = driver;
        this.speed = speed;
        this.maxFuelTankLevel = maxFuelTankLevel;
        this.fuelConsumptionPer100Km = fuelConsumptionPer100Km;
        this.currentFuelTankLevel = currentFuelTankLevel;
    }

    /**
     * @function
     * Calculates value of vehicle fuel consumption per kilometer in litres
     * @returns {number} Value of vehicle fuel consumption per kilometer in litres
     */
    fuelConsumptionPerKilometer() {
        return this.fuelConsumptionPer100Km / 100;
    }

    /**
     * @function
     * Refils fuel tank level to maximum capacity
     * @returns {number} Value of litre that was needed to refil fuel tank from current number 
     * of litres to maximum fuel tank capacity
     */
    refilFuelTankToMax() {
        let fuelUsed: number = this.maxFuelTankLevel - this.currentFuelTankLevel;
        this.currentFuelTankLevel = this.maxFuelTankLevel;
        return fuelUsed;
    }

    /**
     * @function
     * Fill vehicle fuel tank with a specified number of liters
     * @param litresToRefil Number of litres that will be refiled
     * @returns {number} Number of litres that exceeded maximum fuel tank capacity if an overrun
     * has occurred. Otherwise if there were no overdrafts 0
     */
    refilFuelTank(litresToRefil: number) {
        let tmpCurentFuelTankLevel = this.currentFuelTankLevel;
        this.currentFuelTankLevel = this.currentFuelTankLevel + litresToRefil;
        if (this.currentFuelTankLevel <= this.maxFuelTankLevel) {
            return 0;
        }
        else {
            this.currentFuelTankLevel = this.maxFuelTankLevel;
            return this.maxFuelTankLevel - tmpCurentFuelTankLevel;
        }
    }
}