const mongoose = require("mongoose")
const Schema = mongoose.Schema
const bcrypt = require ('bcrypt')

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

    userSchema.pre('save', function(next){
      const user = this
      if(!user.isModified('password')) return next()
      bcrypt.hash(user.password, 8, (err, hash) => {
        if(err) return next(err)
        user.password = hash
        next()
      })
    })

    userSchema.methods.checkPassword = function(passwordAttempt, callback) {
      bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if(err) return callback(err)
        return callback(null, isMatch)
      })
    }

    userSchema.methods.withoutPassword = function(){
      const user = this.toObject()
      delete user.password
      return user
    }

module.exports = mongoose.model('user',userSchema)
