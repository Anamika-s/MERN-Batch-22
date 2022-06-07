import jwt from "jsonwebtoken"
import userModel from '../model/user.js';

var chekUser = async(req,res,next)=>
{
  let token
  const {authorization} = req.headers
  if(authorization && authorization.startsWith('Bearer'))
  {
    try{
token =  authorization.split(' ')[1]
console.log("Token " + token)
console.log("Auth " + authorization)
const data = {
  user :{
    email:req.body.email
  }
}
console.log("d " + data)

console.log("first")
console.log(process.env.key)
const {email} = jwt.verify(token,process.env.key)
// console.log("email is " + email)
req.user = await userModel.findOne({email:email})

console.log(req.user)
next()
}
    catch(error)
    {
      res.status(401).send({"status":"fail","message":"auautho"})
    }
  }
  if(!token)
  {
    res.status(401).send({"status":"fail","message":"No token"})
  }
}

export default chekUser;