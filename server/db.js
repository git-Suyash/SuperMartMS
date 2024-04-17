import pg from "pg";

const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'RDBMS',
    password: 'abc123',
    port:  5432,
});

export default pool;