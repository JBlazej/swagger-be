import mongoose from 'mongoose'
import {getDB} from '..'

// USERS SCHEMA
// -----------------------------------------------------------------------------
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: true
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

export async function getUserByEmail (email) {
  const user = await getDB().model('User', UserSchema).find({email: email})
  
  return user
}

export async function createNewUser (email, password) {
  const User = await getDB().model('User', UserSchema)
  const user = new User({email: email, password: password})
  user.save()

  return user

}
