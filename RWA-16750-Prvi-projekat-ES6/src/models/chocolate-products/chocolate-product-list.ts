import { ChocolateProduct } from "./chocolate-product";

/**
 * @class
 * Represents list of chocolate products
 * @param {ChocolateProduct[]} chocolateProductList List of chocolate products
 */
export class ChocolateProductList {
    chocolateProductList: ChocolateProduct[];

    constructor(chocolateProductList = new Array()) {
        this.chocolateProductList = chocolateProductList;
    }

    /**
     * @function
     * Adds new chocolate product to list of chocolate products
     * @param newChocolateProduct Chocolate product that will be added to list
     */
    addChocolateProductToList(newChocolateProduct: ChocolateProduct) {
        this.chocolateProductList.push(newChocolateProduct);
    }
}