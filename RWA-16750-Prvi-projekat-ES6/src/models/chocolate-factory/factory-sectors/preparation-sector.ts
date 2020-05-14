import { ChocolateFactory } from "../chocolate-factory";
import { MaterialStorage } from "../../warehouse/material-storage";
import { ChocolateMaterial, ChocolateMaterialType } from "../../chocolate-materials/chocolate-material";
import { Observable } from "rxjs";
import { EmployeeList } from "../../people/employee/employee-list";
import { Employee } from "../../people/employee/employee";
import { PaymentManagement } from "../../payment-management.ts/payment-management";

enum PreparationSectorState {
  WaitingForActivity = "WaitingForActivity",
  GettingUnpreparedMaterialsFromProcurementSector = "GettingUnpreparedMaterialsFromProcurementSector",
  PreparingUnpreparedMaterials = "PreparingUnpreparedMaterials",
  ForwardsPreparedMaterialsToTheProductionSector = "ForwardsMaterialsToThePreparationSector",
}

export class PreparationSector {
  id: number;
  factory: ChocolateFactory;
  unpreparedMaterialsStorage: MaterialStorage;
  preparedMaterialsStorage: MaterialStorage;
  state: PreparationSectorState;
  employees: EmployeeList;
  paymentManagement: PaymentManagement;

  constructor(factory: ChocolateFactory, materialStorageMaximumCapacity: number = 1500) {
    this.id = undefined;
    this.factory = factory;
    this.unpreparedMaterialsStorage = new MaterialStorage(materialStorageMaximumCapacity);
    this.preparedMaterialsStorage = new MaterialStorage(materialStorageMaximumCapacity);
    this.state = PreparationSectorState.WaitingForActivity;
    this.employees = new EmployeeList();
    this.paymentManagement = new PaymentManagement();
  }

  setStateToWaitingForActivity() {
    this.state = PreparationSectorState.WaitingForActivity;
  }

  setStateToGettingUnpreparedMaterialsFromProcurementSector() {
    this.state = PreparationSectorState.GettingUnpreparedMaterialsFromProcurementSector;
  }

  setStateToPreparingUnpreparedMaterials() {
    this.state = PreparationSectorState.PreparingUnpreparedMaterials;
  }

  setStateToForwardsPreparedMaterialsToTheProductionSector() {
    this.state = PreparationSectorState.ForwardsPreparedMaterialsToTheProductionSector;
  }

  isStateWaitingForActivity() {
    return this.state === PreparationSectorState.WaitingForActivity;
  }

  isStateGettingUnpreparedMaterialsFromProcurementSector() {
    return this.state === PreparationSectorState.GettingUnpreparedMaterialsFromProcurementSector;
  }

  isStatePreparingUnpreparedMaterials() {
    return this.state === PreparationSectorState.PreparingUnpreparedMaterials;
  }

  isStateForwardsPreparedMaterialsToTheProductionSector() {
    return this.state === PreparationSectorState.ForwardsPreparedMaterialsToTheProductionSector;
  }

  storeOneUnpreparedMaterialToStorage(unpreparedChocolateMaterial: ChocolateMaterial) {
    this.unpreparedMaterialsStorage.setStateToMaterialStoring();
    this.unpreparedMaterialsStorage.workWithStorageOnce(unpreparedChocolateMaterial);
  }

  getOneUnpreparedMaterialFromStorage(chocolateMaterialType: ChocolateMaterialType) {
    this.unpreparedMaterialsStorage.setStateToMaterialRemoval();
    return this.unpreparedMaterialsStorage.workWithStorageOnce(null, chocolateMaterialType);
  }

  workWithUnpreparedMaterialStorageOnce(
    newMaterial?: ChocolateMaterial,
    chocolateMaterialType?: ChocolateMaterialType
  ) {
    if (this.isStateGettingUnpreparedMaterialsFromProcurementSector()) {
      this.storeOneUnpreparedMaterialToStorage(newMaterial);
    }
    if (this.isStatePreparingUnpreparedMaterials()) {
      return this.getOneUnpreparedMaterialFromStorage(chocolateMaterialType);
    }
  }

  storeOnePreparedMaterialToStorage(preparedChocolateMaterial: ChocolateMaterial) {
    this.preparedMaterialsStorage.setStateToMaterialStoring();
    this.preparedMaterialsStorage.workWithStorageOnce(preparedChocolateMaterial);
  }

  getOnePreparedMaterialFromStorage(preparedChocolateMaterialType: ChocolateMaterialType) {
    this.preparedMaterialsStorage.setStateToMaterialRemoval();
    return this.preparedMaterialsStorage.workWithStorageOnce(null, preparedChocolateMaterialType);
  }

  workWithPreparedMaterialStorageOnce(
    newPreparedMaterial: ChocolateMaterial,
    preparedChocolateMaterialType?: ChocolateMaterialType
  ) {
    if (this.isStatePreparingUnpreparedMaterials()) {
      this.storeOnePreparedMaterialToStorage(newPreparedMaterial);
    }
    if (this.isStateForwardsPreparedMaterialsToTheProductionSector()) {
      return this.getOnePreparedMaterialFromStorage(preparedChocolateMaterialType);
    }
  }

  preparingOneUnpreparedMaterial(chocolateMaterialType: ChocolateMaterialType, employee: Employee) {
    let unpreparedMaterial: ChocolateMaterial, preparedMaterial: ChocolateMaterial;
    unpreparedMaterial = this.workWithUnpreparedMaterialStorageOnce(null, chocolateMaterialType);
    preparedMaterial = employee.prepareProduct(unpreparedMaterial);
    this.payEmployeeForPreparedChocolateMaterial(employee, chocolateMaterialType);
    this.workWithPreparedMaterialStorageOnce(preparedMaterial);
  }

  payEmployeeForPreparedChocolateMaterial(employee: Employee, preparedChocolateMaterialType: ChocolateMaterialType) {
    let payment = this.paymentManagement.getEmployeePaymentPerMaterialType(preparedChocolateMaterialType);
    employee.getPayment(payment);
  }
}
