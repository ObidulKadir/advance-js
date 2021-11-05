// break -> when the element is found that immediately exit  the program
//continue => when conditions  is  match and it ignore that value

const studentId  =  [2,-5,7,-8,124,4];
for (let index = 0; index < studentId.length; index++) {
    const element = studentId[index];
    if(element<0){
        continue;
    }
    console.log(element)
    
}