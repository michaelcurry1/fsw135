const express = require('express');

const issueRouter = express.Router();


//const { findOne } = require('../../week2/Inventory/BackEnd/models/inventory');
const issue = require('../models/issue');

//read
issueRouter.get("/", (req, res, next) => {
    issue.find((err, issues) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(issues)
    })
  })

//create
issueRouter.post("/", (req, res, next) => {
    const newIssue = new issue(req.body)
    newIssue.save((err, savedIssue) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(savedIssue)
    })
  })


//findOne

issueRouter.get("/", (req, res, next) => {
    issue.findById((err, issue) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(issue)
    })
  })

//findAll

issueRouter.get("/", (req, res, next) => {
    issue.find((err, issue) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(issue)
    })
  })


//update

issueRouter.put("/:issueId", (req, res, next) => {
    inventory.findOneAndUpdate(
      { _id: req.params.issueID},
      req.body,
      {new: true},
      (err, updatedIssue) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(201).send(updatedIssue)
      }
    )  
  })


//delete

issueRouter.delete("/:issueId", (req, res, next) => {
    issue.findOneAndDelete(
      {_id: req.params.issueId}, 
      (err, deletedIssue) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(200).send(`Successfully deleted user ${deletedIssue.title} from the database`)
      }
    )
  })

  module.exports = issueRouter

