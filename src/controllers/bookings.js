import { Router } from 'express'
import bookingService from '../services/bookings-service'
import asyncWrapper from '../utils/async-wrapper'
const router = Router()

router.get('/', asyncWrapper(async (req, res) => {
  const bookings = await bookingService.findAll()
  res.send(bookings)
}))

export default router