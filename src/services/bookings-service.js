const Booking = require('../models/index')['Booking']

const BookingService = {
  async create(booking) {
    return await Booking.create(booking)
  },
  async findAll() {
    return await Booking.findAll()
  },
}

export default BookingService