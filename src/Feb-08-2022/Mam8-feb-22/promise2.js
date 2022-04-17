function f1() {
    console.log('f1');
   }
   
   function f2() { 
       console.log('f2');
   }
   
   function f3() { 
       console.log('f3');
   }
   
   function main() {
     console.log('main');
   
     setTimeout(f1, 50);
     setTimeout(f3, 30);
   
     new Promise((resolve, reject) =>
       resolve('I am a Promise, right after f1 and f3! Really?')
     ).then(resolve => console.log(resolve));
       
     var flag = true
     new Promise((resolve, reject) =>{
       if( flag)
       resolve("this is succeeded")
       else 
       reject("this failed")
     }
     ).then(resolve => console.log(resolve))
     .catch(reject =>console.log(reject));
   
     f2();
   }
   
   main();
   