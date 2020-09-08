const express = require('express')
const router = express.Router()

const restaurants = require('../../models/restaurant')

// 搜尋路由
router.get('/', (req, res) => {
  const keyword = req.query.keyword.trim().toLowerCase()
  restaurants.find()// 從資料庫找出資料
    .lean()// 轉成JS物件
    .sort({ name: 'asc' })// desc
    .then(restaurant => {
      const searchedRestaurant = []
      restaurant.forEach(item => {
        if (item.name.toLowerCase().includes(keyword) || item.category.toLowerCase().includes(keyword)) {
          searchedRestaurant.push(item)
        }
      })
      return res.render('index', { restaurant: searchedRestaurant, keywords: keyword })
    })
    // .then(searchedRestaurant => res.render('index', { restaurant: searchedRestaurant, keywords: keyword }))
    .catch(error => console.error(error))
})

// 新增頁面路由
router.get('/new', (req, res) => {
  return res.render('new')
})

// 新增頁面送出路由
router.post('/', (req, res) => {
  return restaurants.create({
    name: req.body.name,
    name_en: req.body.name_en,
    category: req.body.category,
    rating: req.body.rating,
    location: req.body.location,
    google_map: req.body.map,
    phone: req.body.phone,
    description: req.body.description,
    image: req.body.image
  })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// 詳細頁面路由
router.get('/:restaurant_id', (req, res) => {
  const id = req.params.restaurant_id
  return restaurants.findById(id)
    .lean()
    .then(restaurant => res.render('show', { restaurant }))
    .catch(error => console.error(error))
})

// 編輯頁面路由
router.get('/:restaurant_id/edit', (req, res) => {
  const id = req.params.restaurant_id
  return restaurants.findById(id)
    .lean()
    .then(restaurant => res.render('edit', { restaurant }))
    .catch(error => console.log(error))
})

// 編輯頁面送出路由
router.post('/:restaurant_id/edit', (req, res) => {
  const id = req.params.restaurant_id
  return restaurants.findById(id)
    .then(restaurant => {
      restaurant.name = req.body.name
      restaurant.name_en = req.body.name_en
      restaurant.category = req.body.category
      restaurant.rating = req.body.rating
      restaurant.location = req.body.location
      restaurant.google_map = req.body.map
      restaurant.phone = req.body.phone
      restaurant.description = req.body.description
      restaurant.image = req.body.image
      return restaurant.save()
    })
    .then(() => {
      return res.redirect(`/restaurant/${id}`)
    })
    .catch(error => console.error(error))
})

// 刪除物件送出路由
router.delete('/:restaurant_id', (req, res) => {
  const id = req.params.restaurant_id
  return restaurants.findById(id)
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router
