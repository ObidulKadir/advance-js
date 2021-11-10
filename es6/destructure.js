const array = [1,"kadir",3,4,5];

console.log(array.join("+"))

const [a,b,...rest]= array;
console.log(rest)

const friends ={name: `obidul kadir`, id: 420, job:`unemployment`}
const {name, job} = friends;
console.log(name, job)