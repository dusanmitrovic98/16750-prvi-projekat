import { Person } from '../person/person';
import { FactorySector } from '../../chocolate-factory/chocolate-factory';
import { ChocolateProductList } from '../../chocolate-products/chocolate-product-list';
import { ChocolateMaterial, ChocolateMaterialType } from '../../chocolate-materials/chocolate-material';
import { ChocolateProduct, ChocolateProductType } from '../../chocolate-products/chocolate-product';
import { Empolyeer } from '../employeer/employeer';

/**
 * @class
 * Represents employee model
 * @param name Empoyee name
 * @param lastName Employee last name
 * @param drivingLicence Employee has a driver's licence, drivingLicence=true. Otherwise, 
 * drivingLicence=false. DefaultValue=false
 */
export class Employee extends Person {
    factoryEmployeer: Empolyeer;
    factorySector: FactorySector;
    producedChocolateGoods: ChocolateProductList;

    constructor(name: string, lastName: string, factoryEmployeer: Empolyeer, drivingLicence: boolean = false) {
        super(name, lastName, drivingLicence);
        this.factoryEmployeer = factoryEmployeer;
        this.producedChocolateGoods = new ChocolateProductList();
    }

    /**
     * @function
     * Produces one chocolate of specfic type. Type of chocolate (ChocolateProductType) is 
     * decided depending on what material (ChocolateMaterialType) is used.
     * @param chocolateMaterial Chocolate material needed for production of one chocolate of 
     * specific type.
     * @returns {ChocolateProduct} MilkChocolate if MilkChocolateMaterial is used
     * @returns {ChocolateProduct} DarkChocolate if DarkChocolateMaterial is used
     * @returns {ChocolateProduct} WhiteChocolate if WhiteChocolateMaterial is used
     * @returns {ChocolateProduct} RubyChocolate if RubyChocolateMaterial is used
     * @Otherwise returns null
     */
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
        this.producedChocolateGoods.addChocolateProductToList(producedChocolateProduct);
        return producedChocolateProduct;
    }
}