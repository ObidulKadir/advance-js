
const add = () => {
    const [a,b] = [7,8];
    const sum = a +b ;

    return sum;
}
console.log(add())
const subtraction= () => 6-8;
console.log(subtraction());
let sum = 0
const subtract = (a)=> {
    for(var i =0;i<a.length;i++){
        const element = a[i];
        if(element % 2 == 0){
            sum = sum + element;
        }
        
    } 
    return sum;
} 

let a = [1,2,3,4,5,6,7,8,10]
console.log(subtract(a))