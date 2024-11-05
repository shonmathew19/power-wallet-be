const users = require('../Models/userModel')
const consumerInfos = require('../Models/consumerInfoModel')
const jwt = require('jsonwebtoken')

//register
exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const existingUser = await (users.findOne({ email: email }));
        if (existingUser) {
            res.status(406).json('account already exists')
        } else {
            const newUser = new users({
                username,
                email,
                password,

            })

            await newUser.save()
            const newConsumerInfos = new consumerInfos({
                userId: newUser._id,
                consumerNumber: req.body.consumerNumber || 0,
                consumerName: req.body.consumerName || 'needs to be updated',
                consumerAddress: req.body.consumerAddress || 'needs to be updated',
                billNumber: req.body.billNumber || 0,
                dateOfBillGeneration: req.body.dateOfBillGeneration || new Date(),
                meterNumber: req.body.meterNumber || 0,
                previousMeterReading: (req.body.previousMeterReading != null) ? req.body.previousMeterReading : 0,
                currentMeterReading: (req.body.currentMeterReading != null) ? req.body.currentMeterReading : 0,
                meterType: req.body.meterType || 'needs to be updated',
                unitsConsumed: (req.body.unitsConsumed != null) ? req.body.unitsConsumed : 0,
                tariffRate: (req.body.tariffRate != null) ? req.body.tariffRate : 0,
                fixedCharges: (req.body.fixedCharges != null) ? req.body.fixedCharges : 0,
                variableCharges: (req.body.variableCharges != null) ? req.body.variableCharges : 0,
                additionalCharges: (req.body.additionalCharges != null) ? req.body.additionalCharges : 0,
                taxes: (req.body.taxes != null) ? req.body.taxes : 0,
                totalAmountPayable: (req.body.totalAmountPayable != null) ? req.body.totalAmountPayable : 0,
                dueDate: req.body.dueDate || new Date(),
                contactNumbers: req.body.contactNumbers || 'needs to be updated',
                websiteOrEmail: req.body.websiteOrEmail || 'needs to be updated',
                additionalNotes: req.body.additionalNotes || 'needs to be updated'
            });
            
            
            

            await newConsumerInfos.save().catch(error => {
                console.error('Error saving consumer info:', error);
                res.status(500).json({ message: 'Error saving consumer information.' });
            });
            
            res.status(201).json({
                data: newUser,
            });


        }

    } catch (err) {
        res.status(500).json(err)
    }
}


//login
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await users.findOne({ email: email, password: password });
        if (existingUser) {
          
            const token = jwt.sign({ userId: existingUser._id }, 'shon123')
            console.log(token);

            res.status(201).json({
                data: existingUser,
                token: token
            })
        } else {
            res.status(401).json('Invalid email or password')
        }

    } catch (err) {
        res.status(400).json(err)
    }
}


//delete all

exports.deleteAll = async (req, res) => {
    try {
        await users.deleteMany({});
        res.status(204).send();
    } catch (error) {
        res.status(500).send();
    }
};
