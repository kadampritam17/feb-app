

async function f1() {
    console.log("1");
    var p = await new Promise((resolve, reject) =>{setTimeout(resolve,)})
    console.log("2");
    return new Promise((resolve) => {resolve("i come from promise of defination")})
}



var p1 = f1();
p1.then((resolveState) => {console.log("here",resolveState);})
console.log("3")

/* async function f1() {

}

function simple(){

}

console.log(f1());
console.log(simple());
 */





/* function f1(){

}


let x = async (val) => {

}

// var p = f1()
var p = x()
p.then((resolveValue) => {console.log("the then  is called",resolveValue);})
p.catch((rejectValue)=>{console.log("the catch is called",rejectValue);}) */