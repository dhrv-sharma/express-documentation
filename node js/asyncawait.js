const prompt=require("prompt-sync")();
const userlogin=()=>{
    console.log("Enter your details");
    let username =  prompt("enter your username : ");
    let password =  prompt("enter your password : ");
    // async function 
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Checking user...");
            if (username == "Dhruv Sharma" && password == "123456") {
                // if we use async and await still resolve is act like go an an reject givrs an error which is caught by catch block
                resolve("user found");
                
            }else{
                reject("failed ");
            }
            
        }, 1000);
    })

}

function getHomepage(userAuthState){
    return Promise.resolve(`Got to homepage : ${userAuthState}`)
}

// async call 
// userlogin().then((response)=>{
//     console.log("user validated");
//     return getHomepage(response);
// }).then((userAuthStatus)=>{
//     console.log(userAuthStatus);

// }).catch(()=>{
//     console.log("user rejected");
// })


//  async await async call
async function taskiing(){
    

    try {
        const repsonse =await userlogin();
        console.log("Validated user");
        const resp=await  getHomepage(repsonse);
        console.log(resp);
        
    } catch (error) {
        console.log("failed");
        // console.log(error.message);
        
    }

}


taskiing();

console.log("haa haee hee");



