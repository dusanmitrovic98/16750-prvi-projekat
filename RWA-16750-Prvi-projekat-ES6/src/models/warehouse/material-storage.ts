import { ChocolateMaterialType, ChocolateMaterial } from "../chocolate-materials/chocolate-material";
import { ChocolateMaterialList } from "../chocolate-materials/chocolate-material-list";

enum MaterialStorageState {
  MaterialsStoring = "MaterialsStoring",
  MaterialsRemoval = "MaterialsRemoval",
}

export class MaterialStorage {
  darkChocolateMaterialStorage: ChocolateMaterialList;
  whiteChocolateMaterialStorage: ChocolateMaterialList;
  milkChocolateMaterialStorage: ChocolateMaterialList;
  rubyChocolateMaterialStorage: ChocolateMaterialList;
  materialStorageMaximumCapacity: number;
  state: MaterialStorageState;

  constructor(materialStorageMaximumCapacity: number = 5000) {
    this.darkChocolateMaterialStorage = new ChocolateMaterialList();
    this.whiteChocolateMaterialStorage = new ChocolateMaterialList();
    this.milkChocolateMaterialStorage = new ChocolateMaterialList();
    this.rubyChocolateMaterialStorage = new ChocolateMaterialList();
    this.materialStorageMaximumCapacity = materialStorageMaximumCapacity;
    this.state = MaterialStorageState.MaterialsStoring;
  }

  setStateToMaterialStoring() {
    this.state = MaterialStorageState.MaterialsStoring;
  }

  setStateToMaterialRemoval() {
    this.state = MaterialStorageState.MaterialsRemoval;
  }

  isStateMaterialStoring() {
    return this.state === MaterialStorageState.MaterialsStoring;
  }

  isStateMaterialRemoval() {
    return this.state === MaterialStorageState.MaterialsRemoval;
  }

  getDarkChocolateMaterialStorageListLength() {
    return this.darkChocolateMaterialStorage.getMaterialListLength();
  }

  getWhiteChocolateMaterialStorageListLength() {
    return this.whiteChocolateMaterialStorage.getMaterialListLength();
  }

  getMilkChocolateMaterialStorageListLength() {
    return this.milkChocolateMaterialStorage.getMaterialListLength();
  }

  getRubyChocolateMaterialStorageListLength() {
    return this.rubyChocolateMaterialStorage.getMaterialListLength();
  }

  getMaterialStorageCurrentlyOccupiedSpace() {
    let materialStorageSpace: number = 0;
    materialStorageSpace += this.getDarkChocolateMaterialStorageListLength();
    materialStorageSpace += this.getWhiteChocolateMaterialStorageListLength();
    materialStorageSpace += this.getMilkChocolateMaterialStorageListLength();
    materialStorageSpace += this.getRubyChocolateMaterialStorageListLength();
    return materialStorageSpace;
  }

  isThereFreeSpace() {
    return this.getMaterialStorageCurrentlyOccupiedSpace() < this.materialStorageMaximumCapacity;
  }

  isMaterialStorageEmpty() {
    return this.getMaterialStorageCurrentlyOccupiedSpace() == 0;
  }

  isDarkChocolateMaterialStorageEmpty() {
    return this.getDarkChocolateMaterialStorageListLength() == 0;
  }

  isWhiteChocolateMaterialStorageEmpty() {
    return this.getWhiteChocolateMaterialStorageListLength() == 0;
  }

  isMilkChocolateMaterialStorageEmpty() {
    return this.getMilkChocolateMaterialStorageListLength() == 0;
  }

  isRubyChocolateMaterialStorageEmpty() {
    return this.getRubyChocolateMaterialStorageListLength() == 0;
  }

  storeOneDarkChocolateMaterialToStorage(chocolateMaterial: ChocolateMaterial) {
    if (this.isThereFreeSpace()) {
      this.darkChocolateMaterialStorage.addMaterialToList(chocolateMaterial);
    }
  }

  storeOneWhiteChocolateMaterialToStorage(chocolateMaterial: ChocolateMaterial) {
    if (this.isThereFreeSpace()) {
      this.whiteChocolateMaterialStorage.addMaterialToList(chocolateMaterial);
    }
  }

  storeOneMilkChocolateMaterialToStorage(chocolateMaterial: ChocolateMaterial) {
    if (this.isThereFreeSpace()) {
      this.milkChocolateMaterialStorage.addMaterialToList(chocolateMaterial);
    }
  }

  storeOneRubyChocolateMaterialToStorage(chocolateMaterial: ChocolateMaterial) {
    if (this.isThereFreeSpace()) {
      this.rubyChocolateMaterialStorage.addMaterialToList(chocolateMaterial);
    }
  }

  storeOneMaterialToStorage(chocolateMaterial: ChocolateMaterial) {
    if (chocolateMaterial.isMaterialTypeDarkChocolateMaterial()) {
      this.storeOneDarkChocolateMaterialToStorage(chocolateMaterial);
    }
    if (chocolateMaterial.isMaterialTypeWhiteChocolateMaterial()) {
      this.storeOneWhiteChocolateMaterialToStorage(chocolateMaterial);
    }
    if (chocolateMaterial.isMaterialTypeMilkChocolateMaterial()) {
      this.storeOneMilkChocolateMaterialToStorage(chocolateMaterial);
    }
    if (chocolateMaterial.isMaterialTypeRubyChocolateMaterial()) {
      this.storeOneRubyChocolateMaterialToStorage(chocolateMaterial);
    }
  }

  getOneDarkChocolateMaterialFromStorage() {
    if (!this.isDarkChocolateMaterialStorageEmpty()) {
      return this.darkChocolateMaterialStorage.getMaterialFromList();
    }
  }

  getOneWhiteChocolateMaterialFromStorage() {
    if (!this.isWhiteChocolateMaterialStorageEmpty()) {
      return this.whiteChocolateMaterialStorage.getMaterialFromList();
    }
  }

  getOneMilkChocolateMaterialFromStorage() {
    if (!this.isMilkChocolateMaterialStorageEmpty()) {
      return this.milkChocolateMaterialStorage.getMaterialFromList();
    }
  }

  getOneRubyChocolateMaterialFromStorage() {
    if (!this.isRubyChocolateMaterialStorageEmpty()) {
      return this.rubyChocolateMaterialStorage.getMaterialFromList();
    }
  }

  getOneMaterialFromStorage(chocolateMaterialType: ChocolateMaterialType) {
    if (chocolateMaterialType === ChocolateMaterialType.DarkChocolateMaterial) {
      return this.getOneDarkChocolateMaterialFromStorage();
    }
    if (chocolateMaterialType === ChocolateMaterialType.WhiteChocolateMaterial) {
      return this.getOneWhiteChocolateMaterialFromStorage();
    }
    if (chocolateMaterialType === ChocolateMaterialType.MilkChocolateMaterial) {
      this.getOneMilkChocolateMaterialFromStorage();
    }
    if (chocolateMaterialType === ChocolateMaterialType.RubyChocolateMaterial) {
      return this.getOneRubyChocolateMaterialFromStorage();
    }
    return null;
  }

  workWithStorageOnce(newMaterial?: ChocolateMaterial, chocolateMaterialType?: ChocolateMaterialType) {
    if (this.isStateMaterialStoring() && newMaterial != null) {
      this.storeOneMaterialToStorage(newMaterial);
    }
    if (this.isStateMaterialRemoval() && chocolateMaterialType) {
      return this.getOneMaterialFromStorage(chocolateMaterialType);
    }
  }
}
