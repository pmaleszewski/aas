// const { MongoClient, ObjectId} = require('mongodb')

// let _conn = null

// function connect(ur){
//     if(_conn !== null){return Promise.resolve(_conn)}

//     return MongoClient.connect(url)
//     .then(conn => _conn = conn)

// }

// module.exports = {
//     connect,
//     connection: {conn: () => _conn},
//     ObjectId
// }