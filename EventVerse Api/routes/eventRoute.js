const express = require('express');
const router = express.Router();

const eventModel = require('../models/eventModel');
const {isHost,isLoggedIn} = require('../middlewares/auth-middleware')


router.post('/create-event',async function(req,res){
   try {
         const {title,description,date,time,venue,category,host, maxTickets} = req.body;
         const event = await eventModel.findOne({title})
         if(event) return res.send('this event already exists')
         const newEvent = await eventModel.create({
            title,
            description,
            date,
            time,
            venue,
            category,
            host,
            maxTickets
    })
    res.json({
        newEvent
    })
   } catch (error) {
    console.log(error.message)
   }
});

router.get('/all-events',async function(req,res){
    try {
        const events = await eventModel.find()
        if (!events) return res.send("there are no events to show")
        
        res.json({events: events})
    } catch (error) {
        console.log(error.message)
    }
});

router.get('/event/:id', async function(req,res){
    try {
        let id = req.params._id
       
        const event = await eventModel.findOne({id})
        if(!event) return res.send('No such event found');

        res.json({
            event
        })

    } catch (error) {
        console.log(error.message)
    }
});

module.exports = router;