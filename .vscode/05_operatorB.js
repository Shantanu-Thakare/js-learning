console.log(`=====================================Step 1============================================`);
var greaterNum=function(numOne,numTwo){
      var result=numOne>=numTwo ? numOne: numTwo;
      console.log(`greater no. between are ${numOne},${numTwo}  :- ${result}`);
}
greaterNum(10,-10);
greaterNum(800,899);
console.log(`======================================Step 2==========================================`);
function isEvenOrOddNum(argOne){
 var res=argOne%2==0 ? true: false; 
 return res;
}
var returnValue=isEvenOrOddNum(29);
console.log(`Given no. 29 is Even:- ${returnValue}`);
var returnValue=isEvenOrOddNum(44);
console.log(`Given no. 44 is Even:- ${returnValue}`);
var returnValue=isEvenOrOddNum(0);
console.log(`Given no. 0 is Even:- ${returnValue}`);
var returnValue=isEvenOrOddNum(101);
console.log(`Given no. 101 is Even:- ${returnValue}`);

console.log(`=========================================Step 3============================================`);

function wordlength(argOne){
      var argOne=`"JavaScript"`;
      var word=argOne.length;
      var res=argOne.length%2==0 ? true : false;
      console.log(`Given String is ${argOne} and it even length is ${res}`);
      var argTwo=`"Developer"`;
      var word=argTwo.length;
      var res=argTwo.length%2==0 ? true : false;
      console.log(`Given String is ${argTwo} and it even length is ${res}`);
      var argThree=`"Google"`;
      var word=argThree.length;
      var res=argThree.length%2==0 ? true : false;
      console.log(`Given String is ${argThree} and it even length is ${res}`);


}
wordlength();


