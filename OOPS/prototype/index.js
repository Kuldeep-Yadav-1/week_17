console.log("<---------------OOPS--------------->");
console.log("<---------------PROTOTYPE--------------->");
var data = {
    firstName: 'kuldeep' ,
    lastName : 'yadav' ,
    age : 26 ,
    sum : function(a,b){
        return a + b ;
    }
}

console.log( 'data object :' , data );
console.log( 'data.__proto__ :' , data.__proto__ );
console.log( 'data.__proto__.__proto__ :' , data.__proto__.__proto__ );

let vehicle ={
    engine : 1 ,
    type : 'manual' ,
    fual_tank : 1,
    wheels : 'more than one'
}

let car ={
    seats : 5 ,
    data :{
        seat_cover : 'white',
        body_cover : 'transparent',
    },
    __proto__ : vehicle
    // __proto__ : vehicle ----> NOTE -with the help of __proto__ inside a object we inherit property from parent to child where parent object is which is writen after __proto__
}

let bmw ={
    brand : 'bmw' ,
    country :'germany',
    __proto__ : car
    // __proto__ : vehicle ----> NOTE -with the help of __proto__ inside a object we inherit property from parent to child where parent object is which is writen after __proto__
}

console.log("<----------------__PROTO__,__PROTO__.__PROTO__,__PROTO__.__PROTO__.__PROTO__--------------->");
console.log( 'bmw  :' , bmw );
console.log( 'bmw.__proto__ :' , bmw.__proto__ );
console.log( 'bmw.__proto__.__proto__ :' , bmw.__proto__.__proto__ );
console.log( 'bmw.__proto__.__proto__.__proto__ :' ,bmw.__proto__.__proto__.__proto__ );

console.log( 'car  :' , car );
console.log( 'car.__proto__ :' , car.__proto__ );
console.log( 'car.__proto__.__proto__ :' , car.__proto__.__proto__ );
console.log( 'car.__proto__.__proto__.__proto__ :' , car.__proto__.__proto__.__proto__ );


console.log( 'vehicle  :' , vehicle );
console.log( 'vehicle.__proto__ :' , vehicle.__proto__ );
console.log( 'vehicle.__proto__.__proto__ :' , vehicle.__proto__.__proto__ );
// console.log( 'vehicle.__proto__.__proto__.__proto__ :' , vehicle.__proto__.__proto__.__proto__ );   the upper property does not exist for vehicle b/c theier is no parent which connected through vehicle


console.log( 'car.seats  :' , car.seats );
console.log( 'car.type  :' , car.type );


console.log( 'vehicle.seats  :' , vehicle.seats );
//NOTE --->  'vehicle.seats  :' is undefined b/c parent to child property is accessable but here vahicle is parent & seats are the keys of car which is child so not accesable hence undefined
console.log( 'vehicle.type  :' , vehicle.type );

console.log("<---------------OBJECT PROPERTIES KEYS & VALUES--------------->");
const car_properties = Object.keys(car);
console.log( 'car_properties_keys :' , car_properties);
// NOTE - Object.keys(car) not access the parent property with the help of __proto__ keys . it( Object.keys(car)) access only current object keys..
console.log( 'car_properties_keys_data :' , Object.keys(car.data));

const car_properties_values = Object.values(car);
console.log( 'car_properties_values :' , car_properties_values);
// NOTE - Object.values(car) not access the parent property with the help of __proto__ values . it( Object.values(car)) access only current object values..
console.log( 'car_properties_values_data :' , Object.values(car.data));



 
console.log("<---------------getPrototypeOf PROTOTYPE--------------->");
console.log('Object.getPrototypeOf(car) :', Object.getPrototypeOf(car));
// NOTE - Object.getPrototypeOf(car) used for acccess to parent property
console.log('Object.getPrototypeOf(vehicle) :', Object.getPrototypeOf(vehicle));
// NOTE - Object.getPrototypeOf(vehicle) is parent so access it access the prototype not the property



console.log("<---------------setPrototypeOf PROTOTYPE--------------->");
let car1 ={
    seats : 5 ,
    data :{
        seat_cover : 'white',
        body_cover : 'transparent',
    }
}
console.log('Object.setPrototypeOf(car1,vehicle):', Object.setPrototypeOf(car1,vehicle));
// NOTE- when we don,t use __proto__ property in child then also access by  Object.setPrototypeOf(car1,vehicle) method which used for setting car1 is child where vehicle is parent



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
var kuldeep = new Employee("kuldeep" ,26);
var deep = new Employee("deep" ,21);
// kuldeep.age =30 ;
console.log("Employee :", Employee);
// NOTE- here Empoyee is a constructor function & object kuldeep & deep present in WINDOW which is outside this(window)
// kuldeep.age =30 ;
kuldeep.setAge(32);
// NOTE - kuldeep.setAge(32); HERE this is called incapsulation... b/c age passing through a single unit ie arrow function inside a constructor function
console.log("kuldeep :", kuldeep );
console.log("deep :", deep );
console.log("Object.getPrototypeOf(kuldeep):", Object.getPrototypeOf(kuldeep));
console.log("Object.getPrototypeOf(deep) :" ,Object.getPrototypeOf(deep));
console.log("outside this :" , this );