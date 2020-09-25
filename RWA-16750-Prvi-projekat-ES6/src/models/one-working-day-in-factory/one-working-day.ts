import { Observable, interval, of, timer, merge, zip, fromEvent } from "rxjs";
import { take, takeUntil, mapTo, map, mergeMap, switchMap } from "rxjs/operators";
import { ChocolateMaterialType, ChocolateMaterial } from "../chocolate-materials/chocolate-material";
import { getFactoryById, getEmployeeByIdObservable, getEmployee } from "../../services/factory-services";
import { ChocolateFactory } from "../chocolate-factory/chocolate-factory";
import { ProcurementSector } from "../chocolate-factory/factory-sectors/procurement-sector";
import { PreparationSector } from "../chocolate-factory/factory-sectors/preparation-sector";
import { ProductionSector } from "../chocolate-factory/factory-sectors/production-sector";
import { PackingSector } from "../chocolate-factory/factory-sectors/packing-sector";
import { DeliverySector } from "../chocolate-factory/factory-sectors/delivery-sector";
import { ChocolateProduct, ChocolateProductType } from "../chocolate-products/chocolate-product";
import { drawHtmlElement } from "../../drawHtmlElements/draw-html-element/draw-html-element";
import { Warehouse } from "../warehouse/warehouse";
import { Truck } from "../transport/truck/truck";
import { Employee } from "../people/employee/employee";
import { EmployeeList } from "../people/employee/employee-list";
import { FormatString } from "../../helpers/string-manipulation/string-manipulation";
import { PalletJack } from "../factory-machines/pallet-jack";
import { PrivateChocolateStore } from "../private-store/private-chocolate-store";
import { Employeer } from "../people/employeer/employeer";
import { getRandomIntInclusive } from "../../helpers/random-numbers/random-numbers";

export class OneWorkingDay {
  databaseObservable: Observable<any>;

  constructor() {
    this.databaseObservable = getFactoryById(1);
  }

  logBorder() {
    console.log(
      "---------------------------------------------------------------------------------------------------------------------------------------------------"
    );
  }

  time() {
    var currentdate = new Date();
    var datetime = "Time: " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();

    return " ||| " + datetime + " ||| ";
  }

