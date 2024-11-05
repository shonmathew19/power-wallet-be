const priceUpdates = require('../Models/priceUpdatesModel')

//add price

exports.addPrice = async (req, res) => {
    console.log('indide')
    try {
        const { unitPrice,additionalCharges,taxes } = req.body

            console.log(unitPrice,
                additionalCharges,
                taxes)

        const newPrices = new priceUpdates({
            unitPrice,
            additionalCharges,
            taxes
        })
        await newPrices.save()
        res.status(201).json(newPrices)
    } catch (err) {
        res.status(500).json(err)
    }
}

//latest price

exports.latestPrice = async (req, res) => {
    try {
        const latestPriceUpdated = await priceUpdates.findOne().sort({ createdAt: -1 });
        if (!latestPriceUpdated) {
            return res.status(404).json('No price updates found.');
        }
        res.status(200).json(latestPriceUpdated);
    } catch (error) {
        res.status(500).json('Internal server error.');
    }
};
