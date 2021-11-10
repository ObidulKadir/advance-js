// new keywords help to create builtin object from class.
class person{
    constructor(firsName, lastName,  salary){
        this.firsName= firsName;
        this.lastName =lastName;
        this.salary = salary;
    }
}
const personInfo = new person("kadir", 'isalam',200);
console.log(personInfo);

// old time they  create  a function to get object from
// function Person1(firstName, lastName){
//     this.firsName =firstName;
//     this.lastName= lastName;
// }
// const person1 = new Person1('shayan', 'saifan')
// console.log(person1)