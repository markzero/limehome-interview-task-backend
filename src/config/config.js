const path = require('path')

module.exports = {
  dialect: 'sqlite',
  storage: path.resolve(__dirname, '../db.sqlite'),
  placesApi: process.env.PLACES_API,
  placesKey: process.env.PLACES_KEY,
}