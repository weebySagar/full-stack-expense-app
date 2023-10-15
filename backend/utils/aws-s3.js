const AWS = require('aws-sdk');


exports.uploadToS3=async(data,fileName,user)=>{
const BUCKET_NAME = process.env.AWS_S3_BUCKETNAME;
const ACCESS_KEY = process.env.AWS_S3_ACCESS_KEY;
const SECRET_KEY =  process.env.AWS_S3_SECRET_KEY;


const s3bucket = new AWS.S3({
    accessKeyId:ACCESS_KEY,
    secretAccessKey:SECRET_KEY
});

const params={
    Bucket: BUCKET_NAME,
    Key:fileName,
    Body:data,
    ACL :'public-read'
}

return new Promise((resolve,reject)=>{
     s3bucket.upload(params,(err,res)=>{
        if(err){
            reject(err)
        }else{
            resolve(res.Location)
        }
    })
})
}