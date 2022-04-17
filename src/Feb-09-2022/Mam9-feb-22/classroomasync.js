async function f1()
{

}

function simple()
{
   // await new Promise()  //NOT ALLOWED 
}

console.log(f1())
console.log(simple())
/* 
let x = async (val)=>{

}

//var p = f1()
var p = x()
p.then((resolvedvalue)=>{console.log("the then is called ",resolvedvalue)})
p.catch((rejectvalue)=>{console.log("the catch is called ",rejectvalue)}) */