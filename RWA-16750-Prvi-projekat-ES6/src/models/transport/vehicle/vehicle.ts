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

    getFuelDifference(fuelTankLevelToCheck?: number) {
        if (fuelTankLevelToCheck) {
            return this.maxFuelTankLevel - fuelTankLevelToCheck;
        } else {
            return this.maxFuelTankLevel - this.currentFuelTankLevel;
        }
    }

    refilFuelTankToMaximum() {
        let fuelUsed: number = this.getFuelDifference()
        this.setCurrentFuelTankLevel(this.maxFuelTankLevel);
        return fuelUsed;
    }

    isCurrentLowerOrEqualThanMaximumTankFuelLevel() {
        return this.currentFuelTankLevel <= this.maxFuelTankLevel;
    }

    refilFuelTank(litresToRefil: number) {
        let tmpCurentFuelTankLevel = this.getCurrentFuelTankLevel();
        this.setCurrentFuelTankLevel(this.getCurrentFuelTankLevel() + litresToRefil);
        if (this.isCurrentLowerOrEqualThanMaximumTankFuelLevel()) {
            return 0;
        }
        else {
            this.setCurrentFuelTankLevel(this.maxFuelTankLevel);
            return this.getFuelDifference(tmpCurentFuelTankLevel);
        }
    }
}