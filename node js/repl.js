// REPL Read Evaluate Print Loop featuer provided by node js to run program on commad line 
const repl = require("repl");
const local = repl.start("srt");


//  on command line exit this type of function will run 
local.on("exit",()=>{
    console.log("exiting");
    process.exit(); // terminate node run
})