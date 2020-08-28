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
app.use(cors())

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
