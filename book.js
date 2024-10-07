const mongoose=require('mongoose');
const book_info=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    },
    price:{
         type:Number,
         required:true
    },
    brief:{
        type:String,
        required:false
    }
})

const book=mongoose.model("book",book_info);
module.exports=book;