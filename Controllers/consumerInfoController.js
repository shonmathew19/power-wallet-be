const consumerInfos = require('../Models/consumerInfoModel')

exports.consumerDetails = async (req, res) => {
    try {
        const { consumerNumber,
            consumerName,
            consumerAddress,
            billNumber,
            dateOfBillGeneration,
            meterNumber,
            previousMeterReading,
            currentMeterReading,
            meterType,
            unitsConsumed,
            tariffRate,
            fixedCharges,
            variableCharges,
            additionalCharges,
            taxes,
            totalAmountPayable,
            dueDate,
            contactNumbers,
            websiteOrEmail,
            additionalNotes
        } = req.body

        const newConsumerDetails = new consumerInfos({
            consumerNumber,
            consumerName,
            consumerAddress,
            billNumber,
            dateOfBillGeneration,
            meterNumber,
            previousMeterReading,
            currentMeterReading,
            meterType,
            unitsConsumed,
            tariffRate,
            fixedCharges,
            variableCharges,
            additionalCharges,
            taxes,
            totalAmountPayable,
            dueDate,
            contactNumbers,
            websiteOrEmail,
            additionalNotes

        })

        await newConsumerDetails.save();
        res.status(200).json('New consumer details added successfully')
    } catch (err) {
        res.status(401).json(err)
    }
}

exports.allConsumersApi = async (req, res) => {
    const allConsumers = await consumerInfos.find()
    res.status(200).json({allConsumers})

}