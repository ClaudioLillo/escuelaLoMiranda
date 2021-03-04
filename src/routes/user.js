import express from 'express'

const router = express()
import {createUser, getAllUsers, getUser, deleteUser, updateUser} from '../controllers/User'

router.get('/', getAllUsers)

router.get('/:id', getUser)

router.post('/', createUser)

router.put('/',updateUser)

router.delete('/',deleteUser)

export default router