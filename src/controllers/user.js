import {getUserAll, getUserById, createNewUser, getUserByEmail} from '../models/v0/user'
import {createHash, isValidPassword} from '../services/bcrypt'
import {issueJsonWebToken} from '../services/auth'

// USER Controller
// -----------------------------------------------------------------------------
export async function userAll (req, res){
  try{
    const user = await getUserAll()
    res.status(200).send(user)
  }catch(error){
    res.status(400).json({error : 'Bad request'})
  }
}

export async function userById (req, res) {
  try{
    const id = req.params.id
    const user = await getUserById(id)
    res.status(200).send(user)
  }catch(error){
    res.status(400).json({error : 'Bad request'})
  }
}

export async function userCreate (req, res){
  try{
    const email = req.body.email
    const password = req.body.password
    const userCheck = await getUserByEmail(email)
    
    if (!password || !email || userCheck.length === 1) {
      return res.status(400).json({error : 'Email existed or password not provided'})
    } else {
      const hash = await createHash(password)
      const user = await createNewUser(email, hash)
      res.status(200).json({good : 'User created'})
    } 
  }catch(error){
    res.status(400).json({error: 'Bad request'})
  }
}

export async function userSignIn (req, res) {
  try{
    const email = req.body.email
    const password = req.body.password
    const user = await getUserByEmail(email)
    const userId = []
    const hashPasswd = []
    
    for (let value of Object.values(user)) {
      hashPasswd.push(value.password)
      userId.push(value._id)
    }

    if (user.length === 0 || !isValidPassword(password, hashPasswd.toString())) {
      return res.status(401).json({error : 'Unauthorized Access'})
    } else{

      let userSignature = {
        'email': email,
        '_id': userId.toString()
      }

      const JsonWebToken = await issueJsonWebToken(userSignature)
     
      res.status(200).json({
        email : email,
        token : JsonWebToken
      })
    }
    
  }catch(error) {
    res.status(400).json({error : 'Bad request'})
  }
}
