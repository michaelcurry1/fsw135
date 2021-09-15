const mongoose = require("mongoose")
const Schema = mongoose.Schema

const votesSchema = new Schema({
    issue: {
        type: Schema.Types.ObjectId,
        required: true
    },
    
    vote: {
        type: Number,
        default:0,
        required: true

    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true

    }
    
      
    })

module.exports = mongoose.model('votes',votesSchema)
