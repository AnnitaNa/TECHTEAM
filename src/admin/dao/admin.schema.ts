import mongoose from 'mongoose'

const Schema = mongoose.Schema

const adminSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

 export const adminModel = mongoose.model('Admin', adminSchema)