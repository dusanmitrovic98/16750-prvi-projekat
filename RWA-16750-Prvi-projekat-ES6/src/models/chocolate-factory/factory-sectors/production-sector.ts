import { ChocolateFactory } from "../chocolate-factory";
import { MaterialStorage } from "../../warehouse/material-storage";
import { ChocolateMaterial, ChocolateMaterialType } from "../../chocolate-materials/chocolate-material";
import { Employee } from "../../people/employee/employee";
import { ChocolateProduct, ChocolateProductType } from "../../chocolate-products/chocolate-product";
import { PaymentManagement } from "../../payment-management.ts/payment-management";
import { ProductStorage } from "../../warehouse/product-storage";
import { EmployeeList } from "../../people/employee/employee-list";

enum ProductionSectorState {
  WaitingForActivity = "WaitingForActivity",
  GettingPreparedMaterialsFromPreparationSector = "GettingPreparedMaterialsFromPreparationSector",
  ProductProduction = "ProductProduction",
  ForwardsProducedProductToThePackingSector = "ForwardsProducedProductToThePackingSector",
}

export class ProductionSector {
  id: number;
  factory: ChocolateFactory;
  employees: EmployeeList;
  preparedMaterialsStorage: MaterialStorage;
  producedProductsStorage: ProductStorage;
  state: ProductionSectorState;
  paymentManagement: PaymentManagement;

  constructor(factory: ChocolateFactory, materialStorageMaximumCapacity: number = 1500) {
    this.id = undefined;
    this.factory = factory;
    this.employees = new EmployeeList();
    this.preparedMaterialsStorage = new MaterialStorage(materialStorageMaximumCapacity);
    this.producedProductsStorage = new ProductStorage(materialStorageMaximumCapacity);
    this.state = ProductionSectorState.WaitingForActivity;
    this.paymentManagement = new PaymentManagement();
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

  storeOneProducedProductToStorage(producedProductChocolate: ChocolateProduct) {
    this.producedProductsStorage.setStateToProductStoring();
    this.producedProductsStorage.workWithStorageOnce(producedProductChocolate);
  }

  getOneProducedProductFromStorage(producedProductChocolateType: ChocolateProductType) {
    this.producedProductsStorage.setStateToProductRemoval();
    return this.producedProductsStorage.workWithStorageOnce(null, producedProductChocolateType);
  }

  workWithProducedProductStorageOnce(
    newProducedChocolateProduct: ChocolateProduct,
    producedProductChocolateType?: ChocolateProductType
  ) {
    if (this.isStateProductProduction() && newProducedChocolateProduct != null) {
      this.storeOneProducedProductToStorage(newProducedChocolateProduct);
    }
    if (this.isStateForwardsProducedProductToThePackingSector() && producedProductChocolateType) {
      return this.getOneProducedProductFromStorage(producedProductChocolateType);
    }
  }

  produceOneProduct(chocolateMaterialType: ChocolateMaterialType, employee: Employee) {
    let preparedMaterial: ChocolateMaterial;
    let producedProduct: ChocolateProduct;
    preparedMaterial = this.workWithPreparedMaterialStorageOnce(null, chocolateMaterialType);
    producedProduct = employee.produceChocolateProduct(preparedMaterial);
    this.payEmployeeForProducedChocolateProduct(employee, producedProduct);
    this.workWithProducedProductStorageOnce(producedProduct);
  }

  payEmployeeForProducedChocolateProduct(employee: Employee, producedChocolateProduct: ChocolateProduct) {
    let payment = this.paymentManagement.getEmployeePaymentPerProduct(producedChocolateProduct);
    employee.getPayment(payment);
  }
}
