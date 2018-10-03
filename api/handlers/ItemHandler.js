const mongoose = require('mongoose')
const Promise = require('bluebird')
const validator = require('validator')
const ItemModel = require('../model/Item.js')
require('dotenv').config()
mongoose.Promise = Promise;

const mongoString = process.env.MONGO_URI // MongoDB Url

const createErrorResponse = (statusCode, message) => ({
  statusCode: statusCode || 501,
  headers: { 'Content-Type': 'text/plain' },
  body: message || 'Incorrect id',
});

const dbExecute = (db, fn) => db.then(fn).finally(() => db.close());

function dbConnectAndExecute(dbUrl, fn) {
  return dbExecute(mongoose.connect(dbUrl, { useMongoClient: true }), fn)
}

module.exports.getItem= (event, context, callback) => {
  dbConnectAndExecute(mongoString, () => (
    ItemModel
      .find()
      .then(item=> callback(null, { statusCode: 200, body: JSON.stringify(item) }))
      .catch(err => callback(null, createErrorResponse(err.statusCode, err.message)))
  ))
}

module.exports.createItem= (event, context, callback) => {
    const data = JSON.parse(event.body)
    const id = event.pathParameters.id;
    const item= new  ItemModel({
      name: data.name,
      description: data.description,
      value: data.value,
      image: data.image,
      thumbnail: data.thumbnail,
      categoryID: id

    })

    dbConnectAndExecute(mongoString, () => (
      category
        .save()
        .then(() => callback(null, {
          statusCode: 200,
          body: JSON.stringify({ id: category.id }),
        }))
        .catch(err => callback(null, createErrorResponse(err.statusCode, err.message)))
    ))
  }

  module.exports.deleteItem= (event, context, callback) => {
    if (!validator.isAlphanumeric(event.pathParameters.id)) {
      callback(null, createErrorResponse(400, 'Incorrect id'))
      return
    }

    dbConnectAndExecute(mongoString, () => (
      ItemModel
        .remove({ _id: event.pathParameters.id })
        .then(() => callback(null, { statusCode: 200, body: JSON.stringify('Ok') }))
        .catch(err => callback(null, createErrorResponse(err.statusCode, err.message)))
    ))
  }

  module.exports.updateItem= (event, context, callback) => {
    const data = JSON.parse(event.body)
    const id = event.pathParameters.id


    const item= new ItemModel({
      _id: id,
      name: data.name,
      description: data.description,
      value: data.value,
      image: data.image,
      thumbnail: data.thumbnail,
      categoryID: data.categoryID
    })


    dbConnectAndExecute(mongoString, () => (
      UserModel.findByIdAndUpdate(id, user)
        .then(() => callback(null, { statusCode: 200, body: JSON.stringify('Ok') }))
        .catch(err => callback(err, createErrorResponse(err.statusCode, err.message)))
    ))
  }
