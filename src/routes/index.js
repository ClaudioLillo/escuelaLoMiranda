import express from 'express'

const routes = express()

import userRouter from './user'
import gradeRouter from './grade'
import subjectRouter from './subject'
import courseRouter from './course'

routes.use('/users', userRouter)
routes.use('/grades',gradeRouter)
routes.use('/subjects',subjectRouter)
routes.use('/courses', courseRouter)

export default routes