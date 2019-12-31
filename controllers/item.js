
const express = require('express')

const restaurantApi = require('../models/restaurant.js')
const menuApi = require('../models/menu.js')
const itemApi = require('../models/item.js')


const itemRouter = express.Router()




itemRouter.get('/', async (req, res) => {
  try {
    const allItems = await itemApi.getAllItems();
    console.log(allItems)
    res.render('item/allItems', { allItems })
  }
  catch (error) {
    console.log(error)
    res.send(error)
  }
})

itemRouter.get('/new', async (req, res) => {
  try {
    const allRestaurants = await restaurantApi.getAllRestaurants();
    res.render('item/whichRestaurant', { allRestaurants })
  }
  catch (error) {
    console.log(error)
    res.send(error)
  }
})

itemRouter.get('/new/:restaurantId', async (req, res) => {
  try {
    const singleRestaurant = await restaurantApi.getRestaurantById(req.params.restaurantId)
    const allMenus = await menuApi.getAllMenuByRestaurantId(singleRestaurant._id)
    console.log(singleRestaurant)
    console.log(allMenus)
    res.render('item/createItem', { singleRestaurant, allMenus })
  }
  catch (error) {
    console.log(error)
    res.send(error)
  }
})

itemRouter.get('/update/:itemId', async (req, res) => {
  try {
    const item = await itemApi.getItemById(req.params.itemId)
    const singleRestaurant = await restaurantApi.getRestaurantByItemId(req.params.restaurantId)
    // const allMenus = await menuApi.getAllMenuByRestaurantId(singleRestaurant._id)
    res.render('item/updateItem', { item, singleRestaurant })
  }
  catch (error) {
    console.log(error)
    res.send(error)
  }
})


itemRouter.get('/:itemId', async (req, res) => {
  const singleItem = await itemApi.getItemById(req.params.itemId)
  try {
    // const singleRestaurant = await restaurantApi.getRestaurantById(req.params.restaurantId)
    res.render('item/singleItem', { singleItem, })
  }
  catch (error) {
    console.log(error)
    res.send(error)
  }
})

itemRouter.post('/', (req, res) => {
  itemApi.createItem(req.body)
    .then(() => {
      res.redirect('/item')
    })
    .catch((error) => {
      console.log(error)
      res.send(error)
    })
})

itemRouter.put('/:itemId', (req, res) => {
  itemApi.updateItem(req.params.itemId, req.body)
    .then(() => {
      res.redirect(`/item/${req.params.itemId}`)
    })
    .catch((error) => {
      console.log(error)
      res.send(error)
    })
})

itemRouter.delete('/:itemId', (req, res) => {
  itemApi.deleteItem(req.params.itemId)
    .then(() => {
      res.redirect('/item')
    })
    .catch((error) => {
      console.log(error)
      res.send(error)
    })
})
module.exports = {
  itemRouter
}
