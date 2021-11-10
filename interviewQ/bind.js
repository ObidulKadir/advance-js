const staffPerson = {
    firstName: "kadir",
    lastName : "Islam",
    salary: 20000,
    getFullName: function(){
        return this.firstName +" "+ this.lastName
    },
    chargeBill: function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}
const bossPerson ={
    firstName: 'reduan',
    lastName : 'hossain',
    salary  : 30000,
    getFullName: function(){
        return this.firstName
    }
}
const rikshawPuller = {
    firstName: 'abul',
    lastName: 'hasan',
    salary : 20000,
    paidSalary: function(amount){
        this.salary= this.salary + amount;
        return this.salary;
    }
}
console.log(staffPerson.getFullName());
const bossFullInfo = staffPerson.getFullName.bind(bossPerson);
console.log(bossFullInfo());

const chargeOnBoss = staffPerson.chargeBill.bind(bossPerson);
console.log(chargeOnBoss(5000));
console.log(bossPerson.salary);// it would show the 25000 ,deduct 5000

const chargeOnRikshaw = staffPerson.chargeBill.bind(rikshawPuller);
console.log(chargeOnRikshaw(1000));

const salaryPaid = rikshawPuller.paidSalary.bind(staffPerson);
console.log(salaryPaid(2000))
console.log(`i got salary`,staffPerson.salary)