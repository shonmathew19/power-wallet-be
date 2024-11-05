const consumerInfos = require('../Models/consumerInfoModel')
const users = require('../Models/userModel')

exports.consumerDetails = async (req, res) => {
    try {
        const {
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
//all consumers
exports.allConsumersApi = async (req, res) => {
    const allConsumers = await consumerInfos.find()
    res.status(200).json({ allConsumers })


}
//delete consumer by id
exports.deleteConsumerByIdApi = async (req, res) => {
    const { userId } = req.body;
    console.log(userId, '------------------usrID');
    try {
        const deletedConsumer = await consumerInfos.deleteOne({ userId: userId });
        const deletedUser = await users.deleteOne({ _id: userId });

     
        if (deletedConsumer.deletedCount === 0 && deletedUser.deletedCount === 0) {
            return res.status(404).json({ message: 'Consumer not found' });
        }

        res.status(200).json({ message: 'Consumer and user deleted successfully', deletedConsumer, deletedUser });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

//get consumerInfo by id
exports.consumerInfoById = async (req, res) => {
    const { userId } = req.body
    const consumer = await consumerInfos.findOne( userId )
    res.status(200).json({ consumer })


}
