import express, {json} from 'express'
import morgan from 'morgan'
const cors = require('cors')
var path = require('path')

import User from './models/User'

import routes from './routes'

const app = express()


app.use(morgan('dev'))
app.use(json())

app.use(cors())

app.get('/', (req, res)=>{
    return res.status(200).json({
        name: 'Escuela de Lo Miranda API',
        author: 'Claudio Lillo',
        version: '0.1'
    })
})

app.use('/api', routes)

app.post('/seed', async(req, res)=>{
    if ('OPTIONS' === req.method){
        res.send(200)
    }
    try{
        let u1 = await User.findOne({where: {email: "cilillo@uc.cl"}})

        if(u1){
            return res.status(200).json({msg: "users were already created"})
        }
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