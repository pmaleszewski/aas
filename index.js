const express = require('express')
const app = express()
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const mongo = require('./app/mongodb')
const router = require('./app/routes')


// intialize dotenv
dotenv.config()

// set our port
const port = process.env.PORT || 8080

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended:true
}))

//register routes
app.use(router)

// start mongo connection pool, then start express app
mongo.connect(process.env.MONGODB_URL)
    // .then(() => configMongoDB(app)) only is using config for special case at the top of project
    .then(() => app.listen(port))
    .then(() => console.log('go go go'))
    .catch((err) => {
        console.error(err)
        process.exit(1)
    })