import Bcrypt from 'bcrypt-node'

export async function createHash (password) {
    const salt = Bcrypt.genSaltSync()
    const hash = Bcrypt.hashSync(password, salt)

    return hash
}

export async function isValidPassword (pw, hash) {
    return Bcrypt.compareSync(pw, hash)  
}