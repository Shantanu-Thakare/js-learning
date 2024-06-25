

const employeeJSON=`{
       
"name": "Aleix Melon",

"id":"E00245",

"age":23,

"doj": "11/12/2019",

"Married": false,

"Role": ["Dev", "DBA"],

"address": {

    "street": "32,Laham St.",

    "city": "Innsbruck",

    "country": "Austria"
},

"reffered-by" : "E0012"

}`

console.log(typeof employeeJSON);
console.log(employeeJSON);
const employee = JSON.parse(employeeJSON);
console.log(typeof employee);
console.log(employee);
const emprole=employee.Role[0];
console.log(`Role :- ${emprole}`);

let word=employee.name;
const empword=word.slice(6,11);
console.log(`Last Name:- ${empword}`);
const join=employee.doj.split("/");
console.log(`Joining Year of Employee :- ${join[2]}`);



