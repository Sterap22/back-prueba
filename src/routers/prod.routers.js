import { Router } from "express";
import { getProd, postCreateProd } from "../controllers/prodController";
import * as funciones from "../funtions/funtions"
import { indexTemplate } from '../view/template'

const router = Router()
const base = "/api"
// router.get(`${base}/user/infoLog`,funciones.rutasProtegidas, getLoginPage )
router.post(`${base}/producto/crearProducto`, funciones.rutasProtegidas ,postCreateProd )
router.get(`${base}/producto/traer`, getProd )
router.get('/',indexTemplate) 

export default router