import express from 'express'

const routes = express()

import userRouter from './user'

routes.use('/users', userRouter)

export default routes