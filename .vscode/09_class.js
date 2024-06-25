class Student{
    // Data Members or propertis or attributes or states

    constructor(firstName,lastName,city){
      this.firstName=firstName;
      this.lastName=lastName;
      this.city=city;
    }
    // Member function or Method or Behaviour or Action
    details(){
        console.log(`Details:- ${this.firstName} , ${this.lastName}, ${this.city} `);
    }

}
const stdAnil=new Student("Anil","Sharma","Pune");
stdAnil.details();

 

const jenny = new Student("Jenny", "Tipi", "LA");
jenny.details();

const stew = new Student("Stew", "Job", "LA");
stew.details();