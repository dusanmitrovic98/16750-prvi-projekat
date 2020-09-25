import { ProcurementSector } from "../models/chocolate-factory/factory-sectors/procurement-sector";
import { PreparationSector } from "../models/chocolate-factory/factory-sectors/preparation-sector";
import { ProductionSector } from "../models/chocolate-factory/factory-sectors/production-sector";
import { PackingSector } from "../models/chocolate-factory/factory-sectors/packing-sector";
import { DeliverySector } from "../models/chocolate-factory/factory-sectors/delivery-sector";
import { ChocolateFactory } from "../models/chocolate-factory/chocolate-factory";
import { Employee } from "../models/people/employee/employee";
import { Truck } from "../models/transport/truck/truck";
import { PalletJack } from "../models/factory-machines/pallet-jack";
import { Warehouse } from "../models/warehouse/warehouse";
import { PrivateChocolateStore } from "../models/private-store/private-chocolate-store";
import { Employeer } from "../models/people/employeer/employeer";
import { from, Observable } from "rxjs";

const URL_FETCH = "http://localhost:3000/";
const URL_FETCH_FACTORY_BY_ID = "http://localhost:3000/factory?id=";
const URL_FETCH_EMPLOYEES_BY_ID = "http://localhost:3000/employees?id=";
const URL_FETCH_EMPLOYEER_BY_ID = "http://localhost:3000/employeer?id=";
const URL_FETCH_PROCUREMENT_SECTOR_BY_ID = "http://localhost:3000/procurementSector?id=";
const URL_FETCH_PREPARATION_SECTOR_BY_ID = "http://localhost:3000/preparationSector?id=";
const URL_FETCH_PRODUCTION_SECTOR_BY_ID = "http://localhost:3000/productionSector?id=";
const URL_FETCH_PACKING_SECTOR_BY_ID = "http://localhost:3000/packingSector?id=";
const URL_FETCH_DELIVERY_SECTOR_BY_ID = "http://localhost:3000/deliverySector?id=";
const URL_FETCH_TRUCK_BY_ID = "http://localhost:3000/trucks?id=";
const URL_FETCH_PALLET_JACK_BY_ID = "http://localhost:3000/palletJack?id=";
const URL_FETCH_WAREHOUSE_BY_ID = "http://localhost:3000/warehouse?id=";
const URL_FETCH_PRIVATE_CHOCOLATE_STORE_BY_ID = "http://localhost:3000/privateChocolateStore?id=";

export function getEmployee(employeeId: number) {
  return fetch(URL_FETCH_EMPLOYEES_BY_ID + employeeId).then((response) => response.json());
}

export function getFactoryById(factoryId: number) {
  return from(fetch(URL_FETCH_FACTORY_BY_ID + factoryId).then((response) => response.json()));
}

export function getEmployeeByIdObservable(employeeId: number) {
  return from(fetch(URL_FETCH_EMPLOYEES_BY_ID + employeeId).then((response) => response.json()));
}

export function getEmployeerById(employeeId: number) {
  return from(fetch(URL_FETCH_EMPLOYEER_BY_ID + employeeId).then((response) => response.json()));
}

export function getProcurementSectorById(sectorId: number) {
  return from(fetch(URL_FETCH_PROCUREMENT_SECTOR_BY_ID + sectorId).then((response) => response.json()));
}

export function getPreparationSectorById(sectorId: number) {
  return from(fetch(URL_FETCH_PREPARATION_SECTOR_BY_ID + sectorId).then((response) => response.json()));
}

export function getProductionSectorById(sectorId: number) {
  return from(fetch(URL_FETCH_PRODUCTION_SECTOR_BY_ID + sectorId).then((response) => response.json()));
}

export function getPackingSectorById(sectorId: number) {
  return from(fetch(URL_FETCH_PACKING_SECTOR_BY_ID + sectorId).then((response) => response.json()));
}

export function getDeliverySectorById(sectorId: number) {
  return from(fetch(URL_FETCH_DELIVERY_SECTOR_BY_ID + sectorId).then((response) => response.json()));
}

export function fetchMultipleEmployeesAsync(employeesIdArray: Array<number>) {
  return Promise.all(
    employeesIdArray.map((id) => fetch(URL_FETCH_EMPLOYEES_BY_ID + id).then((response) => response.json()))
  ).catch((error) => console.log(error));
}

export function getTruckById(truckId: number) {
  return from(fetch(URL_FETCH_TRUCK_BY_ID + truckId).then((response) => response.json()));
}

export function getPalletJackById(palletJackId: number) {
  return from(fetch(URL_FETCH_PALLET_JACK_BY_ID + palletJackId).then((response) => response.json()));
}

export function getWarehouseById(warehouseId: number) {
  return from(fetch(URL_FETCH_WAREHOUSE_BY_ID + warehouseId).then((response) => response.json()));
}

export function getPrivateChocolateStoreById(privateChocolateStoreId: number) {
  return from(
    fetch(URL_FETCH_PRIVATE_CHOCOLATE_STORE_BY_ID + privateChocolateStoreId).then((response) => response.json())
  );
}

export function getFactoryObservable(factoryId: number) {
  let factoryObservable: Observable<ChocolateFactory> = Observable.create((observer: any) => {
    getFactoryById(factoryId).subscribe((factory: any) => {
      let newFactory: ChocolateFactory = new ChocolateFactory(factory[0].name, factory[0].adress);
      newFactory.id = factory[0].id;
      observer.next(newFactory);
    });
  });
  return factoryObservable;
}

export function getEmployeeObject(employeeId: number) {
  let employee: Employee = new Employee("", "", null);
  getEmployee(employeeId).then((e: Employee) => {
    employee.id = e.id;
    employee.name = e.name;
    employee.lastName = e.lastName;
    employee.hasDrivingLicence = e.hasDrivingLicence;
  });
  return employee;
}

