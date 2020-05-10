import { ChocolateMaterial } from "./chocolate-material"

export class ChocolateMaterialList {
    chocolateMaterialList: ChocolateMaterial[];

    constructor(chocolateMaterialList = new Array()) {
        this.chocolateMaterialList = chocolateMaterialList;
    }

    addMaterialToList(chocolateMaterial: ChocolateMaterial) {
        this.chocolateMaterialList.push(chocolateMaterial);
    }

    getMaterialFromList() {
        return this.chocolateMaterialList.pop();
    }

    getMaterialListLength() {
        return this.chocolateMaterialList.length;
    }
}