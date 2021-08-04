const mongoose = require("mongoose")
const schema = mongoose.schema

const inventorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true 
    },
    release_year:{
        type: String,
        required: true,
        min:2000
    },
    color:{
        type: String,
        required: true,
    }    
    })

module.exports = mongoose.model('Inventory',inventorySchema)
