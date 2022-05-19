const mongoose = require('mongoose')
const { Schema } = mongoose;

const spendingSchema = new Schema({
    name:  String, // String is shorthand for {type: String}
    price: Number,
    amount:   String,
    registerDate: { type: Date, default: Date.now }
  });


const spendingModel = mongoose.model('Spending',spendingSchema)


module.exports = spendingModel