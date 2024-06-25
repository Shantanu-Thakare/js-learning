class Employee{
    constructor(emp_id,emp_name,emp_dept, emp_sallary,emp_company){
    this.emp_id=emp_id,
    this.emp_name=emp_name,
    this.emp_dept=emp_dept,
    this.emp_sallary=emp_sallary,
    this.emp_company=emp_company

   }
   }
   const arrayEmployee = [
    new Employee(22, "Anil", "IT", 50000, "TCS"),
    new Employee(33, "Radha", "HR", 74000, "Wipro"),
    new Employee(55, "Rishi", "Finance", 47000, "TCS"),
    new Employee(66, "Sonali", "Finance", 45000, "Infy"),
    new Employee(77, "Monika", "IT", 40000, "Wipro"),
    new Employee(88, "Vinayak", "IT", 75000, "TCS"),
    new Employee(99, "Mahesh", "HR", 85000, "Infy")
  ];
  


   

// arrayEmployee.sort((obj1,obj2)=>{
//     return obj1.emp_id>obj2.emp_id ? -1 : 1;
// });
// console.log(arrayEmployee);

const filteredEmployees = [];
arrayEmployee.forEach(emp => {
    filteredEmployees.push({
        emp_id:emp.emp_id,
        emp_name: emp.emp_name,
        emp_dept: emp.emp_dept,
        filteredEmployees.sort((obj1,obj2)=>{
        return obj1.emp_id>obj2.emp_id ? -1 : 1;
          
    
});


console.log(filteredEmployees);
filteredEmployees.sort((obj1,obj2)=>{
       return obj1.emp_id>obj2.emp_id ? -1 : 1;
     });
     console.log(filteredEmployees);


