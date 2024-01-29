const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const blogSchema = new Schema({
    title : {
        type : String,
        required :  true
    },
    description : {
        type: String,
        required:  true
    },
    image : {
        type :String,
        required : true
    },
    user : {
        type : mongoose.Types.ObjectId,
        // mongoose.model('ModelName', schema) here Modelname should be given
        ref:"User",
        required:true
    }

});
/*
Export Default: This line is exporting the result of calling mongoose.model("Blog", blogSchema). Here's what it does:

mongoose.model: This method creates a Mongoose model using the provided schema. It takes two arguments:

The first argument is the singular name of the collection (in this case, "Blog"). Mongoose will automatically pluralize this to create the collection name in MongoDB.
The second argument is the schema (in this case, blogSchema).
The result of mongoose.model("Blog", blogSchema) is a Mongoose model for the "Blog" collection, based on the specified schema.

export default: This keyword is used to export the created model as the default export from the module. It means that when another module imports this module, it will receive the model for the "Blog" collection by default.*/

// Blog here used as reference in user
const myBlog= mongoose.model("Blog",blogSchema);
module.exports = myBlog;