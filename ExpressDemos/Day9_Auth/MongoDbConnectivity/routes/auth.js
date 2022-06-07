import express  from "express";
const authrouter = express.Router();

import userController
 from "../controllers/userController.js";

 authrouter.post("/register", userController.
 userRegistration)

 authrouter.post("/login", userController.
 userLogin)

  
 export default authrouter;