import express, {json} from 'express'
import morgan from 'morgan'
const cors = require('cors')

import routes from './routes'

const app = express()


app.use(morgan('dev'))
app.use(json())
app.use(cors({
    origin: "*",
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    credentials: true,
}
))
app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-Width')
    if ('OPTIONS' === req.method){
        res.send(200)
    }
    else{
        next()
    }
})

app.get('/', (req, res)=>{
    return res.status(200).json({
        name: 'Escuela de Lo Miranda API',
        author: 'Claudio Lillo',
        version: '0.1'
    })
})

app.use('/api', routes)

module.exports = app