import express from 'express'

const router = express()

router.get('/', (req, res)=>{
    res.status(200).json({msg: "todos"})
})

router.get('/:id', (req, res)=>{
    const id = req.params.id
    res.status(200).json({id: id})
})