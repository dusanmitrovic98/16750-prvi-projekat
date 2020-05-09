export class Vehicle {
    speed: number;
    maxFuelTankLevel: number;
    fuelConsumptionPer100Km: number;
    currentFuelTankLevel: number;

    constructor(speed: number, maxFuelTankLevel: number, fuelConsumptionPer100Km: number) {
        this.speed = speed;
        this.maxFuelTankLevel = maxFuelTankLevel;
        this.fuelConsumptionPer100Km = fuelConsumptionPer100Km;
        this.currentFuelTankLevel = 0;
    }

    setCurrentFuelTankLevel(newCurrentFuelTankLevel: number) {
        this.currentFuelTankLevel = newCurrentFuelTankLevel;
    }

    getCurrentFuelTankLevel() {
        return this.currentFuelTankLevel;
    }

    fuelConsumptionPerKilometer() {
        return this.fuelConsumptionPer100Km / 100;
    }

    getFuelDifference() {
        return this.maxFuelTankLevel - this.currentFuelTankLevel;
    }

    refilFuelTankToMaximum() {
        let fuelUsed: number = this.getFuelDifference()
        this.setCurrentFuelTankLevel(this.maxFuelTankLevel);
        return fuelUsed;
    }

    refilFuelTank(litresToRefil: number) {
        let tmpCurentFuelTankLevel = this.currentFuelTankLevel;
        this.setCurrentFuelTankLevel(this.currentFuelTankLevel + litresToRefil);
        if (this.currentFuelTankLevel <= this.maxFuelTankLevel) {
            return 0;
        }
        else {
            this.setCurrentFuelTankLevel(this.maxFuelTankLevel);
            return this.maxFuelTankLevel - tmpCurentFuelTankLevel;
        }
    }
}