export default class ChocolateFactory {
    name: string;
    adress: string;
    workers: Array<Worker>[];
    constructor(name: string, adress: string, workers = new Array()) {
        this.name = name;
        this.adress = adress;
        this.workers = workers;
    }
}