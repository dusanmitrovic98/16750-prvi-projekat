import { Truck, TruckState } from "./models/transport/truck/truck";
import { Employee } from "./models/people/employee/employee";
import { Employeer } from "./models/people/employeer/employeer";
import { FormatString } from "./.bin/string-manipulation/string-manipulation";
import { ChocolateMaterialList } from "./models/chocolate-materials/chocolate-material-list";
import { ChocolateMaterial, ChocolateMaterialType } from "./models/chocolate-materials/chocolate-material";
import { PalletJack } from "./models/factory-machines/pallet-jack/pallet-jack";
import { ChocolateProduct, ChocolateProductType } from "./models/chocolate-products/chocolate-product";
import { getRandomIntInclusive } from "./.bin/random-numbers/random-numbers";
import { OneWorkingDay } from "./models/one-working-day-in-factory/one-working-day";

let workingDay: OneWorkingDay = new OneWorkingDay();
workingDay.log();
workingDay.start();
