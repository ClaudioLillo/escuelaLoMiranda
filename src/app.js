import express, {json} from 'express'

const app = express()

app.use(json())

app.get('/', (req, res)=>{
    return res.status(200).json({
        name: 'Escuela de Lo Miranda API',
        author: 'Claudio Lillo',
        version: '0.1'
    })
})

module.exports = app