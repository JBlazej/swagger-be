import mongoose from 'mongoose'
import {getDB} from '..'

// CONTACT SCHEMA
// -----------------------------------------------------------------------------
const ContactSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: true
  },
  phone: {
    type: String
  }
})

// METHODS
// -----------------------------------------------------------------------------