import {Router} from 'express'
import requireDir from 'require-dir'
import {verifyJsonWebToken} from './services/auth'
import path from 'path'

const htmlPath = path.join(__dirname, '../public/', 'index.html')

const router = Router()
const controllers = requireDir('./controllers')

// Source https://strongloop.com/strongblog/async-error-handling-expressjs-es7-promises-generators/#usinges7asyncawait
const wrap = fn => (...args) => fn(...args).catch(args[2])

// HOME
router.get('/', (req, res) => { res.sendFile(htmlPath) })

// USER
router.post('/api/user/sign-up', verifyJsonWebToken, wrap(controllers.user.userCreate))
router.post('/api/user/sign-in', wrap(controllers.user.userSignIn))

// TATTOO
router.get('/api/tattoo/all', wrap(controllers.tattoo.tattooAll))
router.get('/api/tattoo/:album', wrap(controllers.tattoo.tattooByAlbum))
router.get('/api/tattoo/:album/:name', wrap(controllers.tattoo.tattooByAlbumAndName))
router.get('/api/tattoo/image/src/:name', wrap(controllers.tattoo.tattooFindImage))

router.post('/api/tattoo/save-record', wrap(controllers.tattoo.tattooCreate))
router.post('/api/tattoo/upload-image', wrap(controllers.tattoo.tattooUploadNewImage))

router.put('/api/tattoo/modify/:name', wrap(controllers.tattoo.tattooModifyByName))

router.delete('/api/tattoo/delete/:id', wrap(controllers.tattoo.tattooDeleteById))

export default router
