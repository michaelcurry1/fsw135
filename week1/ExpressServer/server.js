const express = require ("express");
const app = express();
const morgan = require('morgan')

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/moviesdb',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify: false

},
() => console.log("Connected to the DB")
)