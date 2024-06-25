console.log(`============Arithmatic Operator================`);
var result=10+20;
console.log(`Result:- ${result}`);

var num1=20;
var num2=30;
var resultnum=num1+num2;
console.log(`Results:- ${resultnum}`);

var addNums=function(argOne,argTwo,argThree){
    var result=argOne+argTwo+argThree;
       console.log(`addition is:-  ${result}`);

}
addNums(55.77,333.89,900);


console.log(`============Substraction Operator================`);
var result=10-30;
console.log(`Substraction is:- ${result}`);
var sub=function(argOne,argTwo){
    var result=argOne-argTwo;
    return result;
}
var returnResult=sub(10,3);
console.log(`Substraction is:- ${returnResult}`);


console.log(`============Multiplication Operator================`);
var result=10*5;
console.log(`Multiplication  is:-  ${result}`);

console.log(`============Exponential Operator================`);
var result=3**3;
console.log(`Exponential  is:-  ${result}`);


console.log(`=========Division Operator / ================`);
var result=10/3;
console.log(`Division  is:-  ${result}`);



console.log(`============Modulus Operator % ================`);
var result=10%3;
console.log(`Modulus is:-  ${result}`);




console.log(`============Increament Operator ++ ================`);
var numFour=10;
var result=  numFour++;
console.log(`Increament is:- ${result}`);


console.log(`============Decreament Operator -- ================`);
var numFive=10;
var result=  numFive--;
console.log(`Decreament is:- ${result}`);