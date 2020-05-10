export enum ChocolateProductType {
    MilkChocolate = "MilkChocolate",
    DarkChocolate = "DarkChocolate",
    WhiteChocolate = "WhiteChocolate",
    RubyChocolate = "RubyChocolate"
}

export class ChocolateProduct {
    chocolateProductType: ChocolateProductType;

    constructor(chocolateProductType: ChocolateProductType = ChocolateProductType.DarkChocolate) {
        this.chocolateProductType = chocolateProductType;
    }
}