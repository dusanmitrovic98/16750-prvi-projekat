export default class ChocolateFactory {
    constructor(name, adress, workers = new Array()) {
        this.name = name;
        this.adress = adress;
        this.workers = workers;
    }
}