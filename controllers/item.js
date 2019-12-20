
const express = require('express')

const restaurantApi = require('../models/restaurant.js')
const menuApi = require('../models/menu.js')
const itemApi = require('../models/item.js')


const itemRouter = express.Router()




itemRouter.get('/', async (req, res) => {
  try {
    const allItems = await itemApi.getAllItems();
    res.render('item/allItems', { allItems })
  }
  catch (error) {
    console.log(error)
    res.send(error)
  }
})

itemRouter.get('/new', (req, res) => {
  res.render('item/createItem')
})

itemRouter.get('/update/:itemId', async (req, res) => {
  try {
    const item = await itemApi.getItemById(req.params.itemId)
    res.render('item/updateItem', { item })
  }
  catch (error) {
    console.log(error)
    res.send(error)
  }
})


itemRouter.get('/:itemId', async (req, res) => {
  const singleItem = await itemApi.getItemById(req.params.itemId)
  try {


    res.render('item/singleItem', { singleItem })
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
