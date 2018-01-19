const mongodb = require('../mongodb')
const Message = require('../models/message')
const conn = mongodb.connection
const ObjectId = mongodb.ObjectId

module.exports = {
    readAll: readAll,
    create: create,
    update: update,
    deactivate: deactivate
}


function readAll() {
    return conn.db().collection('messages').find({ 'dateDeactivated': null }).toArray()
        .then(messages => {
            for (let i = 0; i < messages.length; i++) {
                let message = messages[i]
                message._id = message._id.toString()
            }
            return messages
        })
}

function create(model) {
    model.dateCreated = new Date()
    model.dateModified = new Date()
    model.dateDeactivated = null
    return conn.db().collection('messages').insert({
        dateCreated: model.dateCreated,
        dateModified: model.dateModified,
        dateDeactivated: model.dateDeactivated,
        name: model.name,
        message: model.message
    })
        .then(result => {
            result.insertedIds[0].toString()
        })
}

function update(id, model) {
    model.dateModified = new Date()
    return conn.db().collection('messages').updateOne({ _id: new ObjectId(id) },
        {
            $set: {
                dateCreated: model.dateCreated,
                dateModified: model.dateModified,
                dateDeactivated: model.dateDeactivated,
                name: model.name,
                message: model.message
            }
        }
    )
        .then(result => Promise.resolve())
}

function deactivate(id) {
    return conn.db().collection('messages').updateOne({ _id: new ObjectId(id) }, { $currentDate: { 'dateDeactivated': true, 'dateModified': true } })
        .then(result => Promise.resolve())
}