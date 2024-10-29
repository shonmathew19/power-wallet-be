const mongoose = require('mongoose');

const consumerInfoSchema = new mongoose.Schema({
    consumerNumber:{
        type:String,
        require:true,
        unique: true
    },
    consumerName: {
        type: String,
        required: true,
    },
    consumerAddress: {
        type: String,
        required: true,
    },
    billNumber: {
        type: String,
        required: true,
    },
    dateOfBillGeneration: {
        type: Date,
        required: true,
    },
    meterNumber: {
        type: String,
        required: true,
    },
    previousMeterReading: {
        type: Number,
        required: true,
    },
    currentMeterReading: {
        type: Number,
        required: true,
    },
    meterType: {
        type: String,
        required: true,
    },
    unitsConsumed: {
        type: Number,
        required: true,
    },
    tariffRate: {
        type: Number,
        required: true,
    },
    fixedCharges: {
        type: Number,
        required: true,
    },
    variableCharges: {
        type: Number,
        required: false,
    },
    additionalCharges: {
        type: Number,
        required: false,
    },
    taxes: {
        type: Number,
        required: false,
    },
    totalAmountPayable: {
        type: Number,
        required: true,
    },
    dueDate: {
        type: Date,
        required: true,
    },
    contactNumbers: {
        type: [String],
        required: true,
    },
    websiteOrEmail: {
        type: String,
        required: false,
    },
    additionalNotes: {
        type: String,
        required: false,
    },
})

const consumerInfos = mongoose.model('consumerInfos',consumerInfoSchema);
module.exports = consumerInfos;