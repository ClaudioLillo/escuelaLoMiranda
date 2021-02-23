import express, {json} from 'express'
import morgan from 'morgan'
const cors = require('cors')

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

module.exports = app