/* 
// Ex1
const arrValue = ['first', 'second', 'third', 'fourth', 'fifth']

console.log(arrValue);
// [ 'first', 'second', 'third', 'fourth', 'fifth' ]
console.log(...arrValue);
// first second third fourth fifth
console.log(arrValue[0], arrValue[1], arrValue[2], arrValue[3], arrValue[4]);
// first second third fourth fifth

// Ex2 - que - how output is expected all 5 string in arr2 / 1 array and 3 string in arr2
const arr1 = ['one', 'two' , 'six' , 'seven']
const arr2 = [...arr1, 'three', 'four', 'five']
console.log(arr2); //[ 'one', 'two', 'six', 'seven', 'three', 'four',  'five' ]
console.log(arr2.length); //7
console.log(...arr2);//one two six seven three four five

const arr3 = [arr1, 'three', 'four', 'five']
console.log(arr3); //[ [ 'one', 'two', 'six', 'seven' ], 'three', 'four', 'five' ]
console.log(arr3.length);//4
console.log(...arr3); //[ 'one', 'two', 'six', 'seven' ] three four five



// Ex3
let arr1 = [ 1, 2, 3]
let arr2 = arr1 //shallow copy

// deep copy 1
let arr3 = []
arr1.forEach((e)=>{arr3.push(e)})

// deep copy 2
let arr4 =  arr1.map((e)=>{return e})

// deep copy 3
let arr5 = [...arr1]


console.log(arr1, arr2, arr3, arr4, arr5)

// Ex4
const object1 = { x: 1, y: 2 }
const object2 = { z: 3 }
const object5 = { z: 3 , x: 42 }

const object3 = { x: object1.x, y: object1.y, z: object2.z } 
console.log("object3 " , object3);

// add member object1 and object2 to object3
const object4 = { ...object1, ...object2 }
console.log("object4 " , object4);
const object6 = { ...object1, ...object5 }
console.log("object6 " , object6);
const object7 = { ...object5, ...object1 }
console.log("object7 " , object7);
const object8 = { object1: object1, object2: object2}
console.log("object8 " , object8);
const object9 = { object1, object2 }
console.log("object9 " , object9);


// Ex5
const obj = { color: 'red', name: 'mars' }
let anotherobj = obj // one object two references
let another = { ...obj } //

*/

// Ex6

let obj = { name: 'lata mangeshkar', age: 92, country : 'India', gender: 'female' } 
let musician1 = { details: obj, stream: 'singer' }

let musician2 = {...musician1}

// musician2.details.name = 'asha bhosale'
// musician2.details.age = 88
// musician2.stream = 'hindi film singer'
// console.log("musician1", musician1);
// console.log("musician2", musician2);
//OUTPUT
// musician1 {
//     details: { name: 'asha bhosale', age: 88, country: 'India', gender: 'female' },
//     stream: 'singer'
//   }
//   musician2 {
//     details: { name: 'asha bhosale', age: 88, country: 'India', gender: 'female' },
//     stream: 'hindi film singer'
//   }

musician2.details = { ...musician1.details, name: 'asha bhosale', age: 88}
musician2.stream = 'hindi film singer'

console.log("musician1", musician1);
console.log("musician2", musician2);
//OUTPUT 
// musician1 {
//     details: {
//       name: 'lata mangeshkar',
//       age: 92,
//       country: 'India',
//       gender: 'female'
//     },
//     stream: 'singer'
//   }
//   musician2 {
//     details: { name: 'asha bhosale', age: 88, country: 'India', gender: 'female' },
//     stream: 'hindi film singer'
//   }



