const infoPerson =  [
    {
        id:1,name:'kadir',position:'It Engineer',phone:123455
    },
    {
        id:2,name:'shayan',position:'It Engineer',phone:123455
    },
    {
        id:3,name:'adir',position:'It Engineer',phone:123455
    }
]
// ]
// const personsInfo =
// {
//     id:2,name:'shayan',position:'It Engineer',phone:123455
// }
// console.log(infoPerson.length);
// const {name} = personsInfo;
// console.log(name)
const nameInfo = infoPerson.map((s,index)=>s.name) // return name array from object 
const biggerId = infoPerson.filter(s=> s.id>2)
console.log(nameInfo)