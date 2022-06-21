const mongoose = require('mongoose')
const { Schema } = mongoose;

const spendingSchema = new Schema({
    name:  String, // String is shorthand for {type: String}
    price:  Number,
    amount:   Number,
    total : {type: Number, default: 0},
    registerDate: { type: Date, default: Date.now }
  });

spendingSchema.methods.calculateTotal = function calculateTotal(price){
   this.total = this.total + price
}

const spendingModel = mongoose.model('Spending',spendingSchema)


module.exports = spendingModel