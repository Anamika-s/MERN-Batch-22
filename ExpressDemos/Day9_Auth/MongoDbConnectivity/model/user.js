import mongoose from "mongoose"
const userSchema = mongoose.Schema({
   name :{
     type: String,
     required:true
   },

   email :{
    type: String,
    required:true,
    unique: true
  },

  password :{
    type: String,
  required:true
  },
  date :
   
  {
    type:Date,
    default:Date.now
  }
})

const userModel = mongoose.model("user", userSchema);

export default userModel;