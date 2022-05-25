export function list(req,res)
{
  res.json([]);
}

export function create(req,res)
{
  const {title, body} = req.body;
  console.log(`${title} and ${body} received`)
  res.send("ok")
}

export function read(req,res)
{
  const {id} = req.params;
 res.json({id , title:"aa" , body:"body"});
  
}



