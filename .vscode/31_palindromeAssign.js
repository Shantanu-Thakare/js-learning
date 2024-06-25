

function isPalindrome(str){
let reverseStr=str.split("").reverse().join("")
if (str==reverseStr) {
    console.log(`The Given String ${str}: is Palindrome`);
}
else{
    console.log(`The Given String ${str}: is not Palindrome`);
}
}
isPalindrome("madam");
isPalindrome("141");
isPalindrome("Sunday");
isPalindrome("mom");
isPalindrome("listen");
isPalindrome("dad");