  start() {
    this.databaseObservable.subscribe((data: any) => {
      let factory: ChocolateFactory = new ChocolateFactory(data[0].name, data[0].adress);
      let firstTruck: Truck;
      let secondTruck: Truck;
      let palletJack: PalletJack;
      let privateStore: PrivateChocolateStore;

      factory.id = data[0].id;
      let procurementSector: ProcurementSector = new ProcurementSector(
        factory,
        data[0].procurementSector[0].materialStorageMaximumCapacity
      );
      procurementSector.id = data[0].procurementSector[0].id;
      let preparationSector: PreparationSector = new PreparationSector(
        factory,
        data[0].preparationSector[0].materialStorageMaximumCapacity
      );
      preparationSector.id = data[0].preparationSector[0].id;
      let productionSector: ProductionSector = new ProductionSector(
        factory,
        data[0].productionSector[0].materialStorageMaximumCapacity
      );
      productionSector.id = data[0].productionSector[0].id;
      let packingSector: PackingSector = new PackingSector(
        factory,
        data[0].packingSector[0].materialStorageMaximumCapacity
      );
      packingSector.id = data[0].packingSector[0].id;
      let deliverySector: DeliverySector = new DeliverySector(
        factory,
        data[0].deliverySector[0].productStorageMaximumCapacity
      );
      deliverySector.id = data[0].deliverySector[0].id;
      factory.procurementSector = procurementSector;
      factory.preparationSector = preparationSector;
      factory.productionSector = productionSector;
      factory.packingSector = packingSector;
      factory.deliverySector = deliverySector;

      console.log(
        "Sectors initialised",
        this.time(),
        factory.procurementSector,
        factory.preparationSector,
        factory.productionSector,
        factory.packingSector,
        factory.deliverySector
      );

      this.logBorder();

      let employees: EmployeeList = new EmployeeList();
      data[0].employeesId.forEach((id: number) => {
        let newEmployee: Employee = new Employee(
          data[0].employees[id].name,
          data[0].employees[id].lastName,
          null,
          data[0].employees[id].hasDrivingLicence
        );
        newEmployee.id = data[0].employees[id].id;
        employees.addNewEmployee(newEmployee);
      });
      factory.employees = employees;

      console.log("Workers are getting ready.", this.time());

      let procurementSectorEmployeesIdArray: number[] = new Array();
      data[0].procurementSector[0].employeesId.map((id: number) => {
        procurementSectorEmployeesIdArray.push(id);
      });
      let preparationSectorEmployeesIdArray: number[] = new Array();
      data[0].preparationSector[0].employeesId.map((id: number) => {
        preparationSectorEmployeesIdArray.push(id);
      });
      let productionSectorEmployeesIdArray: number[] = new Array();
      data[0].productionSector[0].employeesId.map((id: number) => {
        productionSectorEmployeesIdArray.push(id);
      });
      let packingSectorEmployeesIdArray: number[] = new Array();
      data[0].packingSector[0].employeesId.map((id: number) => {
        packingSectorEmployeesIdArray.push(id);
      });
      let deliverySectorEmployeesIdArray: number[] = new Array();
      data[0].deliverySector[0].employeesId.map((id: number) => {
        deliverySectorEmployeesIdArray.push(id);
      });

      this.getProcurementSectorEmployees(factory, procurementSectorEmployeesIdArray, data);
      this.getPreparationSectorEmployees(factory, preparationSectorEmployeesIdArray, data);
      this.getProductionSectorEmployees(factory, productionSectorEmployeesIdArray, data);
      this.getPackingSectorEmployees(factory, packingSectorEmployeesIdArray, data);
      this.getDeliverySectorEmployees(factory, deliverySectorEmployeesIdArray, data);

      console.log("Workers are in their positions.", this.time());
      console.log(
        factory.procurementSector,
        factory.preparationSector,
        factory.productionSector,
        factory.packingSector,
        factory.deliverySector
      );

      let workersCount = new Promise((resolve, reject) => {
        if (this.allEmployeesPresent(factory.employees, data[0].employeesId)) {
          resolve("all workers have arrived.");
        } else {
          reject("some workers did not arrive");
        }
      });

      workersCount
        .then((message) => {
          console.log("DILIGENT WORKERS: " + message, this.time(), factory.employees);
          this.logBorder();
        })
        .catch((message) => {
          console.log("SOMEONE SLACKS OFF: " + message, this.time(), factory.employees);
          this.logBorder();
        });
      console.log("Workers have arrived.", this.time(), factory.employees);

      this.logBorder();

      factory.employeer = new Employeer(
        data[0].employeer[0].name,
        data[0].employeer[0].lastName,
        data[0].employeer[0].hasDrivingLicence
      );

      console.log("Factory employeer present!");

      this.logBorder();

      let delay = (time: any) => (result: any) => new Promise((resolve) => setTimeout(() => resolve(result), time));

      Promise.resolve("Factory initialised!!! " + this.time())
        .then(delay(1000))
        .then((result) => {
          console.info(result);
          console.log(factory);
          this.logBorder();
        });

      interval(1200)
        .pipe(take(1))
        .subscribe((val: any) => {
          let palletJackEmployee: Employee = new Employee(
            data[0].employees[data[0].palletJack[0].driverId - 1].name,
            data[0].employees[data[0].palletJack[0].driverId - 1].lastName,
            null,
            data[0].employees[data[0].palletJack[0].driverId - 1].hasDrivingLicence
          );
          palletJack = new PalletJack(palletJackEmployee, data[0].palletJack[0].cargoMaxCapacity);
          console.log("Pallet Jack initialised", this.time(), palletJack);
          this.logBorder();
        });

      interval(1500)
        .pipe(take(1))
        .subscribe((val: any) => {
          let privateStoreEmployee: Employee = new Employee(
            data[0].employees[data[0].privateChocolateStore[0].employeeId - 1].name,
            data[0].employees[data[0].privateChocolateStore[0].employeeId - 1].lastName,
            null,
            data[0].employees[data[0].privateChocolateStore[0].employeeId - 1].hasDrivingLicence
          );
          privateStore = new PrivateChocolateStore(
            privateStoreEmployee,
            data[0].privateChocolateStore[0].chocolateCoodsMaximumCapacity
          );
          privateStore.employee.factoryEmployeer = factory.employeer;
          console.log("Private chocolate store initialised", this.time(), privateStore);
          this.logBorder();
        });

      let warehouse: Warehouse = new Warehouse(data[0].warehouse[0].maximumCapacity);
      warehouse.id = data[0].warehouse[0].id;

      interval(2000)
        .pipe(take(1))
        .subscribe((val: any) => {
          console.log("Warehouse initialisation started!...", this.time());
          console.log(warehouse.materialStorage.milkChocolateMaterialStorage);
          console.log(warehouse.materialStorage.rubyChocolateMaterialStorage);
          console.log(warehouse.materialStorage.darkChocolateMaterialStorage);
          console.log(warehouse.materialStorage.whiteChocolateMaterialStorage);
          this.logBorder();
        });

      interval(3000)
        .pipe(take(1))
        .subscribe((val: any) => {
          warehouse.setStateToMaterialStoring();
          for (let i = 0; i < 50; i++) {
            warehouse.workWithStorageOnce(new ChocolateMaterial(ChocolateMaterialType.DarkChocolateMaterial));
          }
          for (let i = 0; i < 50; i++) {
            warehouse.workWithStorageOnce(new ChocolateMaterial(ChocolateMaterialType.WhiteChocolateMaterial));
          }
          for (let i = 0; i < 50; i++) {
            warehouse.workWithStorageOnce(new ChocolateMaterial(ChocolateMaterialType.MilkChocolateMaterial));
          }
          for (let i = 0; i < 50; i++) {
            warehouse.workWithStorageOnce(new ChocolateMaterial(ChocolateMaterialType.RubyChocolateMaterial));
          }
          console.log("Warehouse initialised!", this.time());
          console.log(warehouse.materialStorage.milkChocolateMaterialStorage);
          console.log(warehouse.materialStorage.rubyChocolateMaterialStorage);
          console.log(warehouse.materialStorage.darkChocolateMaterialStorage);
          console.log(warehouse.materialStorage.whiteChocolateMaterialStorage);
          this.logBorder();
        });

      interval(5000)
        .pipe(take(1))
        .subscribe((val: any) => {
          console.log("Waiting for trucks to get ready!", this.time());
          interval(1000)
            .pipe(take(1))
            .subscribe((val: any) => {
              firstTruck = new Truck(data[0].trucks[0].brand, null, data[0].trucks[0].maximumCaroCapacity);
              firstTruck.setId(1);
              firstTruck.setDriver(factory.employees.employees[49]);
              console.log(firstTruck);
              console.log("Deriver: ", firstTruck.driver);
              console.log("First driver ready!", this.time());
            });
          interval(2000)
            .pipe(take(1))
            .subscribe((val: any) => {
              secondTruck = new Truck(data[0].trucks[1].brand, null, data[0].trucks[1].maximumCaroCapacity);
              secondTruck.setId(2);
              secondTruck.setDriver(factory.employees.employees[50]);
              console.log(secondTruck);
              console.log("Driver: ", secondTruck.driver);
              console.log("Second driver ready!", this.time());
              this.logBorder();
            });
        });

      interval(8500)
        .pipe(take(1))
        .subscribe((val: any) => {
          warehouse.setStateToMaterialRemoval();
          console.log("Warehouse state: ", FormatString(warehouse.state, " ", true));
          firstTruck.setStateToIsBeingLoaded();
          console.log("First truck state: ", FormatString(firstTruck.state, " ", true));
          firstTruck.setCargoStateToChocolateMaterialLoading();
          console.log("First truck cargo state: ", FormatString(firstTruck.cargoWorkState, " ", true));
          for (let i = 0; i < 50; i++) {
            let newMaterial: ChocolateMaterial = warehouse.removeOneMaterial(
              ChocolateMaterialType.DarkChocolateMaterial
            );
            firstTruck.workWithCargoOnce(newMaterial);
          }
          console.log("Prvi kamion utovaren materijalom tamne cokolade!", this.time());
          console.log(firstTruck.darkChocolateMaterialCargo);
          for (let i = 0; i < 50; i++) {
            let newMaterial: ChocolateMaterial = warehouse.removeOneMaterial(
              ChocolateMaterialType.WhiteChocolateMaterial
            );
            firstTruck.workWithCargoOnce(newMaterial);
          }
          console.log("Prvi kamion utovaren materijalom bele cokolade!", this.time());
          console.log(firstTruck.whiteChocolateMaterialCargo);
          this.logBorder();
        });
      interval(9500)
        .pipe(take(1))
        .subscribe((val: any) => {
          let driverId = of<number>(firstTruck.driver.id, secondTruck.driver.id);
          let driverName = of<string>(firstTruck.driver.name, secondTruck.driver.name);
          let driverLastName = of<string>(firstTruck.driver.lastName, secondTruck.driver.lastName);
          let driverHasLicence = of<boolean>(firstTruck.driver.hasDrivingLicence, secondTruck.driver.hasDrivingLicence);

          zip(driverId, driverName, driverLastName, driverHasLicence)
            .pipe(map(([id, name, lastName, hasLicence]) => ({ id, name, lastName, hasLicence })))
            .subscribe((x) => console.log(x, this.time()));
          this.logBorder();
        });

      interval(10000)
        .pipe(take(1))
        .subscribe((val: any) => {
          console.log("Material transport towards factory!", this.time());
          firstTruck.setStateToInTransport();
          console.log("First truck state: ", FormatString(firstTruck.state, " ", true));
          this.logBorder();
        });

      interval(11000)
        .pipe(take(1))
        .subscribe((val: any) => {
          console.log("First truck has arrived. Material is imported!", this.time());
          this.logBorder();
        });

      interval(12000)
        .pipe(take(1))
        .subscribe((val: any) => {
          console.log("TRANSFER: FIRST TRUCK --> PROCUREMENT SECTOR", this.time());
          console.log("Material transfer towards procurement sector!", this.time());
          interval(400)
            .pipe(take(1))
            .subscribe((val: any) => {
              factory.procurementSector.setStateToUnloadingMaterialsFromTruck();
              console.log(
                "Producrement sector state: ",
                FormatString(factory.procurementSector.state, " ", true),
                this.time()
              );
            });
          interval(500)
            .pipe(take(1))
            .subscribe((val: any) => {
              firstTruck.setStateToIsBeingUnloaded();
              console.log("First truck state: ", FormatString(firstTruck.state, " ", true));
              firstTruck.setCargoStateToChocolateMaterialUnLoading();
              console.log("First truck cargo state: ", FormatString(firstTruck.cargoWorkState, " ", true));
              for (let i = 0; i < 50; i++) {
                let newMaterial: ChocolateMaterial = firstTruck.unloadOneMaterialFromCargo(
                  ChocolateMaterialType.DarkChocolateMaterial
                );
                factory.procurementSector.workWithProcurementStorageOnce(
                  procurementSector.employees.employees[0],
                  newMaterial
                );
                let newMaterial2: ChocolateMaterial = firstTruck.unloadOneMaterialFromCargo(
                  ChocolateMaterialType.WhiteChocolateMaterial
                );
                factory.procurementSector.workWithProcurementStorageOnce(
                  procurementSector.employees.employees[0],
                  newMaterial2
                );
              }
              console.log("Truck unloading finished!", this.time());
              console.log("Truck: ", firstTruck.darkChocolateMaterialCargo);
              console.log("Factory: ", factory.procurementSector.materialStorage.darkChocolateMaterialStorage);
              this.logBorder();
            });
        });

      interval(13000)
        .pipe(take(1))
        .subscribe((val: any) => {
          console.log("TRANSFER: PROCUREMENT SECTOR --> PREPARATION SECTOR", this.time());
          console.log("Preparation sector material loading!", this.time());
          interval(400)
            .pipe(take(1))
            .subscribe((val: any) => {
              factory.preparationSector.setStateToGettingUnpreparedMaterialsFromProcurementSector();
              console.log(
                "Factory preparation sector state: ",
                FormatString(factory.preparationSector.state, " ", true),
                this.time()
              );
            });
          interval(500)
            .pipe(take(1))
            .subscribe((val: any) => {
              factory.procurementSector.setStateToForwardsMaterialsToThePreparationSector();
              console.log(
                "Factory procurement sector state: ",
                FormatString(factory.procurementSector.state, " ", true),
                this.time()
              );
              for (let i = 0; i < 50; i++) {
                let newMaterial: ChocolateMaterial = factory.procurementSector.workWithProcurementStorageOnce(
                  factory.procurementSector.employees.employees[0],
                  null,
                  ChocolateMaterialType.DarkChocolateMaterial
                );
                factory.preparationSector.workWithUnpreparedMaterialStorageOnce(newMaterial);
              }
              console.log(
                "Procurement sector storage:",
                factory.procurementSector.materialStorage.darkChocolateMaterialStorage
              );
              console.log(
                "Preparation sector unprepared material storage: ",
                factory.preparationSector.unpreparedMaterialsStorage.darkChocolateMaterialStorage
              );
              console.log("Material transfer finished!", this.time());
              this.logBorder();
            });
        });

      interval(14000)
        .pipe(take(1))
        .subscribe((val: any) => {
          console.log("PREPARATION SECTOR...", this.time());
          console.log("Preparation sector material processing started!", this.time());
          interval(400)
            .pipe(take(1))
            .subscribe((val: any) => {
              factory.preparationSector.setStateToPreparingUnpreparedMaterials();
              console.log(
                "Preparation sector state: " + FormatString(factory.preparationSector.state, " ", true),
                this.time()
              );
            });
          interval(500)
            .pipe(take(1))
            .subscribe((val: any) => {
              for (let i = 0; i < 10; i++) {
                factory.preparationSector.preparingOneUnpreparedMaterial(
                  ChocolateMaterialType.DarkChocolateMaterial,
                  factory.preparationSector.employees.employees[0]
                );
                factory.preparationSector.preparingOneUnpreparedMaterial(
                  ChocolateMaterialType.DarkChocolateMaterial,
                  factory.preparationSector.employees.employees[1]
                );
                factory.preparationSector.preparingOneUnpreparedMaterial(
                  ChocolateMaterialType.DarkChocolateMaterial,
                  factory.preparationSector.employees.employees[2]
                );
                factory.preparationSector.preparingOneUnpreparedMaterial(
                  ChocolateMaterialType.DarkChocolateMaterial,
                  factory.preparationSector.employees.employees[3]
                );
                factory.preparationSector.preparingOneUnpreparedMaterial(
                  ChocolateMaterialType.DarkChocolateMaterial,
                  factory.preparationSector.employees.employees[4]
                );
              }
              console.log("Material processing finished. Materials are ready for production!", this.time());
              console.log(
                "Unprepared: ",
                factory.preparationSector.unpreparedMaterialsStorage.darkChocolateMaterialStorage
              );
              console.log(
                "Prepared: ",
                factory.preparationSector.preparedMaterialsStorage.darkChocolateMaterialStorage
              );
              this.logBorder();
            });
        });

      interval(15000)
        .pipe(take(1))
        .subscribe((val: any) => {
          console.log("TRANSFER: PREPARATION SECTOR --> PRODUCTION SECTOR", this.time());
          console.log("Material transfer towards production sector!", this.time());
          interval(400)
            .pipe(take(1))
            .subscribe((val: any) => {
              factory.preparationSector.setStateToForwardsPreparedMaterialsToTheProductionSector();
              console.log(
                "Preparation sector state: " + FormatString(factory.preparationSector.state, " ", true),
                this.time()
              );
            });
          interval(500)
            .pipe(take(1))
            .subscribe((val: any) => {
              factory.productionSector.setStateToGettingPreparedMaterialsFromPreparationSector();
              console.log(
                "Production sector state: " + FormatString(factory.productionSector.state, " ", true),
                this.time()
              );
              for (let i = 0; i < 50; i++) {
                let newMaterial: ChocolateMaterial = factory.preparationSector.workWithPreparedMaterialStorageOnce(
                  null,
                  ChocolateMaterialType.DarkChocolateMaterial
                );
                factory.productionSector.workWithPreparedMaterialStorageOnce(newMaterial);
              }
              console.log("Unproduced material transfer finished!", this.time());
              console.log(
                "Preparation sector: ",
                factory.preparationSector.preparedMaterialsStorage.darkChocolateMaterialStorage
              );
              console.log(
                "Production sector: ",
                factory.productionSector.preparedMaterialsStorage.darkChocolateMaterialStorage
              );
              this.logBorder();
            });
        });

      interval(16000)
        .pipe(take(1))
        .subscribe((val: any) => {
          console.log("PRODUCTION SECTOR", this.time());
          console.log("Production initialised. Prepared material processing started!", this.time());
          interval(400)
            .pipe(take(1))
            .subscribe((val: any) => {
              factory.productionSector.setStateToProductProduction();
              console.log(
                "Production sector state: " + FormatString(factory.productionSector.state, " ", true),
                this.time()
              );
            });
          interval(500)
            .pipe(take(1))
            .subscribe((val: any) => {
              for (let i = 0; i < 10; i++) {
                factory.productionSector.produceOneProduct(
                  ChocolateMaterialType.DarkChocolateMaterial,
                  factory.productionSector.employees.employees[0]
                );
                factory.productionSector.produceOneProduct(
                  ChocolateMaterialType.DarkChocolateMaterial,
                  factory.productionSector.employees.employees[1]
                );
                factory.productionSector.produceOneProduct(
                  ChocolateMaterialType.DarkChocolateMaterial,
                  factory.productionSector.employees.employees[2]
                );
                factory.productionSector.produceOneProduct(
                  ChocolateMaterialType.DarkChocolateMaterial,
                  factory.productionSector.employees.employees[3]
                );
                factory.productionSector.produceOneProduct(
                  ChocolateMaterialType.DarkChocolateMaterial,
                  factory.productionSector.employees.employees[4]
                );
              }
              console.log("Product production finished!", this.time());
              console.log(
                "Unproduced dark chocolate: ",
                factory.productionSector.preparedMaterialsStorage.darkChocolateMaterialStorage
              );
              console.log(
                "Produced dark chocolate: ",
                factory.productionSector.producedProductsStorage.darkChocolateProductStorage
              );
              this.logBorder();
            });
        });

      interval(17000)
        .pipe(take(1))
        .subscribe((val: any) => {
          console.log("TRANSFER: PRODUCTION SECTOR --> PACKING SECTOR", this.time());
          console.log("Product transfer towards packing sector initialised!", this.time());
          interval(400)
            .pipe(take(1))
            .subscribe((val: any) => {
              factory.productionSector.setStateToForwardsProducedProductToThePackingSector();
              console.log(
                "Production sector state: " + FormatString(factory.productionSector.state, " ", true),
                this.time()
              );
            });
          interval(500)
            .pipe(take(1))
            .subscribe((val: any) => {
              factory.packingSector.setStateToGettingProducedProductsFromProductionSector();
              console.log(
                "Production sector state: " + FormatString(factory.packingSector.state, " ", true),
                this.time()
              );
              for (let i = 0; i < 50; i++) {
                let newProduct: ChocolateProduct = factory.productionSector.workWithProducedProductStorageOnce(
                  null,
                  ChocolateProductType.DarkChocolate
                );
                factory.packingSector.workWithUnpackedProductsStorageOnce(newProduct);
              }
              console.log("Product transfer towards packing sector finished!", this.time());
              console.log(
                "Production sector: ",
                factory.productionSector.producedProductsStorage.darkChocolateProductStorage
              );
              console.log(
                "Packing sector: ",
                factory.packingSector.unpackedProductsStorage.darkChocolateProductStorage
              );
              this.logBorder();
            });
        });
      interval(18000)
        .pipe(take(1))
        .subscribe((val: any) => {
          console.log("PACKING SECTOR...", this.time());
          console.log("Product packing initialised!", this.time());
          interval(400)
            .pipe(take(1))
            .subscribe((val: any) => {
              factory.packingSector.setStateToProductPacking();
              console.log("Packing sector state: " + FormatString(factory.packingSector.state, " ", true), this.time());
            });
          interval(500)
            .pipe(take(1))
            .subscribe((val: any) => {
              for (let i = 0; i < 10; i++) {
                factory.packingSector.packingOneUnpackedProduct(
                  ChocolateProductType.DarkChocolate,
                  factory.packingSector.employees.employees[0]
                );
                factory.packingSector.packingOneUnpackedProduct(
                  ChocolateProductType.DarkChocolate,
                  factory.packingSector.employees.employees[1]
                );
                factory.packingSector.packingOneUnpackedProduct(
                  ChocolateProductType.DarkChocolate,
                  factory.packingSector.employees.employees[2]
                );
                factory.packingSector.packingOneUnpackedProduct(
                  ChocolateProductType.DarkChocolate,
                  factory.packingSector.employees.employees[3]
                );
                factory.packingSector.packingOneUnpackedProduct(
                  ChocolateProductType.DarkChocolate,
                  factory.packingSector.employees.employees[4]
                );
              }
              console.log(
                "Unpacked products: ",
                factory.packingSector.unpackedProductsStorage.darkChocolateProductStorage
              );
              console.log("Packed products: ", factory.packingSector.packedProductsStorage.darkChocolateProductStorage);
              console.log("Products packing finished!", this.time());
              this.logBorder();
            });
        });

      interval(19000)
        .pipe(take(1))
        .subscribe((val: any) => {
          console.log("TRANSFER: PACKING SECTOR --> DELIVERY SECTOR", this.time());
          console.log("Packed products transfer towards transport sector!", this.time());
          interval(400)
            .pipe(take(1))
            .subscribe((val: any) => {
              factory.packingSector.setStateToForwardsProducedProductsToTheDeliverySector();
              console.log(
                "Stanje sektora za pakovanje: " + FormatString(factory.packingSector.state, " ", true),
                this.time()
              );
            });
          interval(500)
            .pipe(take(1))
            .subscribe((val: any) => {
              factory.deliverySector.GettingPackedProductsFromPackingSector();
              console.log(
                "Delivery sector state: " + FormatString(factory.deliverySector.state, " ", true),
                this.time()
              );
              for (let i = 0; i < 10; i++) {
                let newProduct: ChocolateProduct = packingSector.getOnePackedProductsFromStorage(
                  ChocolateProductType.DarkChocolate
                );
                factory.deliverySector.workWithDeliveryStorageOnce(
                  factory.deliverySector.employees.employees[0],
                  newProduct,
                  ChocolateProductType.DarkChocolate
                );
                newProduct = packingSector.getOnePackedProductsFromStorage(ChocolateProductType.DarkChocolate);
                factory.deliverySector.workWithDeliveryStorageOnce(
                  factory.deliverySector.employees.employees[1],
                  newProduct,
                  ChocolateProductType.DarkChocolate
                );
                newProduct = packingSector.getOnePackedProductsFromStorage(ChocolateProductType.DarkChocolate);
                factory.deliverySector.workWithDeliveryStorageOnce(
                  factory.deliverySector.employees.employees[2],
                  newProduct,
                  ChocolateProductType.DarkChocolate
                );
                newProduct = packingSector.getOnePackedProductsFromStorage(ChocolateProductType.DarkChocolate);
                factory.deliverySector.workWithDeliveryStorageOnce(
                  factory.deliverySector.employees.employees[3],
                  newProduct,
                  ChocolateProductType.DarkChocolate
                );
                newProduct = packingSector.getOnePackedProductsFromStorage(ChocolateProductType.DarkChocolate);
                factory.deliverySector.workWithDeliveryStorageOnce(
                  factory.deliverySector.employees.employees[4],
                  newProduct,
                  ChocolateProductType.DarkChocolate
                );
              }
              console.log("Product transfer towards delivery sector finished!", this.time());
              console.log("Packing sector: ", factory.packingSector.packedProductsStorage.darkChocolateProductStorage);
              console.log(
                "Delivery sector: ",
                factory.deliverySector.packedProductsStorage.darkChocolateProductStorage
              );
              this.logBorder();
            });
        });

      interval(19950)
        .pipe(take(1))
        .subscribe((val: any) => {
          factory.deliverySector.setStateToLoadingPackedProductsToTheTruck();
          palletJack.setStateToIsBeingLoaded();
          palletJack.setCargoStateToChocolateProductLoading();
          console.log("Pallet Jack state: " + FormatString(palletJack.state, " ", true), this.time());
          console.log("Pallet Jack cargo state: " + FormatString(palletJack.cargoWorkState, " ", true), this.time());
          for (let j = 0; j < 10; j++) {
            palletJack.workWithCargoOnce(
              null,
              factory.deliverySector.workWithDeliveryStorageOnce(
                factory.deliverySector.employees.employees[0],
                null,
                ChocolateProductType.DarkChocolate
              )
            );
            palletJack.workWithCargoOnce(
              null,
              factory.deliverySector.workWithDeliveryStorageOnce(
                factory.deliverySector.employees.employees[1],
                null,
                ChocolateProductType.DarkChocolate
              )
            );
            palletJack.workWithCargoOnce(
              null,
              factory.deliverySector.workWithDeliveryStorageOnce(
                factory.deliverySector.employees.employees[2],
                null,
                ChocolateProductType.DarkChocolate
              )
            );
            palletJack.workWithCargoOnce(
              null,
              factory.deliverySector.workWithDeliveryStorageOnce(
                factory.deliverySector.employees.employees[3],
                null,
                ChocolateProductType.DarkChocolate
              )
            );
            palletJack.workWithCargoOnce(
              null,
              factory.deliverySector.workWithDeliveryStorageOnce(
                factory.deliverySector.employees.employees[4],
                null,
                ChocolateProductType.DarkChocolate
              )
            );
          }
          console.log("Pallet jack loaded!", this.time());
          console.log("Delivery sector: ", factory.deliverySector.packedProductsStorage.darkChocolateProductStorage);
          console.log("Pallet Jack: ", palletJack.productCargo);
          this.logBorder();
          console.log("Employee daily payment: ", factory.getEmployeesDailyPayment())
        });

      interval(20000)
        .pipe(take(1))
        .subscribe((val: any) => {
          palletJack.setStateToIsBeingUnloaded();
          palletJack.setCargoStateToChocolateProductUnloading();
          console.log("Pallet Jack state: " + FormatString(palletJack.state, " ", true), this.time());
          console.log("Pallet Jack cargo state: " + FormatString(palletJack.cargoWorkState, " ", true), this.time());
          secondTruck.setStateToIsBeingLoaded();
          console.log("Second truck state: ", FormatString(secondTruck.state, " ", true));
          secondTruck.setCargoStateToChocolateProductLoading();
          console.log("Second truck cargo state: ", FormatString(secondTruck.cargoWorkState, " ", true));
          for (let i = 0; i < 50; i++) {
            let product: ChocolateMaterial | ChocolateProduct = palletJack.workWithCargoOnce(null, null);
            secondTruck.workWithCargoOnce(null, product as ChocolateProduct, null, null);
          }
          console.log("Drugi kamion utovaren materijalom tamne cokolade!", this.time());
          console.log(secondTruck.darkChocolateProductCargo);
          this.logBorder();
        });

      interval(21000)
        .pipe(take(1))
        .subscribe((val: any) => {
          console.log("Material transport towards store!", this.time());
          secondTruck.setStateToInTransport();
          console.log("Second truck state: ", FormatString(secondTruck.state, " ", true));
          this.logBorder();
        });

      interval(22000)
        .pipe(take(1))
        .subscribe((val: any) => {
          console.log("TRANSFER: Second TRUCK --> PRIVATE CHOCOLATE STORE", this.time());
          console.log("Product transfer towards provate chocolate store!", this.time());
          interval(4)
            .pipe(take(1))
            .subscribe((val: any) => {
              factory.procurementSector.setStateToUnloadingMaterialsFromTruck();
              console.log(
                "Producrement sector state: ",
                FormatString(factory.procurementSector.state, " ", true),
                this.time()
              );
            });
          interval(5)
            .pipe(take(1))
            .subscribe((val: any) => {
              secondTruck.setStateToIsBeingUnloaded();
              console.log("Second truck state: ", FormatString(secondTruck.state, " ", true));
              secondTruck.setCargoStateToChocolateProductUnloading();
              console.log("Second truck cargo state: ", FormatString(secondTruck.cargoWorkState, " ", true));
              privateStore.openShop();
              console.log("Private store state: ", FormatString(privateStore.state, " ", true));
              for (let i = 0; i < 50; i++) {
                let newProduct: ChocolateProduct = secondTruck.workWithCargoOnce(
                  null,
                  null,
                  null,
                  ChocolateProductType.DarkChocolate
                ) as ChocolateProduct;
                privateStore.storeOneProduct(newProduct);
              }
              console.log("Truck unloading finished!", this.time());
              console.log("Truck: ", secondTruck.darkChocolateProductCargo);
              console.log("Private store: ", privateStore.chocolateProductsForSale.darkChocolateProductStorage);
              this.logBorder();
            });
        });

      interval(25000)
        .pipe(take(1))
        .subscribe((val: any) => {
          console.log("Selling products", this.time());
          let intervalCount = 0;
          console.log(
            "Number of chocolates for sale: ",
            privateStore.chocolateProductsForSale.darkChocolateProductStorage.chocolateProductList.length
          );
          for (
            let i = 0;
            i < privateStore.chocolateProductsForSale.darkChocolateProductStorage.chocolateProductList.length;
            i++
          ) {
            intervalCount = intervalCount + getRandomIntInclusive(100, 500);
            interval(intervalCount)
              .pipe(take(1))
              .subscribe((val: any) => {
                if (privateStore.employee.stealProduct(privateStore.chocolateProductsForSale, i)) {
                } else {
                  let soldProduct: ChocolateProduct = privateStore.sellChocolateProduct(
                    ChocolateProductType.DarkChocolate
                  );
                  if (soldProduct != undefined) {
                    console.log(i + 1, ": Sold!!!", this.time(), soldProduct);
                  }
                }
              });
          }
          intervalCount = intervalCount + 1000;
          interval(intervalCount)
            .pipe(take(1))
            .subscribe((val: any) => {
              privateStore.closeShop();
              console.log("Store employee paymant: ", privateStore.employee.payment);
              console.log(
                "Store employee stolen products count: ",
                privateStore.employee.stolenChocolates.chocolateProductList.length
              );
              this.logBorder();
            });
        });

      interval(38000)
        .pipe(take(1))
        .subscribe((val: any) => {
          const div: HTMLElement = drawHtmlElement(document.body, "div", "div1");
          div.innerHTML = "Na klik se zapocne odbrojavanje i prikazuje radnike. Ponovnim klikom resetuje se brojac.";
          const button1 = drawHtmlElement(document.body, "button", "button1");
          button1.className = "btn btn-secondary";
          button1.innerHTML = "Show employees";
          let observable1 = fromEvent(button1, "click");
          let observable2 = interval(1000);
          observable1
            .pipe(
              switchMap((event: any) => {
                return observable2;
              })
            )
            .subscribe((value: any) => {
              getEmployee(value + 1).then((employee) => console.log(employee[0]));
            });
        });

      interval(43000)
        .pipe(take(1))
        .subscribe((val: any) => {
          this.logBorder();
          console.log("(merge) Types of chocolate that we are selling:");
          const first = interval(4000);

          const second = interval(3000);

          const third = interval(2000);

          const fourth = interval(1000);

          const example = merge(
            first.pipe(take(1), mapTo("3: Dark Chocolate!!!")),
            second.pipe(take(1), mapTo("4: White Chocolate!!!")),
            third.pipe(take(1), mapTo("2: Ruby Chocolate!!!")),
            fourth.pipe(take(1), mapTo("1: Milk Chocolate!!!"))
          );
          const subscribe = example.subscribe((val) => console.log(val, this.time()));
        });

      interval(48000)
        .pipe(take(1))
        .subscribe((val: any) => {
          this.logBorder();
          console.log("(mergeMap) Best sellers:");
          of("1: Dark Chocolate!!!", "2: White Chocolate!!!", "3: Ruby Chocolate!!!", "4: Milk Chocolate!!!")
            .pipe(mergeMap((chocolate) => of(`best selling chocolate number ${chocolate}`)))
            .subscribe((val) => console.log(val));
        });

      interval(49000)
        .pipe(take(1))
        .subscribe((val: any) => {
          this.logBorder();
          console.log("(mergeMap) First 5 employees:");
          of(1, 2, 3, 4, 5)
            .pipe(mergeMap((id) => getEmployeeByIdObservable(id)))
            .subscribe((val) => console.log(val[0]));
        });

      interval(50000)
        .pipe(take(1))
        .subscribe((val: any) => {
          this.logBorder();
          console.log("(takeUntil) First 4 employees:");
          const source = interval(1000);
          const timer1 = timer(5000);
          const example = source.pipe(takeUntil(timer1));
          example.subscribe((val) => {
            getEmployee(val + 1).then((employee) => {
              console.log(val + ": " + employee[0].name + " " + employee[0].lastName);
            });
          });
        });
    });
  }

