const User = require('../models/user-model');

exports.getLeaderboard=async(req,res)=>{
try {

        const userExpense = await User.findAll({
            attributes:['id','name','totalExpense'],
            group:['user.id'],
            order:[['totalExpense','DESC']]
        })
        
    res.status(200).send(userExpense)
} catch (error) {
    res.status(500).send('Internal server error')
}
}   