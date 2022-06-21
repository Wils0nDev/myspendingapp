const mongoose = require('mongoose');
const {Schema} = mongoose;


const roleSquema = new Schema({
    role: {
        type:String,
        required : [true, 'El rol es obligatorio']
    }
})


const Role = mongoose.model('Role',roleSquema)
module.exports = Role