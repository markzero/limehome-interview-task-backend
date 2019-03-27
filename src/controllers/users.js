import { Router } from 'express'
import asyncWrapper from '../utils/async-wrapper'
const router = Router()

router.get('/:id/bookings', asyncWrapper(async (req, res) => {
  res.send('user bookings')
}))

export default router