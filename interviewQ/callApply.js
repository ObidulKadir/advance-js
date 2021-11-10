const normalPerson = {
    firstName: "kadir",
    lastName : "Islam",
    salary: 20000,
    getInfo: function(){
        return this.firstName +" "+ this.lastName
    },
    getBill: function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}
console.log(normalPerson)
console.log(normalPerson.getInfo())
console.log(normalPerson.getBill(222))
console.log(normalPerson.salary)
