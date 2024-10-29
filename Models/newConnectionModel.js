const mongoose = require('mongoose');

const newConnectionSchema = new mongoose.Schema({
    applicantName: {
        type: String,
        required: true,
    },
    contactNumber: {
        type: String,
        required: true
    },
    emailId: {
        type: String,
        required: true
    },
    permanentAddress: {
        type: String,
        required: true
    },
    temporaryAddress: {
        type: String,
        required: true
    },
    aadharNumber: {
        type: Number,
        required: true
    },
    typeOfPremises: {
        type: String,
        required: true
    },
    connectionPurpose: {
        type: String,
        required: true
    },
    addressOfPremise: {
        type: String,
        required: true
    },
   
    expectedLoad: {
        type: Number,
        required: true
    }

})

const newConnections = mongoose.model("newConnections", newConnectionSchema);
module.exports = newConnections;