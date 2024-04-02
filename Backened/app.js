const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const cookieParser = require('cookie-parser');

const app = express();

connectDB();

app.use(express.json());
app.use(cookieParser());

dotenv.config({path: 'Backened/config/config.env'});

const User = require('./routes/userRoute');

app.use('/', User);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on Port: ${process.env.PORT}`);
});