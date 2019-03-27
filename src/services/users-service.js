const User = require('../models/index')['User']

const UsersService = {
  async findBookings(id) {
    return await User.findOne({ where: { id }})
  },
}

export default UsersService