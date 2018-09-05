import {getProductAll, createProduct} from '../models/v0/product'

export async function create(req, res) {
  try{
    const product = await createProduct(req.body)
    res.status(200).send(product)

  }catch(error){
    res.status(400).json({error: 'Bad request'})
  }
}

export async function productAll (req, res) {
  try{
    const product = await getProductAll()
    res.status(200).send(product)

  }catch(error){
    res.status(400).json({error: 'Bad request'})
  }
}
