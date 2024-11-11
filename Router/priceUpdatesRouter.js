const express = require('express')
const router = new express.Router()
const priceUpdatesController = require('../Controllers/priceUpdatesContoller')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')

router.post('/admin/price-updates' ,jwtMiddleware,priceUpdatesController.addPrice)
router.get('/admin/latest-price',priceUpdatesController.latestPrice)

module.exports =router