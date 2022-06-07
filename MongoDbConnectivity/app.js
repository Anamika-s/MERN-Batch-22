import express from "express";

import connectDb from './connectDb.js';
import {join} from "path";
import web from './routes/web.js';
import{ authrouter } from './routes/auth.js';
import dotenv from 'dotenv'
dotenv.config()
const port = 3000;
var app = express();

app.use(express.json());
// const databaseUrl ="mongodb+srv://user:password123567@cluster0.ulbwxcb.mongodb.net/practiceDb?retryWrites=true&w=majority";

app.use("/api", web);
app.use("/api/user",authrouter );

const databaseUrl ="mongodb://localhost:27017";
// app.set("views" ,"/views");

app.set("view engine" ,"ejs");
app.use(express.static(join(process.cwd(), "public")));

connectDb(databaseUrl);
app.listen(port, ()=>
{
  console.log(`Connected at ${port}`);
})