import userModel from "../model/user.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
class userController{
  static userRegistration = async(req,res)=>
  {
    
     const{name,email,password,date}  = req.body
    console.log(req.body)
     const user = await userModel.findOne({email : email})
     console.log(user)
     if(user)
     {
       res.send({"status" :"failed", "message":"Email already exist"})
     }
     else if(name && password && email)
     {
       // Encrypt Password
       const salt = await bcrypt.genSalt(10);
       const secPassword = await bcrypt.hash(req.body.password, salt)

        const document = new userModel(
  {
    name : name ,
    email : email,
    password : secPassword,
    date : date
  }
)  
 const result = await document.save();
 res.status(201).send({"status" :"succes", "message" :"User is registered"})    

}
else 
{
  res.send({"status" :"failed", "message":"All fields are required"})
   
}

  }

static userLogin = async (req,res)=>
{
  try{
    const {email, password} = req.body
    console.log(email + " " + password)
    
    if(email && password)
    {
      const user = await userModel.findOne({email:email})
      if(user!=null)
      {
        
       // Decrypt Password
        const isMatch = await bcrypt.compare(password, user.password)
      console.log("P"+ password + " " + user.password)
      
      if((user.email===email) && isMatch)
      {
        
      const data = 
      {
         user :
         {
            email : user.email
         }
      }
      const key  = process.env.JWT_SECRETKEY
      const token = jwt.sign(data,key,
        {expiresIn:'5d'})
console.log(token)
res.send({"status":"success","message":"User exist","token":token})
      }
      else
      {
        console.log("not match")
        res.send({"status":"failed","message":"User do not exist"})
      }
     } 
    else 
    {
      res.send({"status":"failed","message":"Not reg"})
    }   
  }
  else 
  {
    res.send({"status":"failed","message":"Provide both email & password"})
   
  }
  }
  catch(error)
  {
    res.send(error)
  }
}

}

export default userController;