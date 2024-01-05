console.log("<---------------CONSTRUCTOR PROTOTYPE --------------->");
console.log("constructor is like a template in which we create multiple desired data");
function Employee(nameP ,ageP){
    console.log("inside of constructor this :" , this);
    this.name = nameP ;
    this.age = ageP ;
    this.setAge = newAge=>{
        // console.log('newAge :',newAge);
        // console.log('oldAge :',ageP);
        console.log(`age :${this.ageP} new set :${this.setAge}`);
        this.age = newAge ;
    }
}
var emp1 = new Employee("kuldeep" ,26);
var emp2 = new Employee("deep" ,21);
Employee.prototype.address = "banglore" ;
console.log("Employee :", Employee);
console.log("obj emp1.address :",emp1.address);
console.log(`emp1:- ${emp1.name} & emp1 address - ${emp1.address}`);
console.log(`emp1:- ${emp2.name} & emp2 address - ${emp2.address}`);


Employee.prototype.name = "jack" ;
// NOTE-in Employee.prototype.name = "jack"  name is part of prototype so it not overwrite the name ...name jack is part of prototype not the part of intance of object ie prototype is not part of intance of object ...call() ,apply() ,bind() present inside the constrocter 
console.log("emp1:-" ,emp1);
console.log("emp2:-" ,emp2);

console.log("emp1.__proto__:-" ,emp1.__proto__);
console.log("emp2.__proto__:-" ,emp2.__proto__);

console.log("emp1.__proto__.__proto__:-" ,emp1.__proto__.__proto__);
console.log("emp2.__proto__.__proto__:-" ,emp2.__proto__.__proto__);

//PROTOTYPE : it is a property exists on constroctor function in JS 
// when we create an object using a constrocter function with the new keyword 
// the prototype is property of the constrocter becomes the prototype of newly created object 
//__PROTO__ : it is a property exists on every object in javascript