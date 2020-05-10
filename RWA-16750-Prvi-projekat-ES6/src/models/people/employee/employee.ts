/**
 * 
 * produce product but remove material from list of materials
 */

import { Person } from '../person/person';
import { FactorySector } from '../../chocolate-factory/chocolate-factory';
import { ChocolateProductList } from '../../chocolate-products/chocolate-product-list';
import { ChocolateMaterial, ChocolateMaterialType } from '../../chocolate-materials/chocolate-material';
import { ChocolateProduct, ChocolateProductType } from '../../chocolate-products/chocolate-product';
import { Empolyeer } from '../employeer/employeer';

export class Employee extends Person {
    factoryEmployeer: Empolyeer;
    factorySector: FactorySector;
    producedChocolateGoods: ChocolateProductList;

    constructor(name: string, lastName: string, factoryEmployeer: Empolyeer, drivingLicence: boolean = false) {
        super(name, lastName, drivingLicence);
        this.factoryEmployeer = factoryEmployeer;
        this.producedChocolateGoods = new ChocolateProductList();
    }

    produceChocolateProduct(chocolateMaterial: ChocolateMaterial) {
        let producedChocolateProduct = new ChocolateProduct();
        if (chocolateMaterial.chocolateMaterialType === ChocolateMaterialType.DarkChocolateMaterial) {
            producedChocolateProduct.chocolateProductType = ChocolateProductType.DarkChocolate;
        } else if (chocolateMaterial.chocolateMaterialType === ChocolateMaterialType.WhiteChocolateMaterial) {
            producedChocolateProduct.chocolateProductType = ChocolateProductType.WhiteChocolate;
        } else if (chocolateMaterial.chocolateMaterialType === ChocolateMaterialType.MilkChocolateMaterial) {
            producedChocolateProduct.chocolateProductType = ChocolateProductType.MilkChocolate;
        } else if (chocolateMaterial.chocolateMaterialType === ChocolateMaterialType.RubyChocolateMaterial) {
            producedChocolateProduct.chocolateProductType = ChocolateProductType.RubyChocolate;
        } else {
            producedChocolateProduct = null;
        }
        this.producedChocolateGoods.addProductToList(producedChocolateProduct);
        return producedChocolateProduct;
    }
}