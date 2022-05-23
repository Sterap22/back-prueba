import { Router } from "express";
import { postLoginRegisterPage } from "../controllers/usercontroller";
import * as funciones from "../funtions/funtions"
import { indexTemplate } from '../view/template'

const router = Router()
const base = "/api"
router.post(`${base}/user/login`,postLoginRegisterPage )
router.get('/',indexTemplate) 

export default router