import { Router } from 'express'
import bookingService from '../services/bookings-service'
import asyncWrapper from '../utils/async-wrapper'
const router = Router()

router.get('/', asyncWrapper(async (req, res) => {
  const bookings = await bookingService.findAll()
  res.send(bookings)
}))

router.post('/', asyncWrapper(async (req, res) => {
  const booking = await bookingService.create(req.body)
  res.send(booking)
}))

export default router