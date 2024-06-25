console.log(`===============================Create an Object =============================`);
const professor={
    name:"Dr. Jane Smith",
    age:65,
    department:"Computer Science",
    university:"Cambridge",
    email:"jane.smith@university.edu",
    Degree:{
        Engineering:"CSC",
        PhD:"Adv Computing",
        Master:"Data Science",
        associate:"Computer Science"
       },
       Certificates:[
        "Hacker Rank Certification",
        "Certificate in IFE course",
        "Certificate in Adv Programming"
       ]
    
};

console.log(`===================Upadate Propert======================`);
professor.totalExperience="14 Years";
console.log(`Total exp:- ${professor.totalExperience}`);
console.log(`===================Modify any existing property :- University==================`);
professor.university="SGBAU";
console.log(professor);
