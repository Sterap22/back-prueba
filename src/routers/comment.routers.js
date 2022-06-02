import { Router } from "express"
import { indexTemplate } from "../view/template"
import * as funciones from "../funtions/funtions"
import { getComment, postComment } from "../controllers/comentcontroller"

const router = Router()
const base = "/api"
router.post(`${base}/comment/add`, funciones.rutasProtegidas ,postComment )
router.get(`${base}/comment/get`, funciones.rutasProtegidas ,getComment )
router.get('/',indexTemplate) 

export default router