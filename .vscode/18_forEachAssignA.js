console.log(`============================Step 1==============================`);
var arrayNumber =[1,-7,40,502,-77,91,0,108,89,-601];
arrayNumber.forEach((currentValue,index)=>{
            console.log(`Element at ${index}: ${currentValue}`);

})
console.log(`=============================Step 2===========================`);

arrayNumber.forEach((value)=>{
    if (value>=0) {
        console.log(`The Positive No. is: ${value}`);
    }
})

console.log(`=============================Step 3===========================`);

arrayNumber.forEach((value)=>{
    if (value<0) {
        console.log(`The Negative No. is: ${value}`);
    }
})

console.log(`=============================Step 4===========================`);

arrayNumber.forEach((value)=>{
    if (value%2==0) {
        console.log(`The Even No. is: ${value}`);
    }
})

console.log(`=============================Step 5===========================`);
let sum=0;
arrayNumber.forEach((value)=>{
    sum=sum+value;
});
console.log(`The Sum of all element is:- ${sum}`)

console.log(`=============================Step 6===========================`);

arrayNumber.forEach((currentValue,index)=>{
    if (index%2==0) {
        console.log(`Even index array values is: ${currentValue}`);
    }
})





