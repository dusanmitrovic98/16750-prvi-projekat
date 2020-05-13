export enum ChocolateProductType {
  MilkChocolate = "MilkChocolate",
  DarkChocolate = "DarkChocolate",
  WhiteChocolate = "WhiteChocolate",
  RubyChocolate = "RubyChocolate",
}

enum ProductPackedState {
  Packed = "Packed",
  NotPacked = "NotPacked",
}
export class ChocolateProduct {
  id: number;
  chocolateProductType: ChocolateProductType;
  packedState: ProductPackedState;

  constructor(chocolateProductType: ChocolateProductType = ChocolateProductType.DarkChocolate) {
    this.id = undefined;
    this.chocolateProductType = chocolateProductType;
    this.packedState = ProductPackedState.NotPacked;
  }

  setId(id: number) {
    this.id;
  }

  getId() {
    return this.id;
  }

  setProductTypeToMilkChocolate() {
    this.chocolateProductType = ChocolateProductType.MilkChocolate;
  }

  setProductTypeToDarkChocolate() {
    this.chocolateProductType = ChocolateProductType.DarkChocolate;
  }

  setProductTypeToWhiteChocolate() {
    this.chocolateProductType = ChocolateProductType.WhiteChocolate;
  }

  setProductTypeToRubyChocolate() {
    this.chocolateProductType = ChocolateProductType.RubyChocolate;
  }

  isChocolateProductTypeMilkChocolate() {
    return this.chocolateProductType === ChocolateProductType.MilkChocolate;
  }

  isChocolateProductTypeDarkChocolate() {
    return this.chocolateProductType === ChocolateProductType.DarkChocolate;
  }

  isChocolateProductTypeWhiteChocolate() {
    return this.chocolateProductType === ChocolateProductType.WhiteChocolate;
  }

  isChocolateProductTypeRubyChocolate() {
    return this.chocolateProductType === ChocolateProductType.RubyChocolate;
  }

  setPackedStateToPacked() {
    this.packedState = ProductPackedState.Packed;
  }

  setPackedStateToNotPacke() {
    this.packedState = ProductPackedState.NotPacked;
  }

  isPackedStatePacked() {
    return this.packedState === ProductPackedState.Packed;
  }

  isPackedStateNotPacked() {
    return this.packedState === ProductPackedState.NotPacked;
  }

  packIt() {
    this.setPackedStateToPacked();
  }

  unpackIt() {
    this.setPackedStateToNotPacke();
  }
}
