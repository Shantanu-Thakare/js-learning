
var array=[10,20,30,40,15];
for (const index in array) {
    
      console.log(array[index]);  
    }

    console.log(`For of loop`);
  
    for (const element of array) {
        console.log(element);
    }

    var array=[10,20,30,40,15];
    var res=array.join("/");
    console.log(res);