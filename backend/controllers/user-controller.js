const User = require('../models/user-model');
const bcrypt = require('bcrypt');
const {generateToken} = require('../utils/token')

exports.addUser=async(req,res)=>{
    const {name,email,password} = req.body;
    try {
        const hashedPassword =await bcrypt.hash(password,10)
       const response = await User.create({name,email,password:hashedPassword});
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
            
            bcrypt.compare(password,user.dataValues.password,(err,result)=>{
                if(result){
                    const token = generateToken(user.dataValues.id)
                    res.status(200).json({message:'User login successfully',token:token})
                }
                else{
                    res.status(401).json({error:'User not authorized'})
                }
            })
            
        }
        else{
            res.status(404).json({error:'User not found'})
        }
    } catch (error) {
        res.status(500).json({error:'Internal server error'})
    }
}

exports.getUserDetails = async(req,res)=>{
    try {
        const user = await User.findByPk(req.user.id,{attributes:{exclude:["password"]}})
        await res.send(user)
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
}