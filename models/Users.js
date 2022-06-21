
const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema   = new Schema({

    name : {type: String, required: [ true, 'Name is required']},
    lastName : String, 
    email : {type: String, unique:true , required: [ true, 'Email is required']},
    password : {type: String , required: [ true, 'Password is required']},
    img: { type: String},
    role: { type: String, required: true, enum:['ADMIN_ROLE','USER_ROLE']},
    googleAuth : { login : false },
    state: { type: Boolean , default: true},
    dateRegister : { type: Date , default: Date.now },
    dateLogin : { type: Date , default: Date.now }
   

}) 

userSchema.methods.toJSON  = function(){

    const { _id,__v,password,...user } = this.toObject();
    return user;

}
const User = mongoose.model('User',userSchema)
module.exports = User