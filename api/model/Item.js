const mongoose = require('mongoose')
const validator = require('validator')
const Schema = mongoose.Schema
const model = mongoose.model('Item', {
  name: {
    type: String,
    required: true
  },
  description:{
    type: String,
    required: true
  },
  categoryID: {
    type:Schema.ObjectId,
    required: true
  },
  value:{
    type: Number,
    required: true
  },
  quantity:{
    type: Number,
    required: true
  },
  image:{
    type: String
  },
  thumbnail:{
    type: String
  },
  created_at:{
    type: Date,
    default: Date.now
  }

})

module.exports = model;
