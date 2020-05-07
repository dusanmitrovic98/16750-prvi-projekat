import { Employee } from "../people/employee/employee";

/**
 * @enum
 * Represent factory sector
 * @param Preparation Factory sector of preparing
 * @param Production Factory sector of production
 * @param Packing Factory sector of packing
 * @param Delivery Factory sector of delivery
 */
export enum FactorySector {
    Preparation,
    Production,
    Packing,
    Delivery
}

export class ChocolateFactory {
    name: string;
    adress: string;
    employees: Employee[];
    constructor(name: string, adress: string, employees = new Array()) {
        this.name = name;
        this.adress = adress;
        this.employees = employees;
    }
}