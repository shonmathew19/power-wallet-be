const consumerInfos = require('../Models/consumerInfoModel');
const newConnections = require('../Models/newConnectionModel')

exports.connectionApplication = async (req, res) => {
    try {
        const { applicantName,
            contactNumber,
            emailId,
            permanentAddress,
            temporaryAddress,
            aadharNumber,
            typeOfPremises,
            connectionPurpose,
            addressOfPremise,
            
            expectedLoad } = req.body;
        const newConnectionApplication = new newConnections({
            applicantName,
            contactNumber,
            emailId,
            permanentAddress,
            temporaryAddress,
            aadharNumber,
            typeOfPremises,
            connectionPurpose,
            addressOfPremise,
            expectedLoad
        });

        await newConnectionApplication.save();
        res.status(201).json('New connection appication submitted');
    } catch (err) {
        res.status(401).json(err);
    }
}

exports.viewAllNewConnections = async(req,res)=>{
    const viewAllNewConnections = await newConnections.find()
    res.status(201).json(viewAllNewConnections);
}