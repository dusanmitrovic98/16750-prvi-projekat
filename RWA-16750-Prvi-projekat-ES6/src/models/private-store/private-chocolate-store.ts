import { Employee } from "../people/employee/employee";
import { ChocolateProductList } from "../chocolate-products/chocolate-product-list";
import { ChocolateProduct, ChocolateProductType } from "../chocolate-products/chocolate-product";

enum StoreState {
  Open = "Open",
  Closed = "Closed",
}

export class PrivateChocolateStore {
  id: number;
  employee: Employee;
  darkChocolatesForSale: ChocolateProductList;
  whiteChocolatesForSale: ChocolateProductList;
  milkChocolatesForSale: ChocolateProductList;
  rubyChocolatesForSale: ChocolateProductList;
  soldProducts: ChocolateProductList;
  darkChocolatePrice: number;
  whiteChocolatePrice: number;
  milkChocolatePrice: number;
  rubyChocolatePrice: number;
  chocolateGoodsMaximumCapacity: number;
  state: StoreState;
  employeePaymentPercentagePerProduct: number;

  constructor(employee: Employee, chocolateCoodsMaximumCapacity: number = 1000) {
    this.id = undefined;
    this.employee = employee;
    this.darkChocolatesForSale = new ChocolateProductList();
    this.whiteChocolatesForSale = new ChocolateProductList();
    this.milkChocolatesForSale = new ChocolateProductList();
    this.rubyChocolatesForSale = new ChocolateProductList();
    this.soldProducts = new ChocolateProductList();
    this.chocolateGoodsMaximumCapacity = chocolateCoodsMaximumCapacity;
    this.state = StoreState.Closed;
    this.darkChocolatePrice = 100;
    this.whiteChocolatePrice = 110;
    this.milkChocolatePrice = 120;
    this.rubyChocolatePrice = 130;
    this.employeePaymentPercentagePerProduct = 5;
  }

  setEmployeePaymentPercentagePerProduct(percentage: number) {
    this.employeePaymentPercentagePerProduct = percentage;
  }

  getEmployeePaymentForSoldDarkChocolate() {
    return (this.employeePaymentPercentagePerProduct * this.darkChocolatePrice) / 100;
  }

  getEmployeePaymentForSoldWhiteChocolate() {
    return (this.employeePaymentPercentagePerProduct * this.darkChocolatePrice) / 100;
  }

  getEmployeePaymentForSoldMilkChocolate() {
    return (this.employeePaymentPercentagePerProduct * this.darkChocolatePrice) / 100;
  }

  getEmployeePaymentForSoldRubyChocolate() {
    return (this.employeePaymentPercentagePerProduct * this.darkChocolatePrice) / 100;
  }

  getEmployeePaymentPerProduct(chocolateProduct: ChocolateProduct) {
    if (chocolateProduct.isChocolateProductTypeDarkChocolate()) {
      return this.getEmployeePaymentForSoldDarkChocolate();
    }
    if (chocolateProduct.isChocolateProductTypeWhiteChocolate()) {
      return this.getEmployeePaymentForSoldWhiteChocolate();
    }
    if (chocolateProduct.isChocolateProductTypeMilkChocolate()) {
      return this.getEmployeePaymentForSoldMilkChocolate();
    }
    if (chocolateProduct.isChocolateProductTypeRubyChocolate()) {
      return this.getEmployeePaymentForSoldRubyChocolate();
    }
  }

  setDarkChocolatePrice(darkChocolatePrice: number) {
    this.darkChocolatePrice = darkChocolatePrice;
  }

  setWhiteChocolatePrice(whiteChocolatePrice: number) {
    this.whiteChocolatePrice = whiteChocolatePrice;
  }

  setMilkChocolatePrice(milkChocolatePrice: number) {
    this.milkChocolatePrice = milkChocolatePrice;
  }

