const functions = require("firebase-functions")
const logger = require("firebase-functions/logger")
const firebase = require("firebase-admin")
const  express = require('express')
const engines = require('consolidate')
const path = require('path')

// const firebaseApp = firebase.initializeApp(
//      functions.config().firebase
// )

const landingRoutes = require('./routes/landingRoutes')

const app = express()

app.engine('hbs', engines.handlebars)
app.set('views', path.join(__dirname, "views"))
app.set('view engine', 'hbs')

app.use(express.json())
app.use(express.urlencoded({extended:false}))

// Routes
app.use(landingRoutes)

exports.app = functions.https.onRequest(app)