import express from 'express'
import { getNumberFacts } from '../controllers/users.controller.js'

const numberRoutes = express.Router()

numberRoutes.get('/classify-number', getNumberFacts)

export default numberRoutes
