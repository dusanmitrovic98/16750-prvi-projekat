import { Employee } from "./employee";

export class EmployeeList {
  employees: Employee[];

  constructor() {
    this.employees = new Array<Employee>();
  }

  getListOfEmployees() {
    return this.employees;
  }

  addNewEmployee(employee: Employee) {
    employee.id = this.employees.push(employee);
  }

  findEmployeeById(id: number) {
    this.employees.map((employee) => {
      if ((employee.id = id)) {
        return employee;
      }
    });
  }

  removeEmployeById(id: number) {
    let indexOfEmployeeForRemoval: number;
    this.employees.map((employee, index) => {
      if ((employee.id = id)) {
        indexOfEmployeeForRemoval = index;
      }
    });
    this.employees.slice(indexOfEmployeeForRemoval, 1);
  }
}
