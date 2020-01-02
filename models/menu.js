
const mongoose = require('./connection.js')

const MenuSchema = new mongoose.Schema({
  restaurantId: String,
  name: String,
  itemId: String,
  size: String,
  type: String,
  alcoholAvailable: String,
  menuLogo: String
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

const getAllMenuByRestaurantId = (restaurantId) => {
  return MenuCollection.find({ restaurantId })
}

const getMenuByRestaurant = (restaurantId, menuId) => {
  return MenuCollection.find(restaurantId, { _id: menuId })
}

const getRestaurantNameById = name => {
  return MenuCollection.find({ _id: name })
}



module.exports = {
  getMenuById,
  getAllMenus,
  createMenu,
  updateMenu,
  deleteMenu,
  getAllMenuByRestaurantId,
  getMenuByRestaurant,

}
