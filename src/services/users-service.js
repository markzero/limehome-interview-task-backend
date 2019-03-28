const User = require('../models/index')['User']
const Booking = require('../models/index')['Booking']

const UsersService = {
  async findBookings(id) {
    return await Booking.findAll({ where: { UserId: id }})
  },
}

export default UsersService