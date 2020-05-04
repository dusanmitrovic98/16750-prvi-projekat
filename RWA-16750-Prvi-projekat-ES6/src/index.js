import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Worker } from './models/worker.js'


import imgIcon from './images/PassTheExam-RIIEdition.png';

let test = "Test";
let test2 = () => console.log(123);


const button = document.createElement('button');
let obj = { name: "John", today: new Date(), city: "New York" };
document.body.appendChild(button);
button.className = "btn btn-primary";
button.innerHTML = "ClickMe";

button.onclick = () => {
    console.log("cliknuto");
    let fs = require("fs");
    let doc = document.getElementById("demo");
    let myJSON = JSON.stringify(obj);

    doc.innerHTML = myJSON;
}

let img1 = document.getElementById('img1');
img1.src = imgIcon;