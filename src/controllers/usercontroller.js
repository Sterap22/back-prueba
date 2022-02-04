import { getConnection, sql } from '../database/conection'
import { querys } from "../database/querys.js";
import jwt from 'jsonwebtoken';
import config from "../config.js";
import  * as funciones from "../funtions/funtions"

const nodemailer = require("nodemailer");

export const getLoginPage = async (req, res)=>{
    const pool = await getConnection()
    const result = await pool.request()
    .query('select * from InfoUser');
    console.log(result)
    res.json(result.recordset)
}; 

export const postRegisterPage = async (req, res) =>{
    const {name, lastName, typeId, nit, mail, pass, numPhone, userType} = req.body
    console.log(req.body);
    try {
        const pool = await getConnection()
        const result = await pool.request()
        .input("name", sql.VarChar, name)
        .input("lastName", sql.VarChar,lastName)
        .input("typeId", sql.Int,typeId)
        .input("nit", sql.VarChar,nit)
        .input("mail", sql.VarChar,mail)
        .input("pass", sql.VarChar,pass)
        .input("numPhone", sql.VarChar,numPhone)
        .input("userType", sql.Int,userType)
        .query(querys.postRegisterUser);
        if(result.rowsAffected !== 0){
            const pool2 = await pool.request().input("id", sql.Int, 1).query(querys.getPlantilla);
            let htmlMail = pool2.recordsets[0][0]["code"]
            let r = Math.floor(Math.random() * (99999999 - 11111111))
            htmlMail = htmlMail.replace(/12345678/g,r)
            htmlMail = htmlMail.replace(/#usuario/g,name)
            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false,
                auth: {
                  user: 'moveappinfo@gmail.com',
                  pass: 'moveAdmin2022*',
                },
              });
              let info = await transporter.sendMail({
                from: 'moveappinfo@gmail.com',
                to: mail,
                subject: "Autenticación de cuenta",
                html: htmlMail,
              });
              res.json(funciones.getMensaje(202,result));
        }else{
            res.json("Usuario no pudo ser creado");
        }

    } catch (error) {
        return res.json(funciones.getMensaje(400,error.message));
    }
}
export const postLoginRegisterPage = async (req, res) =>{
    const { user, pass } = req.body
    try {
        const pool = await getConnection()
        const result = await pool.request()
        .input("user", sql.VarChar, user)
        .input("pass", sql.VarChar,pass)
        .query(querys.getInicioSession);
        const id = result.recordset[0]['id']
        if(result.rowsAffected !== 0){
            const token = jwt.sign({idUsuario:id},
                config.jwtSecret,{
                expiresIn: config.jwtExpire
            });
            res.json({data: result.recordset, token: token });
        }
        else{
            res.json(funciones.getMensaje(204,"Tu número de documento y contraseña no coinciden, Verifica tus datos e intenta nuevamente.",""));
        }  
    } catch (error) {
        return res.json(funciones.getMensaje(400,error.message));
    }
}