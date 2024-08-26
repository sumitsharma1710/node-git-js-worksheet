let sum =0;

const calc = (n)=>{
    for(let i=0;i<=n;i++){
        sum += i;
    }
    return sum;
}

const memoizefunc = (func)=>{
    let cache = {};
    return function(...args){
        let n=args[0];
        if(n in cache){
            console.log("cache");
            return cache[n];
        }else{
            let result = func(n);
            cache[n]= result;
            console.log("calculating first time");
            return result;
        }
    }
}




console.time();
const main = memoizefunc(calc);
console.log(main(5));
console.timeEnd();


console.time();
console.log(main(5));
console.timeEnd();