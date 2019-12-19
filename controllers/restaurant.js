
const express = require('express')


const restaurantApi = require('../models/restaurant.js')


const restaurantRouter = express.Router()




restaurantRouter.get('/', async (req, res) => {
  try {
    const allRestaurants = await restaurantApi.getAllRestaurants();
    res.render('restaurant/allRestaurants', { allRestaurants })
  }
  catch (error) {
    console.log(error)
    res.send(error)
  }
})

restaurantRouter.get('/new', (req, res) => {
  res.render('restaurant/createRestaurant')
})

restaurantRouter.get('/update/:restaurantId', (req, res) => {
  restaurantApi.getRestaurantById(req.params.restaurantId)
    .then((restaurant) => {
      res.render('restaurant/updateRestaurant', { restaurant })
    })
})

restaurantRouter.get('/:restaurantId', (req, res) => {
  restaurantApi.getRestaurantById(req.params.restaurantId)
    .then((singleRestaurant) => {
      res.render('restaurant/singleRestaurant', { singleRestaurant })
    })
    .catch((error) => {
      console.log(error)
      res.send(error)
    })
})

restaurantRouter.post('/', (req, res) => {
  restaurantApi.createRestaurant(req.body)
    .then(() => {
      res.redirect('/restaurant')
    })
    .catch((error) => {
      console.log(error)
      res.send(error)
    })
})

restaurantRouter.put('/:restaurantId', (req, res) => {
  restaurantApi.updateRestaurant(req.params.restaurantId, req.body)
    .then(() => {
      res.redirect(`/restaurant/${req.params.restaurantId}`)
    })
    .catch((error) => {
      console.log(error)
      res.send(error)
    })
})

restaurantRouter.delete('/:restaurantId', (req, res) => {
  restaurantApi.deleteRestaurant(req.params.restaurantId)
    .then(() => {
      res.redirect('/restaurant')
    })
    .catch((error) => {
      console.log(error)
      res.send(error)
    })
})
module.exports = {
  restaurantRouter
}
