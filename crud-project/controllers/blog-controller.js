// importing mongoose schema
// whole mongoose feature will be used from iBlog
const iBlog= require("../model/Blog");
const iUser= require("../model/User");
const mongoose= require("mongoose");

// fucntion to get all Blogs 
// here all are these known as middleware
const getAllBlogs = async(req,res,next)=>{
    let blogs; // getting blogs from the query
    try {
        // empty query
        // give all elements
        blogs=await iBlog.find(); 
    } catch (error) {
        return console.log(error);
    }
    // empty blogs 
    if (!blogs) {
        return res.status(404).json({
            message:"No blogs Found "
        }); 
    }
    // return blogs 
    return res.status(201).json({
        blogs
    })
}

// we give a userid in user 
const newBlog=async (req,res,next)=>{
    // getting the data from the body section of api
    const { title ,description,image,user} = req.body;

    // let exhisting user validation
    let exhistinguser;
    try{
        // query based on userId
        exhistinguser = await iUser.findById(user);
    }catch(err){
        console.log(err);
    }

    // no user found with such userId
    if(!exhistinguser){
        return res.status(400).json({
            message:"Unable to Find User By this id"
        });
    }

    // a new bog object is created from the schema
    const blog=new iBlog({
        title,
        description,
        image,
        user // only storing userId
    });

    try {
        // saving the data in to the mogodb server
        const session = await mongoose.startSession();
        session.startTransaction();
        await blog.save({session});  
        exhistinguser.blogs.push(blog);
        await exhistinguser.save({session});
        await session.commitTransaction();
    } catch (error) {
        console.log(error);  
        return res.status(500).json({message:error});
    }
    return res.status(200).json({blog});
}

// id is the blog id 
const updateBlog=async (req,res,next)=>{

    const id=req.params.id; // getting id from the user as router parameter
    const {title ,description} = req.body; // getting information from the router
    let blog;
    try {
        // updating the object by finding id and then updation 
        blog=await iBlog.findByIdAndUpdate(id,{
            title,
            description
        });
        
        //  finding the new bog with thte updated version
        blog=await iBlog.findById(id);
    } catch (error) {
        console.log(error);
        
    }

    if(!blog){
        return res.status(500).json({message:"Unable to Update"});
    }

    return res.status(200).json({blog});

}


// getting  the blog from the particular user by passing the blog id
const getById = async (req,res,next)=>{
    // passing the blog id as in the api route 
    const id = req.params.id;
    let blog;
    try {
        blog = await iBlog.findById(id);
    } catch (error) {
        console.log(error);
        
    }
    if(!blog){
        return res.status(400).json({message:"Not Found"});
    }

    return res.status(201).json({message:blog});

}


// deleting the blog by requesting blog id 
const deleteById= async (req,res,next)=>{
    // it is blog id 
    const id= req.params.id;

    let blog;
    try {
        // populate function is used to get the data from the object refrence object id 
        // so blog have userid in parameter user so we populate so 'user'
        blog=await iBlog.findOneAndDelete(id).populate('user');
        await blog.user.blogs.pull(blog);// deleting the blog from the array list blogs
        await blog.user.save();// user get saved 
    } catch (error) {
        console.log(err);
        
    }


    if(!blog){
        return res.status(500).json({
            message:"Unable to Delete"
        });
    }

    return res.status(201).json({
        status:"Deleted",
        message:blog 
    })
}


// middleaware to get the bogs of particular user 
const getByUser = async (req,res,next) => {
    // it is user id get from the api route 
    const userId=req.params.id;
    let userBlogs;
    try {
        // so in the schema we have blogs list of objectId of blogs collection in the blogs field so field name is blogs 
        // we need to poluate the objectid to get data 
        userBlogs =  await iUser.findById(userId).populate("blogs");

    } catch (error) {
        return console.log(error);
    }

    if(!userBlogs){
        return res.status(404).json({message : "No Blog found"});
    }


    return res.status(201).json({userBlogs});
}


// exporting the modules
// By using the curly braces around these identifiers within the module.exports statement, you are creating an object with properties where the property names are the same as the identifiers (getAllBlogs, newBlog, etc.), and their values are the corresponding functions or values.
module.exports={getAllBlogs,newBlog,updateBlog,getById,deleteById,getByUser};