import { Pool } from "pg";
import * as dotenv from 'dotenv'
dotenv.config()

export const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host:'localhost',
    port:5432,
    database:'api_typescript'
})

