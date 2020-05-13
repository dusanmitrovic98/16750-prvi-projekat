import { ChocolateFactory } from "../chocolate-factory";
import { MaterialStorage } from "../../warehouse/material-storage";
import { ChocolateMaterial, ChocolateMaterialType } from "../../chocolate-materials/chocolate-material";
import { Observable } from "rxjs";

enum PreparationSectorState {
  WaitingForActivity = "WaitingForActivity",
  GettingUnpreparedMaterialsFromProcurementSector = "GettingUnpreparedMaterialsFromProcurementSector",
  PreparingUnpreparedMaterials = "PreparingUnpreparedMaterials",
  ForwardsPreparedMaterialsToTheProductionSector = "ForwardsMaterialsToThePreparationSector",
}

export class ProcurementSector {
  factory: ChocolateFactory;
  unpreparedMaterialsStorage: MaterialStorage;
  preparedMaterialsStorage: MaterialStorage;
  state: PreparationSectorState;

  constructor(factory: ChocolateFactory, materialStorageMaximumCapacity: number = 1500) {
    this.factory = factory;
    this.unpreparedMaterialsStorage = new MaterialStorage(materialStorageMaximumCapacity);
    this.preparedMaterialsStorage = new MaterialStorage(materialStorageMaximumCapacity);
    this.state = PreparationSectorState.WaitingForActivity;
  }

  setStateToWaitingForActivity() {
    this.state = PreparationSectorState.WaitingForActivity;
  }

  setStateToGettingUnpreparedMaterialsFromProcurementSector() {
    this.state = PreparationSectorState.GettingUnpreparedMaterialsFromProcurementSector;
  }

  setStateToPreparingUnpreparedMaterials() {
    this.state = PreparationSectorState.PreparingUnpreparedMaterials;
  }

  setStateToForwardsPreparedMaterialsToTheProductionSector() {
    this.state = PreparationSectorState.ForwardsPreparedMaterialsToTheProductionSector;
  }

  isStateWaitingForActivity() {
    return this.state === PreparationSectorState.WaitingForActivity;
  }

  isStateGettingUnpreparedMaterialsFromProcurementSector() {
    return this.state === PreparationSectorState.GettingUnpreparedMaterialsFromProcurementSector;
  }

  isStatePreparingUnpreparedMaterials() {
    return this.state === PreparationSectorState.PreparingUnpreparedMaterials;
  }

  isStateForwardsPreparedMaterialsToTheProductionSector() {
    return this.state === PreparationSectorState.ForwardsPreparedMaterialsToTheProductionSector;
  }

  storeOneUnpreparedMaterialToStorage(unpreparedChocolateMaterial: ChocolateMaterial) {
    this.unpreparedMaterialsStorage.setStateToMaterialStoring();
    this.unpreparedMaterialsStorage.workWithStorageOnce(unpreparedChocolateMaterial);
  }

  getOneUnpreparedMaterialFromStorage(chocolateMaterialType: ChocolateMaterialType) {
    this.unpreparedMaterialsStorage.setStateToMaterialRemoval();
    return this.unpreparedMaterialsStorage.workWithStorageOnce(null, chocolateMaterialType);
  }

  workWithUnpreparedMaterialStorageOnce(
    newMaterial?: ChocolateMaterial,
    chocolateMaterialType?: ChocolateMaterialType
  ) {
    if (this.isStateGettingUnpreparedMaterialsFromProcurementSector()) {
      this.storeOneUnpreparedMaterialToStorage(newMaterial);
    }
    if (this.isStatePreparingUnpreparedMaterials()) {
      return this.getOneUnpreparedMaterialFromStorage(chocolateMaterialType);
    }
  }

  storeOnePreparedMaterialToStorage(preparedChocolateMaterial: ChocolateMaterial) {
    this.preparedMaterialsStorage.setStateToMaterialStoring();
    this.preparedMaterialsStorage.workWithStorageOnce(preparedChocolateMaterial);
  }

  getOnePreparedMaterialFromStorage(preparedChocolateMaterialType: ChocolateMaterialType) {
    this.preparedMaterialsStorage.setStateToMaterialRemoval();
    return this.preparedMaterialsStorage.workWithStorageOnce(null, preparedChocolateMaterialType);
  }

  workWithPreparedMaterialStorageOnce(
    newPreparedMaterial?: ChocolateMaterial,
    preparedChocolateMaterialType?: ChocolateMaterialType
  ) {
    if (this.isStatePreparingUnpreparedMaterials()) {
      this.storeOnePreparedMaterialToStorage(newPreparedMaterial);
    }
    if (this.isStateForwardsPreparedMaterialsToTheProductionSector()) {
      return this.getOnePreparedMaterialFromStorage(preparedChocolateMaterialType);
    }
  }

  preparingOneUnpreparedMaterial(chocolateMaterialType: ChocolateMaterialType) {
    let unpreparedMaterial: ChocolateMaterial;
    unpreparedMaterial = this.workWithUnpreparedMaterialStorageOnce(null, chocolateMaterialType);
    unpreparedMaterial.setProductionStateToReadyForProduction();
    this.workWithPreparedMaterialStorageOnce(unpreparedMaterial);
  }
}
