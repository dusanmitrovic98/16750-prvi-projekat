import Employee from "../people/employee/employee";


export default class ChocolateFactory {
    name: string;
    adress: string;
    employees: Array<Employee>[];
    constructor(name: string, adress: string, employees = new Array()) {
        this.name = name;
        this.adress = adress;
        this.employees = employees;
    }
}