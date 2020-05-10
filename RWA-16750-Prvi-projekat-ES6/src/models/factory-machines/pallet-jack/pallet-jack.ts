import { Employee } from "../../people/employee/employee";
import { ChocolateProductList } from "../../chocolate-products/chocolate-product-list";
import { ChocolateMaterialList } from "../../chocolate-materials/chocolate-material-list";
import { ChocolateMaterial } from "../../chocolate-materials/chocolate-material";
import { ChocolateProduct } from "../../chocolate-products/chocolate-product";

export enum PalletJackState {
    Avaible = "Avaible",
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
    materialCargo: ChocolateMaterialList;
    productCargo: ChocolateProductList;
    cargoMaxCapacity: number;
    state: PalletJackState;
    cargoWorkState: PalletJackCargoWorkState;

    constructor(driver: Employee, cargoMaxCapacity: number = 400) {
        this.driver = driver;
        this.cargoMaxCapacity = cargoMaxCapacity;
        this.materialCargo = new ChocolateMaterialList;
        this.productCargo = new ChocolateProductList;
        this.state = PalletJackState.Avaible;
        this.cargoWorkState = PalletJackCargoWorkState.ChocolateMaterialLoading;
    }

    setDriver(driver: Employee) {
        this.driver = driver;
    }

    setCargoMaxCapacity(newCargoMaxCapacity: number) {
        this.cargoMaxCapacity = newCargoMaxCapacity;
    }

    setStateToAvaible() {
        this.state = PalletJackState.Avaible;
    }

    setStateToBroken() {
        this.state = PalletJackState.Broken;
    }

    setStateToInRepair() {
        this.state = PalletJackState.InRepair;
    }

    setStateToIsBeingLoaded() {
        this.state = PalletJackState.IsBeingLoaded;
    }

    setStateToIsBeingUnloaded() {
        this.state = PalletJackState.IsBeingUnloaded;
    }

    isStateAvaible() {
        return this.state === PalletJackState.Avaible;
    }

    isStateBroken() {
        return this.state === PalletJackState.Broken;
    }

    isStateInRepair() {
        return this.state === PalletJackState.InRepair;
    }

    isStateIsBeingLoaded() {
        return this.state === PalletJackState.IsBeingLoaded;
    }

    isStateIsBeingUnloaded() {
        return this.state === PalletJackState.IsBeingUnloaded;
    }

    setCargoStateToChocolateMaterialLoading() {
        this.cargoWorkState = PalletJackCargoWorkState.ChocolateMaterialLoading;
    }

    setCargoStateToChocolateMaterialUnLoading() {
        this.cargoWorkState = PalletJackCargoWorkState.ChocolateMaterialUnloading;
    }

    setCargoStateToChocolateProductLoading() {
        this.cargoWorkState = PalletJackCargoWorkState.ChocolateProductLoading;
    }

    setCargoStateToChocolateProductUnloading() {
        this.cargoWorkState = PalletJackCargoWorkState.ChocolateProductUnloading;
    }

    isCargoStateChocolateMaterialLoading() {
        return this.cargoWorkState === PalletJackCargoWorkState.ChocolateMaterialLoading;
    }

    isCargoStateChocolateMaterialUnloading() {
        return this.cargoWorkState === PalletJackCargoWorkState.ChocolateMaterialUnloading;
    }

    isCargoStateChocolateProductLoading() {
        return this.cargoWorkState === PalletJackCargoWorkState.ChocolateMaterialUnloading;
    }

    isCargoStateChocolateProductUnloading() {
        return this.cargoWorkState === PalletJackCargoWorkState.ChocolateProductUnloading;
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