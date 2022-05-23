import express from "express";
import config from "./config";
import cors from 'cors';

import userRaouter from "./routers/user.routers"
import prodRourter from "./routers/prod.routers"

const app = express()
app.set('port', config.port)
app.use(express.json())
app.use(express.urlencoded({ extended: false })) 
app.use(userRaouter)
app.use(prodRourter)

export default app;