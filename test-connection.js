const mongoose = require('mongoose');
const addUser = require('./createUser');
mongoose.connect('mongodb+srv://admin:<password>@cluster0.mbwy5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
mongoose.connect('mongosh "mongodb+srv://cluster0.mbwy5.mongodb.net/myFirstDatabase" --username admin')

mongoose.connection.once('open', () =>{
    console.log('yahoo connection is estaiblished');
})
.on('error', (err) =>{
    console.log("Err:", err)
})