console.log("<------------CLASS------------->");
class Employee {
    constructor(nameP, ageP, postP) {
        this.name = nameP;
        this.post = postP;
        this.age = ageP;
        this.setAge = newAge => {
            console.log(`set age is from ${this.age} to ${setAge}`);
            this.age = newAge;
        }
    }
    static compareAge(emp1, emp2) {
        return emp1.age - emp2.age;
    }

}
var emp1 = new Employee("kuldeep ", 28, "software developer");
var emp2 = new Employee("deep ", 25, "front end developer");
console.log("emp1 :", emp1);
console.log("emp2 :", emp2);
console.log("Employee :", Employee);
const compAge = Employee.compareAge(emp1, emp2);
console.log("compare age :", compAge);

console.log("<------------CLASS------------->");
class Person {
    constructor(nameP, ageP, postP) {
        this.name = nameP;
        this.post = postP;
        var _age = ageP;
        this.setAge = newAge => {
            console.log(`set age is from ${this.age} to ${setAge}`);
            _age = newAge;
        }

        this.printAge = function () {
            console.log("_age :", _age);
            return _age;
        }
    }
}
var p1 = new Person("ramesh ", 28, "software developer");
var p2 = new Person("ashok", 25, "front end developer");
console.log("p1 :", p1);
console.log("p1.age :", p1.age);
console.log("p2 :", p2);
console.log("p2.age :", p2.age);
console.log("p1.printage() :", p1.printAge());
console.log("p2.printage() :", p2.printAge());

console.log("<------------INHERITANCE IN CLASS------------->");
/*
class childClassname extends parentClassname{
    constructor(parm1,param2 , param3 ,.......)
    super(param1 , param2 ,......)
}


*/

class Human {
    constructor(nameP, ageP) {
        this.name = nameP;
        this.age = ageP;
        this.arms = 2;
        this.legs = 2;
    }


}


class Employees extends Human {
    constructor(nameP, ageP, desigP) {
        super(nameP, ageP); 
        // NOTE - super used when inside a class we want to inherit the contructor property of parent to the child constructor
        this.desig = desigP;
        this.company = 'walmart';
    }
    setAge = newAge =>{
        console.log('this.age :', this.age);
    }
}

var employee1 = new Employees('krishna', 26, 'project manager')
console.log("employee1 :", employee1);
console.log(employee1.name, 'designation is :', employee1.desig);
console.log(employee1.name, 'age is :', employee1.age);
console.log(employee1.name, 'company is :', employee1.company);
console.log(employee1.name, 'has arms :', employee1.arms);

