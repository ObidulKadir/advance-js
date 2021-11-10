const start = new Date();
let sum =0;
for(var i=0;i<100000000;i++){
    sum++;
}
const end = new Date();
console.log('time eclipsed:', end-start, sum)