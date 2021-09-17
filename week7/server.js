const express = require ("express");
const app = express();
//const morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv').config()
const expressJwt = require('express-jwt')

app.use( express.json());

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
app.get("/",()=>{
    console.log("test")
})


//app.use("/api/users",require('./routes/authRouter'))
app.use("/auth",require('./routes/authRouter'))

app.use('/api', expressJwt({ secret: process.env.SECRET, algorithms: ['HS256'] }))
app.use("/api/issues",require('./routes/issueRouter'))
app.use("/api/comments",require('./routes/commentRouter'))

app.use((err,req,res,next)=>{
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg:err.message})
})

app.listen(9000, () =>{
    console.log("The app is listening on port 9000")
});