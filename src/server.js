import express from 'express'
import bodyParser from 'body-parser'
import 'babel-polyfill'
import router from './router'
import logger from './logger'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import serveFavicon from 'serve-favicon'
import path from 'path'
import expressFileupload from 'express-fileupload'
import { corsOptions } from './conf/cors'
import { connectDB } from './models'
import sslRedirect from 'heroku-ssl-redirect'
import { wakeUpServer } from './services/wake'

// EXPRESS JS
const app = express()
// DB
connectDB()
// CRON HEROKU 
wakeUpServer()
// CORS
app.use(cors(corsOptions))
// SSL
app.use(sslRedirect())
// PUBLIC
app.use('/public', express.static(__dirname + '../public/'))
// BODY
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// COOKIE
app.use(cookieParser())
// FAV
app.use(serveFavicon(path.join(__dirname, '../public', 'favicon.ico')))
// FILES
app.use(expressFileupload())
// ROUTER
app.use(router)
// PORT
app.set('port', (process.env.PORT || 3000))

// HANDLINGS ERRORS
let shuttingDown = false

app.use((req, res, next) => {
  if (!shuttingDown) return next()

  res.setHeader('Connection', 'close')
  const err = new Error('Server is in the process of restarting')
  err.status = 503
  next(err)
})

app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send({'error': err.message})
  if (app.get('env') === 'development') {
    logger.error(err)
  }
})

export default app
