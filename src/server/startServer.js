import express from "express";
import bodyParser from "body-parser"
import dotenv from 'dotenv'

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const app = express();

const port = 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true,
}))

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})
