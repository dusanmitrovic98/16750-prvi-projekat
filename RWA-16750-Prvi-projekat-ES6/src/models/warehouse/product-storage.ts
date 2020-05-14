import { ChocolateProduct, ChocolateProductType } from "../chocolate-products/chocolate-product";
import { ChocolateProductList } from "../chocolate-products/chocolate-product-list";

enum ProductStorageState {
  ProductsStoring = "ProductsStoring",
  ProductsRemoval = "ProductsRemoval",
}

export class ProductStorage {
  darkChocolateProductStorage: ChocolateProductList;
  whiteChocolateProductStorage: ChocolateProductList;
  milkChocolateProductStorage: ChocolateProductList;
  rubyChocolateProductStorage: ChocolateProductList;
  productStorageMaximumCapacity: number;
  state: ProductStorageState;

  constructor(productStorageMaximumCapacity: number = 5000) {
    this.darkChocolateProductStorage = new ChocolateProductList();
    this.whiteChocolateProductStorage = new ChocolateProductList();
    this.milkChocolateProductStorage = new ChocolateProductList();
    this.rubyChocolateProductStorage = new ChocolateProductList();
    this.productStorageMaximumCapacity = productStorageMaximumCapacity;
    this.state = ProductStorageState.ProductsStoring;
  }

  setStateToProductStoring() {
    this.state = ProductStorageState.ProductsStoring;
  }

  setStateToProductRemoval() {
    this.state = ProductStorageState.ProductsRemoval;
  }

  isStateProductStoring() {
    return this.state === ProductStorageState.ProductsStoring;
  }

  isStateProductRemoval() {
    return this.state === ProductStorageState.ProductsRemoval;
  }

  getDarkChocolateProductStorageListLength() {
    return this.darkChocolateProductStorage.getProductListLength();
  }

  getWhiteChocolateProductStorageListLength() {
    return this.whiteChocolateProductStorage.getProductListLength();
  }

  getMilkChocolateProductStorageListLength() {
    return this.milkChocolateProductStorage.getProductListLength();
  }

  getRubyChocolateProductStorageListLength() {
    return this.rubyChocolateProductStorage.getProductListLength();
  }

  getProductStorageCurrentlyOccupiedSpace() {
    let productStorageSpace: number = 0;
    productStorageSpace += this.getDarkChocolateProductStorageListLength();
    productStorageSpace += this.getWhiteChocolateProductStorageListLength();
    productStorageSpace += this.getMilkChocolateProductStorageListLength();
    productStorageSpace += this.getRubyChocolateProductStorageListLength();
    return productStorageSpace;
  }

  isThereFreeSpace() {
    return this.getProductStorageCurrentlyOccupiedSpace() < this.productStorageMaximumCapacity;
  }

  isProductStorageEmpty() {
    return this.getProductStorageCurrentlyOccupiedSpace() == 0;
  }

  isDarkChocolateProductStorageEmpty() {
    return this.getDarkChocolateProductStorageListLength() == 0;
  }

  isWhiteChocolateProductStorageEmpty() {
    return this.getWhiteChocolateProductStorageListLength() == 0;
  }

  isMilkChocolateProductStorageEmpty() {
    return this.getMilkChocolateProductStorageListLength() == 0;
  }

  isRubyChocolateProductStorageEmpty() {
    return this.getRubyChocolateProductStorageListLength() == 0;
  }

  storeOneDarkChocolateProductToStorage(chocolateProduct: ChocolateProduct) {
    if (this.isThereFreeSpace()) {
      this.darkChocolateProductStorage.addProductToList(chocolateProduct);
    }
  }

  storeOneWhiteChocolateProductToStorage(chocolateProduct: ChocolateProduct) {
    if (this.isThereFreeSpace()) {
      this.whiteChocolateProductStorage.addProductToList(chocolateProduct);
    }
  }

  storeOneMilkChocolateProductToStorage(chocolateProduct: ChocolateProduct) {
    if (this.isThereFreeSpace()) {
      this.milkChocolateProductStorage.addProductToList(chocolateProduct);
    }
  }

  storeOneRubyChocolateProductToStorage(chocolateProduct: ChocolateProduct) {
    if (this.isThereFreeSpace()) {
      this.rubyChocolateProductStorage.addProductToList(chocolateProduct);
    }
  }

  storeOneProductToStorage(chocolateProduct: ChocolateProduct) {
    if (chocolateProduct.isChocolateProductTypeDarkChocolate()) {
      this.storeOneDarkChocolateProductToStorage(chocolateProduct);
    }
    if (chocolateProduct.isChocolateProductTypeWhiteChocolate) {
      this.storeOneWhiteChocolateProductToStorage(chocolateProduct);
    }
    if (chocolateProduct.isChocolateProductTypeMilkChocolate) {
      this.storeOneMilkChocolateProductToStorage(chocolateProduct);
    }
    if (chocolateProduct.isChocolateProductTypeRubyChocolate) {
      this.storeOneRubyChocolateProductToStorage(chocolateProduct);
    }
  }

  getOneDarkChocolateProductFromStorage() {
    if (!this.isDarkChocolateProductStorageEmpty()) {
      return this.darkChocolateProductStorage.getProductFromList();
    }
  }

  getOneWhiteChocolateProductFromStorage() {
    if (!this.isWhiteChocolateProductStorageEmpty()) {
      return this.whiteChocolateProductStorage.getProductFromList();
    }
  }

  getOneMilkChocolateProductFromStorage() {
    if (!this.isMilkChocolateProductStorageEmpty()) {
      return this.milkChocolateProductStorage.getProductFromList();
    }
  }

  getOneRubyChocolateProductFromStorage() {
    if (!this.isRubyChocolateProductStorageEmpty()) {
      return this.rubyChocolateProductStorage.getProductFromList();
    }
  }

  getOneProductFromStorage(chocolateProductType: ChocolateProductType) {
    if (chocolateProductType === ChocolateProductType.DarkChocolate) {
      return this.getOneDarkChocolateProductFromStorage();
    }
    if (chocolateProductType === ChocolateProductType.WhiteChocolate) {
      return this.getOneWhiteChocolateProductFromStorage();
    }
    if (chocolateProductType === ChocolateProductType.MilkChocolate) {
      this.getOneMilkChocolateProductFromStorage();
    }
    if (chocolateProductType === ChocolateProductType.RubyChocolate) {
      return this.getOneRubyChocolateProductFromStorage();
    }
    return null;
  }

  workWithStorageOnce(newProduct: ChocolateProduct, chocolateProductType?: ChocolateProductType) {
    if (this.isStateProductStoring() && newProduct != null) {
      this.storeOneProductToStorage(newProduct);
    }
    if (this.isStateProductRemoval() && chocolateProductType) {
      return this.getOneProductFromStorage(chocolateProductType);
    }
  }
}
