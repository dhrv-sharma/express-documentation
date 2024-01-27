const x="1";
const y="2";

const chalk = require('chalk');
// %s format variable to string 
// %d as decimal
// %i as integer
// %o as object
// console.log(" I am %s and my age is %d","dhruv",25);
// console.clear(); // clear console
// console.count("I am dhruv");
// console.count("I am dhruv");
// console.count("I am dev");
// console.countReset("I am dhruv"); // clear the count how many time same string get printed  
// console.count("I am dhruv");
// console.count("I am dhruv");


// tracing fucntion for debugging
// const function1 = () => console.trace();
// const function2 = () => function1();

// function2();


// const sum=() => {
//     console.log(`the sum of 2 and 3 is ${2+3}`);
// }

// const measureTime=()=>{
//     console.time("sum()");
//     sum();
//     console.timeEnd("sum()"); // in argument we have to pass function remember it tells you the time taken by sum funtion
// }

// measureTime();

const progressBar =  require('progress');
const bar =new progressBar("dowloading [:bar] :rate/bps :percent :etas",{
    total:20
});

const timer = setInterval(()=>{
    bar.tick();
    if(bar.complete){
        clearInterval(timer);
    }
},100);


// change the colour of output 
console.log(chalk.green("dhruv sharma"));




