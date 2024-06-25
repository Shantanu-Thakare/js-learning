function stringHandsOn(){
    var str="  Hey you are doing good, keep it up   ";
    console.log(`The given string is:- ${str}`);
     var res=str.length;
     console.log(`lenght of string:- ${res}`);
     var trimstr=str.trim(" ");
     console.log(`string after trim:- ${trimstr.length}`);
     var extraSpaces=res-trimstr.length;
     console.log(`extra space removed from string:- ${extraSpaces}`);
     var txt=trimstr;
     console.log(`First Character:- ${txt.charAt(0)} And Last Character:- ${txt.charAt(33)}`);
    var word=trimstr.split(" ");
    console.log(`total No. of word:- ${word.length}`);
    var result="Hey you are doing good, keep it up";
    console.log(`Index of "good" is:- ${result.indexOf("good")}`);
    var result="Hey you are doing good, keep it up";
    console.log(`substring starting from 22 index is:- ${result.substring(22)}`);
    console.log(`string end with "up" is:- ${result.includes("up")}`);
    console.log(`string start with "Hey" is:- ${result.includes("Hey")}`);


      
     

     
    
    
 
    

        
}
stringHandsOn();