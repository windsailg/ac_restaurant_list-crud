const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const restaurants = require('./modules/restaurants')

// 將路郵包成模組 並統一管理

router.use('/', home)
router.use('/restaurant', restaurants)
router.use('/search', restaurants)

module.exports = router
