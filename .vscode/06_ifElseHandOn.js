console.log(`=====================================Step 1==========================================`);
var isEvenOrOdd=function(num){
    if (num%2==0) {
        return(`EVEN`);
    } else {
        return(`ODD`);
    }

}
var value=isEvenOrOdd(45);
console.log(`The given no. is 45 and value ${value}`);
var value=isEvenOrOdd(70);
console.log(`The given no. is 70 and value ${value}`);
var value=isEvenOrOdd(67);
console.log(`The given no. is 67 and value ${value}`);
var value=isEvenOrOdd(98);
console.log(`The given no. is 98 and value ${value}`);
console.log(`=====================================Step 2==========================================`);
var voteEligibility=function(age){
    if (age>=18) {
        return(`You are Eligible for vote`);
    } else {
        return(`You are not Eligible for vote`);
    }

}
var value=voteEligibility(18);
console.log(`Your age is 18 and ${value}`);
var value=voteEligibility(20);
console.log(`Your age is 20 and ${value}`);
var value=voteEligibility(17);
console.log(`Your age is 17 and ${value}`);
var value=voteEligibility(40);
console.log(`Your age is 40 and ${value}`);
console.log(`=====================================Step 3==========================================`);
var strLength=function(str){
    if (str.length>=10) {
        console.log(`Given String Contain 10 or more than 10 character`);
    } else {
        console.log(`Given String Not Contain 10 or more than 10 character`);
    }

}
strLength("Javascript ES6");
console.log(`=====================================Step 4==========================================`);

var strstart=function(str){
    if (str.startsWith("Java")) {
        console.log(`Given string ${str} starts with word "Java"`);
        
    } else {
        console.log(`Given string ${str} doesn't starts with word "Java"`);
        
    }
}
strstart("JavaScript");
strstart("Programming Language");
