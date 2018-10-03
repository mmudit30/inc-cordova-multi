const mongoose = require('mongoose')
const validator = require('validator')
const Schema = mongoose.Schema
const model = mongoose.model('Item', {
  name: {
    type: String,
    required: true,
  },
  description:{
    type: String,
    required: true
  },
  ItemID: {
    type:[Schema.ObjectId]
  },
  code:{
    type: String,
    required: true,
  },
  created_at:{
    type: Date,
    default: Date.now
  }

})

module.exports = model;
