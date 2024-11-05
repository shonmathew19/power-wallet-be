const mongoose = require('mongoose')

const priceUpdateSchema = new mongoose.Schema({
    unitPrice:{
        type:Number,
        required:true
    },
    additionalCharges:{
        type:Number,
        required:true
    },
    taxes:{
        type:Number,
        required:true
    },
    createdAt: { type: Date, default: Date.now }
})

const priceUpdates = mongoose.model('priceUpdates',priceUpdateSchema);
module.exports  = priceUpdates;