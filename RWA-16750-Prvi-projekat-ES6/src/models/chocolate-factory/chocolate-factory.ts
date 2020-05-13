import { EmployeeList } from "../people/employee/employe-list";

export enum FactorySector {
  Procurement = "Procurement",
  Preparation = "Preparation",
  Production = "Production",
  Packing = "Packing",
  Delivery = "Delivery",
}

export class ChocolateFactory {
  name: string;
  adress: string;
  employees: EmployeeList;
  constructor(name: string, adress: string) {
    this.name = name;
    this.adress = adress;
    this.employees = new EmployeeList();
  }
}
