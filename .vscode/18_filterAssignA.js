console.log(`=========================Step 1===========================`);
let arrayNumber=[20,11,40,25,23,11,9,31,90,60,2,19];
const greatNum=arrayNumber.filter((value)=>{
    return value>=50;  
    
})
console.log(`No. Greater than 50 : ${greatNum}`);

console.log(`============================Step 2==========================`);
let arrayNum=[20,11,40,25,23,11,9,31,90,60,2,19];
const evenNum=arrayNum.filter((value)=>{
    return value%2==1;
})
console.log(`Even No. are: ${evenNum}`);

console.log(`============================Step 3==========================`);
let arrayNumb=[20,11,40,25,23,11,9,31,90,60,2,19];
const oddNum=arrayNumb.filter((value)=>{
    return value%2==1 
    
})
console.log(`Odd No. are: ${oddNum}`);

console.log(`============================Step 4==========================`);
let arrayNumbe=[20,11,40,25,23,11,9,31,90,60,2,19];
const multiNum=arrayNumbe.filter((value)=>{
    return value%5==0 
})
console.log(`Multiple of 5 are:${multiNum}`);

console.log(`============================Step 5=========================`);
let array=[20,11,40,25,23,11,9,31,90,60,2,19];
const arrayBet=array.filter((value)=>{
    return value>=20 && value<=50
        
    
})
console.log(`No. between 20 and 50 are: ${arrayBet}`);