export function getEmployeeObservable(employeeId: number) {
  let employeeObservable: Observable<Employee> = Observable.create((observer: any) => {
    getEmployeeByIdObservable(employeeId).subscribe((employee: any) => {
      let newEmployee: Employee = new Employee(
        employee[0].name,
        employee[0].lastName,
        null,
        employee[0].hasDrivingLicence
      );
      newEmployee.id = employee[0].id;
      observer.next(newEmployee);
    });
  });
  return employeeObservable;
}

export function getEmployeerObservable(employeerId: number) {
  let EmployeerObservable: Observable<Employeer> = Observable.create((observer: any) => {
    getEmployeerById(employeerId).subscribe((employeer: any) => {
      let newEmployeer: Employeer = new Employeer(
        employeer[0].name,
        employeer[0].lastName,
        employeer[0].hasDrivingLicence
      );
      newEmployeer.id = employeer[0].id;
      observer.next(newEmployeer);
    });
  });
  return EmployeerObservable;
}

export function getProcurementSectorObservable(procurementSectorId: number) {
  let procurementSectorObservable: Observable<ProcurementSector> = Observable.create((observer: any) => {
    getProcurementSectorById(procurementSectorId).subscribe((procurementSector: any) => {
      let newProcurementSector: ProcurementSector = new ProcurementSector(
        null,
        procurementSector[0].materialStorageMaximumCapacity
      );
      newProcurementSector.id = procurementSector[0].id;
      observer.next(newProcurementSector);
    });
  });
  return procurementSectorObservable;
}

export function getPreparationSectorObservable(preparationSectorId: number) {
  let preparationSectorObservable: Observable<PreparationSector> = Observable.create((observer: any) => {
    getPreparationSectorById(preparationSectorId).subscribe((preparationSector: any) => {
      let newPreparationSector: PreparationSector = new PreparationSector(
        null,
        preparationSector[0].materialStorageMaximumCapacity
      );
      newPreparationSector.id = preparationSector[0].id;
      observer.next(newPreparationSector);
    });
  });
  return preparationSectorObservable;
}

export function getProductionSectorObservable(productionSectorId: number) {
  let productionSectorObservable: Observable<ProductionSector> = Observable.create((observer: any) => {
    getProductionSectorById(productionSectorId).subscribe((productionSector: any) => {
      let newProductionSector: ProductionSector = new ProductionSector(
        null,
        productionSector[0].materialStorageMaximumCapacity
      );
      newProductionSector.id = productionSector[0].id;
      observer.next(newProductionSector);
    });
  });
  return productionSectorObservable;
}

export function getPackingSectorObservable(packingSectorId: number) {
  let packingSectorObservable: Observable<PackingSector> = Observable.create((observer: any) => {
    getPackingSectorById(packingSectorId).subscribe((packingSector: any) => {
      let newPackingSector: PackingSector = new PackingSector(null, packingSector[0].materialStorageMaximumCapacity);
      newPackingSector.id = packingSector[0].id;
      observer.next(newPackingSector);
    });
  });
  return packingSectorObservable;
}

export function getDeliverySectorObservable(deliverySectorId: number) {
  let deliverySectorObservable: Observable<DeliverySector> = Observable.create((observer: any) => {
    getDeliverySectorById(deliverySectorId).subscribe((deliverySector: any) => {
      let newDeliverySector: DeliverySector = new DeliverySector(null, deliverySector[0].productStorageMaximumCapacity);
      newDeliverySector.id = deliverySector[0].id;
      observer.next(newDeliverySector);
    });
  });
  return deliverySectorObservable;
}

export function getTruckObservable(truckId: number) {
  let truckObservable: Observable<Truck> = Observable.create((observer: any) => {
    getTruckById(truckId).subscribe((truck: any) => {
      let newTruck: Truck = new Truck(truck[0].brand, null, truck[0].maximumCargoCapacity);
      newTruck.id = truck[0].id;
      observer.next(newTruck);
    });
  });
  return truckObservable;
}

export function getPalletJackObservable(palletJackId: number) {
  let palletJackObservable: Observable<PalletJack> = Observable.create((observer: any) => {
    getPalletJackById(palletJackId).subscribe((palletJack: any) => {
      let newPalletJack: PalletJack = new PalletJack(null, palletJack[0].cargoMaxCapacity);
      newPalletJack.id = palletJack[0].id;
      observer.next(newPalletJack);
    });
  });
  return palletJackObservable;
}

export function getWarehouseObservable(warehouseId: number) {
  let warehouseObservable: Observable<Warehouse> = Observable.create((observer: any) => {
    getWarehouseById(warehouseId).subscribe((warehouse: any) => {
      let newWarehouse: Warehouse = new Warehouse(warehouse[0].maximumCapacity);
      newWarehouse.id = warehouse[0].id;
      observer.next(newWarehouse);
    });
  });
  return warehouseObservable;
}

export function getPrivateChocolateStoreObservable(privateChocolateStoreId: number) {
  let privateChocolateStoreObservable: Observable<PrivateChocolateStore> = Observable.create((observer: any) => {
    getPrivateChocolateStoreById(privateChocolateStoreId).subscribe((privateChocolateStore: any) => {
      let newPrivateChocolateStore: PrivateChocolateStore = new PrivateChocolateStore(
        null,
        privateChocolateStore[0].chocolateCoodsMaximumCapacity
      );
      newPrivateChocolateStore.id = privateChocolateStore[0].id;
      observer.next(newPrivateChocolateStore);
    });
  });
  return privateChocolateStoreObservable;
}
