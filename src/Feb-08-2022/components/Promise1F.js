function f1(){
    console.log("f1");
}

function f2(){
    console.log("f2");
}

function main(){
    console.log("main");

    setTimeout(f1, 0);

    var promise = new Promise((resolve, reject)=>{
        reject("when promise is resolved")
    })
        
        promise.then(resolveValue => {console.log("then ", resolveValue);})
        promise.catch(rejectValue => {console.log("catch ", rejectValue)})
        f2();

}

main();

f2();