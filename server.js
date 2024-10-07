const express=require('express');
const app=express();
const db=require('./db');
const cors = require('cors');
const book_routes=require('./book_routes');
app.use(express.json());
app.use(cors());
app.get('/',(req,res)=>{
    res.send("welcome to our collage")
})
app.use('/book',book_routes);


app.listen(3000,()=>{
    console.log("server is listen on port 3000");
})