
const express = require('express')


const menuApi = require('../models/menu.js')
const restaurantApi = require('../models/restaurant.js')

const menuRouter = express.Router()




menuRouter.get('/', (req, res) => {
  menuApi.getAllMenus()
    .then((allMenus) => {
      res.render('menu/allMenus', { allMenus })
    })
    .catch((error) => {
      console.log(error)
      res.send(error)
    })
})

menuRouter.get('/new', (req, res) => {
  res.render('menu/createMenu')
})

menuRouter.get('/update/:menuId', (req, res) => {
  menuApi.getMenuById(req.params.menuId)
    .then((menu) => {
      res.render('menu/updateMenu', { menu })
    })
})

menuRouter.get('/:menuId', (req, res) => {
  menuApi.getMenuById(req.params.menuId)
    .then((singleMenu) => {
      res.render('menu/singleMenu', { singleMenu })
    })
    .catch((error) => {
      console.log(error)
      res.send(error)
    })
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
