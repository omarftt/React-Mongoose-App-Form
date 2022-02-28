const mongoose = require('mongoose');

const URI = process.env.MONGOOSE_URI ? process.env.MONGOOSE_URI : 'mongodb://localhost/reactmongoosedb';

mongoose.connect(URI, {
    useNewUrlParser : true
});

const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log('Database connected');
})