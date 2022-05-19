const { Response } = require("express")
const spendingModel  = require('../models/Spending');

const spendingGet = async (req,res = Response) => {

    const spe = new spendingModel({
        name:  'galleta', // String is shorthand for {type: String}
        price: 0.50,
        amount:   2
    });

    const result = await spe.save()

    return res.json({
        result
    })

}

module.exports = spendingGet