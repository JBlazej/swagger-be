import fs from 'fs'
import path from 'path'

const serverImagesPath = path.join(__dirname, '../../public', 'images')


export async function getFileOptions(){
    const options = {
        root: serverImagesPath,
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    }

    return options
}

export async function uploadFile(setFile) {
    if (fs.existsSync(serverImagesPath + '/' + setFile.files.name)){
        return false

    }else {
        setFile.files.mv(serverImagesPath + '/' + setFile.files.name)
        return true
    }
}