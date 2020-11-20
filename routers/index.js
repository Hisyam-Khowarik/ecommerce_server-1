const router = require('express').Router()
const routeUsers = require('./users')
const routeProducts = require('./products')
const routeCart = require('./cart')
const routeWishlist = require('./wishlist')


router.use('/', routeUsers)
router.use('/products', routeProducts)
router.use('/carts', routeCart)
router.use('/wishlist', routeWishlist)

module.exports = router