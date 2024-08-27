const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect(process.env.DATA).then((con) => {
        console.log('MongoDB connected to host: '+con.connection.host)
    })
};


module.exports = connectDatabase;