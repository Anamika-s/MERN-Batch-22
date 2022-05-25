import express from "express";
const router = express.Router();
import {homeController} from '../controllers/homeController.js'
import {contactController} from '../controllers/contactController.js'
import {employeeController} from '../controllers/employeeController.js'

import {addController} from '../controllers/addController.js'
import { registationController } from "../controllers/registrationController.js";
import {saveDataController} from '../controllers/savedataController.js'
// router.get('/', (req,res)=>
// {
//   res.send("This is home page")
// })

router.get("/", homeController)
router.get("/contact", contactController)
router.get("/data" , employeeController)
router.post('/saveForm', addController)
router.get('/register', registationController)
router.post('/handleForm', saveDataController)


export default router
