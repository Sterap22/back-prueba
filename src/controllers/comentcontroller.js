import { getConnection, sql } from '../database/conection'
import { querys } from "../database/querys";

export const postComment = async (req, res) =>{
    const { comment, idusuario} = req.body
    try {
        const pool = await getConnection()
        const result = await pool.request()
        .input("comment", sql.VarChar, comment)
        .input("idusuario", sql.Int, idusuario)
        .query(querys.postRegistrarComentario);
        if(result.rowsAffected !== 0){
            return res.json({status:202,data: result.recordset});
        }
        else{
           return res.json({status:204,data:"Tu comentario no pudo ser guardado"});
        }  
    } catch (error) {
        return res.json({status:400,data: error.message});
    }
}

export const getComment = async (req, res) =>{
    try {
        const pool = await getConnection()
        const result = await pool.request()
        .query(querys.getComentario);
        if(result.rowsAffected !== 0){
            return res.json({status:202,data: result.recordset });
        }
        else{
           return res.json({status:204,data:"Tu comentario no pudo ser guardado"});
        }  
    } catch (error) {
        return res.json({status:400,data: error.message});
    }
}