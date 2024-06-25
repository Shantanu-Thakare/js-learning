
console.log(`=============================Task 1=====================================`);
function Bank(bankName,location,ifscCode,branchCode){
               this.bankName=bankName;
               this.location=location;
               this.ifscCode=ifscCode;
               this.branchCode=branchCode;
}
const yesBank=new Bank("Yes Bank","Amravati","YESB0001081","001081");
console.log(`Bank Name:- ${yesBank.bankName}`);
console.log(`Bank Location:- ${yesBank.location}`);
console.log(`IFSC Code:- ${yesBank.ifscCode}`);
console.log(`Branch Code:- ${yesBank.branchCode}`);
console.log("============================================================");
const sbiBank=new Bank("SBI Bank","Karanja","SBIN0000404","00404");
console.log(`Bank Name:- ${sbiBank.bankName}`);
console.log(`Bank Location:- ${sbiBank.location}`);
console.log(`IFSC Code:- ${sbiBank.ifscCode}`);
console.log(`Branch Code:- ${sbiBank.branchCode}`);
console.log("============================================================");
const mahBank=new Bank("Maharashtra Bank","Amravati","MAHB0000021","000021");
console.log(`Bank Name:- ${mahBank.bankName}`);
console.log(`Bank Location:- ${mahBank.location}`);
console.log(`IFSC Code:- ${mahBank.ifscCode}`);
console.log(`Branch Code:- ${mahBank.branchCode}`);
console.log("============================================================");
const axiBank=new Bank("Axis Bank","Washim","UTIB0001038","0001038");
console.log(`Bank Name:- ${axiBank.bankName}`);
console.log(`Bank Location:- ${axiBank.location}`);
console.log(`IFSC Code:- ${axiBank.ifscCode}`);
console.log(`Branch Code:- ${axiBank.branchCode}`);
console.log("==========================Task 2==================================");
Bank.prototype.openTime="9 AM IST";
Bank.prototype.closeTime="6 PM IST";

console.log(`SBI Bank Open Time ${sbiBank.openTime} and it's closed Time ${sbiBank.closeTime}` );
console.log(`=========================================================================================`);
console.log(`Bank Name is ${axiBank.bankName} and it's closed Time ${axiBank.closeTime}` );
console.log(`=========================================================================================`);
console.log(`Bank Name is ${yesBank.bankName} their Brach Code is ${yesBank.branchCode} and it's  Open Time ${axiBank.openTime}` );
console.log(`=========================================================================================`);




