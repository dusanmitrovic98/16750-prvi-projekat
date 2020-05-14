import { EmployeeList } from "../people/employee/employee-list";
import { PreparationSector } from "./factory-sectors/preparation-sector";
import { ProductionSector } from "./factory-sectors/production-sector";
import { DeliverySector } from "./factory-sectors/delivery-sector";
import { ProcurementSector } from "./factory-sectors/procurement-sector";
import { PackingSector } from "./factory-sectors/packing-sector";
import { Empolyeer } from "../people/employeer/employeer";
import { Observable } from "rxjs";

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
  employeer: Empolyeer;
  procurementSector: Observable<ProcurementSector>;
  preparationSector: Observable<PreparationSector>;
  productionSector: Observable<ProductionSector>;
  packingSector: Observable<PackingSector>;
  deliverySector: Observable<DeliverySector>;
  constructor(name: string, adress: string) {
    this.name = name;
    this.adress = adress;
    this.employees = new EmployeeList();
    this.productionSector = null;
    this.preparationSector = null;
    this.productionSector = null;
    this.packingSector = null;
    this.deliverySector = null;
  }
}
