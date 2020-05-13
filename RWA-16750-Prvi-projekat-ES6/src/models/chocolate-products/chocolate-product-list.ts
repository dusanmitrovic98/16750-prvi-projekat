import { ChocolateProduct } from "./chocolate-product";

export class ChocolateProductList {
  chocolateProductList: ChocolateProduct[];

  constructor(chocolateProductList = new Array()) {
    this.chocolateProductList = chocolateProductList;
  }

  addProductToList(newChocolateProduct: ChocolateProduct) {
    this.chocolateProductList.push(newChocolateProduct);
  }

  getProductFromList() {
    return this.chocolateProductList.pop();
  }

  getProductListLength() {
    return this.chocolateProductList.length;
  }

  isProductListEmpty() {
    return this.getProductListLength() == 0;
  }

  removeAllProductsFromList() {
    while (!this.isProductListEmpty()) {
      this.getProductFromList();
    }
  }
}
