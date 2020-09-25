import { ChocolateProduct } from "../models/chocolate-products/chocolate-product";
import { ChocolateMaterial } from "../models/chocolate-materials/chocolate-material";
import { getEmployeerObservable } from "../services/factory-services";
import { drawHtmlElement } from "./draw-html-element/draw-html-element";
import { Employee } from "../models/people/employee/employee";
import { FormatString } from "../helpers/string-manipulation/string-manipulation";
import { Employeer } from "../models/people/employeer/employeer";
import { Observable } from "rxjs";

export class DrawHtmlElements {
  employee: Employee;
  employeeObservable: Observable<Employee>;
  chocolateProductObservable: Observable<ChocolateProduct>;
  chocolateMaterialObservable: Observable<ChocolateMaterial>;

  constructor() {
    this.employee = new Employee("boban", "last", null);
    this.employeeObservable = null;
    this.chocolateProductObservable = null;
    this.chocolateMaterialObservable = null;
  }

  drawEmployee(parent: HTMLElement, id: string) {
    document.body.style.backgroundColor = "#007bff";
    let employee: Observable<Employee> = this.employeeObservable;
    let employeeContainer: HTMLElement = drawHtmlElement(parent, "div", id);
    const buttonsDiv: HTMLElement = drawHtmlElement(parent, "div", "buttonsDiv");
    buttonsDiv.className = "text-center bg-info";
    const button = drawHtmlElement(buttonsDiv, "button", "buttonShowHideProducedProducts");
    const button2 = drawHtmlElement(buttonsDiv, "button", "buttonShowHideStolenProducts");
    const producedProducts: HTMLElement = drawHtmlElement(parent, "div", `producedProducts`);
    producedProducts.style.display = "none";
    producedProducts.innerHTML = "Produced products:";
    producedProducts.className = "bg-secondary text-center";
    const stolenProducts: HTMLElement = drawHtmlElement(parent, "div", `stolenProducts`);
    stolenProducts.style.display = "none";
    stolenProducts.innerHTML = "Stolen products:";
    stolenProducts.className = "bg-secondary text-center";
    button.innerHTML = "toggle show/hide produced protucts";
    button.className = "btn btn-secondary text-center";
    button.onclick = () => {
      if (producedProducts.style.display === "none") {
        producedProducts.style.display = "block";
      } else {
        producedProducts.style.display = "none";
      }
    };
    button2.innerHTML = "toggle show/hide slolen protucts";
    button2.className = "btn btn-secondary text-center";
    button2.onclick = () => {
      if (stolenProducts.style.display === "none") {
        stolenProducts.style.display = "block";
      } else {
        stolenProducts.style.display = "none";
      }
    };
    employeeContainer.className = "employeeContainer bg-info text-center";
    employeeContainer.innerHTML = "Employee data:";
    employee.subscribe((employee: Employee) => {
      this.employee = employee;
      this.employee.id = employee.id;
      this.employee.name = employee.name;
      this.employee.lastName = employee.lastName;
      const employeeId: HTMLElement = drawHtmlElement(employeeContainer, "div", `employeeId${employee.id}`);
      employeeId.innerHTML = `Id: ${employee.id}`;
      const employeeName: HTMLElement = drawHtmlElement(employeeContainer, "div", `employeeName${employee.id}`);
      employeeName.innerHTML = `Name: ${employee.name}`;
      const employeeIdLastName: HTMLElement = drawHtmlElement(
        employeeContainer,
        "div",
        `employeeLastName${employee.id}`
      );
      employeeIdLastName.innerHTML = `Last name: ${employee.lastName}`;
      const employeeDrivingLicence: HTMLElement = drawHtmlElement(
        employeeContainer,
        "div",
        `employeeDrivingLicence${employee.id}`
      );
      employeeDrivingLicence.innerHTML = `Has driving licence: ${employee.hasDrivingLicence}`;

      const employeeWorkState: HTMLElement = drawHtmlElement(
        employeeContainer,
        "div",
        `employeeWorkState${employee.id}`
      );
      employeeWorkState.innerHTML = `Work state: ${FormatString(employee.workState, " ", true)}`;
      const employeeGreedLevel: HTMLElement = drawHtmlElement(
        employeeContainer,
        "div",
        `employeeGreedLevel${employee.id}`
      );
      employeeGreedLevel.innerHTML = `Greed level: ${FormatString(employee.greedLevel, " ", true)}`;
      const employeeStateOfHunger: HTMLElement = drawHtmlElement(
        employeeContainer,
        "div",
        `employeeStateOfHunger${employee.id}`
      );
      employeeStateOfHunger.innerHTML = `State of hunger: ${FormatString(employee.stateOfHunger, " ", true)}`;
      const employeePayment: HTMLElement = drawHtmlElement(employeeContainer, "div", `employeePayment${employee.id}`);
      employeePayment.innerHTML = `Payment: ${employee.payment}`;
      let employeerObservable: Observable<Employeer> = getEmployeerObservable(1);
      employeerObservable.subscribe((employeer: Employeer) => {
        const employeerDiv: HTMLElement = drawHtmlElement(
          employeeContainer,
          "div",
          `employeeFactoryEmployeer${employeeId}`
        );
        employeerDiv.innerHTML = `Factory employeer: ${employeer.name} ${employeer.lastName}`;
      });
      employee.producedChocolateGoods.chocolateProductList.forEach((product: ChocolateProduct, index) => {
        const productDiv: HTMLElement = drawHtmlElement(producedProducts, "div", `producedProduct${index}`);
        this.drawChocolateProduct(productDiv, "div", `ProductDataDiv${index}`);
      });
    });
    return employeeContainer;
  }

