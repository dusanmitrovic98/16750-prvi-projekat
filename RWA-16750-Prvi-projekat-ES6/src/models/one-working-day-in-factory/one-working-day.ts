import { Observable, interval, of, timer, merge, zip, fromEvent } from "rxjs";
import { take, takeUntil, mapTo, map, mergeMap, switchMap } from "rxjs/operators";
import { ChocolateMaterialType, ChocolateMaterial } from "../chocolate-materials/chocolate-material";
import { getFactoryById } from "../../services/factory-services";
import { ChocolateFactory } from "../chocolate-factory/chocolate-factory";
import { ProcurementSector } from "../chocolate-factory/factory-sectors/procurement-sector";
import { PreparationSector } from "../chocolate-factory/factory-sectors/preparation-sector";
import { ProductionSector } from "../chocolate-factory/factory-sectors/production-sector";
import { PackingSector } from "../chocolate-factory/factory-sectors/packing-sector";
import { DeliverySector } from "../chocolate-factory/factory-sectors/delivery-sector";
import { ChocolateProduct, ChocolateProductType } from "../chocolate-products/chocolate-product";
import { drawHtmlElement } from "../../drawHtmlElements/draw-html-element/draw-html-element";
import { ChocolateProductList } from "../chocolate-products/chocolate-product-list";
import { Warehouse } from "../warehouse/warehouse";
import { Truck } from "../transport/truck/truck";
import { Employee } from "../people/employee/employee";
import { EmployeeList } from "../people/employee/employee-list";
import { FormatString } from "../../.bin/string-manipulation/string-manipulation";

export class OneWorkingDay {
  databaseObservable: Observable<any>;

  constructor() {
    this.databaseObservable = getFactoryById(1);
  }

  log() {
    this.databaseObservable.subscribe((database: any) => {
      console.log(database);
    });
  }

