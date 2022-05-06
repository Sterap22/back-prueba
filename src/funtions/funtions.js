import jwt from 'jsonwebtoken';
import { Router } from "express";
import express from "express";
import * as funciones from "../funtions/funtions"

const NodeGeocoder = require('node-geocoder');
var options = {
    provider: 'google',
    httpAdapter: 'https://maps.googleapis.com/maps/api',
    apiKey: 'AIzaSyAa1cM303p5zK2KbT5-y-8B4iiTocEL_w0', // for Mapquest, OpenCage, Google Premier
    formatter: null         // 'gpx', 'string', ...
};
const app = express();
export const rutasProtegidas = Router();
rutasProtegidas.use((req, res, next) => {
    try {
        const token = (req.headers['authorization']);
        if (token != null) token = token.replace(/['"]+/g, '')
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

export const getLocalitation = async(adress, res) =>{
    const geocoder = NodeGeocoder(options);
    const res2 = await geocoder.geocode(adress)
    .then(function(data) {
      res = data
    })
    .catch(function(err) {
        res = err
    });
    return res;
}