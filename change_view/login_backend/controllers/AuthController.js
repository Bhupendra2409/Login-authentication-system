const User = require('../models/User')
const jwt = require('jsonwebtoken');
const ErrorResponse = require('../utils/errorResponse')

const register = async (req,res,next)=>{
    const {name,email,password} = req.body;
    try{
        const newUser = await User.create({
            name,email,password
        });

        res.status(201).json({
            message: "success",
            newUser
        })
    }
    catch(error){
        next(error);
    }
}

const login = async (req,res,next)=>{
    const {email,password} = req.body;

    try{
        const user = await User.findOne({email}).select('+password');
        if(!user){
            return next(new ErrorResponse("No user Found!",400))
        }
        else{
            const isMatch = await user.matchPassword(password);
            if(!isMatch){
                return next(new ErrorResponse("Invalid credentials!",400))
            }
            
            res.status(200).json({
                success: true,
                token : 'iahdifhi89489'
            })
        }
    }
    catch(error){
        next(error);
    }
    
}
const refreshToken = (req,res,next)=>{
    const r_token = req.body.refreshtoken;
    jwt.verify(refreshtoken,'refreshsecretValue',function(err,decode){
        if(err){
            res.status(400).json({
                error: err
            })
        }
        else{
            let token = jwt.sign({name:decode.name},'secretValue',{expiresIn:"1h"})
            let refreshtoken = req.body.refreshtoken
            res.status(200).json({
                message:'Token refreshed successfully',
                token,
                refreshtoken
            })
        }
    })
}

const forgotPassword = (req,res,next)=>{
    res.send('Forgot Password route');
}
const resetPassword = (req,res,next)=>{
    res.send('Reset Password route');
}

module.exports = {
    register,
    login,
    refreshToken,
    forgotPassword,
    resetPassword
}