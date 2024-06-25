var greet="Good Morning";

console.log(`Find the Total Number of character from the string:- ${greet}`);
var TotalChar=greet.length;
console.log(`Total Char Is:- ${TotalChar}`);

console.log("=============charAt()=======================");
var char=greet.charAt(0);
console.log(`Char at index 3 is:- ${char}`);
console.log("=============indexOf()=======================")
var char=greet.indexOf("G");
console.log(`Index of char G is :- ${char}`);
console.log("=============concat()=======================")
var firstName="Jenny";
var lastName=" Sharma";
var result=firstName.concat(lastName);
console.log(`Concat Name is:- ${result}`);

console.log("=============ToUpperCase()=======================");
var lastName ="Sharma"
var result=lastName.toUpperCase();
console.log(`To upper case string is:- ${result}`);

console.log("=============TolowerCase()=======================");
var firstName="JENNY";
var result=firstName.toLowerCase();
console.log(`to lower string is:- ${result}`);

console.log("=============Replace()=======================");

var greet="Good Morning";
var result=greet.replace("Morning","Afternoon");
console.log(`replace string is:- ${result}`);

var city="  Pune  ";
var result=city.length;
console.log(`lenght before trim is:- ${city.length}`);
var city=city.trim();
console.log(`lenght after trim is:- ${city.length}`);

console.log("=============Include()=======================");
var greet="Good Morning";
var result=greet.includes("nin");
console.log(`Is "nin" includes:- ${result}`);


var result=greet.includes("z");
console.log(`Is "z" includes:- ${result}`);

console.log("=============Spilt()=======================");


var word="My life My Rules";
var myName="Shantanu Thakare";
var result=myName.split(" ");
console.log(result);
console.log(`Total No. of word:- ${result.length}`);

var result=word.split(" ");
console.log(result);
console.log(`Total no. of word:- ${result.length}`); 

