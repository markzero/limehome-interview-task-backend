import express from 'express'
import { json } from 'body-parser'
import bookingsController from './controllers/bookings'
import usersController from './controllers/users'
import placesController from './controllers/places'

const PORT = process.env.PORT || 3333

const app = express()

app.use(json())

app.use('/bookings', bookingsController)
app.use('/users', usersController)
app.use('/places', placesController)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
