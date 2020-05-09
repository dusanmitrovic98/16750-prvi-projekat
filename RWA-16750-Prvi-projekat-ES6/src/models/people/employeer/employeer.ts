/**
 * sto vise vremena prolazi postaje umoran
 */
import { Person } from "../person/person";

export enum EmployeerWorkState {
    MaximumWorkDedicationTireless = "Tireless",
    MediumWorkDedicationFeelingTired = "FeelingTired",
    LowWorcDedicationTired = "Tired"
}

export enum EmployeerMoodState {
    Exelent = "Exelent",
    VeryGood = "VeryGood",
    Good = "Good",
    Stressed = "Stressed",
    Devastated = "Devastated"
}

export class Empolyeer extends Person {
    employeerWorkState: EmployeerWorkState;
    employeerMoodState: EmployeerMoodState;

    constructor(name: string, lastName: string, drivingLicence: boolean = false, employeerWorkState: EmployeerWorkState =
        EmployeerWorkState.MediumWorkDedicationFeelingTired, employeerMoodState: EmployeerMoodState = EmployeerMoodState.Good) {
        super(name, lastName, drivingLicence);
        this.employeerWorkState = employeerWorkState;
        this.employeerMoodState = employeerMoodState;
    }

    setWorkStateToMaximumWorkDedicationTireless() {
        this.employeerWorkState = EmployeerWorkState.MaximumWorkDedicationTireless;
    }

    setWorkStateToMediumWorkDedicationFeelingTired() {
        this.employeerWorkState = EmployeerWorkState.MediumWorkDedicationFeelingTired;
    }

    setWorkStateToLowWorkDedicationTired() {
        this.employeerWorkState = EmployeerWorkState.LowWorcDedicationTired;
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
}