  getPreparationSectorEmployees(factory: ChocolateFactory, preparationSectorEmployeesIdArray: number[], data: any) {
    preparationSectorEmployeesIdArray.map((x: number) => {
      let index: number = data[0].employees.findIndex((i: any) => i.id == x);
      let preparationSectorEmployee = new Employee(
        data[0].employees[index].name,
        data[0].employees[index].lastName,
        null,
        data[0].employees[index].hasDrivingLicence
      );
      preparationSectorEmployee.id = preparationSectorEmployeesIdArray[x];
      preparationSectorEmployee.setWorkStateToWorking();
      factory.preparationSector.employees.addNewEmployee(preparationSectorEmployee);
    });
  }

  getProductionSectorEmployees(factory: ChocolateFactory, productionSectorEmployeesIdArray: number[], data: any) {
    productionSectorEmployeesIdArray.map((x: number) => {
      let index: number = data[0].employees.findIndex((i: any) => i.id == x);
      let preparationSectorEmployee = new Employee(
        data[0].employees[index].name,
        data[0].employees[index].lastName,
        null,
        data[0].employees[index].hasDrivingLicence
      );
      preparationSectorEmployee.id = productionSectorEmployeesIdArray[x];
      preparationSectorEmployee.setWorkStateToWorking();
      factory.productionSector.employees.addNewEmployee(preparationSectorEmployee);
    });
  }

