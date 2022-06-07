import userModel from "../model/user.js";
import {body, validationResult} from "express-validator"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"; 

class userController
{
//    static getAllStudents = async (req, res)=>
// {
//   try{
//       const result = await  studentModel.find();
//       res.send(result);
//   }
//   catch(error)
//   {
//     res.send(error);
//   }
//   // res.send("Get All Students");
// }


// static getStudentById = async (req, res)=>
// { 
// try{
//   const result =  await studentModel.findById(req.params.id);
//   res.send(result);
// }
// catch(error)
// {
// res.send(error)
// }

// }

//  key ="thisissecertkey";

static userRegistration = async(req, res)=>
{
 
  //  res.render("index");
  console.log("Inside insert")
  
   
  // try{
  const {name , password ,email, date } =  req.body;  
 console.log(email)
  const user = await userModel.findOne({email: email})
  console.log(user)
  if(user)
  {
    res.send({"status":"failed","message":"Email already exists"})
  }
    else if(name && email && password && date)
      {
        const salt = await bcrypt.genSalt(10);
        const secPassword = await bcrypt.hash(req.body.password, salt)
        const document =new userModel(
          {
            name : name,
            email: email,
            password: secPassword,
            date : date
          }
        )
        const data = {
          user :{
            email:document.email
          }
        }
        const token = jwt.sign(data , process.env.key, {expiresIn :'5d'})
        console.log(token);
        console.log(document) 
        const result = await document.save();
        res.status(201).send({"status":"success","message":"Reg success", "token":token})
       }
  
    else 
    {
      res.send({"status":"failed","message":"All fiels already exists"})
  }

  // }
  // catch(error)
  // {
  //   console.log("THER II S S S S WRROE")
  //   res.send(error)
  // }
}


// static editStudent = async (req, res)=>
// {
//   try{
//  const result = await studentModel.findByIdAndUpdate(req.params.id, req.body);
//  res.send(result);
//   }
// catch(error)
// {
//   res.send(error);
// }
// }


// static deleteStudent = async (req, res)=>
// { 
//   try{
 
//          const result  = await studentModel.findByIdAndDelete(req.params.id);
//          res.status(204).send(result);
//   }
//   catch(error)
//   {
//     res.send(error)
//   }
// }

static userLogin = async (req,res)=>
{
  try{
 const {email,password} = req.body;
 console.log(email +" " + password);
 if(email && password)
 {
   const user = await userModel.findOne({email:email})
    if(user!=null)
{
console.log("Maik is "+ user.email)
  const isMatch = await bcrypt.compare(password, user.password)

  //console.log(isMatch)
  if((user.email === email) && isMatch)
  {
   console.log("matched")
    // Gen token
    const data = {
      user :{
        email:user.email
      }
    }
    console.log(data)

 console.log("first")

 console.log("k is " + process.env.key)
const token = jwt.sign(data , process.env.key, {expiresIn :'5d'})
     res.send({"status":"Success", "message":"logi succ","token":token});
  }
  else 
  {
    res.send("do not match")
  }
}
else 
{
  res.send("Not reg")
}
  }
 else 
 {
   res.send("all fiels req")
 }

  }
  catch(error)
  {
    res.send(error)
  }
}
}
export default userController;