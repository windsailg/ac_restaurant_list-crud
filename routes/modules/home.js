const express = require('express')
const router = express.Router()

const restaurants = require('../../models/restaurant')

router.get('/', (req, res) => {
  restaurants.find()// 從資料庫找出資料
    .lean()// 轉圜單純JS物件
    .sort({ _id: 'asc' })// desc
    .then(restaurant => res.render('index', { restaurant }))
    .catch(error => console.error(error))
})

module.exports = router
