const express=require('express');
const router=express.Router();
const {getAlluser,signUser,login}=require('../controllers/user-controller')



router.get("/",getAlluser);

router.post("/signup",signUser);

router.post("/login",login);


module.exports=router;