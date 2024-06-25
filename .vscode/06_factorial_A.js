 
 function factorialOfNum(num){
    let fact=1;
    if (num==null || num==undefined || num<=0) {
        console.log(`Invalid Input : ${num}`);
        return;
    }
    else{
        
        for (let i = num; i >= 1; i--) {

            fact = fact * i 
            
        }
      }
         console.log(`Factorial No. is:- ${fact}`);
    }
   

 
 factorialOfNum(5);
 factorialOfNum(3);
 factorialOfNum(null);
 factorialOfNum(8);
 factorialOfNum(undefined);
 factorialOfNum(9);
 factorialOfNum(0);
 factorialOfNum(-1);

