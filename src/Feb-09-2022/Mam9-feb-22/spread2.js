/*Ex1 
const arrValue = ['My', 'name', 'is', 'Jack'];

console.log(arrValue);   // ["My", "name", "is", "Jack"]
console.log(...arrValue);  
//console.log(arrValue[0],arrValue[1],arrValue[2],arrValue[3])
*/

/*Ex2 
const arr1 = ['one', 'two','six','seven'];
const arr2 = [arr1, 'three', 'four', 'five'];
const arr3 = [...arr1, 'three', 'four', 'five'];
console.log(arr2, arr2.length)
console.log(arr3,arr3.length)
console.log(...arr2)
*/

/* Ex3
let arr1 = [ 1, 2, 3];
//let arr2 = arr1;  //shallow copy

/*DEEP COPY 1
let arr2 =[] 
arr1.forEach((e)=>{ arr2.push(e)    })
*/
/*DEEP COPY 2
let arr2 = arr1.map((e)=>{return e})
*/

/* DEEP COPY 3
let arr2 = [...arr1]

console.log(arr1); 
console.log(arr2); 

// append an item to the array
arr1.push(4);

console.log(arr1); 
console.log(arr2); 
 */



/*
const obj1 = { x : 1, y : 2 };
const obj2 = { z : 3 , x :25};
//const obj3 ={x:obj1.x,y:obj1.y,z:obj2.z}
// add members obj1 and obj2  to obj3
//const obj3 = {...obj2,...obj1 };
//const obj3 = {...obj1,...obj2 };
//const obj3 ={obj1:obj1,obj2:obj2}  //same as  const obj3 = {obj1,obj2}
console.log(obj3); // {x: 1, y: 2, z: 3}
*/

/*
const obj = { color:'red',name:'mars'}
//let another = obj //one object two references
let another = {...obj} //the properties are copied to the another address

another.name = 'jupiter'
console.log(obj)   //output red mars
console.log(another)  // red jupiter
*/

let obj = {name:'lata mangeshar' , age:'92',country:'India',gender:'female'}
let musician1 ={ details : obj, stream:'singer'}

let musician2={...musician1}
//let musician2 = Object.assign({},musician1)

//musician2.details.name = 'asha bhosle'
//musician2.details.age = 88
musician2.details ={...musician2.details,name:'asha bhosle',age:88}
musician2.stream = "hindi film singer"

console.log(musician1)
console.log(musician2)

















