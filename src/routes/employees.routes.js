import { Router } from 'express'
import { getEmployee ,getEmployees, creEmployees, patEmployees, delEmployees } from '../controllers/employees.controller.js'

const router = Router()

router.get('/employees', getEmployee)

router.get('/employees/:id', getEmployees)

router.post('/employees', creEmployees)

router.patch('/employees/:id', patEmployees)

router.delete('/employees/:id', delEmployees)

export default router