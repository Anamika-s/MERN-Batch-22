import express from "express";
import web from "./routes/web.js"
import myLogger from "./middlewares/logger-middleware.js";

import myLogger2 from "./middlewares/myLogger2.js";
import route from './routes/student.js';
import cookieParser from "cookie-parser";
import cookierouter from "./routes/cookieroutes.js";
import sessionrouter from "./routes/sessionroutes.js";

import session from "express-session";
const app = express();



const port =  3000;
app.set("view engine","ejs");

// Cookie Parser
app.use(cookieParser())
// Session Middleware
app.use(session(
  {
    name:"SessionId",
 secret:"thisissecretkey",
 resave:true,
 saveUninitialized:true
//  cookie:{maxAge:2000}
  }
))
// Custom Middleware 
// app.use(function(req,res,next)
// {
//  console.log("Logged");
//  next();
// })
// Application Level Middleware
// app.use(myLogger);
app.use("/about", myLogger2)
app.use("/", web)
app.use("/",route)
app.use("/", cookierouter)
app.use("/", sessionrouter)
app.listen(port , ()=>
{
  console.log(`server is listening at ${port}`)
})