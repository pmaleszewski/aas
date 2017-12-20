const express = require('express')
const app = express()
// const dotenv = require('dotenv')
const bodyParser = require('body-parser')
// const mongo = require('./app/mongodb')
const router = require('./app/routes')


//intialize dotenv
// dotenv.config()

//set our port



app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended:true
}))

//register routes
app.use(router)

//start mongo connection pool, then start express pp
// mongo.connect(process.env.MONGO_URL)
// .then(() => 
    app.listen(8080)
    console.log("go go go")