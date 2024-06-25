
var arrayRollNum=[10,20,30,40,15];
console.log(arrayRollNum);
console.log(`Lenght of the array, it means total number of element in the array`);
console.log(arrayRollNum.length);

console.log(`============Accessing array values using index================`);
const element0th=arrayRollNum[0];
console.log(element0th);
console.log(arrayRollNum[2]);
var len=arrayRollNum.length;
console.log(arrayRollNum[len-1]);
console.log(`============Updates array values using index================`);

arrayRollNum[3]=100;
console.log(arrayRollNum);

console.log(`============Add element at the end of the array================`);

let array=[10,20,30,40,15];
console.log(`Original array ${array}`);
array.push(200);
console.log(`After push:- ${array}`);


console.log(`============Add element in the beginning  of the array================`);
array.unshift(500);
console.log(`After unshift:- ${array}`);

console.log(`============Remove element in the beginning  of the array================`);
array.shift();
console.log(`After shift:- ${array}`);


console.log(`============Remove element at the last from array================`);
array.pop();
console.log(`After pop:- ${array}`);
