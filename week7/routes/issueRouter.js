const express = require('express');

const issueRouter = express.Router();


//const { findOne } = require('../../week2/Inventory/BackEnd/models/inventory');
const issue = require('../models/issue');
const votes = require('../models/votes')

// create route for votes\end point for up vote..and down vote.. Including issue ID

/* issueRouter.get("/upvote/:issueId", (req, res, next) => {
  votes.find({ issue: req.params.issueId, user: req.user._id
  },(err,vote) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(vote)
  })
}) */

//issueRouter.put to send vote to issue = upate vote to issue

/* issueRouter.put("upvote/:issueId", (req, res, next) => {
  votes.findOneAndUpdate(
    { _id: req.params.issueID},
    req.body,
    {new: true},
    {$Inc:{votes:1}},
    (err, updatedIssue) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedIssue)
    }
  )  
}) */

//down vote
/* issueRouter.get("/downvote/:issueId", (req, res, next) => {
  votes.find({ issue: req.params.issueId, user: req.user._id
  },(err,vote) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(vote)
  })
}) */
//downvote put
/* issueRouter.put("/downvote/:issueId", (req, res, next) => {
  votes.findOneAndUpdate(
    { _id: req.params.issueID},
    req.body,
    {new: true},
    {$Inc:{votes:1}},
    (err, updatedIssue) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedIssue)
    }
  )  
})
 */

// vote for seperate users
//end point /vote/:issueId
// create new vote
// issueRouter.post()


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

    console.log('issueRouter Post')

    const newIssue = new issue(req.body)

    console.log('newIssue: ', newIssue)

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
    issue.findOneAndUpdate(
      { _id: req.params.issueId},
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

