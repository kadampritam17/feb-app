function f1() {
    console.log("f1");
}

function f2(){
    console.log("f2");
}

function f3() {
    console.log("f3");
}

function main() {
    
    console.log("in main function");
    setTimeout(f1, 50)
    setTimeout(f3, 30)

    new Promise(function(resolve, reject) {
        reject("I am a Promise, right after f1 and f3! Really?")
    }).then((resolve) => {console.log(resolve);})
    .catch((reject) => {console.log(reject)})
    
    var flag = true
    new Promise((resolve, reject) => {
        if(flag)
        resolve("this is resolved")
        else
        reject("this is rejected")
    }).then((resolve) => {console.log(resolve);})
    .catch((reject) => {console.log(reject)})

    f2();
}
main();