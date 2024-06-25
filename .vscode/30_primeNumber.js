
const array=[3,9,7,6,19,29,53]
console.log(`The Given Array is:-${array}`);
let count=0;

function isPrime(num){
for (let index = 2; index < num; index++) {
if(num%index==0){
    return false;
}
}
return true;
}
var result =isPrime(3);
console.log(`Given No. 3 is Prime: ${result}`);

var result =isPrime(9);
console.log(`Given No. 9 is Prime: ${result}`);

var result =isPrime(7);
console.log(`Given No. 7 is Prime: ${result}`);

var result =isPrime(9);
console.log(`Given No. 6 is Prime: ${result}`);

var result =isPrime(19);
console.log(`Given No. 19 is Prime: ${result}`);

var result =isPrime(29);
console.log(`Given No. 29 is Prime: ${result}`);

var result =isPrime(59);
console.log(`Given No. 53 is Prime: ${result}`);

for (const num of array) {
    if(isPrime(num)){
        count=count+1;

    }
}
console.log(`The total Prime No. in Array is:- ${count}`);
