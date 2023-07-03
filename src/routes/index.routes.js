import { Router } from 'express'
import { pruebaIndex } from '../controllers/index.controller.js'

const router = Router()

router.get('/prueba', pruebaIndex)

export default router