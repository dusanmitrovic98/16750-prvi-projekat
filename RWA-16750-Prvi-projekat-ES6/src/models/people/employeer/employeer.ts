/**
 * sto vise vremena prolazi postaje umoran
 */
import { Person } from "../person/person";
import { Employee } from "../employee/employee";

export enum EmployeerState {
  Working = "Working",
  LunchBreak = "LaunchBreak",
  NotPresent = "NotPresent",
}

export enum EmployeerWorkState {
  MaximumWorkDedicationTireless = "Tireless", //100%
  MediumWorkDedicationFeelingTired = "FeelingTired", //50%
  LowWorkDedicationTired = "Tired", //25%
}

export enum EmployeerMoodState {
  Exelent = "Exelent", //0%
  VeryGood = "VeryGood", //25%
  Good = "Good", //50%
  Stressed = "Stressed", //75%
  Devastated = "Devastated", //100%
}

export class Empolyeer extends Person {
  employeerState: EmployeerState;
  employeerWorkState: EmployeerWorkState;
  employeerMoodState: EmployeerMoodState;

  constructor(name: string, lastName: string, drivingLicence: boolean = false) {
    super(name, lastName, drivingLicence);
    this.employeerState = EmployeerState.NotPresent;
    this.employeerWorkState = EmployeerWorkState.MaximumWorkDedicationTireless;
    this.employeerMoodState = EmployeerMoodState.Exelent;
  }

  setStateToWorking() {
    this.employeerState = EmployeerState.Working;
  }

  setStateToLaunchBreak() {
    this.employeerState = EmployeerState.LunchBreak;
  }

  setStateToNotPresent() {
    this.employeerState = EmployeerState.NotPresent;
  }

  isStateWorking() {
    return this.employeerState === EmployeerState.Working;
  }

  isStateLaunchBreak() {
    return this.employeerState === EmployeerState.LunchBreak;
  }

  isStateNotPresent() {
    return this.employeerState === EmployeerState.NotPresent;
  }

  setWorkStateToMaximumWorkDedicationTireless() {
    this.employeerWorkState = EmployeerWorkState.MaximumWorkDedicationTireless;
  }

  setWorkStateToMediumWorkDedicationFeelingTired() {
    this.employeerWorkState = EmployeerWorkState.MediumWorkDedicationFeelingTired;
  }

  setWorkStateToLowWorkDedicationTired() {
    this.employeerWorkState = EmployeerWorkState.LowWorkDedicationTired;
  }

  isWorkStateToMaximumWorkDedicationTireless() {
    return this.employeerWorkState === EmployeerWorkState.MaximumWorkDedicationTireless;
  }

  isWorkStateToMediumWorkDedicationFeelingTired() {
    return this.employeerWorkState === EmployeerWorkState.MediumWorkDedicationFeelingTired;
  }

  isWorkStateToLowWorkDedicationTired() {
    this.employeerWorkState === EmployeerWorkState.LowWorkDedicationTired;
  }

  setMoodStateToExelent() {
    this.employeerMoodState = EmployeerMoodState.Exelent;
  }

  setMoodStateToVeryGood() {
    this.employeerMoodState = EmployeerMoodState.VeryGood;
  }

  setMoodStateToGood() {
    this.employeerMoodState = EmployeerMoodState.Good;
  }

  setMoodStateToStressed() {
    this.employeerMoodState = EmployeerMoodState.Stressed;
  }

  setMoodStateToDevastated() {
    this.employeerMoodState = EmployeerMoodState.Devastated;
  }

  isMoodStateToExelent() {
    return this.employeerMoodState === EmployeerMoodState.Exelent;
  }

  isMoodStateToVeryGood() {
    return this.employeerMoodState === EmployeerMoodState.VeryGood;
  }

  isMoodStateToGood() {
    return this.employeerMoodState === EmployeerMoodState.Good;
  }

  isMoodStateToStressed() {
    return this.employeerMoodState === EmployeerMoodState.Stressed;
  }

  isMoodStateToDevastated() {
    this.employeerMoodState = EmployeerMoodState.Devastated;
  }

  checkForStolenGoods(employee: Employee) {
    if (this.isStateWorking()) {
    }
  }
}