  start() {
    this.databaseObservable.subscribe((data: any) => {
      let factory: ChocolateFactory = new ChocolateFactory(data[0].name, data[0].adress);
      let firstTruck: Truck;
      let secondTruck: Truck;
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
      productionSector.id = data[0].preparationSector[0].id;
      let packingSector: PackingSector = new PackingSector(
        factory,
        data[0].packingSector[0].materialStorageMaximumCapacity
      );
      packingSector.id = data[0].productionSector[0].id;
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
      console.log("Factory initialisation finished");
      let warehouse: Warehouse = new Warehouse(data[0].warehouse[0].maximumCapacity);
      warehouse.id = data[0].warehouse[0].id;

      let employeeIdArray: number[] = new Array();
      data[0].employeesId.map((id: number) => {
        employeeIdArray.push(id);
      });

      let employees: EmployeeList = new EmployeeList();
      employeeIdArray.forEach((id: number) => {
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

      const intervalCount: any = interval(1000);
      const takeProcurementSectorEmployees = intervalCount.pipe(take(procurementSectorEmployeesIdArray.length));
      takeProcurementSectorEmployees.subscribe((x: any) => {
        let index: number = procurementSectorEmployeesIdArray[x];
        let procurementSectorEmployee = new Employee(
          data[0].employees[index - 1].name,
          data[0].employees[index - 1].lastName,
          null,
          data[0].employees[index - 1].hasDrivingLicence
        );
        procurementSectorEmployee.id = data[0].employees[index - 1].id;
        procurementSectorEmployee.setWorkStateToWorking();
        factory.procurementSector.employees.addNewEmployee(procurementSectorEmployee);
      });

      const takePreparationSectorEmployees: any = intervalCount.pipe(take(preparationSectorEmployeesIdArray.length));
      takePreparationSectorEmployees.subscribe((x: any) => {
        let index: number = preparationSectorEmployeesIdArray[x];
        let preparationSectorEmployee = new Employee(
          data[0].employees[index - 1].name,
          data[0].employees[index - 1].lastName,
          null,
          data[0].employees[index - 1].hasDrivingLicence
        );
        preparationSectorEmployee.id = preparationSectorEmployeesIdArray[x];
        preparationSectorEmployee.setWorkStateToWorking();
        factory.preparationSector.employees.addNewEmployee(preparationSectorEmployee);
      });

      const takeProductionSectorEmployees: any = intervalCount.pipe(take(productionSectorEmployeesIdArray.length));
      takeProductionSectorEmployees.subscribe((x: any) => {
        let index: number = productionSectorEmployeesIdArray[x];
        let productionSectorEmployee = new Employee(
          data[0].employees[index - 1].name,
          data[0].employees[index - 1].lastName,
          null,
          data[0].employees[index - 1].hasDrivingLicence
        );
        productionSectorEmployee.id = productionSectorEmployeesIdArray[x];
        productionSectorEmployee.setWorkStateToWorking();
        factory.productionSector.employees.addNewEmployee(productionSectorEmployee);
      });

      const takePackingSectorEmployees: any = intervalCount.pipe(take(packingSectorEmployeesIdArray.length));
      takePackingSectorEmployees.subscribe((x: any) => {
        let index: number = packingSectorEmployeesIdArray[x];
        let packingSectorEmployee = new Employee(
          data[0].employees[index - 1].name,
          data[0].employees[index - 1].lastName,
          null,
          data[0].employees[index - 1].hasDrivingLicence
        );
        packingSectorEmployee.id = packingSectorEmployeesIdArray[x];
        packingSectorEmployee.setWorkStateToWorking();
        factory.packingSector.employees.addNewEmployee(packingSectorEmployee);
      });

      const takeDeliverySectorEmployees: any = intervalCount.pipe(take(deliverySectorEmployeesIdArray.length));
      takeDeliverySectorEmployees.subscribe((x: any) => {
        let index: number = deliverySectorEmployeesIdArray[x];
        let deliverySectorEmployee = new Employee(
          data[0].employees[index - 1].name,
          data[0].employees[index - 1].lastName,
          null,
          data[0].employees[index - 1].hasDrivingLicence
        );
        deliverySectorEmployee.id = deliverySectorEmployeesIdArray[x];
        deliverySectorEmployee.setWorkStateToWorking();
        factory.deliverySector.employees.addNewEmployee(deliverySectorEmployee);
      });
      console.log("Radnici se pripremaju!!!");

      let delay = (time: any) => (result: any) => new Promise((resolve) => setTimeout(() => resolve(result), time));

      Promise.resolve("Radnici su spremni!!!")
        .then(delay(2000))
        .then((result) => console.info(result));

      interval(2500)
        .pipe(take(1))
        .subscribe((val: any) => {
          console.log("Warehouse initialisation started!");
          console.log(warehouse);
        });

      interval(4000)
        .pipe(take(1))
        .subscribe((val: any) => {
          warehouse.setStateToMaterialStoring();
          for (let i = 0; i < 50; i++) {
            warehouse.workWithStorageOnce(new ChocolateMaterial(ChocolateMaterialType.DarkChocolateMaterial));
          }
          console.log(warehouse);
          for (let i = 0; i < 50; i++) {
            warehouse.workWithStorageOnce(new ChocolateMaterial(ChocolateMaterialType.WhiteChocolateMaterial));
          }
          for (let i = 0; i < 50; i++) {
            warehouse.workWithStorageOnce(new ChocolateMaterial(ChocolateMaterialType.MilkChocolateMaterial));
          }
          for (let i = 0; i < 50; i++) {
            warehouse.workWithStorageOnce(new ChocolateMaterial(ChocolateMaterialType.RubyChocolateMaterial));
          }
          console.log("Warehouse initialised!");
          console.log(warehouse);
        });

      interval(5000)
        .pipe(take(1))
        .subscribe((val: any) => {
          console.log("Waiting for trucks to get ready!");
          interval(1000)
            .pipe(take(1))
            .subscribe((val: any) => {
              firstTruck = new Truck(data[0].trucks[0].brand, null, data[0].trucks[0].maximumCaroCapacity);
              firstTruck.setId(1);
              firstTruck.setDriver(factory.employees.employees[49]);
              console.log(firstTruck);
              console.log(firstTruck.driver);
              console.log("First driver ready!");
            });
          interval(2000)
            .pipe(take(1))
            .subscribe((val: any) => {
              secondTruck = new Truck(data[0].trucks[1].brand, null, data[0].trucks[1].maximumCaroCapacity);
              secondTruck.setId(2);
              secondTruck.setDriver(factory.employees.employees[50]);
              console.log(secondTruck);
              console.log(secondTruck.driver);
              console.log("Second driver ready!");
            });
        });

      interval(8500)
        .pipe(take(1))
        .subscribe((val: any) => {
          warehouse.setStateToMaterialRemoval();
          firstTruck.setStateToIsBeingLoaded();
          firstTruck.setCargoStateToChocolateMaterialLoading();
          console.log(firstTruck.state);
          console.log(firstTruck.isThereFreeSpace());
          for (let i = 0; i < 50; i++) {
            let newMaterial: ChocolateMaterial = warehouse.removeOneMaterial(
              ChocolateMaterialType.DarkChocolateMaterial
            );
            firstTruck.workWithCargoOnce(newMaterial);
          }
          console.log("Prvi kamion utovaren materijalom tamne cokolade!");
          console.log(firstTruck);
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
            .subscribe((x) => console.log(x));
        });

      interval(10000)
        .pipe(take(1))
        .subscribe((val: any) => {
          console.log("Transport materiala ka fabrici!");
        });

      interval(11000)
        .pipe(take(1))
        .subscribe((val: any) => {
          console.log("Prvi kamion je stigao. Material je dovezen!");
        });

      /*interval(12000)
        .pipe(take(1))
        .subscribe((val: any) => {
          let obs1 = of(
            "procurement sector",
            "preparation sector",
            "production sector",
            "packing sector",
            "delivery sector"
          );
          let obs2 = of("not ready", "ready");

          
        });*/

      interval(12000)
        .pipe(take(1))
        .subscribe((val: any) => {
          console.log("Zapoceto skladistenje u pribavni sector!");
          interval(400)
            .pipe(take(1))
            .subscribe((val: any) => {
              factory.procurementSector.setStateToUnloadingMaterialsFromTruck();
              console.log("Stanje pribavnog sektora: " + FormatString(factory.procurementSector.state, " ", true));
            });
          interval(500)
            .pipe(take(1))
            .subscribe((val: any) => {
              firstTruck.setStateToIsBeingUnloaded();
              firstTruck.setCargoStateToChocolateMaterialUnLoading();
              for (let i = 0; i < 50; i++) {
                let newMaterial: ChocolateMaterial = firstTruck.unloadOneMaterialFromCargo(
                  ChocolateMaterialType.DarkChocolateMaterial
                );
                factory.procurementSector.workWithProcurementStorageOnce(
                  procurementSector.employees.employees[0],
                  newMaterial
                );
              }
              console.log(firstTruck);
              console.log(factory.procurementSector.materialStorage);
              console.log("Istovar zavrsen!");
            });
        });

      interval(13000)
        .pipe(take(1))
        .subscribe((val: any) => {
          console.log("Zapoceto prosledjivanje materiala u pribavni sektor!");
          interval(400)
            .pipe(take(1))
            .subscribe((val: any) => {
              factory.preparationSector.setStateToGettingUnpreparedMaterialsFromProcurementSector();
              console.log("Stanje pripremnog sektora: " + FormatString(factory.preparationSector.state, " ", true));
            });
          interval(500)
            .pipe(take(1))
            .subscribe((val: any) => {
              factory.procurementSector.setStateToForwardsMaterialsToThePreparationSector();
              for (let i = 0; i < 50; i++) {
                let newMaterial: ChocolateMaterial = factory.procurementSector.workWithProcurementStorageOnce(
                  factory.procurementSector.employees.employees[0],
                  null,
                  ChocolateMaterialType.DarkChocolateMaterial
                );
                factory.preparationSector.workWithUnpreparedMaterialStorageOnce(newMaterial);
              }
              console.log(factory.procurementSector);
              console.log(factory.preparationSector);
              console.log("Prosledjivanje neobradjenog materijala gotovo!");
            });
        });

      interval(14000)
        .pipe(take(1))
        .subscribe((val: any) => {
          console.log("Zapoceta priprema materijala za obradu!");
          interval(400)
            .pipe(take(1))
            .subscribe((val: any) => {
              factory.preparationSector.setStateToPreparingUnpreparedMaterials();
              console.log("Stanje pripremnog sektora: " + FormatString(factory.preparationSector.state, " ", true));
            });
          interval(500)
            .pipe(take(1))
            .subscribe((val: any) => {
              for (let i = 0; i < 10; i++) {
                factory.preparationSector.preparingOneUnpreparedMaterial(
                  ChocolateMaterialType.DarkChocolateMaterial,
                  factory.preparationSector.employees.employees[0]
                );
              }
              for (let i = 0; i < 10; i++) {
                factory.preparationSector.preparingOneUnpreparedMaterial(
                  ChocolateMaterialType.DarkChocolateMaterial,
                  factory.preparationSector.employees.employees[1]
                );
              }
              for (let i = 0; i < 10; i++) {
                factory.preparationSector.preparingOneUnpreparedMaterial(
                  ChocolateMaterialType.DarkChocolateMaterial,
                  factory.preparationSector.employees.employees[2]
                );
              }
              for (let i = 0; i < 10; i++) {
                factory.preparationSector.preparingOneUnpreparedMaterial(
                  ChocolateMaterialType.DarkChocolateMaterial,
                  factory.preparationSector.employees.employees[3]
                );
              }
              for (let i = 0; i < 10; i++) {
                factory.preparationSector.preparingOneUnpreparedMaterial(
                  ChocolateMaterialType.DarkChocolateMaterial,
                  factory.preparationSector.employees.employees[4]
                );
              }
              console.log(factory.preparationSector);
              console.log("Obrada materijala je gotova. Materijali su spremni za produkciju!");
            });
        });

      interval(15000)
        .pipe(take(1))
        .subscribe((val: any) => {
          console.log("Zapoceto prosledjivanje materiala u sektor proizvodnje!");
          interval(400)
            .pipe(take(1))
            .subscribe((val: any) => {
              factory.preparationSector.setStateToForwardsPreparedMaterialsToTheProductionSector();
              console.log("Stanje pripremnog sektora: " + FormatString(factory.preparationSector.state, " ", true));
            });
          interval(500)
            .pipe(take(1))
            .subscribe((val: any) => {
              factory.productionSector.setStateToGettingPreparedMaterialsFromPreparationSector();
              for (let i = 0; i < 50; i++) {
                let newMaterial: ChocolateMaterial = factory.preparationSector.workWithPreparedMaterialStorageOnce(
                  null,
                  ChocolateMaterialType.DarkChocolateMaterial
                );
                factory.productionSector.workWithPreparedMaterialStorageOnce(newMaterial);
              }
              console.log(factory.preparationSector);
              console.log(factory.productionSector);
              console.log("Prosledjivanje neobradjenog materijala gotovo!");
            });
        });

      interval(16000)
        .pipe(take(1))
        .subscribe((val: any) => {
          console.log("Zapoceta proizvodnja!");
          interval(400)
            .pipe(take(1))
            .subscribe((val: any) => {
              factory.productionSector.setStateToProductProduction();
              console.log("Stanje pripremnog sektora: " + FormatString(factory.productionSector.state, " ", true));
            });
          interval(500)
            .pipe(take(1))
            .subscribe((val: any) => {
              for (let i = 0; i < 10; i++) {
                factory.productionSector.produceOneProduct(
                  ChocolateMaterialType.DarkChocolateMaterial,
                  factory.productionSector.employees.employees[0]
                );
              }
              for (let i = 0; i < 10; i++) {
                factory.productionSector.produceOneProduct(
                  ChocolateMaterialType.DarkChocolateMaterial,
                  factory.productionSector.employees.employees[1]
                );
              }
              for (let i = 0; i < 10; i++) {
                factory.productionSector.produceOneProduct(
                  ChocolateMaterialType.DarkChocolateMaterial,
                  factory.productionSector.employees.employees[2]
                );
              }
              for (let i = 0; i < 10; i++) {
                factory.productionSector.produceOneProduct(
                  ChocolateMaterialType.DarkChocolateMaterial,
                  factory.productionSector.employees.employees[3]
                );
              }
              for (let i = 0; i < 10; i++) {
                factory.productionSector.produceOneProduct(
                  ChocolateMaterialType.DarkChocolateMaterial,
                  factory.productionSector.employees.employees[4]
                );
              }
              factory.productionSector.producedProductsStorage.whiteChocolateProductStorage = new ChocolateProductList();
              factory.productionSector.producedProductsStorage.milkChocolateProductStorage = new ChocolateProductList();
              factory.productionSector.producedProductsStorage.rubyChocolateProductStorage = new ChocolateProductList();
              console.log(factory.productionSector);
              console.log("Proizvodnja materijala je gotova!");
            });
        });

      interval(17000)
        .pipe(take(1))
        .subscribe((val: any) => {
          console.log("Zapoceto prosledjivanje materiala u sektoru za pakovanje!");
          interval(400)
            .pipe(take(1))
            .subscribe((val: any) => {
              factory.productionSector.setStateToForwardsProducedProductToThePackingSector();
              console.log("Stanje sektora proizvodnje: " + FormatString(factory.productionSector.state, " ", true));
            });
          interval(500)
            .pipe(take(1))
            .subscribe((val: any) => {
              factory.packingSector.setStateToGettingProducedProductsFromProductionSector();
              for (let i = 0; i < 50; i++) {
                let newProduct: ChocolateProduct = factory.productionSector.workWithProducedProductStorageOnce(
                  null,
                  ChocolateProductType.DarkChocolate
                );
                factory.packingSector.workWithUnpreparedProductsStorageOnce(newProduct);
              }
              console.log(factory.productionSector);
              console.log(factory.packingSector);
              console.log("Prosledjivanje neobradjenog materijala gotovo!");
            });
        });

      interval(16000)
        .pipe(take(1))
        .subscribe((val: any) => {
          console.log("Zapoceta pakovanje!");
          interval(400)
            .pipe(take(1))
            .subscribe((val: any) => {
              factory.packingSector.setStateToProductPacking();
              console.log("Stanje sektora za pakovanje: " + FormatString(factory.packingSector.state, " ", true));
            });
          interval(500)
            .pipe(take(1))
            .subscribe((val: any) => {
              factory.packingSector.packedProductsStorage.whiteChocolateProductStorage = new ChocolateProductList();
              factory.packingSector.packedProductsStorage.milkChocolateProductStorage = new ChocolateProductList();
              factory.packingSector.packedProductsStorage.rubyChocolateProductStorage = new ChocolateProductList();
              console.log(factory.packingSector);
              console.log("Pakovanje materijala je zavrseno!");
            });
        });

      interval(16000)
        .pipe(take(1))
        .subscribe((val: any) => {
          console.log("Prosledjivanje materijala sektoru transporta!");
          interval(400)
            .pipe(take(1))
            .subscribe((val: any) => {
              factory.packingSector.setStateToForwardsProducedProductsToTheDeliverySector();
              console.log("Stanje sektora za pakovanje: " + FormatString(factory.packingSector.state, " ", true));
            });
          interval(500)
            .pipe(take(1))
            .subscribe((val: any) => {
              console.log(factory.deliverySector);
              console.log("Pakovanje materijala je zavrseno!");
            });
        });

      interval(20000)
        .pipe(take(1))
        .subscribe((val: any) => {
          const div: HTMLElement = drawHtmlElement(document.body, "div", "div1");
          div.innerHTML = "Na klik se zapocne odbrojavanje. Ponovnim klikom resetuje se brojac.";
          const button1 = drawHtmlElement(document.body, "button", "button1");
          button1.className = "btn btn-secondary";
          button1.innerHTML = "ClickMe";
          let observable1 = fromEvent(button1, "click");
          let observable2 = interval(1000);

          observable1
            .pipe(
              switchMap((event: any) => {
                return observable2;
              })
            )
            .subscribe((value: any) => {
              console.log(value);
            });
        });

      interval(22000)
        .pipe(take(1))
        .subscribe((val: any) => {
          const first = interval(2000);

          const second = interval(1500);

          const third = interval(1000);

          const fourth = interval(500);

          const example = merge(
            first.pipe(mapTo("Example 1!")),
            second.pipe(mapTo("Example 2!")),
            third.pipe(mapTo("Example 3")),
            fourth.pipe(mapTo("Example 4"))
          );
          const subscribe = example.subscribe((val) => console.log(val));
        });

      interval(25000)
        .pipe(take(1))
        .subscribe((val: any) => {
          const promise = (value: any) => new Promise((resolve) => resolve(`${value} example!!!`));
          const source = of("Merge map ");
          source.pipe(mergeMap((value) => promise(value))).subscribe((value) => console.log(value));

          const click = fromEvent(document, "click");
          const timer = interval(1000);
          const clicksOrTimer = merge(click, timer);
          clicksOrTimer.subscribe((result) => console.log(result));
        });

      interval(26000)
        .pipe(take(1))
        .subscribe((val: any) => {
          const source = interval(1000);
          const timer1 = timer(20000);
          const example = source.pipe(takeUntil(timer1));
          example.subscribe((val) => console.log(val));
        });
    });
  }
}
