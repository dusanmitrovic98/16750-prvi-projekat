import { Employee } from "../../people/employee/employee";
import { ChocolateProductList } from "../../chocolate-products/chocolate-product-list";
import { ChocolateMaterialList } from "../../chocolate-materials/chocolate-material-list";

/**
 * @enum
 * Represents current Pallet Jack state
 * @param Avaible Pallet Jack is avaible, ready on standby
 * @param IsUsed Pallet Jack is in work process, employee is using it at the moment
 * @param Broken Pallet Jack is broken, repair needed
 * @param InRepair Pallet Jack in repair process
 * @param IsBeingLoaded Pallet Jack is currently being loaded
 * @param IsBeingUnloaded Pallet Jack is currently being unloaded
 */
export enum PalletJackState {
    Avaible = "Avaible",
    IsUsed = "IsUsed",
    Broken = "Broken",
    InRepair = "InRepair",
    IsBeingLoaded = "IsBeingLoaded",
    IsBeingUnloaded = "IsBeingUnloaded"
}

/**
 * @enum
 * Represents Pallet Jack work state. Loading or unloading, materials or products, to or from cargo
 * @param ChocolateMaterialLoading Loading chocolate materials to cargo
 * @param ChocolateMaterialUnloading Unloading chocolate materials from cargo
 * @param ChocolateProductLoading Loading chocolate products to cargo
 * @param ChocolateProductUnloading Unloading chocolate products from cargo
 */
export enum PalletJackCargoWorkState {
    ChocolateMaterialLoading = "ChocolateMaterialLoading",
    ChocolateMaterialUnloading = "ChocolateMaterialUnloading",
    ChocolateProductLoading = "ChocolateProductLoading",
    ChocolateProductUnloading = "ChocolateProductUnloading"
}

/**
 * @class
 * Represents Pallet Jack model
 * @param {Employee} driver Pallet Jack driver that is factory employee
 * @param {any[]} cargo Pallet Jack cargo with which it is currently loaded
 * @param {PalletJackState} palletJackState Pallet Jack current state. DefaultValue = PalletJackState.Avaible
 * @param {PalletJackCargoWorkState} palletJackCargoWorkState Pallet Jack current cargo work state. DefaultValue = 
 * PalletJackCargoWorkState.ChocolateMaterialLoading
 */
export class PalletJack {
    driver: Employee;
    cargo: ChocolateProductList | ChocolateMaterialList;
    palletJackState: PalletJackState;
    palletJackCargoWorkState: PalletJackCargoWorkState;

    constructor(driver: Employee, cargo: ChocolateProductList | ChocolateMaterialList, palletJackState: PalletJackState =
        PalletJackState.Avaible, palletJackCargoWorkState: PalletJackCargoWorkState = PalletJackCargoWorkState.ChocolateMaterialLoading) {
        this.driver = driver;
        this.cargo = cargo;
        this.palletJackState = palletJackState;
        this.palletJackCargoWorkState = palletJackCargoWorkState;
    }

    /**
     * @function
     * Sets Pallet Jack state to Avaible
     */
    setStateToAvaible() {
        this.palletJackState = PalletJackState.Avaible;
    }

    /**
     * @function
     * Sets Pallet Jack state to IsUsed
     */
    setStateToIsUsed() {
        this.palletJackState = PalletJackState.IsUsed;
    }

    /**
     * @function
     * Sets Pallet Jack state to Broken
     */
    setStateToBroken() {
        this.palletJackState = PalletJackState.Broken;
    }

    /**
     * @function 
     * Sets Pallet Jack state to InRepair
     */
    setStateToInRepair() {
        this.palletJackState = PalletJackState.InRepair;
    }

    /**
     * @function
     * Sets Pallet Jack state to IsBeingLoaded
     */
    setStateToIsBeingLoaded() {
        this.palletJackState = PalletJackState.IsBeingLoaded;
    }

    /**
     * @function
     * Sets Pallet Jack state to IsBeingUnloaded
     */
    setStateToIsBeingUnloaded() {
        this.palletJackState = PalletJackState.IsBeingUnloaded;
    }

    /**
     * @function
     * Sets Pallet Jack cargo state to ChocolateMaterialLoading
     */
    setCargoWorkStateToChocolateMaterialLoading() {
        this.palletJackCargoWorkState = PalletJackCargoWorkState.ChocolateMaterialLoading;
    }

    /**
     * @function
     * Sets Pallet Jack cargo state to ChocolateMaterialUnloading
     */
    setCargoWorkStateToChocolateMaterialUnLoading() {
        this.palletJackCargoWorkState = PalletJackCargoWorkState.ChocolateMaterialUnloading;
    }

    /**
     * @function
     * Sets Pallet Jack cargo state to ChocolateProductLoading
     */
    setCargoWorkStateToChocolateProductLoading() {
        this.palletJackCargoWorkState = PalletJackCargoWorkState.ChocolateProductLoading;
    }

    /**
     * @function
     * Sets Pallet Jack cargo state to ChocolateProductUnloading
     */
    setCargoWorkStateToChocolateProductUnloading() {
        this.palletJackCargoWorkState = PalletJackCargoWorkState.ChocolateProductUnloading;
    }
}