const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

const schema = {
    _id: Joi.objectId().allow(null),
    name: Joi.string().max(15).required(),
    message: Joi.string().max(30).required() 
}
module.exports = Joi.object().keys(schema)