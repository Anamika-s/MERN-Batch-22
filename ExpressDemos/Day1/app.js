const express = require("express");
var app = express();
const port = 3000;

var myroutes = require("./myroutes.js");
app.use("/api", myroutes)
// HTTP Verbs
// get 
// post put delete 

// Syntax
//app.get(route, callback)
 
// app.get("/" ,  function(req, res)
// {
//  console.log("Hello World");
//  res.send();
// })

// app.get("/" ,  function(req, res)
// {
//  res.send("This is home page");
// })

// app.get("/" ,  (req, res)=>
// {
//  res.send("This is new home page");
// })

// app.post("/" , (req,res) =>
// {
//    res.send("Data is submitted")

// })

// app.all("/allmethods" , (req,res)=>
// {
//   res.send("HANDLING EVERYHING")
// })
// // Strings
// app.get("/about" , (req,res)=>
// {
//   res.send("About Page")
// })

// app.get("/contact" , (req,res)=>
// {
//   res.send("Contact Page")
// })

// // String Patterns

// app.get('/ab?cd', (req,res)=>
// {
//   res.write("Line1")
//   res.write("line2")
//   res.send();
// })

// // Regular Expression
// // app.get(/a/, (req,res)=>
// // {
// //   res.send("This is handled by this method")
// // })

// // More than 1 Callback Methods

// app.get("/multiple", (req,res,next)=>
// {
//  console.log("Write some logic here")
//  next()
// }, (req,res)=>
// {
//  console.log("2nd Callback")
//  res.send("2 More than 1 Callback")
// })

// // An array of callbacks
// const cb1 = (req,res,next)=>{
//   console.log("First Callback")
// next()
// }

// const cb2 = (req,res,next)=>{
//   console.log("Second Callback")
// next()
// }

// const cb3 = (req,res,next)=>{
//   console.log("Third Callback")
//   // res.send("An Array of callbacks")
//   next()
// }

// app.get("/arrayofcallbacks", [cb1, cb2,cb3]);

// // Combination of Independent Functions & Array of Functions

// app.get("/combination", [cb1,cb2,cb3], (req,res,next)=>
// {
//  console.log("4th Callback")
//  next()
// }, (req,res)=>
// {
//   console.log("5th Callback")
//   res.send("Combination of Array of Callbacks & separate callbacks")
// })


// // If there is no matching route
// app.all("*", (req,res)=>
// {
//   res.send("No page")
// })







app.listen(port , ()=> { console.log(`listening at port no ${port}`)});








