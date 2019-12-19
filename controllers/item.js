
const express = require('express')


const itemApi = require('../models/item.js')


const itemRouter = express.Router()




itemRouter.get('/', (req, res) => {
  itemApi.getAllItems()
    .then((allItems) => {
      res.render('item/allItems', { allItems })
    })
    .catch((error) => {
      console.log(error)
      res.send(error)
    })
})

itemRouter.get('/new', (req, res) => {
  res.render('item/createItem')
})

itemRouter.get('/update/:itemId', (req, res) => {
  itemApi.getItemById(req.params.itemId)
    .then((item) => {
      res.render('item/updateItem', { item })
    })
})

itemRouter.get('/:itemId', (req, res) => {
  itemApi.getItemById(req.params.itemId)
    .then((singleItem) => {
      res.render('item/singleItem', { singleItem })
    })
    .catch((error) => {
      console.log(error)
      res.send(error)
    })
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
