const express = require('express');

const userRouter = express.Router();


//const { findOne } = require('../../week2/Inventory/BackEnd/models/inventory');
const User = require('../models/user');

//read
userRouter.get("/", (req, res, next) => {
    User.find((err, users) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(users)
    })
  })

//create
userRouter.post("/", (req, res, next) => {
    const newUser = new user(req.body)
    newUser.save((err, savedUser) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(savedUser)
    })
  })


//findOne

userRouter.get("/", (req, res, next) => {
    user.findById((err, user) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(user)
    })
  })

//findAll

userRouter.get("/", (req, res, next) => {
    user.find((err, user) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(user)
    })
  })


//update

userRouter.put("/:userId", (req, res, next) => {
    inventory.findOneAndUpdate(
      { _id: req.params.userID},
      req.body,
      {new: true},
      (err, updatedUser) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(201).send(updatedUser)
      }
    )  
  })


//delete

userRouter.delete("/:userId", (req, res, next) => {
    user.findOneAndDelete(
      {_id: req.params.userId}, 
      (err, deletedUser) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(200).send(`Successfully deleted user ${deletedUser.title} from the database`)
      }
    )
  })

  module.exports = userRouter

