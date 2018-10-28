import mongoose from 'mongoose'
import {getDB} from '..'

// SUBSCRIBERS SCHEMA
// -----------------------------------------------------------------------------
const SubscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: true
  },
  isSub: {
    type: Boolean,
    default: true
  },
  created: {
    type: Date,
    default: Date.now
  }
})

// METHODS
// -----------------------------------------------------------------------------