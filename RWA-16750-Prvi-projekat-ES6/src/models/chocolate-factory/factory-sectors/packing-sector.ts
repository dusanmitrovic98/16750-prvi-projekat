import { ChocolateFactory } from "../chocolate-factory";
import { ProductStorage } from "../../warehouse/product-storage";
import { ChocolateProduct, ChocolateProductType } from "../../chocolate-products/chocolate-product";

enum PackingSectorState {
  WaitingForActivity = "WaitingForActivity",
  GettingProducedProductsFromProductionSector = "GettingProducedProductsFromProductionSector",
  ProductPacking = "ProductPacking",
  ForwardsProducedProductsToTheDeliverySector = "ForwardsProducedProductsToTheDeliverySector",
}

export class ProcurementSector {
  factory: ChocolateFactory;
  unpackedProductsStorage: ProductStorage;
  packedProductsStorage: ProductStorage;
  state: PackingSectorState;

  constructor(factory: ChocolateFactory, productsStorageMaximumCapacity: number = 1500) {
    this.factory = factory;
    this.unpackedProductsStorage = new ProductStorage(productsStorageMaximumCapacity);
    this.packedProductsStorage = new ProductStorage(productsStorageMaximumCapacity);
    this.state = PackingSectorState.WaitingForActivity;
  }

  setStateToWaitingForActivity() {
    this.state = PackingSectorState.WaitingForActivity;
  }

  setStateToGettingProducedProductsFromProductionSector() {
    this.state = PackingSectorState.GettingProducedProductsFromProductionSector;
  }

  setStateToProductPacking() {
    this.state = PackingSectorState.ProductPacking;
  }

  setStateToForwardsProducedProductsToTheDeliverySector() {
    this.state = PackingSectorState.ForwardsProducedProductsToTheDeliverySector;
  }

  isStateWaitingForActivity() {
    return this.state === PackingSectorState.WaitingForActivity;
  }

  isStateGettingProducedProductsFromProductionSector() {
    return this.state === PackingSectorState.GettingProducedProductsFromProductionSector;
  }

  isStateProductPacking() {
    return this.state === PackingSectorState.ProductPacking;
  }

  isStateForwardsProducedProductsToTheDeliverySector() {
    return this.state === PackingSectorState.ForwardsProducedProductsToTheDeliverySector;
  }

  storeOneUnpackedProductToStorage(unpackedChocolateProduct: ChocolateProduct) {
    this.unpackedProductsStorage.setStateToProductStoring();
    this.unpackedProductsStorage.workWithStorageOnce(unpackedChocolateProduct);
  }

  getOneUnpackedProductFromStorage(unpackedChocolateProductType: ChocolateProductType) {
    this.unpackedProductsStorage.setStateToProductRemoval();
    return this.unpackedProductsStorage.workWithStorageOnce(null, unpackedChocolateProductType);
  }

  workWithUnpreparedProductsStorageOnce(
    newUnpackedChocolateProduct?: ChocolateProduct,
    chocolateProductType?: ChocolateProductType
  ) {
    if (this.isStateGettingProducedProductsFromProductionSector() && newUnpackedChocolateProduct != null) {
      this.storeOneUnpackedProductToStorage(newUnpackedChocolateProduct);
    }
    if (this.isStateProductPacking() && chocolateProductType) {
      return this.getOneUnpackedProductFromStorage(chocolateProductType);
    }
  }

  storeOnePackedProductToStorage(packedChocolateProduct: ChocolateProduct) {
    this.packedProductsStorage.setStateToProductStoring();
    this.packedProductsStorage.workWithStorageOnce(packedChocolateProduct);
  }

  getOnePackedProductsFromStorage(packedChocolateProduct: ChocolateProductType) {
    this.packedProductsStorage.setStateToProductRemoval();
    return this.packedProductsStorage.workWithStorageOnce(null, packedChocolateProduct);
  }

  workWithPackedProductsStorageOnce(
    newPackedChocolateProduct?: ChocolateProduct,
    packedChocolateProductType?: ChocolateProductType
  ) {
    if (this.isStateProductPacking() && newPackedChocolateProduct != null) {
      this.storeOnePackedProductToStorage(newPackedChocolateProduct);
    }
    if (this.isStateForwardsProducedProductsToTheDeliverySector() && packedChocolateProductType) {
      return this.getOnePackedProductsFromStorage(packedChocolateProductType);
    }
  }

  packingOneUnpackedProduct(unpackedChocolateMaterialType: ChocolateProductType) {
    let unpackedProduct: ChocolateProduct;
    unpackedProduct = this.workWithUnpreparedProductsStorageOnce(null, unpackedChocolateMaterialType);
    unpackedProduct.packIt();
    this.workWithPackedProductsStorageOnce(unpackedProduct);
  }
}
