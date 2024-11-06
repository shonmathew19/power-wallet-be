const mongoose = require('mongoose');

const consumerInfoSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    consumerNumber: {
        type: Number,
        required: true,
        default: 0
    },
    consumerName: {
        type: String,
        required: true,
        default: ''
    },
    consumerAddress: {
        type: String,
        required: true,
        default: ''
    },
    billNumber: {
        type: Number,
        required: true,
        default: 0
    },
    dateOfBillGeneration: {
        type: Date,
        required: true,
        default: ''
    },
    meterNumber: {
        type: Number,
        required: true,
        default: 0
    },
    previousMeterReading: {
        type: Number,
        required: true,
        default: 0
    },
    currentMeterReading: {
        type: Number,
        required: true,
        default: 0
    },
    meterType: {
        type: String,
        required: true,
        default: ''
    },
    unitsConsumed: {
        type: Number,
        required: true,
        default: 0
    },
    tariffRate: {
        type: Number,
        required: true,
        default: 0
    },
    fixedCharges: {
        type: Number,
        required: true,
        default: 0
    },
    variableCharges: {
        type: Number,
        required: false,
        default: 0
    },
    additionalCharges: {
        type: Number,
        required: false,
        default: 0
    },
    taxes: {
        type: Number,
        required: false,
        default: 0
    },
    totalAmountPayable: {
        type: Number,
        required: true,
        default: 0
    },
    dueDate: {
        type: Date,
        required: true,
        default: ''
    },
    contactNumbers: {
        type: [String],
        required: true,
        default: ['']
    },
    websiteOrEmail: {
        type: String,
        required: false,
        default: ''
    },
    additionalNotes: {
        type: String,
        required: false,
        default: ''
    },
    paymentStatus:{
        type:String,
        default:'Not done'
    }
});


const consumerInfos = mongoose.model('consumerInfos', consumerInfoSchema);
module.exports = consumerInfos;