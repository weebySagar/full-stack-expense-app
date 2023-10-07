const express = require('express');
const app = express();  
const cors = require('cors');
const dotenv = require('dotenv')

const db = require('./db/database')
const userRoutes = require('./routes/user-routes');
const expenseRoutes = require('./routes/expense-route');
const paymentRoutes = require('./routes/payment-route');
const premiumRoutes = require('./routes/premium-route')

const User = require('./models/user-model');
const Expense = require('./models/expense-model');

dotenv.config();
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())



app.use('/user',userRoutes,paymentRoutes);
app.use('/expense',expenseRoutes);
app.use('/premium',premiumRoutes);


User.hasMany(Expense);
Expense.belongsTo(User);
db.sync().then(()=>
app.listen(3000)
)