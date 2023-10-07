const User = require('../models/user-model');
const {verifyToken} = require('../utils/token');

exports.authenticate =async (req,res,next)=>{
try {
    
    const token = req.header('Authorization');
    const {userId} = verifyToken(token);
    
    const user = await User.findByPk(userId);
   
    if(!user){
        res.status(404).send('User not found')
    }
    req.user =user;
    next();
} catch (error) {
    res.status(500).send('Internal server error')
}
}

exports.isPremium = async (req,res,next)=>{
    try {
    
        const token = req.header('Authorization');
        const {userId} = verifyToken(token);
        
        const user = await User.findByPk(userId);
       
        if(!user){
            res.status(404).send('User not found')
        }
        if(user.dataValues.premiumUser==false){
            res.status(400).send('You are not a Premium user')
        }
        else{

            req.user =user;
            next();
        }
    } catch (error) {
        res.status(500).send('Internal server error')
    }
}