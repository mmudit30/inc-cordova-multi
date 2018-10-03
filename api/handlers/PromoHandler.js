const mongoose = require('mongoose')
const Promise = require('bluebird')
const validator = require('validator')
const PromoModel = require('../model/Promo.js')
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

module.exports.getPromo = (event, context, callback) => {
  dbConnectAndExecute(mongoString, () => (
    PromoModel
      .find()
      .then(promo => callback(null, { statusCode: 200, body: JSON.stringify(promo) }))
      .catch(err => callback(null, createErrorResponse(err.statusCode, err.message)))
  ))
}

module.exports.createPromo = (event, context, callback) => {
    const data = JSON.parse(event.body)
    const promo = new  PromoModel({
      name: data.name,
      description: data.description,
      code: data.code,
      ItemID:data.items
    })

    dbConnectAndExecute(mongoString, () => (
      promo
        .save()
        .then(() => callback(null, {
          statusCode: 200,
          body: JSON.stringify({ id: promo.id }),
        }))
        .catch(err => callback(null, createErrorResponse(err.statusCode, err.message)))
    ))
  }

  module.exports.deletePromo = (event, context, callback) => {
    if (!validator.isAlphanumeric(event.pathParameters.id)) {
      callback(null, createErrorResponse(400, 'Incorrect id'))
      return
    }

    dbConnectAndExecute(mongoString, () => (
      PromoModel
        .remove({ _id: event.pathParameters.id })
        .then(() => callback(null, { statusCode: 200, body: JSON.stringify('Ok') }))
        .catch(err => callback(null, createErrorResponse(err.statusCode, err.message)))
    ))
  }

  module.exports.updatePromo = (event, context, callback) => {
    const data = JSON.parse(event.body)
    const id = event.pathParameters.id


    const promo = new PromoModel({
      _id: id,
      name: data.name,
      description: data.description,
      code: data.code,
      ItemID:data.items
    })


    dbConnectAndExecute(mongoString, () => (
      UserModel.findByIdAndUpdate(id, user)
        .then(() => callback(null, { statusCode: 200, body: JSON.stringify('Ok') }))
        .catch(err => callback(err, createErrorResponse(err.statusCode, err.message)))
    ))
  }
