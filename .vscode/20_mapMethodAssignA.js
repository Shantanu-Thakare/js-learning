
const arrayNumber=[20,11,40,25,23,11,9,31,90,60,2,19];
const newArray = arrayNumber.map( (element)=>{

    return element + 10;

});

console.log(`Array after adding 10 to each element : ${newArray}`);


const newArr =arrayNumber.map( (element)=>{

    return element * element * element;

});

console.log(`Array after cubing each element : ${newArr}`);

const newA = arrayNumber.map( (element,index)=>{

    return element + index;

});

console.log(`Array after adding index to each element : ${newA}`);