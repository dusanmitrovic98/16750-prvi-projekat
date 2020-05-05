import { Person } from '../person/person';

export default class Employee extends Person {
    constructor(name: string, lastName: string) {
        super(name, lastName);
    }
}