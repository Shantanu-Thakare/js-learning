
console.log(`===========================Task1==========================`);
class Vehicle{
     Name
     Model
     Color
     Year
     Mileage
      
    constructor(name,model,color,year,mileage){
        this.Name=name;
        this.Model=model;
        this.Color=color;
        this.Year=year;
        this.Mileage=mileage;
      
    }
    details(){
        console.log(`Details:-  ${this.Name}, ${this.Model}, ${this.Color}, ${this.Year}, ${this.Mileage} `);
    }

}
const details1 =new Vehicle("Ford Mustang","GT","Rapid Red","2022","24 MPG");
details1.details();

const details2 =new Vehicle("BMW","330i","White","2023","20 MPG");
details2.details();

const details3 =new Vehicle("Chevrolet","LT","Summit White","36 MPG");
details3.details();

const details4 =new Vehicle(" Audi Q5","Premium Plus","Blue","2023","35 MPG");
details4.details();
console.log(`==============================Task 2======================================`);
  
class College{
    Name
    Location
    Establish
    CampusSize
    constructor(name,location,establish,campussize){
      this.Name= name;
      this.Location=location;
      this.Establish=establish;
      this.CampusSize=campussize; 
    }
    display(){
        console.log(`College Name:- ${this.Name}`);
        console.log(`Location:- ${this.Location}`);
        console.log(`Establish Year:- ${this.Establish}`);
        console.log(`Campus Size:- ${this.CampusSize}`);
        console.log(`=============================================================`);
        
    }

}
const display1 =new College("HVPM","Amravati","1970","12 acres");
display1.display();

const display2 =new College("RamDeOBaba","Nagpur","1984","13 acres");
display2.display();

const display3 =new College("SIPNA","Amravati","1975","15 acres");
display3.display();

const display4 =new College("Walchand","Solapur","1947","22 acres");
display4.display();