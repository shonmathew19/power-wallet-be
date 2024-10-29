const mongoose = require('mongoose');
const connectionString = process.env.DATABASE;

mongoose.connect(connectionString).then((res)=>{
    console.log('MongoDB connected successfully for power wallet');
}).catch((err)=>{
    console.log(err);
})