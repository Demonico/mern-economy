// Packages
const express = require('express')
const mongoose = require('mongoose')

// Internal config
const routes = require('./routes')

// Initialize Express
const app = express()

// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
app.use(routes)

// Set PORT
const PORT = process.env.PORT || 3001

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/stockdemo')

process.on('uncaughtException', function (err) {
  console.log(err)
})

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
)
