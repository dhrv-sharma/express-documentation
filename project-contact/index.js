const express=require("express");
const app=express();
const dotenv=require("dotenv").config();
// const PORT=process.env.PORT ||  5000;
const PORT = 5000;

// importing contact routes 
// import 
const contactRoute=require("./routes/contactRoutes");
const errorHandler = require("./middleware/errorhandler");
// appliaction middleware
app.use(contactRoute);
app.use(errorHandler);

// short cut
// if we use this way then we dont have to write /api/contacts again and again
// app.use("/api/contacts",require("./routes/contactRoutes"));
// route.get(/:id,()=>{})

// help to parse the data


app.listen(PORT,()=>{
    console.log(`Server is running on server ${PORT}`);
})


// simple route 
app.get("/",(req,res)=>{
    // response json 
    res.json({
        message:"Server is running correctly"
    })
});


// api route 
// app.get("/api/contacts",(req,res)=>{
//     // returning status code of 200
//     res.status(200).json({MESSAGE:"Get all contacts"});
// })
