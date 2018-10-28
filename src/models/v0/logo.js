import mongoose from 'mongoose'
import {getDB} from '..'

// LOGO SCHEMA
// -----------------------------------------------------------------------------
const LogoSchema = new mongoose.Schema({
    img: {
        url: {
            type: String
        }
    }
})

// METHODS
// -----------------------------------------------------------------------------