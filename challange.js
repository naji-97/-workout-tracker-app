// const students= [
//     {name:"john", grade:75},
//     {name:"jojanhn", grade:93},
//     {name:"samantha", grade:90},
//     {name:"Michael", grade:94},
// ]

// import { sort } from "core-js/core/array"



// const sortedArray = students.sort((a,b)=>{
//     return b.grade - a.grade
// })
// // console.log(sortedArray);


// const reversedArry = sortedArray.reverse()

// console.log(reversedArry);


// const overNin = students.find((student)=>{


//    return student.grade > 90
// })

// console.log(overNin);

const a = [15, 24, 30, 84, 28]

const b = [15, 20, 30, 14, 26]

const c =[...a, ...b].sort((a,b)=> a- b)

console.log(c);

// const someLessThan = temps.some(ele=> ele< 90)

// const includThrehundered = temps.includes(3007)
// const under150 = temps.some(ele=> ele< 1507)

// const evenNumber = temps.every((ele)=> ele % 2 === 0)

// let x ='hi'

// const reverStr = x.split('').reverse().join('')

// console.log(reverStr);