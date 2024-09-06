const express=require('express');
require('./Databse/Conn')
const app=express();
const movie_model=require('./Databse/module');
const cors=require('cors');

app.use(cors())

//create routr to get data
app.get('/movie_data',async(req,res)=>{
    const data= await movie_model.find();
    console.log(data)
    res.json(data)
    res.end()
})




//routes
app.get('/',(req,res)=>{
    res.end('I am Node js ')
})
app.get('/contact',(req,res)=>{
    res.end('You are on contact page');
})
 
app.listen(1996,()=>{
    console.log('Conneted to port 1996');
})