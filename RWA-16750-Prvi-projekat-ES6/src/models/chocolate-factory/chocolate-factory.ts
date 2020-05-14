import { EmployeeList } from "../people/employee/employee-list";
import { PreparationSector } from "./factory-sectors/preparation-sector";
import { ProductionSector } from "./factory-sectors/production-sector";
import { DeliverySector } from "./factory-sectors/delivery-sector";
import { ProcurementSector } from "./factory-sectors/procurement-sector";
import { PackingSector } from "./factory-sectors/packing-sector";
import { Employeer } from "../people/employeer/employeer";
import { Observable } from "rxjs";
import { Employee } from "../people/employee/employee";

export enum FactorySector {
  Procurement = "Procurement",
  Preparation = "Preparation",
  Production = "Production",
  Packing = "Packing",
  Delivery = "Delivery",
}

export class ChocolateFactory {
  id: number;
  name: string;
  adress: string;
  employees: EmployeeList;
  employeer: Employeer;
  procurementSector: ProcurementSector;
  preparationSector: PreparationSector;
  productionSector: ProductionSector;
  packingSector: PackingSector;
  deliverySector: DeliverySector;
  constructor(name: string, adress: string) {
    this.id = undefined;
    this.name = name;
    this.adress = adress;
    this.employees = new EmployeeList();
    this.employeer = new Employeer("", "");
    this.procurementSector = new ProcurementSector(null, 0);
    this.preparationSector = new PreparationSector(null, 0);
    this.productionSector = new ProductionSector(null, 0);
    this.packingSector = new PackingSector(null, 0);
    this.deliverySector = new DeliverySector(null, 0);
  }

  getEmployeesThatCameToJob() {
    let employeesThatCameToJob: Employee[] = this.employees.employees.filter(
      (employee: Employee) => !employee.isWorkStateNotPresent()
    );
    return employeesThatCameToJob;
  }

  getEmployeesDailyPayment() {
    let employeesThatCameToJob: Employee[] = this.getEmployeesThatCameToJob();
    let payments: number[] = new Array<number>();
    employeesThatCameToJob.forEach((employee: Employee) => {
      payments.push(employee.payment);
    });
    return payments.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
}
