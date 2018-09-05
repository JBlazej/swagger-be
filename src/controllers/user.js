import {getUserAll, getUserById} from '../models/v0/user'

export async function userAll (req, res) {
  try{
    const user = await getUserAll()
    res.status(200).send(user)

  }catch(error){
    res.status(400).json({error: 'Bad request'})
  }
}

export async function userById (req, res) {
  try{
    const id = req.params.id
    const user = await getUserById(id)
    res.status(200).send(user)

  }catch(error){
    res.status(400).json({error: 'Bad request'})
  }
}
