import express, {json} from 'express'
import morgan from 'morgan'
const cors = require('cors')

import User from './models/User'

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

app.post('/seed', async(req, res)=>{
    try{
        let admin = await User.create({
            email: "cilillo@uc.cl",
            name: "Claudio",
            lastName: "Lillo",
            password: "1234",
            role: "admin"
        })
        let student = await User.create({
            email: "student@student.cl",
            name: "student",
            lastName: "user",
            password: "1234",
            role: "student"
        })
        let teacher = await User.create({
            email: "teach@teach.cl",
            name: "teacher",
            lastName: "user",
            password: "1234",
            role: "teacher"
        })
        if(admin && student && teacher){
            return res.status(201).json({msg: "seed works"})
        }
    }
    catch(err){
        return res.status(500)
    }
    
})


module.exports = app