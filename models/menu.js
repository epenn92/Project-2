
const mongoose = require('./connection.js')

const MenuSchema = new mongoose.Schema({
  size: String,
  variety: Boolean,
  type: String,
  alcoholAvailable: Boolean
})




module.exports = {

}
