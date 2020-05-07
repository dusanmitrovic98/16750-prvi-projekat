/**
 * @class
 * @param name Person name
 * @param lastName Person last name
 * @param drivingLicence Person has a driver's licence, drivingLicence=true. Otherwise, 
 * drivingLicence=false. DefaultValue=false
 */
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