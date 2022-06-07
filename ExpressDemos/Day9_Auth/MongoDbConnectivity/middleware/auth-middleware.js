import jwt from "jsonwebtoken"

import userModel from "../model/user.js"

var authenticateUser = async(req,res,next)=>{
  let token
  const {authorization} = req.headers

  if(authorization && authorization.startsWith("Bearer"))
  {
    try{
 token  = authorization.split(' ')[1]
 console.log(token)
 const data = {
   user : {
     email : req.body.email
   }
 }
    const {email} = await jwt.verify(token, process.env.key,{expiresIn:'5d'})
req.user = await userModel.findOne({email:email})
next()

    }
    catch(error)
    {
   res.status(401).send({"status":"failed","message":"Not ver"})
    }
  }
  if(!token)
  {
    res.status(401).send({"status":"failed","message":"There is no token"})
    
  }
}

export default authenticateUser