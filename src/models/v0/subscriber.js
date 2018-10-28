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
export async function getSubsAll () {
  const subs = await getDB().model('Subscriber', SubscriberSchema).find({})

  return subs
}


export async function createNewSubs (email) {
  const Subs = await getDB().model('Subscriber', SubscriberSchema)
  const subs = new Subs({email: email})
  subs.save()

  return subs

}