import {Router} from 'express'
import requireDir from 'require-dir'

const router = Router()
const controllers = requireDir('./controllers')

// Source https://strongloop.com/strongblog/async-error-handling-expressjs-es7-promises-generators/#usinges7asyncawait
const wrap = fn => (...args) => fn(...args).catch(args[2])

// TEST
router.get('/api/oser', wrap(controllers.oser.all))
router.get('/api/oseros/:email', wrap(controllers.oser.byEmail))

// PRODUCT
router.get('/api/product/all', wrap(controllers.product.productAll))
router.post('/api/product/', wrap(controllers.product.create))

export default router
