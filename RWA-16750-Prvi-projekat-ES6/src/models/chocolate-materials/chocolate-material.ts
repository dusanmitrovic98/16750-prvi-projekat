/**
 * @enum
 * Represents chocolate material type
 * @param MilkChocolateMaterial Milk chocolate material type
 * @param DarkChocolateMaterial Dark chocolate material type
 * @param WhiteChocolateMaterial White chocolate material type
 * @param RubyChocolateMaterial Ruby chocolate material type
 */
export enum ChocolateMaterialType {
    MilkChocolateMaterial = "MilkChocolateMaterial",
    DarkChocolateMaterial = "DarkChocolateMaterial",
    WhiteChocolateMaterial = "WhiteChocolateMaterial",
    RubyChocolateMaterial = "RubyChocolateMaterial"
}

/**
 * @class 
 * Represents chocolate material model
 * @param {ChocolateMaterialType} chocolateMaterialType Type of chocolate material
 */
export class ChocolateMaterial {
    chocolateMaterialType: ChocolateMaterialType;

    constructor(chocolateMaterialType: ChocolateMaterialType = ChocolateMaterialType.DarkChocolateMaterial) {
        this.chocolateMaterialType = chocolateMaterialType;
    }
}