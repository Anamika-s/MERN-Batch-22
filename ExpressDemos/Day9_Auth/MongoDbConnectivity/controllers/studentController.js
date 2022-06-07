import studentModel from "../model/student.js";

class studentController
{
   static getAllStudents = async (req, res)=>
{
  try{
      const result = await  studentModel.find();
      res.send(result);
  }
  catch(error)
  {
    res.send(error);
  }
  // res.send("Get All Students");
}


static getStudentById = async (req, res)=>
{ 
try{
  const result =  await studentModel.findById(req.params.id);
  res.send(result);
}
catch(error)
{
res.send(error)
}

}


static createStudent =  async  (req, res)=>
{
  //  res.render("index");
  console.log("Inside insert")
  try{
  const {name , age ,fees } =  req.body;
  const document =new studentModel(
    {
      name : name,
      age : age,
      fees: fees
    }
  )
  console.log(document.name + " " + document.age + " " + document.fees);
     const result = await document.save();
     res.status(201).send(result)
  }
  catch(error)
  {
    res.send(error)
  }
}


static editStudent = async (req, res)=>
{
  try{
 const result = await studentModel.findByIdAndUpdate(req.params.id, req.body);
 res.send(result);
  }
catch(error)
{
  res.send(error);
}
}


static deleteStudent = async (req, res)=>
{ 
  try{
 
         const result  = await studentModel.findByIdAndDelete(req.params.id);
         res.status(204).send(result);
  }
  catch(error)
  {
    res.send(error)
  }
}
}
export default studentController;