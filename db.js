const mongoose=require('mongoose')
const db_url="mongodb://localhost:27017/book";

mongoose.connect(db_url);
const db=mongoose.connection;

db.on('connected',()=>{
    console.log("database connected");
});

db.on('disconnected',()=>{
    console.log('database disconnected');
});

db.on('error',(err)=>{
    console.log(err);
    console.log('error has occured to connect');
});


module.exports=db;