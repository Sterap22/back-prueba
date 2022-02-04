import sql from "mssql";
export {sql} ;

const dbsettings = {
    user: "sa",
    password: "Admin123456",
    database: "MuvAppBeta",
    server: "localhost",
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