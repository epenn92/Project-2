
const mongoose = require('./connection.js')

const RestaurantSchema = new mongoose.Schema({
  name: String,
  location: String,
  OperationDays: Date,
  isOpen: Boolean,
  priceRange: String
})

const RestaurantCollection = mongoose.model('restaurant', RestaurantSchema)

const getRestaurantbyId = restId => {
  return RestaurantCollection.findOne({ _id: restId });
}

const getAllRestaurants = () => {
  return RestaurantCollection.find({})
}

const getRestaurantbyName = name => {
  return RestaurantCollection.findOne({ name: name })
}

const createRestaurant = newRestaurant => {
  return RestaurantCollection.create(newRestaurant)
}

const updateRestaurant = (restId, updatedRestaurant) => {
  return RestaurantCollection.updateOne({ _id: restId }, updatedRestaurant)
}

const deleteRestaurant = restId => {
  return RestaurantCollection.deleteOne({ _id: restId })
}

module.exports = {
  getRestaurantbyId,
  getAllRestaurants,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant
}
