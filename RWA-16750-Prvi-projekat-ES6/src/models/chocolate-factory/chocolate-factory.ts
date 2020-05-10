import { Employee } from "../people/employee/employee";

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