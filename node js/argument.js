
// node argument.js name=dhruv
// process.argv;// contain list of string one node directory another current js directory and third is argument
// console.log(process.argv.slice(2)[0]);

// process.argv.forEach((val,index)=>{
//     console.log(`${index}:${val}`);

// })

// minimist is the package which is used to get the argument easily
const minimist = require("minimist");

// node argument.js --name=dhruvn
const argnew=minimist(process.argv.slice(2));
console.log(argnew.name);
