const mongoose = require("mongoose")
const schema = mongoose.schema

const issueSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    }
    
      
    })

module.exports = mongoose.model('issue',issueSchema)
