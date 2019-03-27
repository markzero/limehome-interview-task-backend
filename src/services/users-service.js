const User = require('../models/index')['User']
const Booking = require('../models/index')['Booking']

const UsersService = {
  async findBookings(id) {
    return await Booking.findOne({ where: { UserId: id }})
  },
}

export default UsersService