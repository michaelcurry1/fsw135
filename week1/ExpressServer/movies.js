const mongoose = require("mongoose")
const schema = mongoose.schema

const movieSchema = new mongoose.Schema({
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
        min:1874
    }
})
module.exports = mongoose.model('Movie',movieSchema)