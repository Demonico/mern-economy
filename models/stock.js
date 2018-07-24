const mongoose = require('mongoose')
const Schema = mongoose.Schema

const stockSchema = new Schema({
  symbol: {type: String, required: true},
  data: [{
    date: {type: String},
    open: {type: Number},
    close: {type: Number},
    high: {type: Number},
    low: {type: Number},
    volume: {type: Number},
  }]
})

const Stock = mongoose.model('Stock',stockSchema)

module.exports = Stock