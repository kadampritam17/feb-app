async function f1()
{
    let x = 100;
    console.log("1")
    var p =  await new Promise((res,rej)=>{setTimeout(()=>{ x++;  res("done after 2 secs")},5000)})
    console.log("2" ,x)
    return  p   //new Promise((resolve)=>{resolve("i come from promise of f1")})
}

var p1 =f1()
//p1.then((resolvedstate)=>{console.log("here",resolvedstate)})
console.log("3")


 function f2()
{

}

//f2().then((resolvedstate)=>{console.log(resolvedstate)})
