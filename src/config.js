import { config } from "dotenv"
config();
console.log(process.env.PORT);
export default{
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET_KEY,
    jwtExpire: process.env.JWT_EXPIRE_MINUTES 
}