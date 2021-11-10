class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        }
    addition(){
        return 5+1;
    }
}
const student1 = new Student(1,'KADIR');
console.log(student1)
const student2 = new Student(2,'SHAYAN');
console.log(student1.addition())