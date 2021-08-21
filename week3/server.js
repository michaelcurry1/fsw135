const express = require ("express");
const app = express();
//const morgan = require('morgan')
const mongoose = require('mongoose')

app.use("/", express.json())

//app.use(morgan)

mongoose.connect('mongodb://localhost:27017/rock-the-vote',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify: false

},
() => console.log("Connected to the DB")
)

app.use("/users",require('./routes/authRouter'))
app.use("/issues",require('./routes/issueRouter'))
app.use("/comments",require('./routes/commentRouter'))


app.use((err,req,res,next)=>{
    console.log(err)
    return res.send({errorMessage:err.errorMessage})
})

app.listen(9000, () =>{
    console.log("The app is listening on port 9000")
});