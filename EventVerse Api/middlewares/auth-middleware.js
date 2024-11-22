const express = require('express')
const jwt = require('jsonwebtoken');

module.exports.isLoggedIn = function(req,res,next){
    try {
      const token = req.cookies.token;
        if(!token){
          return res.send('not authorised')
        }
        else{
          const decoded = jwt.verify(token,'heyHey', function(err,decoded){
            if(!err){
              req.user = decoded;
              return next();
            }
            else{
              res.redirect('/login')
            }
          })
         
          }
        }
    catch (error) {
      console.log(error.message)  
    }
};

module.exports.isHost = function(req,res,next){
  try {
    
    if(req.user.role === "host"){
      next()
    }
    else{
      res.send('you are not authorised to do this')
    }

  } catch (error) {
    console.log(error.message)
  }
}