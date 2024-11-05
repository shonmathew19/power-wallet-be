const express = require('express')
const router = new express.Router()
const priceUpdatesController = require('../Controllers/priceUpdatesContoller')

router.post('/admin/price-updates',priceUpdatesController.addPrice)
router.get('/admin/latest-price',priceUpdatesController.latestPrice)

module.exports =router