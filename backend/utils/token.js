const jwt = require('jsonwebtoken');

const secretKey ='1234567890';
exports.generateToken=(userId)=>{
    const token = jwt.sign({userId},secretKey);
    return token
}

exports.verifyToken=(token)=>{
    try {
        const decoded = jwt.verify(token,secretKey)
        return decoded;
    } catch (error) {
        return null;
    }
}