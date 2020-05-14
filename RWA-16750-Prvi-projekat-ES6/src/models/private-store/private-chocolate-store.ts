import { Employee } from "../people/employee/employee";
import { ChocolateProductList } from "../chocolate-products/chocolate-product-list";
import { ChocolateProduct, ChocolateProductType } from "../chocolate-products/chocolate-product";
import { ProductStorage } from "../warehouse/product-storage";
import { PaymentManagement } from "../payment-management.ts/payment-management";

enum StoreState {
  Open = "Open",
  Closed = "Closed",
}

export class PrivateChocolateStore {
  id: number;
  employee: Employee;
  chocolateProductsForSale: ProductStorage;
  soldProducts: ChocolateProductList;
  state: StoreState;
  paymentManagement: PaymentManagement;

  constructor(employee: Employee, chocolateCoodsMaximumCapacity: number = 1000) {
    this.id = undefined;
    this.employee = employee;
    this.chocolateProductsForSale = new ProductStorage(chocolateCoodsMaximumCapacity);
    this.soldProducts = new ChocolateProductList();
    this.state = StoreState.Closed;
    this.paymentManagement = new PaymentManagement();
  }

  setEmployee(newEmployee: Employee) {
    this.employee = newEmployee;
  }

  getEmployee() {
    return this.employee;
  }

  setStateToOpen() {
    this.state = StoreState.Open;
  }

  setStateToClosed() {
    this.state = StoreState.Closed;
  }

  isStateOpen() {
    return this.state === StoreState.Open;
  }

  isStateClosed() {
    return this.state === StoreState.Closed;
  }

  storeOneProduct(chocolateProduct: ChocolateProduct) {
    this.chocolateProductsForSale.setStateToProductStoring();
    this.chocolateProductsForSale.workWithStorageOnce(chocolateProduct);
  }

  payEmployeeForSoldChocolate(soldChocolate: ChocolateProduct) {
    let payment = this.paymentManagement.getEmployeePaymentPerProduct(soldChocolate);
    this.employee.getPayment(payment);
  }

  payEmployeeForAllSoldProducts() {
    this.soldProducts.chocolateProductList.forEach((soldProduct) => {
      this.payEmployeeForSoldChocolate(soldProduct);
    });
  }

  sellChocolateProduct(chocolateProductType: ChocolateProductType) {
    if (this.isStateOpen()) {
      this.chocolateProductsForSale.setStateToProductRemoval();
      return this.chocolateProductsForSale.workWithStorageOnce(null, chocolateProductType);
    }
  }

  openShop() {
    this.setStateToOpen();
  }

  closeShop() {
    this.setStateToClosed();
    this.payEmployeeForAllSoldProducts();
    this.soldProducts.removeAllProductsFromList();
  }
}
