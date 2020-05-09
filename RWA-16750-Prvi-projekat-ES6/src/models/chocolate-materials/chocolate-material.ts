export enum ChocolateMaterialType {
    MilkChocolateMaterial = "MilkChocolateMaterial",
    DarkChocolateMaterial = "DarkChocolateMaterial",
    WhiteChocolateMaterial = "WhiteChocolateMaterial",
    RubyChocolateMaterial = "RubyChocolateMaterial"
}

export class ChocolateMaterial {
    chocolateMaterialType: ChocolateMaterialType;

    constructor(chocolateMaterialType: ChocolateMaterialType = ChocolateMaterialType.DarkChocolateMaterial) {
        this.chocolateMaterialType = chocolateMaterialType;
    }
}