const express=require('express');
const router=express.Router();
const mongoose=require('mongoose')
const url=require('../schema/url')
router.get('/:id',(req,res)=>{
    //function to get data from db.
    async function redir(){
        mongoose.connect("mongodb://localhost/url",()=>{console.log('db connected');})
        const newUrl= await url.findById(req.params.id)
        
        res.redirect(newUrl.url)
    }
    redir()
 
})
module.exports=router;