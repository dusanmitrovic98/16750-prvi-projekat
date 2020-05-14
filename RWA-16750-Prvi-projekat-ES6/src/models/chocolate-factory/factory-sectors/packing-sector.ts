import { ChocolateProduct, ChocolateProductType } from "../../chocolate-products/chocolate-product";
import { PaymentManagement } from "../../payment-management.ts/payment-management";
import { ProductStorage } from "../../warehouse/product-storage";
import { ChocolateFactory } from "../chocolate-factory";
import { EmployeeList } from "../../people/employee/employee-list";
import { Employee } from "../../people/employee/employee";

enum PackingSectorState {
  WaitingForActivity = "WaitingForActivity",
  GettingProducedProductsFromProductionSector = "GettingProducedProductsFromProductionSector",
  ProductPacking = "ProductPacking",
  ForwardsProducedProductsToTheDeliverySector = "ForwardsProducedProductsToTheDeliverySector",
}

export class PackingSector {
  id: number;
  factory: ChocolateFactory;
  unpackedProductsStorage: ProductStorage;
  packedProductsStorage: ProductStorage;
  state: PackingSectorState;
  paymentManagement: PaymentManagement;
  employees: EmployeeList;

  constructor(factory: ChocolateFactory, productsStorageMaximumCapacity: number = 1500) {
    this.id = undefined;
    this.factory = factory;
    this.unpackedProductsStorage = new ProductStorage(productsStorageMaximumCapacity);
    this.packedProductsStorage = new ProductStorage(productsStorageMaximumCapacity);
    this.state = PackingSectorState.WaitingForActivity;
    this.paymentManagement = new PaymentManagement();
    this.employees = new EmployeeList();
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
    newPackedChocolateProduct: ChocolateProduct,
    packedChocolateProductType?: ChocolateProductType
  ) {
    if (this.isStateProductPacking() && newPackedChocolateProduct != null) {
      this.storeOnePackedProductToStorage(newPackedChocolateProduct);
    }
    if (this.isStateForwardsProducedProductsToTheDeliverySector() && packedChocolateProductType) {
      return this.getOnePackedProductsFromStorage(packedChocolateProductType);
    }
  }

  packingOneUnpackedProduct(unpackedChocolateMaterialType: ChocolateProductType, employee: Employee) {
    let unpackedProduct: ChocolateProduct, packedProduct: ChocolateProduct;
    unpackedProduct = this.workWithUnpreparedProductsStorageOnce(null, unpackedChocolateMaterialType);
    packedProduct = employee.packChocolateProduct(unpackedProduct);
    this.workWithPackedProductsStorageOnce(packedProduct);
  }

  payEmployeeForSoldChocolate(employee: Employee, packedChocolate: ChocolateProduct) {
    let payment = this.paymentManagement.getEmployeePaymentPerProduct(packedChocolate);
    employee.getPayment(payment);
  }
}
