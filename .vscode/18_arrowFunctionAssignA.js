console.log(`======================step 1=======================`);

let sentence=()=>{
       console.log("Good Morning,Today is Friday");
}
sentence();

console.log(`========================step 2[a]========================`);

var multiply=(n1,n2,n3)=>{
    const result=n1*n2*n3;
     console.log(`Multiplication of 3 No. is :- ${result}`);
}
multiply(5,5,2);

console.log(`========================step 2[b]=========================`);

var multiply=(n1,n2,n3=1)=>{
    const result=n1*n2*n3;
     console.log(`Multiplication of 3 No. is :- ${result}`);
}
multiply(10,4);

console.log(`========================step 3[a]=========================`);

var add=(n1,n2,n3,n4,n5)=>{
    const result=n1+n2+n3+n4+n5;
     return result;
}
const res=add(100,100,200,349,756);
console.log(`Addition of 5 No. is :- ${res}`);

console.log(`========================step 3[c]=========================`);

var str = (n1, n2, n3, n4, n5) => {
    const result = n1 + n2 + n3 + n4 + n5;
    return result;
}
const string = str("I am", " learning", " ES6", " features", " in depth");
console.log(`Addition of given string is :- ${string}`);




