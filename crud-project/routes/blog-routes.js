//  importing
const express = require("express");

// to make it middleware we have to make it router
const blogRouter = express.Router();

// Object destructuring is a feature in JavaScript that allows you to extract properties from objects and assign them to variables in a concise and convenient way. Here's a simple example:
const { getAllBlogs , newBlog,updateBlog,getById,deleteById,getByUser}=require("../controllers/blog-controller");


// all api are used here
blogRouter.get("/",getAllBlogs);
blogRouter.post("/new",newBlog);
blogRouter.put("/update/:id",updateBlog);
blogRouter.get("/:id",getById);
blogRouter.delete("/delete/:id",deleteById);
blogRouter.get('/user/:id',getByUser);


// exports
module.exports =  blogRouter;