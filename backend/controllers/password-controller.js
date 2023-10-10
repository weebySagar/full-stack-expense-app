const { v4: uuid } = require("uuid");
const path = require("path");
const bcrypt = require('bcrypt')

const FPG = require("../models/forgot-password-model");
const User = require("../models/user-model");
const { sendForgotPasswordMail } = require("../utils/mail-config");

exports.sendForgotPasswordMail = async (req, res) => {
  try {
    const { email } = req.body;
    const uniqueId = uuid();

    const user = await User.findOne({ where: { email } });
    if (!user) {
      res.status(400).send("User not found");
    } else {
      const fpg = await FPG.create({
        id: uniqueId,
        isActive: true,
        userId: user.dataValues.id,
      });

      const { messageId } = await sendForgotPasswordMail(email, uniqueId);

      if (messageId && fpg) {
        res.status(200).send("Please check your email to reset your password");
      } else {
        res.status(500).send("Something went wrong");
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};

exports.getResetPassword = async (req, res) => {
  const { id } = req.params;

  const forgotPasswordRequest = await FPG.findByPk(id);
  if (forgotPasswordRequest && forgotPasswordRequest.dataValues.isActive) {
    res.sendFile(path.join(__dirname, "..", "static", "reset-password.html"));
  } else {
    res.status(400).send("Try Reseting Again");
  }
};

exports.postResetPassword = async (req, res) => {
  const { password } = req.body;
  const { uuid } = req.params;

  try {
    const fpg = await FPG.findByPk(uuid);
    if (fpg) {
        const hashedPassword = await bcrypt.hash(password,10)
        const user = await User.update({password:hashedPassword},{where:{id:fpg.dataValues.userId}});
        console.log(user);
        if(user){
            await fpg.update({isActive:false});
            res.status(200).send('Password updated successfully')
        }
        else{
            res.status(400).send('cannot reset password try again')
        }

    } else {
      res.status(400).send("Reset Link try again");
    }
  } catch (error) {
    res.status(500).send('Internal server error')
  }
};
