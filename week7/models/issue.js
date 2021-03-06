const mongoose = require("mongoose")
const Schema = mongoose.Schema

const issueSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    vote: {
        type: Number,
        default:0

    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true

    }
    
      
    })

module.exports = mongoose.model('issue',issueSchema)
