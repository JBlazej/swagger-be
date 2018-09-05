import mongoose from 'mongoose'

let db

function getMongoUrl () {
  const url = 'ds123181.mlab.com:23181/heroku_l2c53rhf'
  const user = 'heroku_l2c53rhf'
  const pass = '7hkctfmjj5gv6kodp6g50fhsso'

  return `mongodb://${user}:${pass}@${url}`
}

export async function connectDB () {
  const url = getMongoUrl()
  try{
    db = await mongoose.connect(url)
    console.log('DB connection OK')
  } catch(error){
    console.log(error)
  }
}

export function getDB () {
    if (!db) throw new Error(500, 'Database connection error')
    return db
}

export async function closeDBconnection () {
    if (!db) return
    await db.close(true)
}

