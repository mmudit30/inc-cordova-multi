const mongoose = require('mongoose');
const validator = require('validator');

const model = mongoose.model('User', {
  name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
  },
  address:{
    type:String
  },
  pincode:{
    type:String
  },
  email: {
    type: String,
    unique: true,
  },
  username:{
    type: String,
    unique: true,
  },
  number:{
    type:Number,
    unique: true,
  },
  password:{
    type:String,
    required:true
  },
  salt:{
    type:String,
    required:true
  },
  joinDate:{
    type:Date,
    default: Date.now
  }

});

module.exports = model;
