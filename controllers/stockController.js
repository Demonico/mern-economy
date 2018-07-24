const axios = require('axios')
const db = require('../models')
const keys = require('../config/keys')

// Alternative to the current auth creation
// const {intrinioUsername, intrinoPassword} = keys

// findAll searches the intrino API and returns only the entries we haven't already saved
module.exports = {
  findAll: function(req, res) {
    const params = Object.assign({
      identifier: 'AAPL'
    })
    const auth = Object.assign({
      username: keys.intrinioUsername,
      password: keys.intrinoPassword
    })
    axios
      .get('/prices', {
        auth,
        baseURL: 'https://api.intrinio.com',
        params
      })
      .then(response => {
        // console.log(response.data)
        /* db.Stock.find({ symbol: params.identifier })
          .then(stockDates =>
            response.data.filter(dateData =>
              stockDates.every(dbStock => dbStock.date.toString() !== dateData.date)
            )
          )
          .then(stocks => res.json(stocks.data))
          .catch(err => res.status(422).json(err)) */
        res.send(response.data)
      })
    // .then(response => console.log(response))
    // .catch(err => console.log('err', err))
  }
}
