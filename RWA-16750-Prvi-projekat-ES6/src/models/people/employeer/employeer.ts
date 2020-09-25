import { Person } from "../person/person";
import { getRandomIntInclusive } from "../../../helpers/random-numbers/random-numbers";
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
    return this.employeerWorkState === EmployeerWorkState.LowWorkDedicationTired;
  }

  setMoodStateToExelent() {
    return (this.employeerMoodState = EmployeerMoodState.Exelent);
  }

  setMoodStateToVeryGood() {
    return (this.employeerMoodState = EmployeerMoodState.VeryGood);
  }

  setMoodStateToGood() {
    return (this.employeerMoodState = EmployeerMoodState.Good);
  }

  setMoodStateToStressed() {
    return (this.employeerMoodState = EmployeerMoodState.Stressed);
  }

  setMoodStateToDevastated() {
    return (this.employeerMoodState = EmployeerMoodState.Devastated);
  }

  isMoodStateExelent() {
    return this.employeerMoodState === EmployeerMoodState.Exelent;
  }

  isMoodStateVeryGood() {
    return this.employeerMoodState === EmployeerMoodState.VeryGood;
  }

  isMoodStateGood() {
    return this.employeerMoodState === EmployeerMoodState.Good;
  }

  isMoodStateStressed() {
    return this.employeerMoodState === EmployeerMoodState.Stressed;
  }

  isMoodStateDevastated() {
    return this.employeerMoodState === EmployeerMoodState.Devastated;
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
    if (this.workStateLevel <= 100 && this.workStateLevel > 95) {
      this.setWorkStateToLowWorkDedicationTired();
    }
    if (this.workStateLevel <= 95 && this.workStateLevel > 90) {
      this.setWorkStateToMediumWorkDedicationFeelingTired();
    }
    if (this.workStateLevel <= 90 && this.workStateLevel > 0) {
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
    if (randomMoodState <= 60 && randomMoodState > 20) {
      this.setMoodStateToGood();
    }
    if (randomMoodState <= 20 && randomMoodState > 10) {
      this.setMoodStateToStressed();
    }
    if (randomMoodState <= 10 && randomMoodState > 0) {
      this.setMoodStateToDevastated();
    }
  }

  decidedToWarn() {
    this.changeMoodState();
    this.changeWorkState();
    if (this.isMoodStateDevastated()) {
      return true;
    }
    return false;
  }
}
