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