import mongoose from "mongoose";
const studentSchema =mongoose.Schema(
  {
name:{type:String, required:true},
age:{type:Number, required:true},
fees:{type:mongoose.Decimal128, required:true,
validate:(value)=>
value > 5000.0}
  }
)

const studentModel = mongoose.model("student", studentSchema);

export default studentModel;