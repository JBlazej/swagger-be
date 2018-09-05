import mongoose from 'mongoose'
import {getDB} from '..'

// SCHEMA
// -----------------------------------------------------------------------------
const ProductSchema = new mongoose.Schema({
  id: String,
  heading:  {
    type: String,
    required: true
  },
  shortText: {
    type: String,
    required: true
  },
  longText: {
    type: String,
     required: true
   },
  img: [{
    type: String
  }],
  color: {
    type: String,
     required: true
   },
  size: {
    type: String,
     required: true
   },
  price: {
    type: String,
     required: true
   },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

// METHODS
// -----------------------------------------------------------------------------

export async function getProductAll () {
  const product = await getDB().model('Product', ProductSchema).find({})

  return product
}

export async function getProductById (id) {
  const product = await getDB().model('Product', ProductSchema).find({_id: id})

  return product
}

export async function createProduct (body) {
  const product = await getDB().model('Product', ProductSchema).create(body)

  return product
}


/*
exports.productAll = (req, res) => {
  Product.find({}, (err, p) => {
    if (err)
      return res.status(404).json({
          error: {
              msg: 'No data'
          }
      })

    res.status(200)
    res.json(p)
  })
}


exports.oneProduct = (req, res, next) => {
  Product.findOne({id: req.params.id}, (err, p) => {
    if (!p)
    return res.status(404).json({
      error: {
        msg: 'Bad ID of product'
      }
    })

    res.status(200)
    res.json(p)
  })
}


exports.findProductImage = (req, res) => {
  const options = {
  root: path.join('public', 'images'),
  dotfiles: 'deny',
  headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }

  const fileName = req.params.image

  res.sendFile(fileName, options, (err) => {
    if (err)
    return res.status(404).json({
      error: {
        msg: 'File not found'
      }
    })

    res.status(200)
  })
}

exports.saveProductImage = (req, res) => {
  if (!req.files)
  return res.status(400).json({
    error: {
      msg: 'No file send'
    }
  })

  let sampleFile = req.files

  if (fs.existsSync('public/images/' + sampleFile.files.name)) {
    return res.status(409).json({
      error: {
        msg: 'Image with same name ' + sampleFile.files.name + ' already exist'
      }
    })
  } else {
    sampleFile.files.mv('public/images/' + sampleFile.files.name, (err) => {
      if (err)
      return res.status(500).json({
        error: {
          msg: err
        }
      })

      res.status(201).json({
        good: {
          msg: 'Image ' + sampleFile.files.name + ' was upload'
        }
      })
    })
  }
}

exports.createProduct = (req, res) => {
  Product.create(req.body, (err, post) => {
    if (err)
    return res.status(400).json({
      error: {
        msg: 'No object send'
      }
    })

    res.status(201).json(post)
  })
}

exports.deleteProduct = (req, res) => {
  Product.findOneAndRemove({ id: req.params.id }, (err, p) => {
    if (err)
    return res.status(500).json({
      error: {
        msg: 'Product not found (id)'
      }
    })

    res.status(201).json({
      good: {
        msg: 'Product ' + p.id + ' ' + p.heading + ' was deleted'
      }
    })
  })
}

exports.updateOneProduct = (req, res) => {
  Product.findOneAndUpdate({id: req.params.id}, req.body, {new: true}, (err, p) => {
    if (err) {
      return res.status(500).json({
        error: {
          msg: 'Product not found (id)'
        }
      })
    }

  res.status(200).send(p)
  })
}
*/
