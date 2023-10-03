const User = require('../models/user-model');
const {verifyToken} = require('../utils/token');

exports.authenticate =async (req,res,next)=>{
try {
    console.log(req.header('Authorization'));
    const token = req.header('Authorization');
    const {userId} = verifyToken(token);
    console.log(userId);
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