  setRubyChocolatePrice(rubyChocolatePrice: number) {
    this.rubyChocolatePrice = rubyChocolatePrice;
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

  currentlyOccupiedSpace() {
    let currentlyOcupiedSpace: number = 0;
    currentlyOcupiedSpace += this.darkChocolatesForSale.getProductListLength();
    currentlyOcupiedSpace += this.whiteChocolatesForSale.getProductListLength();
    currentlyOcupiedSpace += this.milkChocolatesForSale.getProductListLength();
    currentlyOcupiedSpace += this.rubyChocolatesForSale.getProductListLength();
    return currentlyOcupiedSpace;
  }

  getMaximumCapacity() {
    return this.chocolateGoodsMaximumCapacity;
  }

  isThereFreeSpace() {
    return this.currentlyOccupiedSpace() < this.getMaximumCapacity();
  }

  areThereNoGoodsForSale() {
    return this.currentlyOccupiedSpace() == 0;
  }

  ifDarkChocolateProductThanStoreIt(darkChocolate: ChocolateProduct) {
    if (darkChocolate.isChocolateProductTypeDarkChocolate()) {
      this.darkChocolatesForSale.addProductToList(darkChocolate);
    }
  }

  ifWhiteChocolateProductThanStoreIt(whiteChocolate: ChocolateProduct) {
    if (whiteChocolate.isChocolateProductTypeDarkChocolate()) {
      this.darkChocolatesForSale.addProductToList(whiteChocolate);
    }
  }

  ifMilkChocolateProductThanStoreIt(milkChocolate: ChocolateProduct) {
    if (milkChocolate.isChocolateProductTypeDarkChocolate()) {
      this.darkChocolatesForSale.addProductToList(milkChocolate);
    }
  }

  ifRubyChocolateProductThanStoreIt(rubyChocolate: ChocolateProduct) {
    if (rubyChocolate.isChocolateProductTypeDarkChocolate()) {
      this.darkChocolatesForSale.addProductToList(rubyChocolate);
    }
  }

  storeOneProduct(chocolateProduct: ChocolateProduct) {
    if (this.isThereFreeSpace()) {
      this.ifDarkChocolateProductThanStoreIt(chocolateProduct);
      this.ifWhiteChocolateProductThanStoreIt(chocolateProduct);
      this.ifMilkChocolateProductThanStoreIt(chocolateProduct);
      this.ifRubyChocolateProductThanStoreIt(chocolateProduct);
      return true;
    }
    return false;
  }

  payEmployeeForSoldChocolate(soldChocolate: ChocolateProduct) {
    let payment = this.getEmployeePaymentPerProduct(soldChocolate);
    this.employee.getPayment(payment);
  }

  payEmployeeForAllSoldProducts() {
    this.soldProducts.chocolateProductList.forEach((soldProduct) => {
      this.payEmployeeForSoldChocolate(soldProduct);
    });
  }

  isDarkChocolateForSaleListEmpty() {
    return this.darkChocolatesForSale.getProductListLength() == 0;
  }

  isWhiteChocolateForSaleListEmpty() {
    return this.whiteChocolatesForSale.getProductListLength() == 0;
  }

  isMilkChocolateForSaleListEmpty() {
    return this.milkChocolatesForSale.getProductListLength() == 0;
  }

  isRubyChocolateForSaleListEmpty() {
    return this.rubyChocolatesForSale.getProductListLength() == 0;
  }

  sellDarkChocolateProduct() {
    if (!this.isDarkChocolateForSaleListEmpty()) {
      let soldChocolate: ChocolateProduct = this.darkChocolatesForSale.getProductFromList();
      this.soldProducts.addProductToList(soldChocolate);
      return soldChocolate;
    }
    return null;
  }

  sellWhiteChocolateProduct() {
    if (!this.isWhiteChocolateForSaleListEmpty()) {
      let soldChocolate: ChocolateProduct = this.whiteChocolatesForSale.getProductFromList();
      this.soldProducts.addProductToList(soldChocolate);
      return soldChocolate;
    }
    return null;
  }

  sellMilkChocolateProduct() {
    if (!this.isMilkChocolateForSaleListEmpty()) {
      let soldChocolate: ChocolateProduct = this.milkChocolatesForSale.getProductFromList();
      this.soldProducts.addProductToList(soldChocolate);
      return soldChocolate;
    }
    return null;
  }

  sellRubyChocolateProduct() {
    if (!this.isDarkChocolateForSaleListEmpty()) {
      let soldChocolate: ChocolateProduct = this.rubyChocolatesForSale.getProductFromList();
      this.soldProducts.addProductToList(soldChocolate);
      return soldChocolate;
    }
    return null;
  }

  isChocolateProductTypeDarkChocolate(chocolateProductType: ChocolateProductType) {
    return chocolateProductType === ChocolateProductType.DarkChocolate;
  }

  isChocolateProductTypeWhiteChocolate(chocolateProductType: ChocolateProductType) {
    return chocolateProductType === ChocolateProductType.WhiteChocolate;
  }

  isChocolateProductTypeMilkChocolate(chocolateProductType: ChocolateProductType) {
    return chocolateProductType === ChocolateProductType.MilkChocolate;
  }

  isChocolateProductTypeRubyChocolate(chocolateProductType: ChocolateProductType) {
    return chocolateProductType === ChocolateProductType.RubyChocolate;
  }

  sellChocolateProduct(chocolateProductType: ChocolateProductType) {
    if (this.isChocolateProductTypeDarkChocolate(chocolateProductType)) {
      return this.sellDarkChocolateProduct();
    }
    if (this.isChocolateProductTypeWhiteChocolate(chocolateProductType)) {
      return this.sellWhiteChocolateProduct();
    }
    if (this.isChocolateProductTypeMilkChocolate(chocolateProductType)) {
      return this.sellMilkChocolateProduct();
    }
    if (this.isChocolateProductTypeRubyChocolate(chocolateProductType)) {
      return this.sellRubyChocolateProduct();
    }
    return null;
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
