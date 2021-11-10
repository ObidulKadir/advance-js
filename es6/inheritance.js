class parent{
    constructor(){
        this.fatherName = "Motiar Rahman";
    }
}
class Child extends parent{
    constructor(firsName, lastName){
        super();
        this.firsName = firsName;
        this.lastName= lastName;
    }
    fullName(){
        return this.fatherName + " "+ this.firsName +this.lastName
    }
}

const fullInfo  = new Child("obiul", "kadir");
console.log(fullInfo.fullName())