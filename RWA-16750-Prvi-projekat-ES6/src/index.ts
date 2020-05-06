import { Truck, TruckState } from "./models/transport/truck/truck";
import Employee from "./models/people/employee/employee";

console.log("hello")

let truck = new Truck("f", new Employee("s", "d"), 1, 2, 100, 0);

console.log(truck.refilFuelTankToMax());