export enum ChocolateMaterialType {
  MilkChocolateMaterial = "MilkChocolateMaterial",
  DarkChocolateMaterial = "DarkChocolateMaterial",
  WhiteChocolateMaterial = "WhiteChocolateMaterial",
  RubyChocolateMaterial = "RubyChocolateMaterial",
}

enum ProductionState {
  ReadyForProduction = "ReadyForProduction",
  NotReadyForProduction = "NotReadyForProduction",
}

export class ChocolateMaterial {
  id: number;
  chocolateMaterialType: ChocolateMaterialType;
  productionState: ProductionState;

  constructor(chocolateMaterialType: ChocolateMaterialType = ChocolateMaterialType.DarkChocolateMaterial) {
    this.id = undefined;
    this.chocolateMaterialType = chocolateMaterialType;
    this.productionState = ProductionState.NotReadyForProduction;
  }

  setId(id: number) {
    this.id = id;
  }

  getId() {
    return this.id;
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

  setProductionStateToReadyForProduction() {
    this.productionState = ProductionState.ReadyForProduction;
  }

  setProductionStateToNotReadyForProduction() {
    this.productionState = ProductionState.NotReadyForProduction;
  }

  isProductionStateReadyForProduction() {
    return this.productionState === ProductionState.ReadyForProduction;
  }

  isProductionStateNotReadyForProduction() {
    return this.productionState === ProductionState.NotReadyForProduction;
  }
}
