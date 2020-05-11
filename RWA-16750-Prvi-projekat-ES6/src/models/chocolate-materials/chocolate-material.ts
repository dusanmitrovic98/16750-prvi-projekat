export enum ChocolateMaterialType {
  MilkChocolateMaterial = "MilkChocolateMaterial",
  DarkChocolateMaterial = "DarkChocolateMaterial",
  WhiteChocolateMaterial = "WhiteChocolateMaterial",
  RubyChocolateMaterial = "RubyChocolateMaterial",
}

export class ChocolateMaterial {
  chocolateMaterialType: ChocolateMaterialType;

  constructor(chocolateMaterialType: ChocolateMaterialType = ChocolateMaterialType.DarkChocolateMaterial) {
    this.chocolateMaterialType = chocolateMaterialType;
  }

  setMaterialTypeToMilkChocolateMaterial() {
    this.chocolateMaterialType == ChocolateMaterialType.MilkChocolateMaterial;
  }
  setMaterialTypeToDarkChocolateMaterial() {
    this.chocolateMaterialType == ChocolateMaterialType.DarkChocolateMaterial;
  }

  setMaterialTypeToWhiteChocolateMaterial() {
    this.chocolateMaterialType == ChocolateMaterialType.WhiteChocolateMaterial;
  }

  setMaterialTypeToRubyChocolateMaterial() {
    this.chocolateMaterialType == ChocolateMaterialType.RubyChocolateMaterial;
  }

  isMaterialTypeMilkChocolateMaterial() {
    return this.chocolateMaterialType === ChocolateMaterialType.MilkChocolateMaterial;
  }

  isMaterialTypeDarkChocolateMaterial() {
    return this.chocolateMaterialType === ChocolateMaterialType.DarkChocolateMaterial;
  }

  isMaterialTypeWhiteChocolateMaterial() {
    return this.chocolateMaterialType === ChocolateMaterialType.WhiteChocolateMaterial;
  }

  isMaterialTypeRubyChocolateMaterial() {
    return this.chocolateMaterialType === ChocolateMaterialType.RubyChocolateMaterial;
  }
}
