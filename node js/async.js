console.log("start operations");


//  synchronous way
function sleep(millisecond){
    let startTime=new Date().getTime();
    console.log("operation is running");
    while(new Date().getTime() < startTime+ millisecond){
        console.log("in progress");
    }
    console.log("operation is done !");
}

// sleep(1000);


//  async way
function asleep(millisecond){
    console.log("operation is running");

    // this part of the code runs on different thread which allow next instructions to run normally 
    setTimeout(()=>{
        console.log("operation is done");
    },millisecond);
};


asleep(1000);
console.log("do something else ");


