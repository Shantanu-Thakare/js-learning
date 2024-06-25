console.log("===============Step 1====================");
console.log("Name function with no arguement and no return value");
function show () {
    console.log("Hey....Shantanu");
}
show ();
console.log("===============Step 2====================");
console.log("Function with arguement and no return value");
function personalDetails(firstName,lastName,college){
    var res=firstName;
    console.log("FirstName:- ",res);
    var res=lastName;
    console.log("LastName:- ",res);
    var res=college;
    console.log("CollegeName:- ",res);

}
personalDetails("Shantanu","Thakare","HVPM");
console.log("===============Step 3====================");
console.log("Function with arguement  with  return value");
function addThreeValues(numOne,numTwo,numThree){
      console.log("addition of three Values:- ",numOne,numTwo,numThree);
       var res=numOne+numTwo+numThree;
       console.log("Addition is:- ",res)
}
addThreeValues(10.23,600,40);
function addThreeValues(numOne,numTwo,numThree){
    console.log("addition of three Values:- ",numOne,numTwo,numThree);
     var res=numOne+numTwo+numThree;
     console.log("Addition is:- ",res)
}
addThreeValues("Hello","Good","Morning");




  




