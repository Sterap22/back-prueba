import { getLocalitation } from "../funtions/funtions";

export const postLogLat = async (req, res)=>{
    const {addressexit, addresarrival}= req.body
    const result = await getLocalitation(addressexit)
    const result2 = await getLocalitation(addresarrival)
    // console.log('llego ', result,' data 2 ', result2 );
    res.json({inicio:result, llegada: result2});
}; 