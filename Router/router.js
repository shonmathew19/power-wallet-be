
const express = require('express')
const router = new express.Router()
const userController = require('../Controllers/userController')

//paths
router.post('/user/register',userController.register)
router.post('/user/login',userController.login)



module.exports= router;