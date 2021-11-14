const numbers = [1,2,[11,22,33],4,5];

const [a,b,...c] = numbers
console.log(a+2,b, c);
let [,x,[,d,], y] = numbers;
console.log(x,y,d)