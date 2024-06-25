function spaceCount(str) {
    let count = 0; 
    for (let i = 0; i < str.length; i++) { 
        if (str[i] === ' ') { 
            count++; 
        }
    }
    return count; 
}


let exampleString ="Revision is the mother of success";
let numberOfSpaces = spaceCount(exampleString);
console.log(`"The revision is the mother of success" is:- ${numberOfSpaces}`);

let exampleStrin ="JavaScript is the language of internet world";
let numberOfSpace = spaceCount(exampleStrin);
console.log(`"JavaScript is the language of internet world" is:- ${numberOfSpace}`);
