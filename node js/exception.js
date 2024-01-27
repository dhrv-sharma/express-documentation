const error = new Error("Something went wrong");
// console.log(error.stack);
// console.log(error.message);

// throwing error
// if (true) {
//     throw new Error("I am error object");
    
// }



// creating a new custome Error object 
// const { CustomeErr }= require("./customerror");
// throw  new  CustomeErr(" this is custom error");


//  handle excetion handling 
const dosomething = ()=>{
    // throw new Error("Error occured");
    console.log("error not  occured");
}
// try {
//     dosomething();
    
// } catch (e) {
//     console.log(e);
    
// }


// uncaught Exception
// process.on("uncaughtException",(err)=>{

//     console.log("There was uncaight exception");
//     process.exit(1);
// });


//  Exception with promises
//  promise is like promise oly if work is done then resolve otherwise reject it 


// const promise= new Promise((resolve,reject)=>{
//     // if work is done then reolve 
//     if (true) {
//         resolve("Task is completed");
        
//     }else{
//         reject("Task is not completed");
//     }
// });


// promise.then((message)=>{
//     // part is called when the resolve section is called
//     console.log(message);
// }).catch((message)=>{
//     //  part is called when reject section is called
//     console.log(message);

// });


// async await Exception with async 
const somefunction= async ()=> {
    try {
        await dosomething();
    }catch(err) {
        console.log(err.message);
    }
};

somefunction();

