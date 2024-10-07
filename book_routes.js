const express=require('express');
const router=express.Router();

const book=require('./book');
router.post('/',async(req,res)=>{
 try{
   const data=req.body;
   const newBook=new book(data);
   const response=await newBook.save();
   console.log("data has been saved");
   console.log("Book ID:", response._id);
   res.status(200).json(response);
 }catch(err){
    console.log("error has occured");
    res.status(500).json(err);
    console.log(err);
 }
})

router.get('/',async(req,res)=>{
    try{
    const data=await book.find();
    res.status(200).json(data);
    console.log("data has been fetch");
    }catch(err){
        console.log("error has occured");
        res.status(500).json(err);
    }
});

router.put('/:id',async(req,res)=>{
  try{
  const id=req.params.id;
  const bookData=req.body;
  const response= await book.findByIdAndUpdate(id,bookData,{
       new:true,
       runValidators:true
  })
  if(!response){
    res.status(404).json({error:"Book not found"});
  }else{
  res.status(200).json(response);
  console.log("data is updated")
  }
  }catch(err){
    res.status(500).json(err);
    console.log(err);
  }
})

router.delete('/:id',async(req,res)=>{
  try{
  const id=req.params.id;
  const response=await book.findByIdAndDelete(id);
  if(!response){
    res.status(404).json({error:"Book not found"});
  }else{
    console.log("delete success")
    res.status(200).json(response);
  }
}catch(err){
   res.status(500).json(err);
   console.log(err);
}
})

module.exports=router;

/* "title": "Comdemy_with_me",
    "author": "Ram",
    "genre": "comedy",
    "price": "500",
    "brief": "good"*/