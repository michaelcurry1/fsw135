const express = require('express');

const inventoryRouter = express.Router();

const {v4: uuidv4}= require('uuid');
const inventory = require('../models/inventory');

// Get All

inventoryRouter.get("/", (req, res, next) => {
    inventory.find((err, inventory) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(inventory)
    })
  })

  // Post One

  inventoryRouter.post("/", (req, res, next) => {
    const newInventory = new inventory(req.body)
    newInventory.save((err, savedInventory) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(savedInventory)
    })
  })

  //Delete One

  inventoryRouter.delete("/:inventoryId", (req, res, next) => {
    inventory.findOneAndDelete(
      {_id: req.params.inventoryId}, 
      (err, deletedItem) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(200).send(`Successfully deleted item ${deletedItem.title} from the database`)
      }
    )
  })

  //Put

  inventoryRouter.put("/:inventoryId", (req, res, next) => {
    inventory.findOneAndUpdate(
      { _id: req.params.inventoryID},
      req.body,
      {new: true},
      (err, updatedInventory) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(201).send(updatedInventory)
      }
    )  
  })



module.exports = inventoryRouter