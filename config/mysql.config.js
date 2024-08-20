import { createPool } from 'mysql2/promise'
import dotenv from 'dotenv'

dotenv.config()

const pool = createPool({
    host: process.env.DB_HOST,
    user : process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    connectionLimit: process.env.DB_CONN_LIMIT
});

const connectToDatabase = async () => {
    try {
        await pool.getConnection();
        console.log('MySQL connection successful')
    } catch (error) {
        console.log('MySQL connection failed', process.env.DB_PASSWORD)
        console.log(error)
       throw error
    }
};

export {connectToDatabase, pool };