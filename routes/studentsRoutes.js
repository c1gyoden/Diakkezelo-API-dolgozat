import {Router} from "express"
import * as controller from "../controllers/studentsController.js"

const router = Router()

router.get("/", controller.GetAllStudents);

router.get("/:id", controller.GetStudent);

router.post("/", controller.AddStudent);

router.put("/:id", controller.ReplaceStudent);

export default router