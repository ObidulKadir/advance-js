// apply()=> same as call() but you have to pass the argument as a array

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
}

console.log(rikshawPuller)
// staffPerson.chargeBill.apply(rikshawPuller, 300, 200); TypeError: CreateListFromArrayLike called on non-object
staffPerson.chargeBill.apply(rikshawPuller,[200,11])
console.log(rikshawPuller.salary)