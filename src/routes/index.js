import express from 'express'

const routes = express()

import userRouter from './user'
import gradeRouter from './grade'
import subjectRouter from './subject'
import courseRouter from './course'
import loginRouter from './login'

routes.use('/users', userRouter)
routes.use('/grades',gradeRouter)
routes.use('/subjects',subjectRouter)
routes.use('/courses', courseRouter)
routes.use('/login', loginRouter)

export default routes