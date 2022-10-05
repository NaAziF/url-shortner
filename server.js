const express=require('express');
const app=express();
const homeRouter=require('./routes/homeRouter');
const urlRouter=require('./routes/urlRouter')
app.use('/',homeRouter);
app.use('/url',urlRouter)
app.listen(8080,(req,res)=> console.log('server started on http://127.0.0.1:8080'))
