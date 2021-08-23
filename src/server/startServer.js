import express from "express";
import bodyParser from "body-parser"
import logger from 'morgan'
import cors from 'cors'
import publicRouter from "../routes";
import buildError from "../helper/buildError";

const app = express();

const port = process.env.PORT || "3003";

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
    response.json({info: 'User server up and running !!!!'})
})

app.use('/v1',publicRouter);

app.use(function (err, req, res, next) {
    const error = buildError(err);
    res.status(error.code).json({error});
});

app.listen(port,() => {
    console.log(`App running on port ${port}.`)
})
