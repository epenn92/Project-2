
const mongoose = require('./connection.js')

const RestaurantSchema = new mongoose.Schema({
  name: String,
  location: String,
  operationDays: Date,
  isOpen: Boolean,
  priceRange: String,
  rating: String,
  logo: String,
  menuId: String
})

const RestaurantCollection = mongoose.model('restaurant', RestaurantSchema)

const getRestaurantById = restaurantId => {
  return RestaurantCollection.findOne({ _id: restaurantId });
}

const getAllRestaurants = () => {
  return RestaurantCollection.find({})
}

const getRestaurantNameById = (restaurantId, name) => {
  return RestaurantCollection.find(restaurantId, { name })
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

const getRestaurantByMenuId = menuId => {
  return RestaurantCollection.find({ menuId })
}

module.exports = {
  getRestaurantById,
  getAllRestaurants,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
  getRestaurantByItemId,
  getRestaurantByMenuId,
  getRestaurantNameById
}
