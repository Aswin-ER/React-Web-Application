const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const userRouter = require('./Routes/userRouter');
const adminRouter = require('./Routes/adminRouter');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/web').then(()=> {
    console.log('DB connection established');
}).catch((err)=> {
    console.log(err, 'Database connection Error');
});

app.use('/', userRouter);
app.use('/admin', adminRouter);

app.listen(PORT, ()=> console.log('Server listening on port', PORT));