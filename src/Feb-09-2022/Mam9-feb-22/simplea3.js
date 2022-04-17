const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const randomDelay = () => {
        return new Promise(resolve => setTimeout(resolve, Math.random() * 1000));
       }
//const calc = async n => {
async function calc(n){
  if(n<5)
    await randomDelay();
  return n * 2;
};
const asyncFunc = async () => {
  const unresolvedPromises = arr.map(n => calc(n));
  //console.log(unresolvedPromises)
  const results = await Promise.all(unresolvedPromises);
  results.forEach((e)=>{console.log(e)})
};

asyncFunc();
console.log("end")