const express = require('express')


const homepageRouter = express.Router()
homepageRouter.get('/', (req, res) => {
    res.render('homepage/homepage')
})

module.exports = {
    homepageRouter
}