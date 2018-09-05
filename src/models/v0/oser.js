import mongoose from 'mongoose'
import {getDB} from '..'

// SCHEMA
// -----------------------------------------------------------------------------
const OserSchema = new mongoose.Schema({
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true
    },
    created: {
      type: Date,
      default: Date.now
    }
  })

// METHODS
// -----------------------------------------------------------------------------
  
export async function getAll () {
  const oser = await getDB().model('Oser', OserSchema).find({})
   
  return oser
}

export async function getByEmail (email) {
  const oser = await getDB().model('Oser', OserSchema).find({email: email})
  
  return oser
}