const number1 = [1,2,3,4,5,6];
const number2 = [7,8,9,10,11];
const newNumber= number1.concat(number2).concat([1000]);
// concat(...items: (number | ConcatArray<number>)[]): number[]
// Additional arrays and/or items to add to the end of the array.
// Combines two or more arrays. This method returns a new array without modifying any existing arrays.

number1.push(123)
const anotherNumber =  [...number1, 18,100]

console.log(anotherNumber)
console.log(number1)
