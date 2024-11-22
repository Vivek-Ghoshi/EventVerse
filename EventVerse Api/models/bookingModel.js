const mongoose = require('mongoose');


const bookingSchema = mongoose.Schema({
   user:{
       type:mongoose.Schema.Types.ObjectId,
       ref:'User',
       
   },
   event: {
     type: mongoose.Schema.Types.ObjectId,
     ref: 'event',
     required:true,
   },
   bookedAt:{
    type: Date,
    default: Date.now(),
    unique: true
   }
})

module.exports = mongoose.model('booking',bookingSchema)