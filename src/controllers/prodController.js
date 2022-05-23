import { getConnection, sql } from '../database/conection'
import { querys } from "../database/querys.js";
import config from "../config.js";
import  * as funciones from "../funtions/funtions"

export const postCreateProd = async (req, res) =>{
    const { titulo, descripcion, img } = req.body
    try {
        const pool = await getConnection()
        const result = await pool.request()
        .input("titulo", sql.VarChar, titulo)
        .input("descripcion", sql.VarChar,descripcion)
        .input("imagenes", sql.VarChar,img)
        .query(querys.postProducto);
        if(result.rowsAffected !== 0){
            return res.json({status:202,data: result.recordset});
        }
        else{
           return res.json(funciones.getMensaje(204,"no se pudo crear el producto",""));
        }  
    } catch (error) {
        return res.json(funciones.getMensaje(400,error.message));
    }

}
export const getProd = async(req, res) =>{
    try {
        const pool = await getConnection()
        const result = await pool.request()
        .query(querys.getProductos);
        if(result.rowsAffected !== 0){
            return res.json({status:202,data: result.recordset});
        }
        else{
           return res.json({status: 204,data:"no se encontro ningun producto"});
        }  
    } catch (error) {
        return res.json(funciones.getMensaje(400,error.message));
    }
}