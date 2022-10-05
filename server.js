const express=require('express');
const app=express();
app.use(express.json())
const homeRouter=require('./routes/homeRouter');
const urlRouter=require('./routes/urlRouter')
app.get('/',(req,res)=>{
    res.sendFile(`${__dirname}/public/index.html`)
})
app.use('/shortenIt',homeRouter);
app.use('/s',urlRouter)
app.listen(8080,(req,res)=> console.log('server started on http://127.0.0.1:8080'))
