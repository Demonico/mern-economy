const router = require('express').Router()

const stockRoutes = require('./stocks')

// Set routes
router.use('/stocks', stockRoutes)

module.exports = router