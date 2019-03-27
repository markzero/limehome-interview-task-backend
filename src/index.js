import express from 'express'
import bookingsController from './controllers/bookings'
import usersController from './controllers/users'

const PORT = process.env.PORT || 3333

const app = express()

app.use('/bookings', bookingsController)
app.use('/users', usersController)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})