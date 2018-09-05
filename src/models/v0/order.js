import mongoose from 'mongoose'
import {getDB} from '..'
// SCHEMA
// -----------------------------------------------------------------------------
const Good = new mongoose.Schema({
  id: String,
  name: String,
  size: String,
  amount: Number
})

const OrderSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    lowercase: true
  },
  userId: {
    type: String
  },
  price: {
    type: Number
  },
  good: [Good],
  status: String,
  dph: Number,
  created: {
    type: Date,
    default: Date.now
  }
})


module.exports = mongoose.model('Order', OrderSchema);
