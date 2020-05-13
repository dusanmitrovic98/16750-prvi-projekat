import { ChocolateFactory } from "../chocolate-factory";
import { MaterialStorage } from "../../warehouse/material-storage";
import { ChocolateMaterial, ChocolateMaterialType } from "../../chocolate-materials/chocolate-material";

enum ProductionSectorState {
  WaitingForActivity = "WaitingForActivity",
  GettingPreparedMaterialsFromPreparationSector = "GettingPreparedMaterialsFromPreparationSector",
  ProductProduction = "ProductProduction",
  ForwardsProducedProductToThePackingSector = "ForwardsProducedProductToThePackingSector",
}

export class ProductionSector {
  factory: ChocolateFactory;
  preparedMaterialsStorage: MaterialStorage;
  producedProductsStorage: MaterialStorage;
  state: ProductionSectorState;

  constructor(factory: ChocolateFactory, materialStorageMaximumCapacity: number = 1500) {
    this.factory = factory;
    this.preparedMaterialsStorage = new MaterialStorage(materialStorageMaximumCapacity);
    this.preparedMaterialsStorage = new MaterialStorage(materialStorageMaximumCapacity);
    this.state = ProductionSectorState.WaitingForActivity;
  }

  setStateToWaitingForActivity() {
    this.state = ProductionSectorState.WaitingForActivity;
  }

  setStateToGettingPreparedMaterialsFromPreparationSector() {
    this.state = ProductionSectorState.GettingPreparedMaterialsFromPreparationSector;
  }

  setStateToProductProduction() {
    this.state = ProductionSectorState.ProductProduction;
  }

  setStateToForwardsProducedProductToThePackingSector() {
    this.state = ProductionSectorState.ForwardsProducedProductToThePackingSector;
  }

  isStateWaitingForActivity() {
    return this.state === ProductionSectorState.WaitingForActivity;
  }

  isStateGettingPreparedMaterialsFromPreparationSector() {
    return this.state === ProductionSectorState.GettingPreparedMaterialsFromPreparationSector;
  }

  isStateProductProduction() {
    return this.state === ProductionSectorState.ProductProduction;
  }

  isStateForwardsProducedProductToThePackingSector() {
    return this.state === ProductionSectorState.ForwardsProducedProductToThePackingSector;
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
    if (this.isStateGettingPreparedMaterialsFromPreparationSector()) {
      this.storeOnePreparedMaterialToStorage(newPreparedMaterial);
    }
    if (this.isStateProductProduction()) {
      return this.getOnePreparedMaterialFromStorage(preparedChocolateMaterialType);
    }
  }

  storeOneProducedProductToStorage(producedProductChocolate: ChocolateMaterial) {
    this.producedProductsStorage.setStateToMaterialStoring();
    this.producedProductsStorage.workWithStorageOnce(producedProductChocolate);
  }

  getOneProducedProductFromStorage(producedProductChocolateType: ChocolateMaterialType) {
    this.producedProductsStorage.setStateToMaterialRemoval();
    return this.producedProductsStorage.workWithStorageOnce(null, producedProductChocolateType);
  }

  workWithproducedProductStorageOnce(
    newProducedChocolateProduct?: ChocolateMaterial,
    producedProductChocolateType?: ChocolateMaterialType
  ) {
    if (this.isStateProductProduction() && newProducedChocolateProduct != null) {
      this.storeOneProducedProductToStorage(newProducedChocolateProduct);
    }
    if (this.isStateForwardsProducedProductToThePackingSector() && producedProductChocolateType) {
      return this.getOneProducedProductFromStorage(producedProductChocolateType);
    }
  }

  produceOneProduct(chocolateMaterialType: ChocolateMaterialType) {
    let unpreparedMaterial: ChocolateMaterial;
    unpreparedMaterial = this.workWithPreparedMaterialStorageOnce(null, chocolateMaterialType);
    unpreparedMaterial.setProductionStateToReadyForProduction();
    this.workWithPreparedMaterialStorageOnce(unpreparedMaterial);
  }
}
