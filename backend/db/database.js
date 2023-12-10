const {Sequelize} = require('sequelize');
require('dotenv').config();

const db = new  Sequelize(
   
    {
        dialect:'postgres',
        database:process.env.SUPABASE_DATABASE,
        password:process.env.SUPABASE_DATABASE_PASSWORD,
        username:process.env.SUPABASE_USERNAME,
        port:process.env.SUPABASE_PORT,
        host:process.env.SUPABASE_HOST,
    });

module.exports = db;