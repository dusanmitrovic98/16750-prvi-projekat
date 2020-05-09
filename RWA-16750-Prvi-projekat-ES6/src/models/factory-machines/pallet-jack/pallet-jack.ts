import { Employee } from "../../people/employee/employee";
import { ChocolateProductList } from "../../chocolate-products/chocolate-product-list";
import { ChocolateMaterialList } from "../../chocolate-materials/chocolate-material-list";

export enum PalletJackState {
    Avaible = "Avaible",
    IsUsed = "IsUsed",
    Broken = "Broken",
    InRepair = "InRepair",
    IsBeingLoaded = "IsBeingLoaded",
    IsBeingUnloaded = "IsBeingUnloaded"
}

export enum PalletJackCargoWorkState {
    ChocolateMaterialLoading = "ChocolateMaterialLoading",
    ChocolateMaterialUnloading = "ChocolateMaterialUnloading",
    ChocolateProductLoading = "ChocolateProductLoading",
    ChocolateProductUnloading = "ChocolateProductUnloading"
}

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

    setStateToAvaible() {
        this.palletJackState = PalletJackState.Avaible;
    }

    setStateToIsUsed() {
        this.palletJackState = PalletJackState.IsUsed;
    }

    setStateToBroken() {
        this.palletJackState = PalletJackState.Broken;
    }

    setStateToInRepair() {
        this.palletJackState = PalletJackState.InRepair;
    }

    setStateToIsBeingLoaded() {
        this.palletJackState = PalletJackState.IsBeingLoaded;
    }

    setStateToIsBeingUnloaded() {
        this.palletJackState = PalletJackState.IsBeingUnloaded;
    }

    setCargoWorkStateToChocolateMaterialLoading() {
        this.palletJackCargoWorkState = PalletJackCargoWorkState.ChocolateMaterialLoading;
    }

    setCargoWorkStateToChocolateMaterialUnLoading() {
        this.palletJackCargoWorkState = PalletJackCargoWorkState.ChocolateMaterialUnloading;
    }

    setCargoWorkStateToChocolateProductLoading() {
        this.palletJackCargoWorkState = PalletJackCargoWorkState.ChocolateProductLoading;
    }

    setCargoWorkStateToChocolateProductUnloading() {
        this.palletJackCargoWorkState = PalletJackCargoWorkState.ChocolateProductUnloading;
    }
}