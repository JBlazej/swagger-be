import mongoose from 'mongoose'
import {getDB} from '..'

// SCHEMA
// -----------------------------------------------------------------------------
const CustomerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true
  },
  tel: {
    type: String
  },
  adress: {
    street: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String }
  },
  password: {
    type: String,
    required: true
  },
  registered: {
    type: Boolean
  },
  created: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Customer', CustomerSchema)
