const express = require('express')
const router = new express.Router()

const consumerInfoController = require('../Controllers/consumerInfoController')

//paths

router.post('/consumer-info',consumerInfoController.consumerDetails)
router.get('/all-consumers',consumerInfoController.allConsumersApi)
router.delete('/delete-consumer', consumerInfoController.deleteConsumerByIdApi);
router.get('/consumerinfo-byid', consumerInfoController.consumerInfoById);



module.exports=router;