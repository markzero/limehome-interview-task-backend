const Booking = require('../models/index')['Booking']

const BookingService = {
  async findAll() {
    return await Booking.findAll()
  },
}

export default BookingService