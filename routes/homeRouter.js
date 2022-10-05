const express=require('express');
const router=express.Router();
router.get('/',(req,res)=>{
    res.send('hello user this response is from home router')
})
router.get('/userList',(req,res)=>{
    const ul=[{name:"jhon",age:19,address:"gbl"},{name:"david",age:22,address:"usa"},{name:"anya",age:33,address:"russia"}]
    res.send(ul)
})

module.exports=router;