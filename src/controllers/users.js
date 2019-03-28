import { Router } from 'express'
import asyncWrapper from '../utils/async-wrapper'
import userService from '../services/users-service'
import cors from 'cors'
const router = Router()

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
}

router.get('/:id/bookings', cors(corsOptions), asyncWrapper(async (req, res) => {
  const booking = await userService.findBookings(req.params.id)
  res.send(booking)
}))

export default router