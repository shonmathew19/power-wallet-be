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
            additionalNotes,
            paymentStatus

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
    const { userId } = req.params;
    try {
        const consumer = await consumerInfos.findOne({ userId:userId });
        res.status(200).json({ consumer });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch consumer information." });
    }
};


//edit consumers from admin

exports.updateConsumerByIdApi = async (req, res) => {
    const { userId } = req.params; 

    const updateData = req.body;

    try {
        const updatedConsumer = await consumerInfos.findOneAndUpdate(
            { userId: userId }, 
            updateData,
            { new: true }
        );

        if (!updatedConsumer) {
            return res.status(404).json({ message: 'Consumer not found' });
        }

        const updatedUser = await users.findOneAndUpdate(
            { _id: userId },
            // { email: updateData.websiteOrEmail },
            // {consumerName:updateData.consumerName},
            { new: true }
        );

        res.status(200).json({
            message: 'Consumer details updated successfully',
            updatedConsumer,
            updatedUser
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};