
var arrayRollNumber=[113,45,56,11,32,45,109,799,56,45];
console.log(`Given Array is: ${arrayRollNumber}`);
console.log(`=======================Step 1===================================`);
var arrayRollNumbe=[113,45,56,11,32,45,109,799,56,45];
arrayRollNumber.reverse();
console.log(`Reverse Array is: ${arrayRollNumbe}`);
console.log(`=======================Step 2===================================`);
arrayRollNumber.sort();
console.log(`Default Sorted Array is: ${arrayRollNumber}`);
console.log(`=======================Step 3===================================`);
arrayRollNumber.sort((n1,n2)=>{
     return n1>n2 ? 1 : -1 ;
})
console.log(`Custom Sorted Array is: ${arrayRollNumber}`);
console.log(`=======================Step 4===================================`);
var len=arrayRollNumber.length;
console.log(`Greatest No. from the given Array is: ${arrayRollNumber[len-1]}`);
console.log(`=======================Step 5===================================`);

var firNum=arrayRollNumber[0];
console.log(`Smallest No. from the given Array is: ${firNum}`);
console.log(`=======================Step 6===================================`);
arrayRollNumber = [...new Set(arrayRollNumber)];
console.log(`Remove the duplicate value from the Array: ${arrayRollNumber}`);



