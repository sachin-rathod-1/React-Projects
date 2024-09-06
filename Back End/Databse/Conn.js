const mongoose= require('mongoose')




mongoose.connect('mongodb+srv://sachinmogo:8007540792@cluster1.szcecuo.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log('connected to DataBase 👌');
})
.catch(()=>{
    console.log('disconnected ⚡')
})