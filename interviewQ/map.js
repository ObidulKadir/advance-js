// using map we could get arrayindex of  array ,  element of array and fullarray
// filter=> return condition wise array
//find=> immediate  true   value

const numbers =[1,2,3,5,6,1,43,6];
// const result = numbers.map(function(numbers,index,array){
//     console.log(numbers+2, index)
// })
const result = numbers.map(x=>x+x)
console.log(result)
const bigger = numbers.filter(x=> x<5);
const isThere = numbers.find(x=> x>5);

console.log(bigger, isThere)
