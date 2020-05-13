import { Truck, TruckState } from "./models/transport/truck/truck";
import { Employee } from "./models/people/employee/employee";
import { Empolyeer } from "./models/people/employeer/employeer";
import { FormatString } from "./.bin/string-manipulation/string-manipulation";
import { ChocolateMaterialList } from "./models/chocolate-materials/chocolate-material-list";
import { ChocolateMaterial, ChocolateMaterialType } from "./models/chocolate-materials/chocolate-material";
import { PalletJack } from "./models/factory-machines/pallet-jack/pallet-jack";
import { ChocolateProduct, ChocolateProductType } from "./models/chocolate-products/chocolate-product";

console.log("hello");

let chocolateMaterialList: ChocolateMaterialList;

let truck = new Truck("Ford", new Employee("Dusan", "Mitrovic", new Empolyeer("Milos", "Mitrovic")));
let palletJack = new PalletJack(new Employee("Dusan", "Mitrovic", new Empolyeer("Milos", "Mitrovic")));

let chocolateMaterial1: ChocolateMaterial = new ChocolateMaterial(ChocolateMaterialType.MilkChocolateMaterial);
let chocolateMaterial2: ChocolateMaterial = new ChocolateMaterial(ChocolateMaterialType.DarkChocolateMaterial);
let chocolateMaterial3: ChocolateMaterial = new ChocolateMaterial(ChocolateMaterialType.RubyChocolateMaterial);
let chocolateMaterial4: ChocolateMaterial = new ChocolateMaterial(ChocolateMaterialType.MilkChocolateMaterial);
let chocolateProduct: ChocolateProduct = new ChocolateProduct(ChocolateProductType.DarkChocolate);
truck.setCargoStateToChocolateMaterialLoading();
truck.setStateToIsBeingLoaded();

debugger;
truck.workWithCargoOnce(chocolateMaterial1);
truck.workWithCargoOnce(chocolateMaterial2);
truck.workWithCargoOnce(chocolateMaterial3);
truck.workWithCargoOnce(chocolateMaterial4);
truck.setCargoStateToChocolateProductLoading();
truck.workWithCargoOnce(null, chocolateProduct);
console.log(truck);
palletJack.setCargoStateToChocolateMaterialLoading();
palletJack.setStateToIsBeingLoaded();

palletJack.workWithCargoOnce(chocolateMaterial1);
palletJack.workWithCargoOnce(chocolateMaterial2);
palletJack.workWithCargoOnce(chocolateMaterial3);
palletJack.workWithCargoOnce(chocolateMaterial4);
palletJack.workWithCargoOnce(null, chocolateProduct);
console.log(palletJack);
palletJack.setCargoStateToChocolateMaterialUnLoading();
palletJack.setStateToIsBeingUnloaded();

while (!palletJack.isCargoEmpty()) {
  let cM: any = palletJack.workWithCargoOnce();
  truck.workWithCargoOnce(cM);
}
console.log(palletJack);
console.log(truck);

console.log(FormatString(truck.cargoWorkState, " ", true));

console.log(truck.getCurrentFuelTankLevel());
console.log(truck.cargoCurrentlyOccupiedSpace());
truck.setCargoStateToChocolateProductUnloading();
truck.setStateToIsBeingUnloaded();
console.log(truck.workWithCargoOnce(null, null, null, ChocolateProductType.DarkChocolate));
