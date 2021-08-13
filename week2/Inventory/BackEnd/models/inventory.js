const mongoose = require("mongoose")
const schema = mongoose.schema

const inventorySchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true 
    },
    exp_date:{
        type: String,
        required: true,
        
    }
      
    })

module.exports = mongoose.model('Inventory',inventorySchema)
