
const mongoose = require('./connection.js')

const ItemSchema = new mongoose.Schema({
  restaurantId: String,
  name: String,
  menuId: String,
  restaurantId: String,
  foodName: String,
  price: Number,
  review: String

})

const ItemCollection = mongoose.model('item', ItemSchema)

const getItemById = itemId => {
  return ItemCollection.findOne({ _id: itemId })
}

const getAllItems = () => {
  return ItemCollection.find({})
}

const createItem = (newItem) => {
  return ItemCollection.create(newItem)
}

const updateItem = (itemId, updatedItem) => {
  return ItemCollection.updateOne({ _id: itemId }, updatedItem)
}

const deleteItem = (itemId) => {
  return ItemCollection.deleteOne({ _id: itemId })
}

const getItemByRestaurantId = restaurantId => {
  return ItemCollection.findOne({ restaurantId })
}

const getAllItemsByMenuId = menuId => {
  return ItemCollection.find({ menuId })
}

module.exports = {
  getItemById,
  getAllItems,
  createItem,
  updateItem,
  deleteItem,
  getItemByRestaurantId,
  getAllItemsByMenuId

}
