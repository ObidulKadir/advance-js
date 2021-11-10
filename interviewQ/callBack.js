// function greeting(){
//     return `hello` ;
// }
// function personName(name, callBack){
//     const greeting = callBack()
//     return greeting +" "+ name
// }
// const greet = personName('kadir', greeting)
// console.log(greet)

function addition(subtraction){
    return 100 + subtraction;
}
function subtraction(a,b,add){
    const sum = a-b;
    console.log(`From subtraction function:`,  sum)
    return add(sum)
}

const mutlipleWork = subtraction(20,10,addition);
console.log(mutlipleWork);