console.log('==============================step 1=============================');
var fruits_seasonal=["Banana","Orange","Apple","Mango","WaterMelon"];
console.log(`Original array:- ${fruits_seasonal}`);
var fru=fruits_seasonal[0];
console.log(`First Element:- ${fru}`);
var len=fruits_seasonal.length;
console.log(`Last Element:-`,fruits_seasonal[len-1]);
console.log('==============================step 2=============================');
console.log(`Original array:- ${fruits_seasonal}`);
fruits_seasonal.unshift("Papaya");
console.log(`After Adding Papaya:- ${fruits_seasonal}`);



console.log('=============================step 3=============================');

// Original array
let originalArray = ['Papaya', 'Banana', 'Orange', 'Apple', 'Mango', 'WaterMelon'];

// Create a copy of the original array for displaying
let originalArrayCopy = [...originalArray];

// Push new element into the original array
originalArray.push('PineApple');

// Convert arrays to strings
let originalArrayStr = JSON.stringify(originalArrayCopy);
let modifiedArrayStr = JSON.stringify(originalArray);

// Print the arrays horizontally
console.log("Original array: " + originalArrayStr);
console.log("After push(): " + modifiedArrayStr);
console.log(`=============================Removing Mango from the array=============`);
var fruits_seasonal=["Banana","Orange","Apple","Mango","WaterMelon"];
var deleteElements=fruits_seasonal.splice(3,1)
console.log(`After a Removing Mango :-`,fruits_seasonal);
console.log(`============================Insert Dragon fruit before WaterMelon================`);
var fruits_seasonal=["Banana","Orange","Apple","Mango","WaterMelon"];
fruits_seasonal.splice(4,0,"Dragon Fruit");
console.log(`After a insert Dragon Fruit:-`,fruits_seasonal);
console.log(`============================Replace Orange with Kiwi==================`);
var fruits_seasonal=["Banana","Orange","Apple","Mango","WaterMelon"];
fruits_seasonal.splice(1,1,"Kiwi");
console.log(`Replace Orange with Kiwi:-`,fruits_seasonal);
console.log(`==========================log Element index 1 to 4==================`);
var fruits_seasonal=["Banana","Orange","Apple","Mango","WaterMelon"];
var Ele=fruits_seasonal.slice(1,5);
console.log(Ele);
console.log(`==========================Only Select last 3 element=======================`);
var fruits_seasonal=["Banana","Orange","Apple","Mango","WaterMelon"];
var res=fruits_seasonal.slice((fruits_seasonal.length-3));
console.log(`Last 3 elements are:-`,res);









