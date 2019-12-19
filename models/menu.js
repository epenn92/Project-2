
const mongoose = require('./connection.js')

const MenuSchema = new mongoose.Schema({
  restaurantId: String,
  size: String,
  variety: Boolean,
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

module.exports = {
  getMenuById,
  getAllMenus,
  createMenu,
  updateMenu,
  deleteMenu

}
