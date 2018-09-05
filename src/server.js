import express from 'express'
import bodyParser from 'body-parser'
import router from './router'
import logger from './logger'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import serveFavicon from 'serve-favicon'
import path from 'path'
import expressFileupload from 'express-fileupload'
import { corsOptions } from './conf/cors'
import {connectDB} from './models'

const app = express()
connectDB()

app.use(cors(corsOptions))
app.use('/public', express.static(__dirname + '/public/'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(serveFavicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(expressFileupload())

app.use(router)

let shuttingDown = false

app.get('/', (req, res) => {
  res.status(200).json({ Server: "Status OK" })
})

app.set('port', (process.env.PORT || 3000))
app.listen(app.get('port'), () => {
  console.log('App running on port ', app.get('port'))
})

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
