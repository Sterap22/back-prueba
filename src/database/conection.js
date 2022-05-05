import sql from "mssql";
export {sql} ;
/*Conection MySql*/
const dbsettings = {
    user: "sa",
    // user: "premov",
    password: "Admin123456",
    // password: "premov2021*",
    database: "MuvAppBeta",
    // server: "localhost",
    server: "192.168.20.27",
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: false, // for azure
        trustServerCertificate: false // change to true for local dev / self-signed certs
    }
}

export async function getConnection() {
    try {
        const pool = await sql.connect(dbsettings);
        return pool 
    } catch (error) {
        console.log(error);
    }
}