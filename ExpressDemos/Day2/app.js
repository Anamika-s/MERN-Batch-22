import express from "express";
import path from "path"
import web from './routes/web.js'
import bodyparser from 'body-parser'
const app = express()
const port = 3000
app.use(bodyparser.urlencoded({extended:true}))
// app.use(bodyparser.json())
// Setup the directory where template files
// will be stored
 
app.set('views','./views')

// Setup  the templete engine to be used

// app.set('view engine' ,'ejs')
app.set('view engine', 'pug')

// // Load Routes
app.use("/", web)

const __dirname = path.resolve()
// app.get("/", (req,res)=>
// {
//   console.log(__dirname)
//   // res.send("Hello All")

//    res.sendFile(path.join(__dirname+'/views/' + 'index.html'))
// })

app.get("/contact", (req,res)=>
{
  // res.send("<h1> Contact Page </h1>")
  res.sendFile(path.join(__dirname+'/views/' + 'contact.html'))
})

app.listen(port, ()=>
{
  console.log(`Application is lisetening at ${port}`)
})
