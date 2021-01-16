import express from "express";
import bodyParser from "body-parser"
import logger from 'morgan'
import cors from 'cors'
import publicRouter from "../routes";

const app = express();

const port = process.env.PORT || "3001";

app.use(
    logger('dev'),
    cors({
        exposedHeaders: 'XSRF-TOKEN',
    }),
    bodyParser.json({limit: '50mb'}),
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.json({info: 'Node.js, Express, and Postgres API'})
})
app.use('/api',publicRouter);

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})
