
const mongoose = require('./connection.js')

const MenuSchema = new mongoose.Schema({
  restaurantId: String,
  size: String,
  time: String,
  type: String,
  alcoholAvailable: Boolean
})

const MenuCollection = mongoose.model('menu', MenuSchema)

const getMenuById = menuId => {
  return MenuCollection.findOne({ _id: menuId })
}

const getAllMenus = () => {
  return MenuCollection.find({})
}

const createMenu = (newMenu) => {
  return MenuCollection.create(newMenu)
}

const updateMenu = (menuId, updatedMenu) => {
  return MenuCollection.updateOne({ _id: menuId }, updatedMenu)
}

const deleteMenu = (menuId) => {
  return MenuCollection.deleteOne({ _id: menuId })
}

const getAllMenuByRestaurant = (restaurantId) => {
  return MenuCollection.find(restaurantId)
}

const getMenuByRestaurant = (restaurantId, menuId) => {
  return MenuCollection.find(restaurantId, { _id: menuId })
}

module.exports = {
  getMenuById,
  getAllMenus,
  createMenu,
  updateMenu,
  deleteMenu,
  getAllMenuByRestaurant,
  getMenuByRestaurant,

}
