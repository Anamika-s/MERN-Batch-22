import express from "express";
import connectDb from './connectDb.js';
import {join} from "path";
import web from './routes/web.js';
import authroute from "./routes/auth.js";
import dotenv from 'dotenv';
import authenticateUser from './middleware/auth-middleware.js'

//const port = 3000;
var app = express();

dotenv.config();

const port = process.env.PORT
// console.log(port)
app.use(express.json());
// const databaseUrl ="mongodb+srv://user:password123567@cluster0.ulbwxcb.mongodb.net/practiceDb?retryWrites=true&w=majority";

app.use("/api",  web);
//Public Route
app.use("/api/user", authroute)
// console.log(process.env.DATABASE_URL)
const databaseUrl = process.env.DATABASE_URL
// console.log(databaseUrl)
// const databaseUrl ="mongodb://localhost:27017";
// app.set("views" ,"/views");

app.set("view engine" ,"ejs");
app.use(express.static(join(process.cwd(), "public")));

connectDb(databaseUrl);
app.listen(port, ()=>
{
  console.log(`Connected at ${port}`);
})