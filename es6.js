function base10(fn){
    return (x,y) =>fn(x,y )+14;

}

const mysum =(a,b) => a+b;

const return_fn =base10(mysum);

const numbers =[1,2,3,4,5,6,7,8,9,10];
const number =numbers.reduce((acc,n)=>acc+n,0);

console.log(number);
console.log(return_fn(1,2));
