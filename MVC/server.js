const express = require('express');
const app = express();
const dotenv = require('dotenv');
const authRoutes = require('./router/authRouter');
const userRoutes = require ('./router/userRouter')
dotenv.config();

const connect = require('./db/config');


//Database connection
connect();

//Parsing form datas in all routes
app.use(express.urlencoded({extended : false}));

//Parsing Json datas in all routes
app.use(express.json());

app.use(express.static(__dirname + "/client"));


//authRoutes
app.use(authRoutes);

//UserRoutes
app.use(userRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`);
});