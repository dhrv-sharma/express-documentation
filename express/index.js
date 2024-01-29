// initializing express
const express=require("express");
const router=express.Router();
const app=express();

// port to be listened
const port = 3001;

// serer creation and listening
app.listen(port,()=>{
    console.log(`Listening on ${port}`);
});

// route get method this is called api
// app.get("/",(req,res)=>{

//     // sending data in json 
//     res.json({"message":"Express is lisetening you"});
//     // res.send("Hello world"); // to give on webpage
// });


// user route
//  GET is route function which retrieve the data from the source 
app.get("/user",(req,res)=>{
    res.json({message:"get all users"});
});

// particular user
app.get("/user/:id",(req,res)=>{
    res.json({
        message:`Get user with Id ${req.params.id}`
    })

});

// POST:  ADD new data to the source 
app.post("/user/",(req,res)=>{
    res.json({
        message:"posting on user"
    });
})

// PUT: Update the existing data
app.put("/user/:id",(req,res)=>{
    res.json({
        message:`updated value of user ${req.params.id}`
    });
})


//  delelte the data
// In the route app.delete("/user/:id", ...), :id is a route parameter. It is a placeholder for a dynamic value that will be part of the URL when a client makes a request. In this case, it represents the user ID that you want to delete.
app.delete("/user/:id",(req,res)=>{
    res.json({
        message: "user get deleted"
    })
})


// Middleware
// Application -level middleaware
// Third Party middleaware
// Router Level middleaware
// Built in middleaware
// Error handling middleaware


function loading (req,res,next){
    console.log("This is middleware i have recieved request");
    req.customeVar=200;// this values get changes by middleware
    // we have not applied next() funcion hence get request made middleaware is laoding nad next midlle ware is sent 
    next(200);

}

function sentResponse(req,res,next){
    console.log(`value is ${req.customeVar}`);
    res.json({message:"You request completed",});
    // no need to call next() as there is not next();
}


// global middleaware
//  execution depends on the order of initialization
function globalRequest(req,res,next){
    console.log("Global request");
    next(); // loading middleware run

}


// error handler middle aware
//  suppose we made an request and we got error so we will get status code so before sending the resposne to client we can have use middleware
function errorhandler(err,req,res,next){
    if (err.status === 500) {
        // special erros
        
    } else if(err.status == 300){
        //  error 300 respond accordingly

    }
    else{
        // no error respond accordinly 
        console.log("no error");

    }
    // middleware before this error handler middleware have to call next next with extra argument()
    // next(errobj);
    req.customeVar=100;
    next();
}

// used to make global middleware
app.use(globalRequest);
// first loading is executed and then sentResponse
//  here loading is route specific middleaware
//  req is for whole middle aware process
// gloabal >> loading >> error handler >> sentResponse 
app.get("/middle",loading,errorhandler,sentResponse);

