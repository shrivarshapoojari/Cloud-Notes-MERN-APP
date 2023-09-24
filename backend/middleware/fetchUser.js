var jwt =require('jsonwebtoken')

const JWT_SECRET="Shripoojar"
const fetchUser=(req,res,next)=>{

// get user id from jwt token and append id to req

const token=req.header('auth-token')
if(!token){
    res.status(401).send({error:"invalid token"})



}
try{
const data=jwt.verify(token,JWT_SECRET)
req.user=data.user;
 next();

}
catch(e){
    res.status(401).send({error:"invalid token"})

}


}



module.exports=fetchUser;