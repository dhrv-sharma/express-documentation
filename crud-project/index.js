const express = require("express");
const app = express(); // alll functionality of express is transferred to app
const mongoose = require("mongoose");
const PORT = 5001;
const router = require('./routes/user-routes');
const blog=require("./routes/blog-routes");


// target
// sign in user
// create blog
// edit blog
// delete blog
// get blog


//   middleware
//  only works for the /api routes 
// app.use('/api',(req,res,next)=>{
//     console.log("Hello middleware");

// })

// server created and start listening
// app.listen(PORT, () => {
//     console.log(`Server listening to ${PORT}`);
// });


// route created 
// app.get('/', (req, res) => {
//     res.json({
//         message: "Server is ready an online "
//     });
// });


//  database connect
// .connect() sends the 
mongoose.connect('mongodb+srv://dhruvsharma10082004:HB9UTND3Cd6K6T1L@cluster.1rfhetl.mongodb.net/Blog?retryWrites=true&w=majority').then(() => {
    app.listen(PORT, () => {
    });
}).then(() => {
    console.log("Server and Databse connected")
}).catch((err) => {
    console.log(err.message);

});

app.use(express.json()); // this middleware runs always  used to convert the encrypted data in the json format
app.use("/api/user", router); //  http request with every route http://localhost:5001/api/user this midlleware runs  which direct to the user-routes.js
app.use("/api/blog",blog); //  http request with every route http://localhost:5001/api/blog this midlleware runs  which direct to the blog-routes.js