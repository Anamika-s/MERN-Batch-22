const addController = (req,res,next)=>
{
  console.log(req.body)
  
// res.send(req.body)
res.send("Name : " + req.body.name + "Email :" + req.body.email)

}

export {addController}