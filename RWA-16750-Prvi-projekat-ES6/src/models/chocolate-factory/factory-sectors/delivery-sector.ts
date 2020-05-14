import { ChocolateFactory } from "../chocolate-factory";
import { ProductStorage } from "../../warehouse/product-storage";
import { ChocolateProduct, ChocolateProductType } from "../../chocolate-products/chocolate-product";
import { Employee } from "../../people/employee/employee";
import { PaymentManagement } from "../../payment-management.ts/payment-management";
import { EmployeeList } from "../../people/employee/employee-list";

enum DeliverySectorState {
  WaitingForActivity = "WaitingForActivity",
  GettingPackedProductsFromPackingSector = "GettingPackedProductsFromPackingSector",
  LoadingPackedProductsToTheTruck = "LoadingPackedProductsToTheTruck",
}

export class DeliverySector {
  id: number;
  factory: ChocolateFactory;
  packedProductsStorage: ProductStorage;
  state: DeliverySectorState;
  paymentManagement: PaymentManagement;
  employees: EmployeeList;

  constructor(factory: ChocolateFactory, productStorageMaximumCapacity: number = 1500) {
    this.id = undefined;
    this.factory = factory;
    this.packedProductsStorage = new ProductStorage(productStorageMaximumCapacity);
    this.state = DeliverySectorState.WaitingForActivity;
    this.paymentManagement = new PaymentManagement();
    this.paymentManagement.setEmployeePaymentPercentagePerProduct(0.5);
    this.paymentManagement.setDarkChocolatePrice(100);
    this.paymentManagement.setWhiteChocolatePrice(100);
    this.paymentManagement.setMilkChocolatePrice(100);
    this.paymentManagement.setRubyChocolatePrice(100);
    this.employees = new EmployeeList();
  }

  setStateToWaitingForActivity() {
    this.state = DeliverySectorState.WaitingForActivity;
  }

  GettingPackedProductsFromPackingSector() {
    this.state = DeliverySectorState.GettingPackedProductsFromPackingSector;
  }

  setStateToLoadingPackedProductsToTheTruck() {
    this.state = DeliverySectorState.LoadingPackedProductsToTheTruck;
  }

  isStateWaitingForActivity() {
    return this.state === DeliverySectorState.WaitingForActivity;
  }

  isStateGettingPackedProductsFromPackingSector() {
    return this.state === DeliverySectorState.GettingPackedProductsFromPackingSector;
  }

  isStateLoadingPackedProductsToTheTruck() {
    return this.state === DeliverySectorState.LoadingPackedProductsToTheTruck;
  }

  storeOnePackedProductToStorage(packedChocolateProduct: ChocolateProduct) {
    this.packedProductsStorage.setStateToProductStoring();
    this.packedProductsStorage.workWithStorageOnce(packedChocolateProduct);
  }

  getOneMaterialFromStorage(packedChocolateProductType: ChocolateProductType) {
    this.packedProductsStorage.setStateToProductRemoval();
    return this.packedProductsStorage.workWithStorageOnce(null, packedChocolateProductType);
  }

  workWithProcurementStorageOnce(
    employee: Employee,
    newPackedChocolateProduct: ChocolateProduct,
    packedChocolateProductType?: ChocolateProductType
  ) {
    if (this.isStateGettingPackedProductsFromPackingSector() && newPackedChocolateProduct != null) {
      this.storeOnePackedProductToStorage(newPackedChocolateProduct);
      this.payEmployeePerProduct(employee, newPackedChocolateProduct);
    }
    if (this.isStateLoadingPackedProductsToTheTruck()) {
      this.payEmployeePerProduct(employee, null, packedChocolateProductType);
      return this.getOneMaterialFromStorage(packedChocolateProductType);
    }
  }

  payEmployeePerProduct(employee: Employee, chocolateProduct: ChocolateProduct, productType?: ChocolateProductType) {
    if (chocolateProduct != null) {
      let payment = this.paymentManagement.getEmployeePaymentPerProduct(chocolateProduct);
      employee.getPayment(payment);
      return;
    }
    if (productType) {
      let payment = this.paymentManagement.getEmployeePaymentPerProductType(productType);
      employee.getPayment(payment);
      return;
    }
  }
}
