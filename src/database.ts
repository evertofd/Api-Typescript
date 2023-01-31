import { Pool } from "pg";

export const pool = new Pool({
    user: 'everto',
    password:'123456',
    host:'localhost',
    port:5432,
    database:'api_typescript'
})

