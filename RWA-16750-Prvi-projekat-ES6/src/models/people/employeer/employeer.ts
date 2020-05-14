import { Person } from "../person/person";
import { getRandomIntInclusive } from "../../../.bin/random-numbers/random-numbers";
import { timer } from "rxjs";

export enum EmployeerState {
  Working = "Working",
  LunchBreak = "LaunchBreak",
  NotPresent = "NotPresent",
}

export enum EmployeerWorkState {
  MaximumWorkDedicationTireless = "Tireless",
  MediumWorkDedicationFeelingTired = "FeelingTired",
  LowWorkDedicationTired = "Tired",
}

export enum EmployeerMoodState {
  Exelent = "Exelent",
  VeryGood = "VeryGood",
  Good = "Good",
  Stressed = "Stressed",
  Devastated = "Devastated",
}

export class Employeer extends Person {
  employeerState: EmployeerState;
  employeerWorkState: EmployeerWorkState;
  employeerMoodState: EmployeerMoodState;
  workStateLevel: number;

  constructor(name: string, lastName: string, drivingLicence: boolean = false) {
    super(name, lastName, drivingLicence);
    this.employeerState = EmployeerState.NotPresent;
    this.employeerWorkState = EmployeerWorkState.MaximumWorkDedicationTireless;
    this.employeerMoodState = EmployeerMoodState.Exelent;
    this.workStateLevel = 0;
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

  rest(seconds: number) {
    console.log("rest started!");
    const source = timer(seconds * 1000);
    const subscribe = source.subscribe((val) => {
      this.workStateLevel = 0;
      console.log(`${this.name} has rested for ${seconds} seconds!`);
    });
  }

  changeWorkState() {
    if (this.workStateLevel > 100) {
      this.rest(10);
    }
    if (this.workStateLevel <= 100 && this.workStateLevel > 70) {
      this.setWorkStateToLowWorkDedicationTired();
    }
    if (this.workStateLevel <= 70 && this.workStateLevel > 40) {
      this.setWorkStateToMediumWorkDedicationFeelingTired();
    }
    if (this.workStateLevel <= 40 && this.workStateLevel > 0) {
      this.setWorkStateToMaximumWorkDedicationTireless();
    }
  }

  changeMoodState() {
    let randomMoodState: number = getRandomIntInclusive(0, 100);
    if (randomMoodState <= 100 && randomMoodState > 80) {
      this.setMoodStateToExelent();
    }
    if (randomMoodState <= 80 && randomMoodState > 60) {
      this.setMoodStateToVeryGood();
    }
    if (randomMoodState <= 60 && randomMoodState > 40) {
      this.setMoodStateToGood();
    }
    if (randomMoodState <= 40 && randomMoodState > 20) {
      this.setMoodStateToStressed();
    }
    if (randomMoodState <= 20 && randomMoodState > 0) {
      this.setMoodStateToDevastated();
    }
  }
}
