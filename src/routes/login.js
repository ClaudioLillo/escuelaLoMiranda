import {Router} from 'express'

import {userLogin} from '../controllers/Login'

const router = Router()
router.post('/',userLogin)

export default router