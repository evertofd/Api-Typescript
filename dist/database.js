"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
exports.pool = new pg_1.Pool({
    user: 'everto',
    password: '123456',
    host: 'localhost',
    port: 5432,
    database: 'api_typescript'
});
