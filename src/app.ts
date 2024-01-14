// @ts-ignore
import express from 'express'
// @ts-ignore
import cors from 'cors'
// @ts-ignore
import logger from 'morgan'

import { router } from './routes'

// app create
export const app= express()

// middlewares
app.use(express.json())
app.use(cors()) //open all hosts// @ts-ignore
app.use(logger('dev'))

app.use('/', router)