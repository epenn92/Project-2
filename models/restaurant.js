
const mongoose = require('./connection.js')

const RestaurantSchema = new mongoose.Schema({
  name: String,
  location: String,
  operationDays: Date,
  isOpen: Boolean,
  priceRange: String,
  rating: String
})

const RestaurantCollection = mongoose.model('restaurant', RestaurantSchema)

const getRestaurantById = restaurantId => {
  return RestaurantCollection.findOne({ _id: restaurantId });
}

const getAllRestaurants = () => {
  return RestaurantCollection.find({})
}

const getRestaurantByName = name => {
  return RestaurantCollection.findOne({ name: name })
}

const createRestaurant = newRestaurant => {
  return RestaurantCollection.create(newRestaurant)
}

const updateRestaurant = (restaurantId, updatedRestaurant) => {
  return RestaurantCollection.updateOne({ _id: restaurantId }, updatedRestaurant)
}

const deleteRestaurant = restaurantId => {
  return RestaurantCollection.deleteOne({ _id: restaurantId })
}

const getRestaurantByItemId = itemId => {
  return RestaurantCollection.findOne({ itemId })
}

module.exports = {
  getRestaurantById,
  getAllRestaurants,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
  getRestaurantByItemId
}
