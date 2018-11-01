import mongoose from 'mongoose'
import {getDB} from '..'

const tattooAlbums = ['tattoo', 'navrhy', 'flash']
const tattooSizes = ['10x10', '15x15', '20x20']

// TATTTO SCHEMA
// -----------------------------------------------------------------------------
const TattooSchema = new mongoose.Schema({
  name: {
    type: String,
    default: 'tattooImg'
  },
  size: {
    type: String,
    enum: tattooSizes
  },
  album: {
    type: String,
    enum: tattooAlbums
  },
  image: {
    url: {
      type: String,
      required: true
    }
  },
  created: {
    type: Date,
    default: Date.now
  }
})

// METHODS
// -----------------------------------------------------------------------------
export async function getTattooAll () {
  const tattoo = await getDB().model('Tattoo', TattooSchema).find({})

  return tattoo
}

export async function getTattooByAlbum (album) {
  const tattoo = await getDB().model('Tattoo', TattooSchema).find({"album": album})
  
  return tattoo
}

export async function getTattooByAlbumAndName (name, album) {
  const tattoo = await getDB().model('Tattoo', TattooSchema).find({"name": name, "album": album})
  
  return tattoo
}

export async function modifyTattooByName (name, payload) {
  const tattoo = await getDB().model('Tattoo', TattooSchema).findOneAndUpdate({name: name}, payload, {new: true})
  
  return tattoo
}

export async function deleteTattooById (id) {
  const tattoo = await getDB().model('Tattoo', TattooSchema).findOneAndRemove({_id: id})
  
  return tattoo
}


export async function createNewTatttoo (payload) {
  const Tattoo = await getDB().model('Tattoo', TattooSchema)
  const tattoo = new Tattoo(payload)

  tattoo.save()

  return tattoo
}
