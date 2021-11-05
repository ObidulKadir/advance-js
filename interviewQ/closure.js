function stopWatch(){
    var count =0;
    return function (){
        count++;
        // console.log(count)
        return  count
    }
}
const clock1 = stopWatch()
console.log(clock1);
console.log(clock1());
console.log(clock1());
console.log(clock1());

console.log(clock1());

const clock2 = stopWatch()
console.log(clock2())
console.log(clock2())
console.log(clock2())
function makeFunc() {
    var name = 'Mozilla';
    function displayName() {
        console.log(name);
    }
    return displayName;
}
  
var myFunc = makeFunc();
 myFunc();
