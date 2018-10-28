import {getSubsAll, createNewSubs} from '../models/v0/subscriber'


// USER Controller
// -----------------------------------------------------------------------------
export async function subsAll (req, res){
  try{
    const subs = await getSubsAll()
    res.status(200).send(subs)
  }catch(error){
    res.status(400).json({error : 'Bad request'})
  }
}

export async function subsCreate (req, res){
    try{
        const subs = await createNewSubs(req.body.email)
        console.log(subs)
        res.status(200).json({good : 'Tattoo created'})
    }catch(error){
        res.status(400).json({error : 'Bad request'})
    }
}