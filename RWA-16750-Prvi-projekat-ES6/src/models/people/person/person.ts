export class Person {
  id: number;
  name: string;
  lastName: string;
  hasDrivingLicence: boolean;

  constructor(name: string, lastName: string, drivingLicence: boolean = false) {
    this.id = undefined;
    this.name = name;
    this.lastName = lastName;
    this.hasDrivingLicence = drivingLicence;
  }

  setId(id: number) {
    this.id = id;
  }

  getId() {
    return this.id;
  }

  setName(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setLastName(lastName: string) {
    this.lastName = lastName;
  }

  getLastName() {
    return this.lastName;
  }

  setHasDrivingLicence(hasDrivingLicence: boolean) {
    this.hasDrivingLicence = hasDrivingLicence;
  }

  getHasDrivingLicence() {
    return this.hasDrivingLicence;
  }
}
