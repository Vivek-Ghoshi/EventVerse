const mongoose = require('mongoose');

mongoURI = 'mongodb://127.0.0.1:27017/EventVerse'

mongoose.connect(mongoURI)
.then(function(){
    console.log("connected to db")
})
.catch(function(err){
    console.log(err.message)
});

const db = mongoose.connection

module.exports = db;