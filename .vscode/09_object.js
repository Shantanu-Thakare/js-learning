

     const student={
        stdName:"Jenny",
        RollNum:22,
        City:"Pune",
        isMaried:false,
        friendList:["Mark","Elon","Bill"],
        Address: {
            flatNum:1005,
            Society:"Horizon",
            Street:"Wakad",
            PIN:444405
        }

     };
     console.log(student);
     console.log(`Accensing element from object`);
     console.log(`student name:-${student.stdName}`);
     console.log(`Marital status:-${student.isMaried}`);
     console.log(`student city:- ${student.City}`);
     console.log(`student FlatNo:- ${student.Address.flatNum}`);

     console.log(`Accesing new entry`);
     student.mobile="9999 4545 67";
     console.log(student);

     console.log(`Update`);
     student.isMaried=true;
     student.Address.city="Pune";
     student.friendList[1]="Bill Gates";

     console.log(`Delete`);
     delete student.city;

     const Person={
        firstName:"Anil",
        lastName:"Sharma",
        city:"Mumbai",
        display: function(){
            console.log(`FirstName:- ${this.firstName}  ${this.lastName}`);

        }
     }
     Person.display();
