import imgIcon from './images/PassTheExam-RIIEdition.png';

let test = "Test";
let test2 = () => console.log(123);

var img1 = document.getElementById('img1');
img1.src = imgIcon;

var obj = {
    table: []
 };

 obj.table.push({id: 1000, square:1000});

 var json = JSON.stringify(obj);

 var fs = require('fs');
fs.writeFile('myjsonfile.json', json, 'utf8', callback);