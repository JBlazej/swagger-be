import {getTattooAll, createNewTatttoo, getTattooByAlbum, getTattooByAlbumAndName, modifyTattooByName, deleteTattooById} from '../models/v0/tattoo'
import {getFileOptions, uploadFile} from '../services/file'

// TATTOO Controller
// -----------------------------------------------------------------------------
export async function tattooAll (req, res){
    try{
        const tattoo = await getTattooAll()
        res.status(200).send(tattoo)
    }catch(error){
        res.status(400).json({error : 'Bad request'})
    }
}

export async function tattooByAlbum (req, res){
    try{
        const tattoo = await getTattooByAlbum(req.params.album)

        if (tattoo.length === 0){
            return res.status(400).json({error : 'No images in Album'})
        } else{
        res.status(200).send(tattoo)
        }
    }catch(error){
        res.status(400).json({error : 'Bad request'})
    }
}

export async function tattooByAlbumAndName (req, res){
    try{
        const tattoo = await getTattooByAlbumAndName(req.params.name, req.params.album)

        if (tattoo.length === 0){
            return res.status(400).json({error : 'No image in Album'})
        } else{
        res.status(200).send(tattoo)
        }
    }catch(error){
        res.status(400).json({error : 'Bad request'})
    }
}

export async function tattooCreate (req, res){
    try{
        //const hop = {"size":"10x10", "album":"Tattoo", "image":{"url":"ahoj.jpg"}}
        const tattoo = await createNewTatttoo(req.body)
        res.status(200).json({good : 'Tattoo created'})
    }catch(error){
        res.status(400).json({error : 'Bad request'})
    }
}

export async function tattooFindImage (req, res){
    try{
        const options = await getFileOptions()
        const fileName = req.params.name

        res.sendFile(fileName, options, (err) => {
            if (err)
            return res.status(404).json({
              error: {
                msg: 'File not found'
              }
            })
        
            res.status(200)
        })
    }catch(error){
        res.status(400).json({error : 'Bad request'})
    }
}

export async function tattooUploadNewImage (req, res){
    try{
        if (!req.files){
            return res.status(400).json({
                error: {
                    msg: 'No file send or name of image already existed'
                }
            })
        }

        const final = await uploadFile(req.files)

        if (final === false){
            return res.status(400).json({
                error: {
                    msg: 'Name of image already existed'
                }
            })
        }else {
            res.status(200).json({good : 'Tattoo image uploaded'})
        }    
        
    }catch(error){
        res.status(400).json({error : 'Bad request'})
    }
}

export async function tattooModifyByName (req, res){
    try{
        const payload = req.body
        const name = req.params.name
        const tattoo = await modifyTattooByName(name, payload)
        if (tattoo === null){
            return res.status(400).json({error : 'Nothing changed'})
        }else {
            res.status(200).send(tattoo)
        }
    }catch(error){
        res.status(400).json({error : 'Bad request'})
    }
}

export async function tattooDeleteById (req, res){
    try{
        const id = req.params.id
        const tattoo = await deleteTattooById(id)
        console.log(id)
        console.log(tattoo)
        res.status(200).send(tattoo)
    
    }catch(error){
        res.status(400).json({error : 'Bad request'})
    }
}