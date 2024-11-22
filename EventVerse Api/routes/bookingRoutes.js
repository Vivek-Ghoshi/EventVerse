const express = require("express");
const mongoose = require('mongoose')
const router = express.Router();

const bookingModel = require('../models/bookingModel');
const eventModel = require('../models/eventModel');
const { isLoggedIn } = require("../middlewares/auth-middleware");

router.post('/:id', async function(req,res){
    try {
        let id = req.params.id
         console.log(id)
 
    const event = await eventModel.findOne({_id:id});
    if(!event) return res.send("event not found");

    const bookings = await bookingModel.findOne({event: event._id})
    if(bookings) return res.send("you already have bookings of this event")

    const newBookings = await bookingModel.create({
        event: event._id,
       
    })

    res.json({newBookings});
        
    } catch (error) {
        console.log(error.message)
    }
});


module.exports = router;