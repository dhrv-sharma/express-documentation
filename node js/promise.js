//  promises are async nature function
//  return value can be access only for once in then fucntion
// async function
const makeApiCall = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("this api executed in: " + time);
        }, time);
    });
};
//  async func call
makeApiCall(1000).then((val) => { console.log(val) });

const p = new Promise((resolve, reject) => {
    console.log("async task execution");
    if (true) {
        const person = { name: "dhruv" };
        resolve(person);

    } else {
        const err = { errorcode: "1001" };
        reject(err);
    }


});

// testing promise function 
p.then(
    (val) => {
        // val is the value get passed from the resolve method
        console.log("success");
    },
    (val) => {
        // val is the value get passed from the reject  method
        console.log(val);
    }
).catch(() => {
    // reject method 
});

console.log("hello");
// promises chaining

//  problem 
// function asyncCallback(cb){
//     cb();
// }

// asyncCallback(()=>console.log(name));

// solution 
function asyncTask() {
    //  this function become async hence all program get compiled
    return Promise.resolve();

}

// then is used for 
asyncTask().then(() => console.log(name));
const name = "Dipesh";


// const prmChain = Promise.resolve("done");
const prmChain = Promise.reject("done");


prmChain.then((val) => {
    console.log(val);
    // for chaining you must return something from the parent code 
    return "done 2";
}).then((val) => {
    console.log(val);
    // for continue chain return something here 
}).catch(() => {
    console.log("error");
});


// array of calls 
let multiApiCall = [makeApiCall(1000),
makeApiCall(2000),
makeApiCall(3000)];



// verifiess all promises 
Promise.all(multiApiCall).then((values)=>{
    console.log(values);
}).catch(()=>{
    throw new Error("some data is left out man ");
})


// first promise  check
//  retunr of Promise object will give you value of reject or resolve
Promise.race(multiApiCall).then((value)=>{
    console.log(`${value} yep`);
});







