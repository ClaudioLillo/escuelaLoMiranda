import express from 'express'

const router = express()
import {getFiles, createFile} from '../controllers/File'

router.get('/', getFiles)

// router.get('/:id', (req, res)=>{
//     const id = req.params.id
//     res.status(200).json({id: id})
// })

router.post('/', createFile)

export default router