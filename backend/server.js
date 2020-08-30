import express from 'express'
import mongoose from 'mongoose'
import http from 'http'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import cors from 'cors'

// routes
import Restaurants from './routes/restaurants'

dotenv.config()

const app = express()

const server = http.createServer(app)

app.use(bodyParser.json())

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))

//CORS middleware
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header(
        'Access-Control-Allow-Headers',
        'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json'
    )
    next()
})
app.use('/api', Restaurants)

//Connect to Mongo
mongoose.connect(
    process.env.MONGO_DB_URI,
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    },
    () => {
        console.log('mongoose connected...')
    }
)

server.listen(process.env.PORT, () => {
    console.log('server connected')
})
