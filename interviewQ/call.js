// call -> directly call method and do the work.you may pass argument
// The object to be used as the current object.
// Calls a method of an object, substituting another object for the current object.
const staffPerson = {
    firstName: "kadir",
    lastName : "Islam",
    salary: 20000,
    getFullName: function(){
        return this.firstName +" "+ this.lastName
    },
    chargeBill: function(amount, tax){
        this.salary = this.salary - amount -tax;
        return this.salary;
    }
}

const rikshawPuller = {
    firstName: 'abul',
    lastName: 'hasan',
    salary : 20000,
    // paidSalary: function(amount){
    //     this.salary= this.salary + amount;
    //     return this.salary;
    // }
}

console.log(rikshawPuller)
staffPerson.chargeBill.call(rikshawPuller, 300, 200);
staffPerson.chargeBill.call(rikshawPuller, 300,10)
console.log(rikshawPuller.salary)