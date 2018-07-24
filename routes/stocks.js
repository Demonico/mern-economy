const router = require('express').Router()
const stockController = require('../controllers/stockController')

router.route('/').get(stockController.findAll)

module.exports = router
