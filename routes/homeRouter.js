const express=require('express');
const mongoose=require('mongoose');
// const url = require('../schema/url');
const url=require('../schema/url')


const router=express.Router();
router.post('/',(req,res)=>{
    console.log(req.body.url);
    //function to save the url to db
    async function condb() {
        mongoose.connect("mongodb://localhost/url",()=>{console.log('db connected');})
        const url2=new url({"url":req.body.url});
        await url2.save()
        console.log(url2._id);
        let newUrl=`http://127.0.0.1:8080/s/${url2.id}`
        res.json({url:newUrl})
    }
    condb()
    
})


module.exports=router;