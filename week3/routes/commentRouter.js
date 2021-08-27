const express = require('express');

const commentRouter = express.Router();


//const { findOne } = require('../../week2/Inventory/BackEnd/models/inventory');
const comment = require('../models/comment');

//read
commentRouter.get("/", (req, res, next) => {
    comment.find((err, comments) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(comments)
    })
  })

//create
commentRouter.post("/", (req, res, next) => {
    const newComment = new user(req.body)
    newComment.save((err, savedComment) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(savedComment)
    })
  })


//findOne

commentRouter.get("/", (req, res, next) => {
    comment.findById((err, comment) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(comment)
    })
  })

//findAll

commentRouter.get("/", (req, res, next) => {
    comment.find((err, comment) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(comment)
    })
  })


//update

commentRouter.put("/:commentId", (req, res, next) => {
    comment.findOneAndUpdate(
      { _id: req.params.commentID},
      req.body,
      {new: true},
      (err, updatedComment) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(201).send(updatedComment)
      }
    )  
  })


//delete

commentRouter.delete("/:commentId", (req, res, next) => {
    comment.findOneAndDelete(
      {_id: req.params.commentId}, 
      (err, deletedComment) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(200).send(`Successfully deleted user ${deletedComment.title} from the database`)
      }
    )
  })

  module.exports = commentRouter

