const path = require('path')

module.exports = {
  dialect: 'sqlite',
  storage: path.resolve(__dirname, '../db.sqlite'),
  timestamps: false,
  define: {
    timestamps: false
  },
}