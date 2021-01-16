import {Pool} from 'pg';
import dbConfig from "../configs/dbConfig";

const pool = new Pool(dbConfig)

pool.connect((err, client, release) => {
    if (err) {
        return console.error('Error acquiring client', err.stack)
    }

    console.log('db connected')
})

export default pool;
