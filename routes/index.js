const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const restaurants = require('./modules/restaurants')

router.use('/', home)
router.use('/search', restaurants)
router.use('/restaurant', restaurants)

module.exports = router
