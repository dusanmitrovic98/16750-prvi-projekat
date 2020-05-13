import { ChocolateFactory } from "../chocolate-factory";
import { ChocolateMaterialList } from "../../chocolate-materials/chocolate-material-list";
import { ChocolateMaterialType, ChocolateMaterial } from "../../chocolate-materials/chocolate-material";
import { MaterialStorage } from "../../warehouse/material-storage";

enum ProcurementSectorState {
  WaitingForActivity = "WaitingForActivity",
  UnloadingMaterialsFromTruck = "UnloadingMaterialsFromTruck",
  ForwardsMaterialsToThePreparationSector = "ForwardsMaterialsToThePreparationSector",
}

export class ProcurementSector {
  factory: ChocolateFactory;
  materialStorage: MaterialStorage;
  state: ProcurementSectorState;

  constructor(factory: ChocolateFactory, materialStorageMaximumCapacity: number = 1500) {
    this.factory = factory;
    this.materialStorage = new MaterialStorage(materialStorageMaximumCapacity);
    this.state = ProcurementSectorState.WaitingForActivity;
  }

  setStateToWaitingForActivity() {
    this.state = ProcurementSectorState.WaitingForActivity;
  }

  setStateToUnloadingMaterialsFromTruck() {
    this.state = ProcurementSectorState.UnloadingMaterialsFromTruck;
  }

  setStateToForwardsMaterialsToThePreparationSector() {
    this.state = ProcurementSectorState.ForwardsMaterialsToThePreparationSector;
  }

  isStateWaitingForActivity() {
    return this.state === ProcurementSectorState.WaitingForActivity;
  }

  isStateUnloadingMaterialsFromTruck() {
    return this.state === ProcurementSectorState.UnloadingMaterialsFromTruck;
  }

  isStateForwardsMaterialsToThePreparationSector() {
    return this.state === ProcurementSectorState.ForwardsMaterialsToThePreparationSector;
  }

  storeOneMaterialToStorage(chocolateMaterial: ChocolateMaterial) {
    this.materialStorage.setStateToMaterialStoring();
    this.materialStorage.workWithStorageOnce(chocolateMaterial);
  }

  getOneMaterialFromStorage(chocolateMaterialType: ChocolateMaterialType) {
    this.materialStorage.setStateToMaterialRemoval();
    return this.materialStorage.workWithStorageOnce(null, chocolateMaterialType);
  }

  workWithProcurementStorageOnce(newMaterial?: ChocolateMaterial, chocolateMaterialType?: ChocolateMaterialType) {
    if (this.isStateUnloadingMaterialsFromTruck()) {
      this.storeOneMaterialToStorage(newMaterial);
    }
    if (this.isStateForwardsMaterialsToThePreparationSector()) {
      return this.getOneMaterialFromStorage(chocolateMaterialType);
    }
  }
}
