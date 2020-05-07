import { ChocolateMaterial } from "./chocolate-material"

/**
 * @class
 * Represents list of chocolate materials
 * @param chocolateMaterialList 
 */
export class ChocolateMaterialList {
    chocolateMaterialList: ChocolateMaterial[];

    constructor(chocolateMaterialList = new Array()) {
        this.chocolateMaterialList = chocolateMaterialList;
    }

    /**
     * @function
     * Adds chocolate material to list
     * @param chocolateMaterial Chocolate material that will be added to list
     */
    addChocolateMaterialToList(chocolateMaterial: ChocolateMaterial) {
        this.chocolateMaterialList.push(chocolateMaterial);
    }
}