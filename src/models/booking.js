'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    propertyId: DataTypes.STRING,
    propertyName: DataTypes.STRING,
    city: DataTypes.STRING,
    booked: DataTypes.BOOLEAN,
  }, {});
  Booking.associate = function(models) {
    Booking.belongsTo(models.User)
  };
  return Booking;
};