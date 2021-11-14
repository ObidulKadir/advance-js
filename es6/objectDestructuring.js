// object-destructuring

// akta nested array or object thke particular property or element ber kore anar jnno destructuring really important, it would work like a magic.
const personInfo ={
    id: 1234,
    name:  'rizwan ahamed',
    designation:  'software-engineer',
    education:{
        // ssc: "m d c",
        hsc: 'mirpur'
    },
    wifes:[
        "salmani", "mia" 
    ]
}

// old  ways 
// const  name = personInfo.name;
// const name = personInfo["name"]
// console.log(name)

// 1st way 
// const {education :{hsc: college}} = personInfo;
// // : used for  alias the variable name
// console.log(college);

const {
education:  {ssc}= {} // default value while variable is not found so that result would be undefined.
}   = personInfo;
console.log(ssc)