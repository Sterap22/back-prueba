import { getConnection, sql } from '../database/conection'
import { querys } from "../database/querys.js";
import jwt from 'jsonwebtoken';
import config from "../config.js";
import  * as funciones from "../funtions/funtions"

export const postLoginRegisterPage = async (req, res) =>{
    const { correo, clave } = req.body
    try {
        const pool = await getConnection()
        const result = await pool.request()
        .input("user", sql.VarChar, correo)
        .input("clave", sql.VarChar,clave)
        .query(querys.getInicioSession);
        console.log(result);
        if(result.rowsAffected !== 0){
            const token = jwt.sign({idUsuario:result.recordset.id},
                config.jwtSecret,{
                expiresIn: config.jwtExpire
            });
            return res.json({status:202,data: result.recordset, token: token });
        }
        else{
           return res.json({status:204,data:"Tu número de documento y contraseña no coinciden, Verifica tus datos e intenta nuevamente."});
        }  
    } catch (error) {
        return res.json({status:400,data: error.message});
    }
}