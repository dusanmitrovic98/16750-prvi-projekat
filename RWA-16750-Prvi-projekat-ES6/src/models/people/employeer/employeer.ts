/**
 * sto vise vremena prolazi postaje umoran
 */
import { Person } from "../person/person";

/**
 * @enum
 * Represents employers current work state
 * @param MaximumWorkDedicationTireless Maximum work dedication. Tireless. Concentration 100%
 * @param MediumWorkDedicationFeelingTired Medium work dedication. Feeling tired. Concentration 50%
 * @param LowWorcDedicationTired Low work dedication. Tired. Concentration 25%
 */
export enum EmployeerWorkState {
    MaximumWorkDedicationTireless = "Tireless",
    MediumWorkDedicationFeelingTired = "FeelingTired",
    LowWorcDedicationTired = "Tired"
}

/**
 * @enum 
 * Represents employeer mood state
 * @param Exelent Exelent mood state. Positive mood level 100%
 * @param VeryGood Very good mood state. Positive mood level 75%
 * @param Good Good mood state. Positive mood level 50%
 * @param Stressed Stressed mood state. Positive mood level 25%
 * @param Devastated Devastated mood state. Positive mood level 0%
 */
export enum EmployeerMoodState {
    Exelent = "Exelent",
    VeryGood = "VeryGood",
    Good = "Good",
    Stressed = "Stressed",
    Devastated = "Devastated"
}

/**
 * @class
 * Represents Employeer model
 * @param employeerWorkState Represents employeer work state
 * @param employeerMoodState Represents employeer mood state
 */
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