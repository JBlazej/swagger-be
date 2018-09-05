import mongoose from 'mongoose'
import {getDB} from '..'

// SCHEMA
// -----------------------------------------------------------------------------
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
})

// METHODS
// -----------------------------------------------------------------------------

export async function getUserAll () {
  const user = await getDB().model('User', UserSchema).find({})

  return user
}

export async function getUserById (id) {
  const user = await getDB().model('User', UserSchema).find({_id: id})

  return user
}

/*
exports.signIn = (req, res) => {
  User.findOne({email: req.body.email}, (error, user) => {
    if (user === null || !isValidPassword(user, req.body.password)) {
      return res.status(401).json({
        error: {
          msg: 'Unauthorized Access'
        }
      })
    }

    const JWTToken = jwt.sign({
      email: user.email,
      _id: user._id
    },
    'TadyJeSecret',
    {
      expiresIn: '3H',
      algorithm: 'HS256'
    })

    res.status(200).json({
      id: user._id,
      email: user.email,
      good: {
        token: JWTToken
      }
    })
  })
}


exports.signUp = (req, res) => {
  const hash = createHash(req.body.password)
  const user = new User({
    email: req.body.email,
    password: hash
  })

  user.save((err) => {
    if (err)
    return res.status(500).json({
      error: {
        msg: 'Not saved'
      }
    })

    res.status(201).json({
      good: {
        msg: 'New user with email ' + user.email + ' was sign up'
      }
    })
  })
}

exports.updateUserPassword = (req, res) => {
  if (req.body.password === "" ) {
    return res.status(401).json({
      error: {
        msg: 'No passwd send'
      }
    })
  } else {
    const hash = createHash(req.body.password)
    User.findOneAndUpdate({_id: req.params.id}, { password: hash }, (err, p) => {
      if (err) {
        return res.status(500).json({
          error: {
            msg: 'User not found (_id)'
          }
        })
      }
    res.status(200).send(p)
    })
  }
}


exports.deleteUser = (req, res) => {
  User.findOneAndRemove({_id: req.params.id }, (err, p) => {
    if (err)
    return res.status(500).json({
      error: {
        msg: 'User not found (_id)'
      }
    })

    res.status(201).json({
      good: {
        msg: 'User ' + p.email + ' was deleted'
      }
    })
  })
}

function isValidPassword(user, password){
  return Bcrypt.compareSync(password, user.password);
}

function createHash(password){
  return Bcrypt.hashSync(password, Bcrypt.genSaltSync(10), null);
}

*/
