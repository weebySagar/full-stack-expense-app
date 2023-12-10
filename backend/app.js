const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const path = require('path');
const helmet = require('helmet');
const fs = require('fs');
const morgan = require('morgan');

const db = require("./db/database");
const userRoutes = require("./routes/user-routes");
const expenseRoutes = require("./routes/expense-route");
const paymentRoutes = require("./routes/payment-route");
const premiumRoutes = require("./routes/premium-route");
const passwordRoutes = require('./routes/password-route')

const User = require("./models/user-model");
const Expense = require("./models/expense-model");
const FPG = require('./models/forgot-password-model');
const DownloadedFile = require('./models/downloaded-file-model');

//for logging
// const accessLogStream = fs.createWriteStream(
//   path.join(__dirname,'access log'),
//   {flags:'a'}
// )

dotenv.config();
app.use(cors({
  origin:["https://trackwise-app.vercel.app"],
  methods:["GET","POST","PUT","DELETE"],
  credentials:true
}));
app.use(helmet());
// app.use(morgan('combined',{stream:accessLogStream}))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static('static'));
// console.log(path.join(__dirname,'dist'));
// app.use(express.static(path.join(__dirname,'dist')))
// app.use('/',(req,res)=>res.sendFile(path.join(__dirname,'dist','index.html')))
app.use("/api/user", userRoutes, paymentRoutes);
app.use("/api/expense", expenseRoutes);
app.use("/api/premium", premiumRoutes);
app.use('/api/password',passwordRoutes)

Expense.belongsTo(User);
User.hasMany(Expense);
User.hasMany(FPG);
User.hasMany(DownloadedFile)
db.sync().then(() => {
  app.listen(3000);
}).catch(err=>console.log(err));
