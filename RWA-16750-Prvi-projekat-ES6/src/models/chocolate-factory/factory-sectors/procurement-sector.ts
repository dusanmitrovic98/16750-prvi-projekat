import { ChocolateFactory } from "../chocolate-factory";
import { ChocolateMaterialType, ChocolateMaterial } from "../../chocolate-materials/chocolate-material";
import { MaterialStorage } from "../../warehouse/material-storage";
import { PaymentManagement } from "../../payment-management.ts/payment-management";
import { Employee } from "../../people/employee/employee";
import { EmployeeList } from "../../people/employee/employee-list";

enum ProcurementSectorState {
  WaitingForActivity = "WaitingForActivity",
  UnloadingMaterialsFromTruck = "UnloadingMaterialsFromTruck",
  ForwardsMaterialsToThePreparationSector = "ForwardsMaterialsToThePreparationSector",
}

export class ProcurementSector {
  id: number;
  factory: ChocolateFactory;
  materialStorage: MaterialStorage;
  state: ProcurementSectorState;
  paymentManagement: PaymentManagement;
  employees: EmployeeList;

  constructor(factory: ChocolateFactory, materialStorageMaximumCapacity: number = 1500) {
    this.id = undefined;
    this.factory = factory;
    this.materialStorage = new MaterialStorage(materialStorageMaximumCapacity);
    this.state = ProcurementSectorState.WaitingForActivity;
    this.paymentManagement = new PaymentManagement();
    this.paymentManagement.setEmployeePaymentPercentagePerProduct(0.5);
    this.paymentManagement.setDarkChocolatePrice(100);
    this.paymentManagement.setWhiteChocolatePrice(100);
    this.paymentManagement.setMilkChocolatePrice(100);
    this.paymentManagement.setRubyChocolatePrice(100);
    this.employees = new EmployeeList();
  }

  setFactory(factory: ChocolateFactory) {
    this.factory = factory;
  }

  getFactory() {
    return this.factory;
  }

  setStateToWaitingForActivity() {
    this.state = ProcurementSectorState.WaitingForActivity;
  }

  setStateToUnloadingMaterialsFromTruck() {
    this.state = ProcurementSectorState.UnloadingMaterialsFromTruck;
  }

  setStateToForwardsMaterialsToThePreparationSector() {
    this.state = ProcurementSectorState.ForwardsMaterialsToThePreparationSector;
  }

  isStateWaitingForActivity() {
    return this.state === ProcurementSectorState.WaitingForActivity;
  }

  isStateUnloadingMaterialsFromTruck() {
    return this.state === ProcurementSectorState.UnloadingMaterialsFromTruck;
  }

  isStateForwardsMaterialsToThePreparationSector() {
    return this.state === ProcurementSectorState.ForwardsMaterialsToThePreparationSector;
  }

  storeOneMaterialToStorage(chocolateMaterial: ChocolateMaterial) {
    this.materialStorage.setStateToMaterialStoring();
    this.materialStorage.workWithStorageOnce(chocolateMaterial);
  }

  getOneMaterialFromStorage(chocolateMaterialType: ChocolateMaterialType) {
    this.materialStorage.setStateToMaterialRemoval();
    return this.materialStorage.workWithStorageOnce(null, chocolateMaterialType);
  }

  workWithProcurementStorageOnce(
    employee: Employee,
    newMaterial: ChocolateMaterial,
    chocolateMaterialType?: ChocolateMaterialType
  ) {
    if (this.isStateUnloadingMaterialsFromTruck() && newMaterial != null) {
      this.storeOneMaterialToStorage(newMaterial);
      this.payEmployeePerMaterial(employee, newMaterial);
    }
    if (this.isStateForwardsMaterialsToThePreparationSector() && chocolateMaterialType) {
      this.payEmployeePerMaterial(employee, null, chocolateMaterialType);
      return this.getOneMaterialFromStorage(chocolateMaterialType);
    }
  }

  payEmployeePerMaterial(
    employee: Employee,
    chocolateMaterial: ChocolateMaterial,
    materialType?: ChocolateMaterialType
  ) {
    if (chocolateMaterial != null) {
      let payment = this.paymentManagement.getEmployeePaymentPerMaterial(chocolateMaterial);
      employee.getPayment(payment);
      return;
    }
    if (materialType) {
      let payment = this.paymentManagement.getEmployeePaymentPerMaterialType(materialType);
      employee.getPayment(payment);
      return;
    }
  }
}
