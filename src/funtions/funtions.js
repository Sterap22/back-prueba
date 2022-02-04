import jwt from 'jsonwebtoken';
import { Router } from "express";
import express from "express";
import  * as funciones from "../funtions/funtions"


const app = express();
export const rutasProtegidas = Router();
rutasProtegidas.use((req, res, next) => {
    try {
        const token = (req.headers['authorization']);
        if(token!= null) token = token.replace(/['"]+/g, '')
        const llave = process.env.JWT_SECRET_KEY;
        if (token != "" && token != undefined) {
            jwt.verify(token, llave, (err, decoded) => {
                if (err) {
                    return res.json({ mensaje: 'Token inválida' });
                } else {
                    req.decoded = decoded;
                    next();
                }
            });
        } else {
            return res.redirect('https://premoveapp.000webhostapp.com/');
        }
    } catch (error) {
        return res.json(error.message);
    }
    
});

export function getMensaje(status, message, data) {
    return {
        status: status,
        message: message,
        data: data
    }
}