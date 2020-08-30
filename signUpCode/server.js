const express = require('express');
const connectDB = require('./DB/connection')
const app = express();

connectDB();
app.use(express.json({ extended: false }));
app.use('/api/signUp', require('./Api/User'));





const port = process.env.Port || 8001;

app.listen(port,()=>{
    console.log("Server up and running on port: ", port);
    });