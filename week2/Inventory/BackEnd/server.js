const express = require ("express");
const app = express();
//const morgan = require('morgan')
const mongoose = require('mongoose')

app.use("/", express.json())

//app.use(morgan)

mongoose.connect('mongodb://localhost:27017/inventoryStore',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify: false

},
() => console.log("Connected to the DB")
)

app.use("/inventory",require('./routes/inventoryRouter'))

app.use((err,req,res,next)=>{
    console.log(err)
    return res.send({errorMessage:err.errorMessage})
})

app.listen(9000, () =>{
    console.log("The app is listening on port 9000")
});