const express = require('express');
const router = express.Router();

const {getLeaderboard} = require('../controllers/premium-controller');
const {isPremium} = require('../auth/authenticate')

router.get('/getLeaderboard',isPremium,getLeaderboard);


module.exports = router;