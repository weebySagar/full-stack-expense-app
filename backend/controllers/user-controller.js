const User = require('../models/user-model');
const bcrypt = require('bcrypt');
const {generateToken} = require('../utils/token')
const sequelize = require('../db/database');
const { getWeeklyExpenseData, getMonthlyExpenseData } = require('./expense-controller');
const { uploadToS3 } = require('../utils/aws-s3');
const DownloadedFile = require('../models/downloaded-file-model');

exports.addUser=async(req,res)=>{
    const {name,email,password} = req.body;
    const t = await sequelize.transaction();
    try {
        const hashedPassword =await bcrypt.hash(password,10)
       const response = await User.create({name,email,password:hashedPassword},{transaction:t});

       if(response){
            await t.commit()
            res.status(201).json(response)
       }
    } catch (error) {
        await t.rollback()
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

exports.updateUserDetails = async(req,res)=>{
try {
    const {name,password} = req.body;
    if(password){

        const hashedPassword =await bcrypt.hash(password,10)
       await User.update({password:hashedPassword},{where:{id:req.user.id}})
    }
    if(name){
        await User.update({name},{where:{id:req.user.id}})
    }
   
        res.status(200).send('User updated successfully')

} catch (error) {
    res.status(500).send('Internal server error')
}
}

exports.getDownloadFile= async(req,res)=>{
    try {
        const {type} = req.params
        console.log(type);
        if(type=='weekly'){
            const data = await getWeeklyExpenseData(req,res,type);
            const stringifiedData = JSON.stringify(data);


            const fileName = `Expense${req.user.id}/${new Date()}.txt`;
            const fileUrl = await uploadToS3(stringifiedData,fileName)
            if(fileUrl){
                const savedFile = await DownloadedFile.create({fileUrl,userId:req.user.id});
                if(savedFile){
                    res.status(200).send(fileUrl)
                }
                else{
                    res.satus(400).send('Something went wrong')
                }
            }
            else{
                res.status(400).send('Cannot download file')
            }
        }
        else if(type == 'monthly'){
            const data = await getMonthlyExpenseData(req,res,type);
            const stringifiedData = JSON.stringify(data);


            const fileName = `Expense${req.user.id}/${new Date()}.txt`;
            const fileUrl = await uploadToS3(stringifiedData,fileName)
            if(fileUrl){
                const savedFile= await DownloadedFile.create({fileUrl,userId:req.user.id});
                if(savedFile){
                    res.status(200).send(fileUrl)
                }
                else{
                    res.status(400).send('Something went wrong')
                }
            }
            else{
                res.status(400).send('Cannot download file')
            }
        }
    } catch (error) {
        res.status(500).send('Internal server error')
    }
}


exports.getAllDownloadedFiles=async(req,res)=>{
    try {
        const filesData = await DownloadedFile.findAll({where:{userId:req.user.id},order:[['createdAt','DESC']]});
        if(filesData){
            res.status(200).send(filesData)
        }
    } catch (error) {
        res.status(500).send('Internal server error')       
    }
}