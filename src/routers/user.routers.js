import { Router } from "express";
import { getServiceAct,PostServices } from "../controllers/serviceController";
import { getLoginPage, postLoginRegisterPage, postRegisterPage } from "../controllers/usercontroller";
import * as funciones from "../funtions/funtions"
import { indexTemplate } from '../view/template'

const router = Router()
const base = "/api"

router.get(`${base}/service/getServiceAct`, getServiceAct )
router.post(`${base}/service/PostServices`, PostServices )
router.get(`${base}/user/infoLog`,funciones.rutasProtegidas, getLoginPage )
router.post(`${base}/user/createUser`,postRegisterPage )
router.post(`${base}/user/login`,postLoginRegisterPage )
router.get('/',indexTemplate) 
// router.put('/user2')
// router.delete('/user3')
// router.get('/user4')

export default router