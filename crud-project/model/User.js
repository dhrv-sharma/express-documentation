// importing mongoose
const mongoose = require('mongoose');
// schema
const schema = mongoose.Schema; // importing schema


// creating a new schema it is just like a class 
const userSchema = new schema({
    // name email and password are the field
    //  name here given will bes also saved as in database
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true

    },
    password: {
        type: String,
        required: true,
        minlength: 6

    },
    // each user have multiple blog but one blog can be of 
    blogs: [
        {
            /*
            type: mongoose.Types.ObjectId: This specifies the data type for each element in the array. In this case, each element is expected to be a MongoDB ObjectId. ObjectIds are unique identifiers automatically generated by MongoDB for each document.

ref: "Blog": This is specifying that the ObjectId references another Mongoose model named "Blog". This establishes a relationship between the documents in the "blogs" array and the documents in the "Blog" model. It's a way of linking documents in different collections.
            */
            type: mongoose.Types.ObjectId,
            // mongoose.model('ModelName', schema) here Modelname should be given
            ref: "Blog",
            required: true
        }
    ]
});


// exporting the collection
// naming convention first letter capital and must be singular then at end mongoose it automatically becomes plural
// here User will be named in the collection as users
// here User is used as ref
const myUser = mongoose.model("User", userSchema);// in the data base it store as users
module.exports = myUser;