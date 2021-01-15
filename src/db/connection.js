import {Pool} from 'pg';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
    // host: process.env.DATABASE_HOST,
    // port: process.env.DATABASE_PORT,
    // database: process.env.DATABASE_DATABASE,
    // user: process.env.DATABASE_USER ,
    // password: process.env.DATABASE_PASSWORD ,
    // max: 20,
    // idleTimeoutMillis: 30000,
    // connectionTimeoutMillis: 2000,
    // ssl: false
})

pool.connect((err, client, release) => {
    if (err) {
        return console.error('Error acquiring client', err.stack)
    }

    console.log('db connected')
})

export default pool;
