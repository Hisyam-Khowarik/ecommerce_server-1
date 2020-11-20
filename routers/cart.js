const router = require('express').Router()
const CartsController = require('../controllers/cartsController')

router.get('/', CartsController.listCarts)
router.post('/', CartsController.addCart)
router.get('/:id', CartsController.findCart)
router.put('/:id', CartsController.updateCart)
router.delete('/:id', CartsController.deleteCart)

module.exports = router