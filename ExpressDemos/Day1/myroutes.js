const express = require("express");

var myroute =express.Router();

myroute.get("/" ,  (req, res)=>
{
 res.send("This is new home page");
})
myroute.get("/users/:id" ,  (req, res)=>
{
  console.log(req.params)
 res.send("This is new home page");
})

myroute.post("/" , (req,res) =>
{
   res.send("Data is submitted")

})

myroute.all("/allmethods" , (req,res)=>
{
  res.send("HANDLING EVERYHING")
})

// Chained Route Callback
 
// route.get("/student", (req,res)=>
// {

// });


// route.post("/student", (req,res)=>
// {

// });
// myroute.route("/student")
// .all((req,res,next)=>
// {
//  res.send("First Call this Method")
//   next()
// })
// .get((req,res,next)=>
// {
//   console.log("Get Method ")
//   res.send("Get Method")
//   next()
// })
// .post((req,res)=>
// {
  
//   console.log("Post Method ")
// // res.send("Added new Student")
// })
// .put((req,res)=>
// {
  
//   console.log("Put Method ")
//   // res.send("Student record edited")
// })

module.exports = myroute