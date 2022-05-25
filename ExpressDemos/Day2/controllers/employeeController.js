const  employeeController = (req,res,next)=>
{
  res.send("<form method='post' action='/saveForm'> <input type='text' required name='name'/>  <input type='text' name='email' required/> <button type='submit'> Submit </button></form>")
}
export {employeeController}