const mongoose = require('mongoose');

const eventSchema = mongoose.Schema(
    {
        title:{
            type: String,
            required: true,
            unique: true,
        },
        description:{
            type: String,
            required: true,
        },
        date:{
            type: Date,
            required: true,
        },
        time:{
            type: String,
            required: true,
        },
        venue:{
            type: String,
            required: true,
        },
        category:{
            type: String,
            required: true,
        },
        maxTickets:{
            type: Number,
            required: true,
        },
        attendees:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'User'
        },
        file:{
            type:String,
            
        }
    
        }

   
)

module.exports = mongoose.model('event',eventSchema);