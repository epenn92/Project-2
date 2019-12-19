
const express = require('express')


const menuApi = require('../models/menu.js')
const restaurantApi = require('../models/restaurant.js')

const menuRouter = express.Router()




menuRouter.get('/', async (req, res) => {
  try {
    const allMenus = await menuApi.getAllMenus();
    res.render('menu/allMenus', { allMenus })
  }
  catch (error) {
    console.log(error)
    res.send(error)
  }
})

menuRouter.get('/new', (req, res) => {
  res.render('menu/createMenu')
})

menuRouter.get('/update/:menuId', async (req, res) => {
  try {
    const menu = await menuApi.getMenuById(req.params.menuId)
    res.render('menu/updateMenu', { menu })
  }
  catch (error) {
    console.log(error)
    res.send(error)
  }
})


menuRouter.get('/:menuId', async (req, res) => {
  try {
    const singleMenu = await menuApi.getMenuById(req.params.menuId)
    res.render('menu/singleMenu', { singleMenu })
  }
  catch (error) {
    console.log(error)
    res.send(error)
  }
})

menuRouter.post('/', (req, res) => {
  menuApi.createMenu(req.body)
    .then(() => {
      res.redirect('/menu')
    })
    .catch((error) => {
      console.log(error)
      res.send(error)
    })
})

menuRouter.put('/:menuId', (req, res) => {
  menuApi.updateMenu(req.params.menuId, req.body)
    .then(() => {
      res.redirect(`/menu/${req.params.menuId}`)
    })
    .catch((error) => {
      console.log(error)
      res.send(error)
    })
})

menuRouter.delete('/:menuId', (req, res) => {
  menuApi.deleteMenu(req.params.menuId)
    .then(() => {
      res.redirect('/menu')
    })
    .catch((error) => {
      console.log(error)
      res.send(error)
    })
})
module.exports = {
  menuRouter
}
