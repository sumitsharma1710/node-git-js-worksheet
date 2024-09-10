
const User = require('../Models/userModel');
const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken');


// Creating a new user and also logging him in the application

exports.signUp = async (req, res, next)=>{
    try{
        const newUser = await User.create(req.body);

        const token = jwt.sign({id: newUser._id}, process.env.SECRET_STR, {
            expiresIn: process.env.LOGIN_EXP
        })

        res.status(201).json({
            status: 'Success',
            token,
            data:{
                user: newUser
            }
        })
        next();
    }
    catch(err){
        res.status(404).json({
            status: 'Fail',
            data:{
                Error : err
            }
        });
        next();
    }
}


exports.login = async (req, res, next)=>{
    try{
        const {email, password} = req.body;
        if(!email || !password){
            return next("Please provide Email and password");
        }
        const user = await User.findOne({email});
        if(!user || (await comparePasswordInDB(password, user.password))){
            return next("Invalid Email or password");
        }

        const token = jwt.sign({id: user._id}, process.env.SECRET_STR, {
            expiresIn: process.env.LOGIN_EXP
        })

        res.status(201).json({
            status: 'Success',
            token,
            data:{
                user: newUser
            }
        })
        next();
    }
    catch(err){
        res.status(404).json({
            status: 'Fail',
            data:{
                Error : err
            }
        });
        next();
    }
}