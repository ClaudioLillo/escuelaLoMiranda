import express from 'express'

const router = express()
import {createSubject, getAllSubjects, updateSubject, deleteSubject} from '../controllers/Subject'

router.get('/', getAllSubjects)

// router.get('/:id', (req, res)=>{
//     const id = req.params.id
//     res.status(200).json({id: id})
// })

router.post('/', createSubject)

router.put('/',updateSubject)

router.delete('/', deleteSubject)

export default router