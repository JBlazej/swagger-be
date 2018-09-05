import {getAll, getByEmail} from '../models/v0/oser'

export async function all (req, res) {
  try{
    const user = await getAll()
    res.status(200).send(user)

  }catch(error){
    console.log('Když error tak hláška pro uživatele',error)
  }
}

export async function byEmail (req, res) {
  try{
    const email = req.params.email
    const user = await getByEmail(email)
    res.status(200).send(user)

  }catch(error){
    console.log('Když error tak pro uživatele',error)
  }
}
