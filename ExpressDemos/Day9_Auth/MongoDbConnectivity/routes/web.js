import express  from "express";
import authenticateUser from "../middleware/auth-middleware.js";
const router = express.Router();

import studentController
 from "../controllers/studentController.js";

 router.get("/", authenticateUser, studentController.getAllStudents);

 
 router.get("/add", studentController.createStudent);

 router.get("/:id", studentController.getStudentById);

 router.put("/:id", studentController.editStudent);

 router.delete("/:id", studentController.deleteStudent);

 export default router;