console.log("<----------inheritance------------>");
function Human(nameP , ageP){
    this.name = nameP ;
    this.age = ageP ;
    this.arms = 2 ;
    this.legs = 2 ;
}

function Employee(name,age , designation){
    Human.call(this ,name ,age);
    //NOTE- in constroctor function we use call() for inheritance from parent to child function EX- Employee(child) and Human(parent)...... but in class we use extends in place of call() for inheritance
    this.designation = designation;
    this.setAge = newAge =>{
        console.log("this.age",this.age);
        this.age = newAge ; 
    }
    this.company = "Walmart"
}

// Employee.prototype = Human;
Employee.prototype = Object.create(Human.prototype);
var employee1 = new Employee( 'ram ', 31 , 'developer')
Employee.prototype.gender = "male" ;
Human.prototype.feet = 2;

console.log("employee1 :", employee1);
console.log(employee1.name , 'is' , employee1.gender);
console.log(employee1.name , 'age is' , employee1.age);
console.log(employee1.name , 'has arms' , employee1.arms);
console.log(employee1.name , 'has feet' , employee1.feet);
