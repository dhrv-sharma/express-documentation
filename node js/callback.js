//  call back function are not async by default we have to make them async 
// console.log("task start");
// function asyncTask(cb){
//     console.log("task running");

//     setTimeout(() => {
//         // set time out is async function hence after 1 sec whole java scrypt file is executed 
//         cb();
//     }, 1000);
// }

// asyncTask(()=>console.log(name));
// console.log("taske ends " );
// const name = "Dipesh";

// // call back function have the first argument as error and anohter as data always 
// // wehn you dont have error pass null in err and pass data otherwise only error no data it is standrd wayu of doing this 
// asyncTask((err,data)=>{
//     if (err) {
//         throw err;
//     } else {
//         console.log("data",data);
        
//     }
// });


function makeApiCall(cb){
    setTimeout(() => {
        console.log("this is async execution");
        
    },0);
}

