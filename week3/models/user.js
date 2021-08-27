const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    email:{
        type: String,
        lowercase: true,
        trim: true,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        unique: true
      },
      password: {
        type: String,
        required: true
      },
      memberSince: {
        type: Date,
        default: Date.now()
      }
      
    })

module.exports = mongoose.model('user',userSchema)
