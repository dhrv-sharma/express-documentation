//  in the package.json start : nodemon/node file.js npm start run this file 
// console.log("node js tutorials ");
// console.log("this is first tutorials");
// console.log("we will cover node js tutourials");
// process.exit(0);// exit the node js program 0 means successful exit
// process.exit=1;// exit with crash

// how to use package
// const packg=require("lodash");
// const cow=require("cowsay");

// exporting only ford from the frist option
// const car=require("./car");

// // exportion 
// const {data}=require("./car");

// const arr=[1,4,6,8];
// console.log(packg.chunk(arr));
// console.log(packg.last(arr));
// console.log(cow.say({
//     text:"Cows mueee",
//     e:"##",
//     t:"U"
// }))
// console.log(data);
// console.log(data.ford);



//  file manipulation
const path = require("path");

const filepath="C:/Users/dhruv/OneDrive/Desktop/javascript/node js/files/sample.txt"

// dir name
console.log(path.dirname(filepath));
console.log(__dirname);

// basename
console.log(path.basename(filepath));
console.log(__filename);

// extension
console.log(path.extname(filepath));

const samplefile = "sample.txt";

console.log(path.join(path.dirname(filepath)),samplefile);

const fs = require("fs");

// reading from a file - async way
fs.readFile(filepath,"utf-8",(err,data)=>{
    if (err) {
        throw new Error("Some thing went wrong!");
    }else{
        console.log(data.toString());
    }
});



// async way of file reading 
try {
  const data=fs.readFileSync(path.join(__dirname),"utf-8","files","sample.txt");
  console.log(data);
} catch (error) {
    console.log(error.message);
    
}


