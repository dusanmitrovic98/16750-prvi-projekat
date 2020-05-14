import { ChocolateMaterialList } from "../chocolate-materials/chocolate-material-list";
import { ChocolateProductList } from "../chocolate-products/chocolate-product-list";
import { ChocolateMaterial, ChocolateMaterialType } from "../chocolate-materials/chocolate-material";
import { ChocolateProduct, ChocolateProductType } from "../chocolate-products/chocolate-product";
import { MaterialStorage } from "./material-storage";
import { ProductStorage } from "./product-storage";

enum WarehouseState {
  WaitingForActivity = "WaitingForActivity",
  MaterialStoring = "MaterialStoring",
  MaterialRemoval = "MaterialRemoval",
  ProductStoring = "ProductStoring",
  ProductRemoval = "ProductRemoval",
}

export class Warehouse {
  id: number;
  materialStorage: MaterialStorage;
  productStorage: ProductStorage;
  maximumCapacity: number;
  state: WarehouseState;

  constructor(maximumCapacity: number = 100000) {
    this.id = undefined;
    this.materialStorage = new MaterialStorage();
    this.productStorage = new ProductStorage();
    this.maximumCapacity = maximumCapacity;
    this.state = WarehouseState.WaitingForActivity;
  }

  setId(id: number) {
    this.id = id;
  }

  getId() {
    return this.id;
  }

  setMaximumCapacity(maximumCapacity: number) {
    this.maximumCapacity = maximumCapacity;
  }

  getMaximumCapacity() {
    return this.maximumCapacity;
  }

  setStateToWaitingForActivity() {
    this.state = WarehouseState.WaitingForActivity;
  }

  setStateToMaterialStoring() {
    this.state = WarehouseState.MaterialStoring;
  }

  setStateToMaterialRemoval() {
    this.state = WarehouseState.MaterialRemoval;
  }

  setStateToProductStoring() {
    this.state = WarehouseState.ProductStoring;
  }

  setStateToProductRemoval() {
    this.state = WarehouseState.ProductRemoval;
  }

  isStateWaitingForActivity() {
    return this.state === WarehouseState.WaitingForActivity;
  }

  isStateMaterialStoring() {
    return this.state === WarehouseState.MaterialStoring;
  }

  isStateMaterialRemoval() {
    return this.state === WarehouseState.MaterialRemoval;
  }

  iStateProductStoring() {
    return this.state === WarehouseState.ProductStoring;
  }

  isStateProductRemoval() {
    return this.state === WarehouseState.ProductRemoval;
  }

  getMaterialStorageCurrentlyOccupiedSpace() {
    return this.materialStorage.getMaterialStorageCurrentlyOccupiedSpace();
  }

  getProductStorageCurrentlyOccupiedSpace() {
    return this.productStorage.getProductStorageCurrentlyOccupiedSpace();
  }

  getWarehouseCurrentlyOcuppiedSpace() {
    return this.getMaterialStorageCurrentlyOccupiedSpace() + this.getProductStorageCurrentlyOccupiedSpace();
  }

  isThereFreeSpace() {
    return this.getWarehouseCurrentlyOcuppiedSpace() < this.maximumCapacity;
  }

  isMaterialStorageEmpty() {
    return this.materialStorage.getMaterialStorageCurrentlyOccupiedSpace() == 0;
  }

  isProductStorageEmpty() {
    return this.productStorage.getProductStorageCurrentlyOccupiedSpace() == 0;
  }

  storeOneMaterial(newMaterial: ChocolateMaterial) {
    this.materialStorage.setStateToMaterialStoring();
    this.materialStorage.workWithStorageOnce(newMaterial);
  }

  storeOneProduct(newProduct: ChocolateProduct) {
    this.productStorage.setStateToProductStoring();
    this.productStorage.workWithStorageOnce(newProduct);
  }

  removeOneMaterial(chocolateMaterialType: ChocolateMaterialType) {
    this.materialStorage.setStateToMaterialRemoval();
    return this.materialStorage.workWithStorageOnce(null, chocolateMaterialType);
  }

  removeOneProduct(chocolateProductType: ChocolateProductType) {
    this.productStorage.setStateToProductRemoval();
    return this.productStorage.workWithStorageOnce(null, chocolateProductType);
  }

  workWithStorageOnce(
    newMaterial: ChocolateMaterial,
    newProduct?: ChocolateProduct,
    chocolateMaterialType?: ChocolateMaterialType,
    chocolateProductType?: ChocolateProductType
  ) {
    if (this.isStateMaterialStoring()) {
      this.storeOneMaterial(newMaterial);
    }
    if (this.isStateMaterialRemoval()) {
      return this.removeOneMaterial(chocolateMaterialType);
    }
    if (this.iStateProductStoring()) {
      this.storeOneProduct(newProduct);
    }
    if (this.isStateProductRemoval()) {
      return this.removeOneProduct(chocolateProductType);
    }
  }
}
