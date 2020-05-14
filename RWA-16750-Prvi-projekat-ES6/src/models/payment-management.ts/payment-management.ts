import { ChocolateProduct, ChocolateProductType } from "../chocolate-products/chocolate-product";
import { ChocolateMaterial, ChocolateMaterialType } from "../chocolate-materials/chocolate-material";

export class PaymentManagement {
  darkChocolatePrice: number;
  whiteChocolatePrice: number;
  milkChocolatePrice: number;
  rubyChocolatePrice: number;
  employeePaymentPercentagePerProduct: number;

  constructor() {
    this.darkChocolatePrice = 100;
    this.whiteChocolatePrice = 110;
    this.milkChocolatePrice = 120;
    this.rubyChocolatePrice = 130;
    this.employeePaymentPercentagePerProduct = 5;
  }

  setEmployeePaymentPercentagePerProduct(percentage: number) {
    this.employeePaymentPercentagePerProduct = percentage;
  }

  getEmployeePaymentForDarkChocolate() {
    return (this.employeePaymentPercentagePerProduct * this.darkChocolatePrice) / 100;
  }

  getEmployeePaymentForWhiteChocolate() {
    return (this.employeePaymentPercentagePerProduct * this.darkChocolatePrice) / 100;
  }

  getEmployeePaymentForMilkChocolate() {
    return (this.employeePaymentPercentagePerProduct * this.darkChocolatePrice) / 100;
  }

  getEmployeePaymentForRubyChocolate() {
    return (this.employeePaymentPercentagePerProduct * this.darkChocolatePrice) / 100;
  }

  getEmployeePaymentPerProduct(chocolateProduct: ChocolateProduct) {
    if (chocolateProduct.isChocolateProductTypeDarkChocolate()) {
      return this.getEmployeePaymentForDarkChocolate();
    }
    if (chocolateProduct.isChocolateProductTypeWhiteChocolate()) {
      return this.getEmployeePaymentForWhiteChocolate();
    }
    if (chocolateProduct.isChocolateProductTypeMilkChocolate()) {
      return this.getEmployeePaymentForMilkChocolate();
    }
    if (chocolateProduct.isChocolateProductTypeRubyChocolate()) {
      return this.getEmployeePaymentForRubyChocolate();
    }
  }

  getEmployeePaymentPerMaterial(chocolateMaterial: ChocolateMaterial) {
    if (chocolateMaterial.isMaterialTypeDarkChocolateMaterial()) {
      return this.getEmployeePaymentForDarkChocolate();
    }
    if (chocolateMaterial.isMaterialTypeWhiteChocolateMaterial()) {
      return this.getEmployeePaymentForWhiteChocolate();
    }
    if (chocolateMaterial.isMaterialTypeMilkChocolateMaterial()) {
      return this.getEmployeePaymentForMilkChocolate();
    }
    if (chocolateMaterial.isMaterialTypeRubyChocolateMaterial()) {
      return this.getEmployeePaymentForRubyChocolate();
    }
  }

  getEmployeePaymentPerMaterialType(chocolateMaterialType: ChocolateMaterialType) {
    if (chocolateMaterialType === ChocolateMaterialType.DarkChocolateMaterial) {
      return this.getEmployeePaymentForDarkChocolate();
    }
    if (chocolateMaterialType === ChocolateMaterialType.WhiteChocolateMaterial) {
      return this.getEmployeePaymentForWhiteChocolate();
    }
    if (chocolateMaterialType === ChocolateMaterialType.MilkChocolateMaterial) {
      return this.getEmployeePaymentForMilkChocolate();
    }
    if (chocolateMaterialType === ChocolateMaterialType.RubyChocolateMaterial) {
      return this.getEmployeePaymentForRubyChocolate();
    }
  }

  getEmployeePaymentPerProductType(chocolateProductType: ChocolateProductType) {
    if (chocolateProductType === ChocolateProductType.DarkChocolate) {
      return this.getEmployeePaymentForDarkChocolate();
    }
    if (chocolateProductType === ChocolateProductType.WhiteChocolate) {
      return this.getEmployeePaymentForWhiteChocolate();
    }
    if (chocolateProductType === ChocolateProductType.MilkChocolate) {
      return this.getEmployeePaymentForMilkChocolate();
    }
    if (chocolateProductType === ChocolateProductType.RubyChocolate) {
      return this.getEmployeePaymentForRubyChocolate();
    }
  }

  setDarkChocolatePrice(darkChocolatePrice: number) {
    this.darkChocolatePrice = darkChocolatePrice;
  }

  setWhiteChocolatePrice(whiteChocolatePrice: number) {
    this.whiteChocolatePrice = whiteChocolatePrice;
  }

  setMilkChocolatePrice(milkChocolatePrice: number) {
    this.milkChocolatePrice = milkChocolatePrice;
  }

  setRubyChocolatePrice(rubyChocolatePrice: number) {
    this.rubyChocolatePrice = rubyChocolatePrice;
  }
}
