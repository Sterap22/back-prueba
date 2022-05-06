import { Router } from "express";
import { postLogLat } from "../controllers/mapcontroller";
import { getServiceAct,PostServices } from "../controllers/serviceController";
import { getLoginPage, postLoginRegisterPage, postRegisterPage } from "../controllers/usercontroller";
import * as funciones from "../funtions/funtions"
import { indexTemplate } from '../view/template'

const router = Router()
const base = "/api"
//service
router.get(`${base}/service/getServiceAct`,funciones.rutasProtegidas ,getServiceAct )
router.post(`${base}/service/PostServices`,funciones.rutasProtegidas, PostServices )
//map
router.post(`${base}/map/postMap`, postLogLat )
//user
router.get(`${base}/user/infoLog`,funciones.rutasProtegidas, getLoginPage )
router.post(`${base}/user/createUser`,postRegisterPage )
router.post(`${base}/user/login`,postLoginRegisterPage )
router.get('/',indexTemplate) 
// router.put('/user2')
// router.delete('/user3')
// router.get('/user4')

export default router