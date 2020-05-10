export class Person {
    name: string;
    lastName: string;
    drivingLicence: boolean;

    constructor(name: string, lastName: string, drivingLicence: boolean = false) {
        this.name = name;
        this.lastName = lastName;
        this.drivingLicence = drivingLicence;
    }
}