import { Router } from 'express'
import asyncWrapper from '../utils/async-wrapper'
import userService from '../services/users-service'
const router = Router()

router.get('/:id/bookings', asyncWrapper(async (req, res) => {
  const booking = await userService.findBookings(req.params.id)
  res.send(booking)
}))

export default router