import express  from "express";
const authrouter = express.Router();

 import userController from '../controllers/userController.js';
 authrouter.post("/", userController.userRegistration);

 authrouter.post("/login",userController.userLogin)

 
//  router.get("/add", studentController.createStudent);

//  router.get("/:id", studentController.getStudentById);

//  router.put("/:id", studentController.editStudent);

//  router.delete("/:id", studentController.deleteStudent);

 export {authrouter};