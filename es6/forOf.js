//  example  -1
 const numbers = [1,2,3,4,6,7];

// let sum =0
// for (const number of numbers){
//     sum = sum + number;
// }
// console.log(sum)

// example-2

// const myString = " i love you more than any one";

// for(const myLove of myString){
//     console.log(myLove)
// }

// example-3
const iterable = new Map([['a', 1], ['b', 2], ['c', 3]]);
for (const val of iterable){
    console.log(val)
}
for(const [key, value] of iterable){
    console.log(value)
}