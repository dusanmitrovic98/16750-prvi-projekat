/**
 * @enum
 * Represents chocolate product type
 * @param MilkChocolate Milk chocolate product
 * @param DarkChocolate Dark chocolate product
 * @param WhiteChocolate White chocolate product
 * @param RubyChocolate Ruby chocolate product
 */
export enum ChocolateProductType {
    MilkChocolate = "MilkChocolate",
    DarkChocolate = "DarkChocolate",
    WhiteChocolate = "WhiteChocolate",
    RubyChocolate = "RubyChocolate"
}

/**
 * @class
 * Represents chocolate product model
 * @param {ChocolateProductType} chocolateProductType Chocolate product type. Default value = 
 * DarkChocolate
 */
export class ChocolateProduct {
    chocolateProductType: ChocolateProductType;

    constructor(chocolateProductType: ChocolateProductType = ChocolateProductType.DarkChocolate) {
        this.chocolateProductType = chocolateProductType;
    }
}