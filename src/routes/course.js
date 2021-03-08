import express from 'express'

const router = express()
import {createCourse, getAllCourses, getCoursesByTeacherId} from '../controllers/Course'

router.get('/', getAllCourses)

router.get('/teacher', getCoursesByTeacherId)

router.post('/', createCourse)

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