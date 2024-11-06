
const express = require('express');
const consumerInfoController = require('../Controllers/consumerInfoController'); 
const router = express.Router();

//paths

router.post('/consumer-info',consumerInfoController.consumerDetails)
router.get('/all-consumers',consumerInfoController.allConsumersApi)
router.delete('/delete-consumer', consumerInfoController.deleteConsumerByIdApi);
router.get('/consumerinfo-byid/:userId',consumerInfoController.consumerInfoById);
router.put('/update-consumer/:userId', consumerInfoController.updateConsumerByIdApi);



module.exports=router;