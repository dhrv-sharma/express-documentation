// importing file 
const express=require("express");
const router = express.Router();


// middleware to parse the body in to the data
router.use(express.json());
/*
express.Router() is a middleware that can be used to create modular, mountable route handlers.
It allows you to define routes and middleware for a specific part of your application and then "mount" those routes on the main application.
It is used when you want to organize your routes into separate files or when you have a section of your application that should be handled by a specific router.
It represents a set of routes
*/ 

router.get("/api/contacts/:id",(req,res)=>{
    res.status(200).json({message  : ` Account Found ${req.params.id}`})

});

// route to get contact
router.get("/api/contacts",(req,res)=>{
    res.status(200).json({message:"Getting all Contacts"});

});

// route to create a new contact
router.post("/api/contacts",async (req,res)=>{
    // when you accept the data from the client you need to parse the text
    const {name ,email,contact} = req.body;
    if(!name || !email || !contact){
        res.status(400);
        throw new Error("All Fields are mandatory");
        // catching error by middleware
    }
    res.status(201).json({message:"create Contact"});

});


// route to update a existing  contact 
router.put("/api/contacts/:id",(req,res)=>{
    res.status(200).json({message:`contact get updated ${req.params.id}`});
});


// route to delete an existing  contact with an id 
router.delete("/api/contacts/:id",(req,res)=>{
    res.status(200).json({message:`contact deleted ${req.params.id}`});
})

// exporting the module from this file
module.exports = router;