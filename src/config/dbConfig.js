const dbConfig = process.env.NODE_ENV!=='development' ? ({
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE_DATABASE,
    user: process.env.DATABASE_USER ,
    password: process.env.DATABASE_PASSWORD ,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
    ssl: {
        require: process.env.NODE_ENV==='development' ? false : true,
        rejectUnauthorized: process.env.NODE_ENV==='development' ? true : false,
    },
}) : ({
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE_DATABASE,
    user: process.env.DATABASE_USER ,
    password: process.env.DATABASE_PASSWORD ,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
})

export default dbConfig;
