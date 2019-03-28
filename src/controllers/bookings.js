import { Router } from 'express'
import bookingService from '../services/bookings-service'
import asyncWrapper from '../utils/async-wrapper'
import cors from 'cors'
const router = Router()

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
}

router.get('/', asyncWrapper(async (req, res) => {
  const bookings = await bookingService.findAll()
  res.send(bookings)
}))

router.post('/', cors(corsOptions), asyncWrapper(async (req, res) => {
  const booking = await bookingService.create(req.body)
  res.send(booking)
}))

router.options('/', cors(corsOptions))

export default router