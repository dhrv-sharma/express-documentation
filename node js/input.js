// ways to import packages 
const readine = require("readline");
const prompt=require("prompt-sync")(); // this is special import for tis package only 


// call back function to take input from command line 
// const rl =  readine.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });


// rl.question('what is your name ?',(name)=>{
//     console.log(`Hi ${name}`);
//     rl.close();
    
// });


// ways to take input from the command line 
const name=prompt("what is your name ? ");
console.log(`hi ${name}`);

