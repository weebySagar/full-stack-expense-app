const express = require('express');
const app = express();  
const cors = require('cors')

const db = require('./db/database')
const userRoutes = require('./routes/user-routes');
const expenseRoutes = require('./routes/expense-route');
const User = require('./models/user-model');
const Expense = require('./models/expense-model');

app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())



app.use('/user',userRoutes);
app.use('/expense',expenseRoutes)


User.hasMany(Expense);
Expense.belongsTo(User);
db.sync().then(()=>
app.listen(3000)
)