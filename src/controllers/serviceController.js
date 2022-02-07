import { getConnection, sql } from '../database/conection'
import { querys } from "../database/querys.js";
import jwt from 'jsonwebtoken';
import config from "../config.js";
import  * as funciones from "../funtions/funtions"


export const getServiceAct = async (req, res)=>{
    const pool = await getConnection()
    const result = await pool.request()
    .query((querys.getServices));
    res.json({status:202,data:result.recordset});
}; 

export const PostServices = async (req, res) =>{
    const { Origen, Destino, horaservicio, assistant, Inventory, pack, unpack,valor,idconductor,vigente,iduser} = req.body
    try {
        const pool = await getConnection()
        const result = await pool.request()
        .input("nameService", sql.VarChar, 'nameService')
        .input("Origen", sql.VarChar,Origen)
        .input("Destino", sql.VarChar,Destino)
        .input("horaservicio", sql.DateTime,horaservicio)
        .input("assistant", sql.VarChar,assistant)
        .input("Inventory", sql.Bit,parseInt(Inventory))
        .input("pack", sql.Bit,parseInt(pack))
        .input("unpack", sql.Bit,parseInt(unpack))
        .input("valor", sql.VarChar,valor)
        .input("idconductor", sql.Int,parseInt(idconductor))
        .input("vigente", sql.Bit,parseInt(vigente))
        .input("idUser", sql.Int,parseInt(iduser))
        .query(querys.PostServices);
        console.log(result.recordsets,'llego');
        res.json(funciones.getMensaje(202,result))
    } catch (error) {
        return res.json(funciones.getMensaje(400,error.message));
    }
}