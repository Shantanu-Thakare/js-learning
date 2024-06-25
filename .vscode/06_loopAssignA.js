// console.log(`Count the Total No. of a character`);
// var word="JavaScript";
// var counter=0;
// for (let index = 0; index < word.length; index++) {
//     var ch=word.charAt(index);
//     if (ch==`a`) {
//         counter++;
//     }
// }
// console.log(`Total No. of a is:- ${counter}`);
// console.log(`=====================Count the total no. of vowels========================`);

// var str="I am very good IT Developer";
// var vowels="aeiou";
// var counter=0;
// for ( index = 0; index < str.length; index++) {
//     var ch=str.charAt(index);
//      var chLowerCase=ch.toLowerCase();
//      if (vowels.includes(chLowerCase)) {
//         counter++;
//      }  
// }
// console.log(counter);

// console.log(`=================sum the cube of  no. from  1 to 5======================`);
//     var sumOfCube=0;
//     for (let i=1;i<=5;i++) {
//        var cube=i*i*i;
//        sumOfCube=sumOfCube+cube;
    
        
//     }
//     console.log(sumOfCube);

    console.log(`=================Odd Position Character======================`);
    function oddPositionedChar(str){
        var result = "";
        for (let index = 0; index < str.length; index++) {
            var ch = str.charAt(index);
            if (index % 2 == 1 && ch != ' ') {
                result = result + ch;
            }
        }
        console.log(result);
    }
    
    oddPositionedChar("Hard work Always pay back");
    oddPositionedChar("soon I will be UI IT Champ");
    