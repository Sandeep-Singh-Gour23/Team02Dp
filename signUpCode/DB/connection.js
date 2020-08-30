const mongoose = require('mongoose');

const url = 'mongodb+srv://teamdp:teamdp@journaldb.hsmey.mongodb.net/DailyNotion?retryWrites=true&w=majority'

const connectDB = async() => {
    await mongoose.connect(url, { 
        useUnifiedTopology: true,useNewUrlParser: true
    });
    console.log('db connected ....!');
}

module.exports = connectDB;