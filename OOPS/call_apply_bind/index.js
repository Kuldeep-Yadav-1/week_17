//problem statement

let userDetails1={
    firstName : "kuldeep" ,
    lastName : "yadav" ,
    age : 26 ,
    designation : "software Eng" ,
    // printDetails :function(){
    //     console.log(this.firstName);
    // }

   
}
let printDetails=function(state , country){
    console.log(this.firstName +" "+ state +" "+ country);
}

console.log("<-------------call()------------>");
console.log("call() :IN call we pass the objectName then parameter of function...");
printDetails.call(userDetails1 ,"delhi" ,"India"); //NOTE- IN call we pass the objectName then parameter of function...

let userDetails2={
    firstName : "deep" ,
    lastName : "singh" ,
    age : 26 ,
    designation : "software Eng1" ,
}
printDetails.call(userDetails2 ,"UP" ,"UK"); //NOTE- IN call we pass the objectName then parameter...


console.log("<-------------apply()------------>");
console.log("apply() :IN apply we pass the objectName then parameter... but in the form of array list");
printDetails.apply(userDetails1 ,["delhi" ,"India"]); //NOTE- IN apply we pass the objectName then parameter... but in the form of array list
printDetails.apply(userDetails2 ,["delhi" ,"India"]); //NOTE- IN apply we pass the objectName then parameter... but in the form of array list


console.log("<-------------bind()------------>");
console.log("bind() :IN bind we pass the objectName then parameter... same like as call but it store in a variable then invoke the var ie creates a copy with the help of variable then store in a variable and according to need call variable function");
let newfun = printDetails.bind(userDetails2 ,"UP" ,"UK");
console.log( newfun); // console of variable in which we store bind function
newfun();

console.log("<-------------CLASS ASSIGNMENT------------>");
var employee1 ={
    firstName :"jon" ,
    lastName :"doe"
}

var employee2 ={ 
    firstName :"jack" ,
    lastName :"bally"
} 


function meeting( starting_time , agenda = "plan project" , duration ){
    console.log("good afternoon :",this.firstName );
    console.log("meeting starts  on :",starting_time);
    console.log("meeting duration is :",duration);
    console.log("meeting agenda is :",agenda);
    // console.log("good afternoon", employee1.firstName);
}

console.log("<-------------call()------------>");
console.log("call() :IN call we pass the objectName then arguments of function...");
meeting.call(employee1, "12.00PM" , "project plan" , "3hrs") ;
meeting.call(employee2 ,"09.00PM" , "development" , "1hrs ") ;
// NOTE - functionName.call(objectName , argument1,argument2,argument3, .....)
// NOTE -if method or function is inside a object then syntax :- ObjectName.functionName.call(objectName , argument1,argument2,argument3,.....)

console.log("<-------------apply()------------>");
console.log("apply() :IN apply we pass the objectName then arguments but arguments in the form of array list");
meeting.apply(employee1,["12.00PM" , "project plan" , "3hrs"]) ;
meeting.apply(employee2 ,["09.00PM" , "development" , "1hrs "]) 

console.log("<-------------bind()------------>");
console.log("bind() :IN bind we pass the objectName then parameter... same like as call but it store in a variable then invoke the var ie creates a copy with the help of variable then store in a variable and according to need call variable function");
const invite1 = meeting.bind(employee1) ;
invite1("12.00PM" , "project plan" , "3hrs");
// calling of invite1
const invite2 = meeting.bind(employee2 ,"09.00PM" , "development" , "1hrs ") 
invite2(); 