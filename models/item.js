
const mongoose = require('./connection.js')

const ItemSchema = new mongoose.Schema({
  foodName: String,
  price: Number,
  review: String
})




module.exports = {

}
