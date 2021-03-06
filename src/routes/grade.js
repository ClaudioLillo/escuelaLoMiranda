import express from 'express'

const router = express()
import {createGrade, getAllGrades} from '../controllers/Grade'

router.get('/', getAllGrades)

// router.get('/:id', (req, res)=>{
//     const id = req.params.id
//     res.status(200).json({id: id})
// })

router.post('/', createGrade)

// router.put('/:id',(req, res)=>{
//     const {name, lastName, email, password} = req.body
//     const id = req.params.id
//     return res.status(200).json({msg: "user updated"})

// })

// router.delete('/:id', (req, res)=>{
//     const user = "user"
//     return res.status(200).json({user: user})
// })

export default router