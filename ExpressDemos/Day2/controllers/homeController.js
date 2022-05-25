const homeController = (req,res)=>
{
  res.send("This is Home Page")
  // res.render('index')
//  res.render('index' , {'name':'Ajay'})
// res.render("index1" ,{ title: 'Hey', message: 'Hello there!'}

}
export {homeController}

