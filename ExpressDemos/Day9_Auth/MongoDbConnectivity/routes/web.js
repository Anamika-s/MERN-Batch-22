import express  from "express";
const router = express.Router();

import studentController
 from "../controllers/studentController.js";

 router.get("/", studentController.getAllStudents);

 
 router.get("/add", studentController.createStudent);

 router.get("/:id", studentController.getStudentById);

 router.put("/:id", studentController.editStudent);

 router.delete("/:id", studentController.deleteStudent);

 export default router;