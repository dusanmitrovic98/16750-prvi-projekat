import { Truck, TruckState } from "./models/transport/truck/truck";
import { Employee } from "./models/people/employee/employee";
import { Empolyeer } from "./models/people/employeer/employeer";
import { FormatString } from "./.bin/string-manipulation/string-manipulation"
import { ChocolateMaterialList } from "./models/chocolate-materials/chocolate-material-list";

console.log("hello")

let chocolateMaterialList: ChocolateMaterialList;

let truck = new Truck("f", new Employee("s", "d", new Empolyeer("Bob", "Martin")), chocolateMaterialList, 1, 2, 100, 0);

console.log(truck.refilFuelTankToMaximum());

console.log(truck.driver.factoryEmployeer.employeerMoodState);

console.log(FormatString(truck.driver.factoryEmployeer.employeerWorkState.toString(), ""));
