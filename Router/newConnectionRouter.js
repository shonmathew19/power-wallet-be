const express = require('express')
const router = new express.Router()

const newConnectionController = require('../Controllers/newConnectionController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')

router.post('/new-connection',newConnectionController.connectionApplication)
router.get('/view-new-connection',newConnectionController.viewAllNewConnections)

module.exports = router;