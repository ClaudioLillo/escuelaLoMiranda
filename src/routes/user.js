import express from 'express'

const router = express()
import {createUser, getAllUsers, getUser} from '../controllers/User'

router.get('/', getAllUsers)

router.get('/:id', getUser)

router.post('/', createUser)

router.put('/:id',(req, res)=>{
    const {name, lastName, email, password} = req.body
    const id = req.params.id
    return res.status(200).json({msg: "user updated"})

})

router.delete('/:id', (req, res)=>{
    const user = "user"
    return res.status(200).json({user: user})
})

export default router