  getProcurementSectorEmployees(factory: ChocolateFactory, array: number[], data: any) {
    array.map((x: number) => {
      let index: number = data[0].employees.findIndex((i: any) => i.id == x);

      let procurementSectorEmployee = new Employee(
        data[0].employees[index].name,
        data[0].employees[index].lastName,
        null,
        data[0].employees[index].hasDrivingLicence
      );
      procurementSectorEmployee.id = data[0].employees[index].id;
      procurementSectorEmployee.setWorkStateToWorking();
      factory.procurementSector.employees.addNewEmployee(procurementSectorEmployee);
    });
  }

  getPackingSectorEmployees(factory: ChocolateFactory, packingSectorEmployeesIdArray: number[], data: any) {
    packingSectorEmployeesIdArray.map((x: number) => {
      let index: number = data[0].employees.findIndex((i: any) => i.id == x);
      let packingSectorEmployee = new Employee(
        data[0].employees[index].name,
        data[0].employees[index].lastName,
        null,
        data[0].employees[index].hasDrivingLicence
      );
      packingSectorEmployee.id = packingSectorEmployeesIdArray[x];
      packingSectorEmployee.setWorkStateToWorking();
      factory.packingSector.employees.addNewEmployee(packingSectorEmployee);
    });
  }

  getDeliverySectorEmployees(factory: ChocolateFactory, deliverySectorEmployeesIdArray: number[], data: any) {
    deliverySectorEmployeesIdArray.map((x: number) => {
      let index: number = data[0].employees.findIndex((i: any) => i.id == x);
      let deliverySectorEmployee = new Employee(
        data[0].employees[index].name,
        data[0].employees[index].lastName,
        null,
        data[0].employees[index].hasDrivingLicence
      );
      deliverySectorEmployee.id = deliverySectorEmployeesIdArray[x];
      deliverySectorEmployee.setWorkStateToWorking();
      factory.deliverySector.employees.addNewEmployee(deliverySectorEmployee);
    });
  }

  allEmployeesPresent(employees: EmployeeList, employeesList: any) {
    let allEmployeesPresent: boolean = false;
    if (employees.employees.length == employeesList.length) {
      allEmployeesPresent = true;
    }
    return allEmployeesPresent;
  }
}
