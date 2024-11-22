const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookie = require('cookie-parser');

const {isLoggedIn} = require('../middlewares/auth-middleware')

const userModel = require('../models/userModel');


router.post('/register', async function(req,res){
    try{
        const {email,password,role,name} = req.body;
       
        if(!email && !password){
            console.log('email password nhi h')
        }
        const user = await userModel.findOne({email});
        if(user) return res.send('User already registerd');

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password , salt);

        const createdUser =  await userModel.create({
            email,
            password: hash,
            role,
            name,
         })
       const token = jwt.sign({email: email,id:createdUser._id},"heyHey");
       res.cookie('token',token);
       res.json({
        id: createdUser._id,
        role: createdUser.role,
        email: createdUser.email,
        password:createdUser.password,
        token: token,
        name: createdUser.name
       })

    }
    catch(err){
        console.log(err.message)
    }
});

router.post('/login',async function(req,res){
    try {
        const { email,password } = req.body;
        const user = await userModel.findOne({email});
        if(!user) return res.send('no accounts registered with this email please create one');
        await bcrypt.compare(password,user.password, function(err,result){
            if(err) return res.send("invalid credentials") 
            const token = jwt.sign({email: user.email, id: user.id},'heyHey');
            res.cookie('token',token)
            res.json({
        user})
        })
    } catch (error) {
        console.log(error.message)
    }
});

// router.get('/profile',isLoggedIn, async function(req,res){
//     try {
//          if(req.user.role === 'host'){
//             const profile = await userModel.findOne({id: req.user})
//          } 
//     } catch (error) {
//         console.log(error.message)
//     }
// })

module.exports = router