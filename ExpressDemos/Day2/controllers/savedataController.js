const saveDataController = (req,res)=>
{
  console.log("INside save")
res.send(req.body)
}

export {saveDataController}