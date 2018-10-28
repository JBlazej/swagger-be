import jwt from 'jsonwebtoken'

const secret = process.env.NODE_ENV === 'production' ? process.env.JWT_SECRET : 'secret'

export async function issueJsonWebToken (payload) {
  return jwt.sign(payload, secret, { expiresIn: 10800 })
}

export async function verifyJsonWebToken (req, res) {
  if( req.hasOwnProperty('headers') && req.headers.hasOwnProperty('authorization') ) {
    try {
      req.user = jwt.verify(req.headers['authorization'], 'secret')
    } catch(err) {
      return res.status(401).json({
        error: {
          msg: 'Failed to authenticate token!'
        }
      })
    }
  } else {
    return res.status(401).json({
      error: {
        msg: 'No token!'
      }
    })
  }
 
  return
}