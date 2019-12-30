
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

menuRouter.get('/new', async (req, res) => {
  try {
    const allRestaurants = await restaurantApi.getAllRestaurants()
    res.render('menu/createMenu', { allRestaurants })
  }
  catch (error) {
    console.log(error)
    res.send(error)
  }
})

menuRouter.get('/update/:menuId', async (req, res) => {

  try {
    const menu = await menuApi.getMenuById(req.params.menuId)
    const allRestaurants = await restaurantApi.getAllRestaurants()

    let dropDown = []
    for (let i = 0; i < allRestaurants.length; i++) {
      const newRestaurant = {
        _id: allRestaurants[i]._id,
        name: allRestaurants[i].name
      }

      if (newRestaurant._id == menu.restaurantId) {
        newRestaurant.selected = true
      }
      else {
        newRestaurant.selected = true
      }
      dropDown.push(newRestaurant)
    }

    console.log(dropDown)
    res.render('menu/updateMenu', { menu, allRestaurants: dropDown })
  }
  catch (error) {
    console.log(error)
    res.send(error)
  }
})


menuRouter.get('/:menuId', async (req, res) => {
  try {
    const singleMenu = await menuApi.getMenuById(req.params.menuId)
    const allRestaurants = await restaurantApi.getRestaurantById(singleMenu.restaurantId)
    res.render('menu/singleMenu', { singleMenu, allRestaurants })
  }
  catch (error) {
    console.log(error)
    res.send(error)
  }
})

menuRouter.get('/allRestaurantMenus/:restaurantId', async (req, res) => {
  try {
    const restaurant = await restaurantApi.getRestaurantById(req.params.restaurantId)
    const allMenus = await menuApi.getAllMenuByRestaurantId(restaurant._id)
    console.log('allMenus', allMenus)
    res.render('menu/allRestaurantMenus', { restaurant, allMenus })
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