  drawChocolateProduct(parent: HTMLElement, htmlTag: string, id: string) {
    this.chocolateProductObservable.subscribe((chocolateProduct: ChocolateProduct) => {
      const product: HTMLElement = drawHtmlElement(parent, htmlTag, id);
      product.className = "text-center bg-secondary text-white";
      product.style.opacity = "0.9";
      const labelId: HTMLElement = drawHtmlElement(product, "label", `labelProduct${id}`);
      labelId.innerHTML = `Id: ${chocolateProduct.id}`;
      const labelProductType: HTMLElement = drawHtmlElement(product, "label", `labelProduct${id}`);
      labelProductType.className = "ml-5";
      labelProductType.innerHTML = `Type: ${FormatString(chocolateProduct.chocolateProductType, " ", true)}`;
      const labelPackedState: HTMLElement = drawHtmlElement(product, "label", `label${id}`);
      labelPackedState.className = "ml-5";
      labelPackedState.innerHTML = `Packed state: ${FormatString(chocolateProduct.packedState, " ", true)}`;
      return product;
    });
  }

  drawChocolateMaterial(parent: HTMLElement, htmlTag: string, id: string) {
    this.chocolateMaterialObservable.subscribe((chocolateMaterial: ChocolateMaterial) => {
      const material: HTMLElement = drawHtmlElement(parent, htmlTag, id);
      material.className = "text-center bg-secondary text-white";
      material.style.opacity = "0.9";
      const labelId: HTMLElement = drawHtmlElement(material, "label", `labelMaterial${id}`);
      labelId.innerHTML = `Id: ${chocolateMaterial.id}`;
      const labelmaterialType: HTMLElement = drawHtmlElement(material, "label", `labelMaterial${id}`);
      labelmaterialType.className = "ml-5";
      labelmaterialType.innerHTML = `Type: ${FormatString(chocolateMaterial.chocolateMaterialType, " ", true)}`;
      const labelPackedState: HTMLElement = drawHtmlElement(material, "label", `labelMaterial${id}`);
      labelPackedState.className = "ml-5";
      labelPackedState.innerHTML = `Packed state: ${FormatString(chocolateMaterial.productionState, " ", true)}`;
      return material;
    });
  }
}
