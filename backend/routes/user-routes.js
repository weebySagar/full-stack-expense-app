const express = require('express');
const router = express.Router();

const userController = require('../controllers/user-controller');
const {authenticate,isPremium} = require('../auth/authenticate')


router.post('/signup',userController.addUser);

router.post('/login',userController.loginUser);

router.get('/',authenticate,userController.getUserDetails)

router.put('/update',authenticate,userController.updateUserDetails);

router.get('/download/:type',isPremium,userController.getDownloadFile);

router.get('/getdownloadedfiles',isPremium, userController.getAllDownloadedFiles);


module.exports = router;