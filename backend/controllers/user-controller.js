const { where } = require('sequelize');
const User = require('../models/user-model');

exports.addUser=async(req,res)=>{
    const {name,email,password} = req.body;
    try {
       const response = await User.create({name,email,password});
       await res.status(201).json(response)
    } catch (error) {
        res.status(400).json({error:error.errors[0].message})
    }
}

exports.loginUser = async(req,res)=>{
    const {email,password} = req.body;
    try {
        const user = await User.findOne({where:{email}});
        
        if(user){
            const isPasswordValid =  user.dataValues.password == password;
            if(isPasswordValid){
                res.status(200).json({message:'User login successfully'})
            }
            else{
                res.status(401).json({error:'User not authorized'})
            }
        }
        else{
            res.status(404).json({error:'User not found'})
        }
    } catch (error) {
        res.status(500).json({error:'Internal server error'})
    }
}