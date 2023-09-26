const express=require('express')
const router=express.Router();
const User=require('../models/User')
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken')
const emailValidator=require('email-validator');
const fetchUser=require('../middleware/fetchUser')

const JWT_SECRET="Shripoojar"
//----------------------------------------------Create user using  POST: "/api/auth". Doesnt require auth--------------------------------------------
router.post('/createuser',async (req,res)=>{

    const{name,email,password}=req.body;

     console.log(req.body);

    
     // rejecting if user doesnt enter password or email or name

    if(!name || !email || !password)
    {
        return res.status(400).json({
            success:"false",
            message:"Every Field is required"
        })
    }
    // rejecting invalid email
     var validEmail=emailValidator.validate(email);
     if(!validEmail){
        return res.json({
            success:"false",
            message:"Plzz provide validemail"
        })
     }
     else
     {

   const salt=  await bcrypt.genSalt(10) // generates a salt
    secPass=  await bcrypt.hash(req.body.password,salt) 

    // create user
      
    try
    {
       const user=await  User.create({
        name:req.body.name,
        password:secPass,
        email:req.body.email
       })
        console.log("Successfuly saved");
        res.status(200).json({success:true,message:"User Created"})
         
    }
   catch(e)
   {
    console.log(e);
    res.status(400).json({
      success:false,
      message:e.message
    })
     
  }
}
// generating jwt token


  const user=  await User.findOne({name:req.body.name})
  const data={
    user:{
      id:user.id
    }
  }
  const authtoken=jwt.sign(data,JWT_SECRET)
   res.json(authtoken);
     

})


//------------------------------------------------ Authenticate user using login :POST "/api/auth/login"-------------------------------------

router.post('/login',async(req,res)=>{
   const {email,password}=req.body;

     // rejecting if user doesnt enter password or email
        if(!email ||!password)
        {
          return res.status(400).json({
            success:"false",
            message:"Every Field is required"
        })
        }
  

        // rejecting if email is invalid
        var validEmail=emailValidator.validate(email);
        if(!validEmail){
           return res.status(400).json({
               success:"false",
               message:"Plzz provide validemail"
           })
        }
        try{
          let user=await User.findOne({email})
          if(!user)
          {
            return res.status(400).json({success:false,error:"Credentials are Not Mactching"})
          }
          const passwordCompare= await bcrypt.compare(password,user.password)
          if(!passwordCompare)
          {
            return res.status(400).json({ success:false,error:"Credentials are Not Mactching"})
          }
          const data={
            user:{
              id:user.id
            }
          }
          const authtoken=jwt.sign(data,JWT_SECRET)
          
           res.json({success:true,authtoken:authtoken});
        }  catch(e)
        {
         console.log(e);
         res.status(500).json({
           success:false,
           message:e.message
         })
          
       }

})


// getting logged in user details POST :/api/auth/getuser ---------------------------------------------------------------------------------------
router.post('/getuser',fetchUser,async(req,res)=>
{
  try{
   const userId=req.user.id;
   const user=await User.findById(userId).select("-password")
   res.send(user);
  }
  catch(e){
    console.log(e.message);
    res.status(500).send("Internal Sever Error")

  }
}
 
)


module.exports=router
