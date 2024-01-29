// importing user schema from the model User
const iUser=require("../model/User");
const crypt=require('bcryptjs');


// making http request hence it will be async function 
// middleware
const getAlluser = async(req,res,next)=>{
    // req is request 
    // res is repsononse 
    let users; // in json this name get as key 
    try {
        // mongoose have built in funciton have find() which query the data 
        users = await iUser.find();
        
    } catch (error) {
        console.log(err);
        
    }
    
    // user not found 
    if(!users){
        return res.status(400).json({message : "No User found "});
    }

    // user found
    return res.status(200).json({users});
}

const signUser =async (req,res,next)=>{
    const {name , email ,password}= req.body;

    let existingUser;
    try {
        existingUser = await iUser.findOne({email});
        
    } catch (error) {
        console.log(err);
        
    }

    // checking the user already exhist 
    if (existingUser) {
        return res.status(400).json({message:"user Already Exhists! Login instead "});
        
    }
    
    // encrypting paswsword
    const hashPassword= crypt.hashSync(password);
    // creating a new user from the schema
    const user = new iUser({
        name,
        email,
        password:hashPassword,
        blogs:[] // initializing blogs empty array
    });

    try {
        // saving the data in the mongo db databse
        await user.save();  
    } catch (error) {
        console.log(error);
        
    }

    return res.status(201).json({user});


}

const login=async (req,res,next)=>{
    const {password,email} = req.body;
    let existingUser;
    try {
        // check wheather the user exhist
        existingUser= await iUser.findOne({email});
        if (!existingUser) {
            return res.status(404).json({message : "User Not Found "});
        }

        // compares with the encrypted passwrod and the existing passwrod
        const isPassworsCorrect=crypt.compareSync(password,existingUser.password);
        if(!isPassworsCorrect){
            return res.status(400).json({message:"Incorrect Password"});
        }


        // validation done 
        return res.status(200).json({message  : "Login SuccessFull"});
        
    } catch (error) {
        console.log(error);
        
    }

}

module.exports={getAlluser,signUser,login};