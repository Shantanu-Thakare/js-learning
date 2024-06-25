console.log(`=================sum the no. from  1 to 5======================`);
var sum=0;
for ( index = 1; index <=5; index++) {
    sum=sum + index; 
} 
console.log(sum);

console.log(`=================sum the even no. from  0 to 50======================`);
var sumEven=0;
for ( index = 0; index <=50; index=index+2) {
    sumEven=sumEven + index; 
} 
console.log(sumEven);


console.log(`=================sum the cube of  no. from  1 to 5======================`);
    var sumOfCube=0;
    for (let i=1;i<=5;i++) {
       var cube=i*i*i;
       sumOfCube=sumOfCube+cube;
    
        
    }
    console.log(sumOfCube);
    

console.log(`=================Odd Position Character======================`);
function oddPositionedChar(str){
  for (let index = 0; index < str.length; index++) {
         var ch=str.charAt(index);
         if(index%2==1 && ch!=` `)
       console.log(ch);
    
  }
}
oddPositionedChar("Hard work Always pay back");
oddPositionedChar("soon I will be UI IT Champ");

console.log(`=================Reverse the string======================`);
var word="JavaScript";
var result="";
for (let index = word.length-1; index>=0; index--) {
    var ch=word.charAt(index);
    result=result+ch;
   
}
console.log(result);